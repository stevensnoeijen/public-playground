#!/usr/bin/env bash

git config --global --add safe.directory /workspace
cp -n apps/nestjs/.env.example apps/nestjs/.env
npm install