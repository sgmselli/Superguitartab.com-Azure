variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
  sensitive   = true
}

variable "region" {
  description = "Region to deploy resources in"
  type        = string
  default     = "lon1"
}

variable "droplet_name" {
  description = "Name of the application Droplet"
  type        = string
  default     = "guitar-tabs-droplet"
}

variable "droplet_size" {
  description = "Droplet size (CPU/RAM preset)"
  type        = string
  default     = "s-1vcpu-1gb" # 1 vCPU, 1GB RAM
}

variable "ssh_public_fingerprint" {
  description = "SSH key fingerprint already uploaded to DO"
  type        = string
  default     = "a4:51:04:55:59:86:fc:1e:0e:2e:40:38:9e:34:0b:86"
}