# Playground
[![CI](https://github.com/stevensnoeijen/playground/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/stevensnoeijen/playground/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/stevensnoeijen/playground/graph/badge.svg?token=2E0QGK9EHL)](https://codecov.io/gh/stevensnoeijen/playground)

My personal playground to try out stuff.
Check out the directories.

## Devcontainers

This project uses devcontainers, so for the best experience open them in there.

## Windows

If you use Windows have your project inside wsl. This massively speed up the performance.

Setup git (ssh) inside wsl, and add to `~/.bashrc` to the bottom:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```
Restart wsl and the devcontainer.
