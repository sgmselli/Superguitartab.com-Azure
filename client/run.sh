#!/bin/sh

echo "Starting Nginx web server for client..."

exec nginx -g 'daemon off;'