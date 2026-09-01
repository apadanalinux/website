---
title: "Atomic Updates & Instant Rollbacks"
description: "How atomic staging guarantees zero-downtime updates and reliable disaster recovery"
section: "Reliability & Upgrades"
order: 3
lang: "en"
---

# Atomic Updates & Instant Rollback

Traditional package updates in mutable operating systems modify system binaries in-place while services are executing. If power drops or a network disconnect occurs midway, systems can become unbootable.

## Atomic Staging Process

1. **Background Download**: The verified target image is pulled in the background and assembled in an isolated deployment slot.
2. **Zero User Interruption**: Workstation users continue productive work without file lock contention or system slowdown.
3. **Deterministic Activation**: A standard reboot activates the new image seamlessly.

## Instant Rollback Mechanism

If an unforeseen regression occurs with a critical custom software suite:

```bash
# Instantly roll back to previous deployment
sudo bootc rollback
```

Additionally, the previous known-good deployment is always preserved as a second boot option in the GRUB/systemd-boot menu for instant recovery.
