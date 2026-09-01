---
title: "Developer Workspaces with Distrobox"
description: "Run any Linux distribution and CLI development toolchain without altering host files"
section: "Application Model"
order: 5
lang: "en"
---

# Developer Workspaces with Distrobox

Apadana comes pre-configured with **Distrobox**, allowing developers and sysadmins to launch containers running any Linux distribution (Debian, Arch, Ubuntu, Fedora) with tight integration into the host environment (X11/Wayland, audio, home directory, and removable devices).

## Typical Use Cases

- Running specialized toolchains or legacy compilers tied to specific distribution releases.
- Setting up isolated Python, Node.js, C/C++, Rust, or Go developer environments without polluting the immutable root.

```bash
# Create a containerized Ubuntu 24.04 workspace
distrobox create --name dev-box --image ubuntu:24.04

# Enter the container environment
distrobox enter dev-box

# Export a binary or GUI tool to the host application launcher
distrobox-export --app vscode
```
