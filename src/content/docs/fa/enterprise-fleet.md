---
title: "مدیریت ناوگان سازمانی و رجیستری اختصاصی"
description: "استقرار تصاویر سفارشی، اعمال گواهی‌نامه‌های داخلی و کنترل چرخه به‌روزرسانی ایستگاه‌های کاری"
section: "عملیات سازمانی"
order: 7
lang: "fa"
---

# مدیریت ناوگان سازمانی (Fleet Management)

در معماری bootc، ساختار سیستم‌عامل هر ایستگاه کاری دقیقا همانند یک Containerfile تعریف می‌شود. شما می‌توانید تصویر پایه آپادانا را در CI/CD سازمان خود مشتق کرده و گواهی‌نامه‌های امنیتی CA داخلی، تنظیمات VPN و ابزارهای مانیتورینگ اختصاصی را به آن اضافه کنید.

## نمونه تعریف Containerfile سازمانی

```dockerfile
FROM registry.apadanalinux.ir/enterprise/apadana-base:latest

# افزودن گواهینامه‌های امنیتی شبکه داخلی سازمان
COPY internal-root-ca.crt /etc/pki/ca-trust/source/anchors/
RUN update-ca-trust

# افزودن تنظیمات پیش‌فرض شبکه و پروکسی
COPY corporate-proxy.conf /etc/environment.d/
```

## اتصال سیستم‌های کلاینت به رجیستری اختصاصی

```bash
# سوئیچ تمام کلاینت‌های سازمان به رجیستری محلی
sudo bootc switch registry.internal.company.ir/apadana/workstation:prod
```
