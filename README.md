# Superguitartab.com hosted on Azure

## Summary
This is the code for Superguitartab.com. We are a web application that allows users to browse, preview, and download high-quality guitar tablature sheets. The platform focuses on delivering a clean, fast, and intuitive experience for guitar players who want quick access to accurate tabs without friction or clutter.

This code is the infrastructure migration and scaling for [superguitartab.com](https://www.superguitartab.com) from cloud provider Digital Ocean to Azure. You can find the original repository [here](https://github.com/sgmselli/superguitartab.com).

---

## Migration
This is currently being migrated and scaled in six phases.

**We are currently in phase one.**

### Phase one
Migration from Digital Ocean to Azure.

We will create:
- Resource group
- Virtual Network
- Subnet
- Network Security Group
- Virtual Machine (containing containerised app)
- container registry

We will use Terraform to build the infrastructure. We will use Ansible to configure our virtual machine.

We will also migrate data from our existing Digital Ocean Postgres database to our new database.

### Phase two
Scale app horisontally. 

We will split the VMs into two, one containing the app such as frontend, backend, workers. The other VM will be just the relational database.

### Phase three
Scale app horisontally further. 

To scale horisontally we will add more app VMs to eliminate single point of failure and increase performance. We will have an Azure Load Balancer infront of our VMs to distribute traffic to VMs and prevent downtown.

### Phase four
Replace database Azure Virtual Machine with Azure Database for Postgresql.

### Phase five
Scaling up to Azure Kubernetes.

### Phase six
Setting up monitoring.

---

## I want to download music sheets
Please visit out website [superguitartab.com](https://www.superguitartab.com).

---