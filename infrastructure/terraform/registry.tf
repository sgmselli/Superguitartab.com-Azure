resource "digitalocean_container_registry" "registry" {
  name                   = "guitar-tabs-registry"
  subscription_tier_slug = "starter"
}