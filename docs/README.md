# Apadana Linux Documentation (مستندات رسمی آپادانا لینوکس)

Welcome to the standalone documentation directory for **Apadana Linux**.

## 📁 Structure

- `fa/`: Persian documentation pages (مستندات به زبان فارسی)
  - `overview.md`: معرفی و مأموریت سازمانی آپادانا
  - `bootc-architecture.md`: معماری bootc و فایل‌سیستم ریشه فقط-خواندنی
  - `atomic-updates.md`: به‌روزرسانی‌های اتمیک و بازگشت آنی (Rollback)
  - `flatpak-ecosystem.md`: مدل نرم‌افزارهای ایزوله با Flatpak
  - `distrobox-compatibility.md`: محیط‌های توسعه و ابزارهای خط‌فرمان با Distrobox
  - `waydroid-integration.md`: اجرای اپلیکیشن‌های اندروید با Waydroid
  - `enterprise-fleet.md`: مدیریت ناوگان سازمانی و رجیستری‌های OCI
  - `persian-kde.md`: میزکار KDE Plasma و بومی‌سازی زبان فارسی
- `en/`: English documentation pages
  - `overview.md`: Overview & Enterprise Mission
  - `bootc-architecture.md`: bootc Architecture & Read-Only Root
  - `atomic-updates.md`: Atomic Updates & Instant Rollback
  - `flatpak-ecosystem.md`: Sandboxed Applications with Flatpak
  - `distrobox-compatibility.md`: Developer Workspaces with Distrobox
  - `waydroid-integration.md`: Android Workloads with Waydroid
  - `enterprise-fleet.md`: Enterprise Fleet Management & OCI Registries
  - `persian-kde.md`: KDE Plasma Desktop & Persian Localization

## ✍️ Contributing Documentation

New documentation files can be added to both `fa/` and `en/` following the frontmatter convention:

```markdown
---
title: "Document Title"
description: "Brief summary of the article"
section: "Architecture & Concepts"
order: 1
lang: "fa" # or "en"
---

# Your Content
```
