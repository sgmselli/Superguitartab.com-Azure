variable "ssh_public_key" {
  description = "SSH public key for VM access"
  type        = string
  sensitive   = true
}

variable "location" {
  type    = string
  default = "westeurope"
}

variable "resource_group_name" {
  type    = string
  default = "rg-superguitartab-prod-westeurope"
}

variable "container_registry_name" {
  type    = string
  default = "superguitartab"
}

variable "vnet_name" {
  type    = string
  default = "vnet-superguitartab-prod-westeurope"
}

variable "subnet_app_name" {
  description = "Subnet for the virtual machine containing the main app"
  type        = string
  default     = "subnet-superguitartab-prod-main-westeurope"
}

variable "nsg_app_name" {
  description = "Network Security Group for the main app's subnet"
  type        = string
  default     = "nsg-superguitartab-prod-main-westeurope"
}

variable "vm_app_name" {
  description = "Virtual machine containing the containerised app"
  type        = string
  default     = "vm-superguitartab-prod-main-westeurope"
}

variable "vm_app_size" {
  description = "Size of our app's virtual machine"
  type        = string
  default     = "Standard_B2ts_v2"
}

variable "admin_username" {
  description = "Username used to access virtual machine"
  type        = string
  default     = "mattsellings"
}