# 📊 Server Monitoring Dashboard

> A lightweight, Docker-based monitoring dashboard to track **CPU**, **RAM**, **Disk Usage**, and **Running Containers** in real time.

<p align="center">

![Docker](https://img.shields.io/badge/Docker-Container-blue?logo=docker)
![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-Web%20Framework-black?logo=flask)
![Linux](https://img.shields.io/badge/Linux-Ubuntu-orange?logo=ubuntu)
![Status](https://img.shields.io/badge/Status-Active-success)

</p>

---

# 📖 Overview

The **Server Monitoring Dashboard** is a real-time monitoring application that helps you visualize the health of your server. It provides live system statistics including CPU utilization, RAM usage, disk usage, and Docker container status through a clean and responsive web interface.

This project demonstrates practical DevOps concepts such as Docker containerization, system monitoring, and dashboard development.

---

# ✨ Features

* 📈 Real-Time CPU Usage Monitoring
* 🧠 RAM Usage Monitoring
* 💾 Disk Usage Monitoring
* 🐳 Running Docker Container Monitoring
* ⚡ Live Dashboard Updates
* 📱 Responsive User Interface
* 🚀 Easy Deployment with Docker Compose

---

# 🛠️ Tech Stack

| Category         | Technologies          |
| ---------------- | --------------------- |
| Backend          | Python                |
| Framework        | Flask                 |
| Monitoring       | psutil, Docker API    |
| Frontend         | HTML, CSS, JavaScript |
| Containerization | Docker                |
| Orchestration    | Docker Compose        |
| Operating System | Linux / Windows       |

---

# 📂 Project Structure

```text
Server-Monitoring-Dashboard/
│
├── app.py
├── templates/
├── static/
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Keyurdholkiya/Server-Monitoring-Dashboard.git

cd Server-Monitoring-Dashboard
```

---

## 2️⃣ Install Docker

Make sure Docker and Docker Compose are installed on your system.

---

## 3️⃣ Start the Application

```bash
docker compose up -d
```

---

## 4️⃣ Open in Browser

```
http://localhost:5000
```

*(Update the port if your docker-compose configuration uses a different one.)*

---

# 📊 Dashboard Metrics

The dashboard displays the following live system metrics:

* 🖥️ CPU Usage
* 💾 Memory (RAM) Usage
* 📂 Disk Usage
* 🐳 Running Docker Containers
* 📈 System Resource Utilization

---

# 📸 Screenshots

<table>
<tr>
<td>
<img src="https://github.com/user-attachments/assets/3975fe4c-09f6-458a-aa76-452e0723f3e5" width="500">
</td>

<td>
<img src="https://github.com/user-attachments/assets/c8e3a208-c21d-4e51-83ab-a743a4304058" width="500">
</td>
</tr>

<tr>
<td colspan="2" align="center">
<img src="https://github.com/user-attachments/assets/eb326738-c347-4ff1-b8e7-8ef783af88ed" width="900">
</td>
</tr>
</table>

---

# 🐳 Docker Commands

### Start Containers

```bash
docker compose up -d
```

### Stop Containers

```bash
docker compose down
```

### View Running Containers

```bash
docker ps
```

### View Logs

```bash
docker compose logs -f
```

---

# 🔮 Future Improvements

* 📊 Network Usage Monitoring
* 🌡️ CPU Temperature Monitoring
* 📉 Historical Graphs
* 🔔 Email & Slack Alerts
* 📱 Mobile-Friendly Dashboard
* ☁️ Kubernetes Monitoring
* 📦 Multi-Server Support
* 📈 Prometheus & Grafana Integration

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---


⭐ If you found this project useful, don't forget to **Star** the repository!
