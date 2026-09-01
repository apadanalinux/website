---
title: "Sandboxed Applications with Flatpak"
description: "Managing enterprise desktop software safely without touching the host operating system"
section: "Application Model"
order: 4
lang: "en"
---

# Sandboxed Applications with Flatpak

In Apadana Linux, userland applications are installed and managed via **Flatpak**. This ensures desktop applications operate inside isolated sandboxes with granular security policies.

## Enterprise Benefits

- **Zero Dependency Conflicts**: Applications bundle their necessary runtime libraries, preventing dependency collisions across different tools.
- **Granular Permissions Control**: System administrators can audit and enforce access control regarding microphone, webcam, network, or file access via Flatseal or command-line policies.

```bash
# Install an application from Flathub or internal repo
flatpak install flathub org.libreoffice.LibreOffice

# List installed Flatpak packages
flatpak list --app
```
