resource "digitalocean_vpc" "guitar_tabs" {
  name     = "guitar-tabs"
  region   = var.region
  ip_range = "10.10.0.0/16"
}