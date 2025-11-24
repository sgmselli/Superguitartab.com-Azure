[Superguitartab.com](../../README.md) >
[Developer documentation](../README.md) >
Infrastructure

# Infrastructure

This document describes the cloud infrastructure used to host SuperGuitarTab.  
All resources are provisioned and managed in **DigitalOcean**, following an Infrastructure as Code discussed [here](./provisioning.md) and automated deployment via CI/CD discussed [here](./ci-cd.md).

---

## Overview

SuperGuitarTab runs entirely inside a **DigitalOcean VPC**, with a single production **Droplet** hosting all Dockerized application components:

- Nginx Reverse Proxy  
- React Frontend  
- FastAPI Backend  
- PostgreSQL Database  

Tab PDFs are stored in **DigitalOcean Spaces**, while all container images are stored in **DigitalOcean Container Registry**.

---

# 1. VPC (Virtual Private Cloud)

SuperGuitarTab runs inside a dedicated **DigitalOcean VPC**, which provides:

- **Private IPv4 networking** between services  
- **Isolation** from other DO customers  
- **Lower latency** between the Droplet and Spaces/Registry  
- **Better security**, as internal traffic does not traverse the public internet  

**Key VPC features:**

| Setting | Value |
|--------|-------|
| VPC Region | Same region as Droplet (`lon1`) |
| Private Networking | Enabled |
| CIDR Range | Auto-assigned or custom |

All core infrastructure components reside inside this VPC.

---

# 2. Compute: Droplet

SuperGuitarTab uses a single **Docker-orchestrated Droplet** to run the entire stack.

### Droplet Responsibilities

- Serves web traffic through **Nginx reverse proxy**
- Hosts **React frontend** (static build served by Nginx)
- Hosts **FastAPI backend** via Uvicorn
- Runs **PostgreSQL** database container
- Manages Docker networking internally
- Pulls container images from DO Container Registry

### Droplet Configuration

| Component | Configuration                      |
|----------|------------------------------------|
| OS | Ubuntu 22.04 LTS                   |
| Size | 1 vCPU / 1GB RAM                   |
| Provisioned via | Terraform and Ansible              |
| Deployment | GitHub Actions CI/CD |

All applications run inside Docker containers using `docker compose up --build` with our production 
docker compose file `docker-compose.production.yml`.

---

# 3. Firewall

A dedicated **DigitalOcean Cloud Firewall** protects the Droplet.

### Inbound Rules

| Protocol | Port | Source | Purpose |
|----------|------|---------|---------|
| TCP | 80 | 0.0.0.0/0 | HTTP |
| TCP | 443 | 0.0.0.0/0 | HTTPS |

### Outbound Rules

- Allow all 

Firewall rules apply at the network level before traffic ever reaches the Droplet.

---

# 4. Storage: DigitalOcean Spaces

SuperGuitarTab uses **DigitalOcean Spaces** (S3-compatible object storage) to store:

- Uploaded or generated **Guitar Tab PDF files**

### Spaces Features Used

- Private bucket (files not publicly exposed)
- Spaces Access Key + Secret Key stored as environment variables
- FastAPI fetches files securely through Spaces API in [this class file](../../tabs-api/app/external_services/s3_client.py)
- Generate pre-signed urls with short expiry to access bucket to increase security
- CDN for faster access to bucket

---

# 5. DigitalOcean Container Registry

All application images (Frontend, Backend, Nginx, DB if custom) are built in CI and pushed to:

**DigitalOcean Container Registry (DOCR)**

### Registry Usage

- GitHub Actions builds Docker images on every merge to `main`
- CI pushes images to container registry
- Ansible deployment scripts pull images onto the Droplet
- Ensures consistent, versioned deployments

---