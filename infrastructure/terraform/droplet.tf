resource "digitalocean_droplet" "guitar_tabs" {
  name     = var.droplet_name
  region   = var.region
  size     = var.droplet_size
  image    = "ubuntu-24-04-x64"
  vpc_uuid = digitalocean_vpc.guitar_tabs.id
  ssh_keys = [var.ssh_public_fingerprint]
}