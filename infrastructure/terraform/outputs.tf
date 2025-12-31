output "storage_account_name" {
  description = "Blob storage account name"
  value       = azurerm_storage_account.superguitartab.name
}

output "private_container_name" {
  description = "Private blob storage container name"
  value       = azurerm_storage_container.private.name
}

output "public_container_name" {
  description = "Public blob storage container name"
  value       = azurerm_storage_container.public.name
}

output "vm_public_ip" {
  description = "Public IP address of the main VM"
  value       = azurerm_public_ip.main.ip_address
}

output "container_registry_name" {
  description = "Name of the Azure Container Registry"
  value       = azurerm_container_registry.main.name
}