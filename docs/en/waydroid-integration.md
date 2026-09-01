---
title: "Android Workloads with Waydroid"
description: "Direct, hardware-accelerated Android app support on Wayland desktop"
section: "Application Model"
order: 6
lang: "en"
---

# Android Workloads with Waydroid

Many enterprises rely on specialized internal apps (banking tokens, digital signature portals, and proprietary mobile ERP apps) that lack native Linux desktop builds.

Apadana integrates **Waydroid**, executing containerized Android systems directly on top of the host kernel and Wayland compositor with full hardware GPU acceleration.

## Highlights
- Zero-emulation LXC container execution
- Shared clipboard and notification integration
- Android apps appear directly in the KDE Plasma taskbar

```bash
# Initialize Waydroid container
sudo waydroid init

# Start session
waydroid session start
```
