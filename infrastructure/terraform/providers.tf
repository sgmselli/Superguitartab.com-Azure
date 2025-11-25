terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = ">= 2.0.0"
    }
    http = {
      source  = "hashicorp/http"
      version = "3.4.2"
    }
  }
}
provider "digitalocean" {
  token = var.do_token
}