resource "digitalocean_firewall" "guitar_tabs_fw" {
  name = "guitar-tabs-firewall"

  droplet_ids = [
    digitalocean_droplet.guitar_tabs.id
  ]

  dynamic "inbound_rule" {
    for_each = [0, 1, 2, 3, 4]
    content {
      protocol         = "tcp"
      port_range       = "22"
      source_addresses = slice(var.github_actions_ips, inbound_rule.value * 1000, min((inbound_rule.value + 1) * 1000, length(var.github_actions_ips)))
    }
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["86.14.170.85/32"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "tcp"
    port_range            = "all"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "udp"
    port_range            = "all"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
}