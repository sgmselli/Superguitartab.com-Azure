resource "azurerm_storage_account" "superguitartab" {
  name                     = "superguitartabblob"
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  blob_properties {
    versioning_enabled = true
  }
}

resource "azurerm_storage_container" "private" {
  name                  = "private"
  storage_account_name  = azurerm_storage_account.superguitartab.name
  container_access_type = "private"
}

resource "azurerm_storage_container" "public" {
  name                  = "public"
  storage_account_name  = azurerm_storage_account.superguitartab.name
  container_access_type = "blob"
}