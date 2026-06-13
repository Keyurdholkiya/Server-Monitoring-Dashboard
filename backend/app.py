from flask import Flask, jsonify, render_template
import psutil
import docker
import platform
import time

app = Flask(__name__)

client = docker.from_env()


@app.route("/")
def home():

    data = {
        "cpu_percent": psutil.cpu_percent(interval=0.5),
        "memory_percent": psutil.virtual_memory().percent,
        "disk_percent": psutil.disk_usage('/').percent,
        "hostname": platform.node(),
        "os": platform.system(),
        "uptime": int(time.time() - psutil.boot_time())
    }

    return jsonify(data)


@app.route("/containers")
def containers():

    result = []

    for c in client.containers.list():

        try:

            stats = c.stats(stream=False)

            memory_usage = (
                stats["memory_stats"]["usage"]
                / (1024 * 1024)
            )

            result.append({
                "name": c.name,
                "status": c.status,
                "memory_mb": round(memory_usage, 2)
            })

        except Exception:
            pass

    return jsonify(result)


@app.route("/processes")
def processes():

    result = []

    for p in psutil.process_iter(
        ['pid', 'name', 'cpu_percent']
    ):

        try:

            result.append(p.info)

        except Exception:
            pass

    result = sorted(
        result,
        key=lambda x: x['cpu_percent'],
        reverse=True
    )

    return jsonify(result[:5])


@app.route("/dashboard")
def dashboard():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)