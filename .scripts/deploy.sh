#!/bin/bash
set -e

echo "Deployment started ..."

git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Buid..."
npm run build

echo "Reloading PM2 server..."
pm2 reload all

echo "Deployment Finished!"