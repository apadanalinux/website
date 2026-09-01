---
title: "bootc Architecture & Read-Only Root"
description: "Technical deep-dive into OCI container-based OS delivery and OSTree transactional commits"
section: "Architecture & Concepts"
order: 2
lang: "en"
---

# bootc Container Architecture

**bootc** (Bootable Containers) unifies desktop and edge workstation deployment with cloud-native infrastructure tooling. The complete base operating system is built, signed, and distributed as an OCI container image.

```text
┌────────────────────────────────────────────────────────┐
│           Enterprise Desktop Layer (KDE Plasma)        │
├────────────────────────────────────────────────────────┤
│ Application Runtimes (Flatpak / Distrobox / Waydroid) │
├────────────────────────────────────────────────────────┤
│           Immutable Read-Only Root (/usr, /lib)        │
├────────────────────────────────────────────────────────┤
│          OSTree / bootc Transactional Deployments      │
├────────────────────────────────────────────────────────┤
│               Linux Kernel & Base Hardware             │
└────────────────────────────────────────────────────────┘
```

## How the Read-Only Filesystem Works

- Sensitive system directories (`/usr`, `/lib`, `/bin`) are read-only mounts.
- Host configuration in `/etc` is managed with a 3-way merge during upgrades, preserving local administrator customizations.
- Persistent user data is stored safely in `/home`, and application databases/containers reside in `/var`.

## Basic bootc Administration Commands

```bash
# Check current boot status and deployment queue
sudo bootc status

# Check for new image updates in the upstream registry
sudo bootc upgrade --check

# Stage and apply an update
sudo bootc upgrade
```
