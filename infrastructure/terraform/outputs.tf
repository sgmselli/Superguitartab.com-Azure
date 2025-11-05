output "droplet_ip" {
  description = "Public IP address of the Droplet"
  value       = digitalocean_droplet.guitar_tabs.ipv4_address
}

output "droplet_private_ip" {
  description = "Private VPC IP of the Droplet"
  value       = digitalocean_droplet.guitar_tabs.ipv4_address_private
}

output "registry_url" {
  value = digitalocean_container_registry.registry.server_url
}