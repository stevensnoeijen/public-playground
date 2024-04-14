#!/usr/bin/env bash

git config --global --add safe.directory /workspace
cd apps/bun-nestjs-pg/ || { echo "dir doesnt exists"; exit 1; }
bun install
