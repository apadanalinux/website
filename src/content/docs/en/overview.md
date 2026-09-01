---
title: "Apadana Linux Overview & Enterprise Mission"
description: "Understanding the commercial immutable OS built on Parch Immutable and bootc technology"
section: "Architecture & Concepts"
order: 1
lang: "en"
---

# Apadana Linux Overview

**Apadana Linux** is the commercial enterprise edition derived from the **Parch GNU/Linux** ecosystem, purpose-built to fulfill the rigorous security, stability, and administrative requirements of modern enterprises, public institutions, financial bodies, and universities.

Unlike traditional mutable operating systems where package-level updates modify system root directories and risk configuration drift or broken dependencies, Apadana is built upon **Parch Immutable** and **bootc** (Bootable OCI Containers).

---

## Core Pillars of Apadana

1. **Immutable by Design**:
   The root filesystem (`/usr`, `/bin`) is mounted read-only. Unprivileged software, malware, or human mistakes cannot compromise core OS binaries.

2. **Atomic Upgrades**:
   Operating system releases are delivered as complete, cryptographic OCI container images. The update either applies 100% cleanly in the background or leaves the current system untouched.

3. **Instant Zero-Downtime Rollback**:
   If an unexpected issue arises with a legacy proprietary system, rebooting into the previous verified deployment takes just seconds from the boot menu.

4. **Layered Separation of Concerns**:
   - **Flatpak**: Isolated, sandboxed desktop applications.
   - **Distrobox**: Seamless containerized developer toolchains and multi-distro CLI tools.
   - **Waydroid**: Native, hardware-accelerated Android enterprise application execution.

---

## Distinction from Community Parch Linux

While Parch Linux is a fast-moving, community-driven distribution celebrating open-source innovation, Apadana delivers the commercial enterprise guarantees: Long-Term Support (LTS), formal SLAs, custom image registries, and turnkey regional localization.
