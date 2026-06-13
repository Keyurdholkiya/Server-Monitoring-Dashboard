let cpuHistory = [];

const ctx =
document.getElementById("cpuChart");

const cpuChart =
new Chart(ctx, {

    type: "line",

    data: {
        labels: [],
        datasets: [{
            label: "CPU %",
            data: [],
            borderColor: "#22c55e",
            backgroundColor:
            "rgba(34,197,94,0.2)",
            fill: true,
            tension: 0.4
        }]
    }
});

async function loadData() {

    const response =
    await fetch("/");

    const data =
    await response.json();

    document.getElementById("cpu")
    .innerText =
    data.cpu_percent + "%";

    document.getElementById("ram")
    .innerText =
    data.memory_percent + "%";

    document.getElementById("disk")
    .innerText =
    data.disk_percent + "%";

    document.getElementById("hostname")
    .innerText =
    "Host: " + data.hostname;

    document.getElementById("os")
    .innerText =
    "OS: " + data.os;

    document.getElementById("uptime")
    .innerText =
    "Uptime: " +
    data.uptime +
    " sec";

    document.getElementById("cpuBar")
    .style.width =
    data.cpu_percent + "%";

    cpuHistory.push(data.cpu_percent);

    if (cpuHistory.length > 20) {
        cpuHistory.shift();
    }

    cpuChart.data.labels =
    cpuHistory.map((_, i) => i);

    cpuChart.data.datasets[0].data =
    cpuHistory;

    cpuChart.update();

    const cResponse =
    await fetch("/containers");

    const containers =
    await cResponse.json();

    const ul =
    document.getElementById("containers");

    ul.innerHTML = "";

    containers.forEach(c => {

        ul.innerHTML += `
        <li class="container-item">

            <div>

                🐳 ${c.name}

                <br>

                RAM:
                ${c.memory_mb} MB

            </div>

            <div class="status">

                🟢 ${c.status}

            </div>

        </li>
        `;
    });

    const pResponse =
    await fetch("/processes");

    const processes =
    await pResponse.json();

    const pList =
    document.getElementById("processes");

    pList.innerHTML = "";

    processes.forEach(p => {

        pList.innerHTML += `
        <li class="process-item">

            ${p.name}

            (${p.cpu_percent}%)

        </li>
        `;
    });
}

loadData();

setInterval(loadData, 5000);