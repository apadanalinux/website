---
title: "Enterprise Fleet Management & OCI Registries"
description: "Deploy custom corporate images, internal certificates, and automated updates at scale"
section: "Enterprise Operations"
order: 7
lang: "en"
---

# Enterprise Fleet Operations

With bootc, your organization's workstation operating system is defined exactly like a Containerfile. Corporate IT can derive from Apadana's base image, embed internal CA certificates, default VPN configs, and standard desktop profiles, and push images to an internal registry.

## Example Corporate Containerfile

```dockerfile
FROM registry.apadanalinux.ir/enterprise/apadana-base:latest

# Inject internal root CA certificates
COPY internal-root-ca.crt /etc/pki/ca-trust/source/anchors/
RUN update-ca-trust

# Set corporate proxy and environment variables
COPY corporate-proxy.conf /etc/environment.d/
```

## Direct Fleet Re-Targeting

```bash
# Point workstations to internal private registry
sudo bootc switch registry.internal.company.com/apadana/workstation:prod
```
