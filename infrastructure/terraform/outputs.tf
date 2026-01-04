output "storage_account_name" {
  description = "Blob storage account name"
  value       = azurerm_storage_account.superguitartab.name
}

output "vm_app_public_ip" {
  description = "Public IP address of the app virtual machine"
  value       = azurerm_public_ip.app.ip_address
}

output "container_registry_name" {
  description = "Name of the Azure Container Registry"
  value       = azurerm_container_registry.main.name
}