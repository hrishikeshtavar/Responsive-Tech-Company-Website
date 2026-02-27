#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SANITY_DIR="$ROOT_DIR/sanity"

if [ ! -d "$SANITY_DIR" ]; then
  echo "Error: sanity directory not found at $SANITY_DIR"
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js is required. Install Node.js and retry."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is required. Install npm and retry."
  exit 1
fi

echo "Deploying Sanity Studio from: $SANITY_DIR"
cd "$SANITY_DIR"

if [ ! -d "node_modules" ]; then
  echo "Installing Sanity dependencies..."
  npm install
fi

npm run deploy
