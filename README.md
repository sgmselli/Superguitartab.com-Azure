# Superguitartab.com

## Summary
This is the code for Superguitartab.com. We are a web application that allows users to browse, preview, and download high-quality guitar tablature sheets. The platform focuses on delivering a clean, fast, and intuitive experience for guitar players who want quick access to accurate tabs without friction or clutter.

---

## I want to download music sheets
Please visit out website [superguitartab.com](https://www.superguitartab.com).

---

## Tech Stack

### Frontend
- **React** – Single-page application (SPA) for the frontend where the compiled React build runs on an Nginx server
- **Tailwind CSS** – Styling and layout  

### Backend
- **FastAPI** – Python backend powering all API routes running on a Uvicorn server
- **SQLAlchemy** – Object Relational Mapper (ORM) to interact with postgres database

### Database
- **PostgreSQL** – Primary relational database  

### Infrastructure
- **Docker & Docker Compose** – Containerization of all services  
- **Nginx Reverse Proxy** – Routes incoming traffic and handles TLS termination  
- **DigitalOcean Droplet** – Production VPS docker containers run in
- **DigitalOcean Spaces** – S3-compatible object storage to store music sheets

---

## Architecture Diagram

![superguitartab.com High Level Architecture](./docs/architecture/high-level-architecture-diagram.png)

---

## Software Developer Documentation
Please see the [developer documentation](./docs/README.md) for a description of how to run, test, deploy and backup the service.

---