'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const translations = {
    en: {
      // Navigation
      nav_home: "Home",
      nav_features: "Features",
      nav_pricing: "Pricing",
      nav_about: "About",
      nav_contact: "Contact",

      // Hero Section
      hero_title: "Next Generation Enterprise Operating System",
      hero_subtitle: "Apadana is an immutable Linux distribution built on Parch Linux with advanced centralized management capabilities, providing enterprise-grade security and stability at a fraction of traditional costs.",
      hero_cta1: "Get Free Trial",
      hero_cta2: "View Features",

      // Features Section
      features_title: "Key Features",
      features_subtitle: "Enterprise-grade capabilities designed for modern organizations",
      feature1_title: "Immutable Architecture",
      feature1_desc: "Read-only core system prevents malware and ensures ultimate stability across all deployments.",
      feature2_title: "Dual Update System",
      feature2_desc: "Six-month cycle updates plus instant delta security patches for optimal balance between stability and security.",
      feature3_title: "Master-Slave Management",
      feature3_desc: "Centralized control of hundreds or thousands of devices from a single dashboard with real-time monitoring.",
      feature4_title: "Enterprise Security",
      feature4_desc: "Built-in security features without requiring additional tools or configurations for enterprise environments.",
      feature5_title: "Cost Efficiency",
      feature5_desc: "Fraction of traditional OS licensing costs while maintaining enterprise-grade functionality and support.",
      feature6_title: "24/7 Support",
      feature6_desc: "Round-the-clock technical support for commercial customers with guaranteed response times.",

      // How It Works Section
      how_title: "How It Works",
      how_subtitle: "Simple deployment process for enterprise-scale management",
      step1_title: "Deploy Master Node",
      step1_desc: "Install the master control system on your administrator workstation",
      step2_title: "Connect Slave Devices",
      step2_desc: "Deploy Apadana on endpoints across your organization",
      step3_title: "Configure Policies",
      step3_desc: "Set up centralized policies and permissions from the dashboard",
      step4_title: "Monitor Systems",
      step4_desc: "Real-time monitoring of all connected devices and systems",
      step5_title: "Push Updates",
      step5_desc: "Instantly deploy updates and security patches to all devices",
      step6_title: "Generate Reports",
      step6_desc: "Create comprehensive reports and maintain audit logs",

      // Use Cases Section
      usecases_title: "Industry Applications",
      usecases_subtitle: "Trusted across diverse sectors for enterprise infrastructure",
      usecase1_title: "Educational Institutions",
      usecase1_desc: "Manage hundreds of student computers with centralized control and enhanced security",
      usecase2_title: "Government Organizations",
      usecase2_desc: "Secure, compliant infrastructure meeting strict government requirements",
      usecase3_title: "Financial Services",
      usecase3_desc: "High-security requirements with immutable architecture protecting sensitive data",
      usecase4_title: "Technology Companies",
      usecase4_desc: "Developer-friendly environment with modern tools and container support",
      usecase5_title: "Healthcare Facilities",
      usecase5_desc: "Stable, HIPAA-compliant systems ensuring patient data protection",

      // Pricing Section
      pricing_title: "Simple, Transparent Pricing",
      pricing_subtitle: "Choose the plan that fits your organization's needs",
      pricing_home_title: "Home Edition",
      pricing_enterprise_title: "Enterprise Edition",
      pricing_period: "/month",
      pricing_per_device: "/device/month",
      pricing_recommended: "Recommended",
      pricing_home_feature1: "Limited features for personal use",
      pricing_home_feature2: "Community support",
      pricing_home_feature3: "No admin panel",
      pricing_home_feature4: "Basic security features",
      pricing_enterprise_feature1: "Full enterprise features",
      pricing_enterprise_feature2: "24/7 dedicated support",
      pricing_enterprise_feature3: "Advanced admin panel",
      pricing_enterprise_feature4: "Training included",
      pricing_enterprise_feature5: "Custom integrations",
      pricing_enterprise_feature6: "Priority updates",
      pricing_home_cta: "Get Started",
      pricing_enterprise_cta: "Request Quote",

      // Comparison Section
      comparison_title: "Why Choose Apadana",
      comparison_subtitle: "See how we compare to traditional solutions",
      comparison_feature: "Feature",
      comparison_traditional: "Traditional OS",
      comparison_cost: "Total Cost",
      comparison_security: "Security",
      comparison_management: "Management",
      comparison_low: "Low",
      comparison_high: "High",
      comparison_builtin: "Built-in",
      comparison_addons: "Add-ons",
      comparison_centralized: "Centralized",
      comparison_manual: "Manual",

      // Technology Stack Section
      tech_title: "Technology Stack",
      tech_subtitle: "Built on proven open-source technologies",
      tech_base_title: "Base System",
      tech_base_desc: "Based on Parch Linux (Arch derivative) with rolling release capabilities",
      tech_repos_title: "Repository Approach",
      tech_repos_desc: "Frozen repository system ensuring stability and reliability",
      tech_desktop_title: "Desktop Environment",
      tech_desktop_desc: "Cinnamon desktop environment for familiar user experience",
      tech_compatibility_title: "Compatibility",
      tech_compatibility_desc: "Wine integration for Windows software compatibility",
      tech_optimization_title: "Optimization",
      tech_optimization_desc: "zRam optimization and custom kernel enhancements",
      tech_management_title: "Management",
      tech_management_desc: "Web-based administration panel with REST API",

      // About Section
      about_title: "About Apadana",
      about_subtitle: "Democratizing enterprise-grade infrastructure management",
      about_mission: "Our mission is to transform how organizations manage their IT infrastructure by providing enterprise-grade operating system capabilities at accessible price points. We believe that advanced security, centralized management, and immutable architecture should be available to organizations of all sizes.",
      about_vision: "We envision a future where every organization can deploy and manage secure, stable computing infrastructure without the complexity and costs traditionally associated with enterprise solutions. Through our commitment to open-source values and commercial-grade reliability, Apadana Linux is making this vision a reality.",

      // Contact Section
      contact_title: "Get in Touch",
      contact_subtitle: "Ready to transform your infrastructure? Let's talk.",
      contact_name: "Name",
      contact_email: "Email",
      contact_org: "Organization",
      contact_message: "Message",
      contact_lang: "Language Preference",
      contact_submit: "Send Message",
      contact_email_title: "Email",
      contact_phone_title: "Phone",
      contact_follow: "Follow Us",

      // Footer
      footer_company: "Company",
      footer_about: "About",
      footer_contact: "Contact",
      footer_careers: "Careers",
      footer_partners: "Partners",
      footer_resources: "Resources",
      footer_download: "Download",
      footer_docs: "Documentation",
      footer_community: "Community Forum",
      footer_api: "API Docs",
      footer_support: "Support",
      footer_help: "Help Center",
      footer_training: "Training",
      footer_status: "System Status",
      footer_feedback: "Feedback",
      footer_legal: "Legal",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_license: "License Agreement",
      footer_compliance: "Compliance",
      footer_rights: "All rights reserved."
    },
    fa: {
      // Navigation
      nav_home: "خانه",
      nav_features: "ویژگی‌ها",
      nav_pricing: "قیمت‌گذاری",
      nav_about: "درباره ما",
      nav_contact: "تماس با ما",
     
      // Hero Section
      hero_title: "سیستم عامل سازمانی نسل جدید",
      hero_subtitle: "آپادانا یک توزیع لینوکس تغییرناپذیر مبتنی بر پارچ لینوکس با قابلیت‌های پیشرفته مدیریت متمرکز است که امنیت و پایداری در سطح سازمانی را با بخش کوچکی از هزینه‌های سنتی فراهم می‌کند.",
      hero_cta1: "دریافت نسخه آزمایشی",
      hero_cta2: "مشاهده ویژگی‌ها",
     
      // Features Section
      features_title: "ویژگی‌های کلیدی",
      features_subtitle: "قابلیت‌های سطح سازمانی طراحی شده برای سازمان‌های مدرن",
      feature1_title: "معماری تغییرناپذیر",
      feature1_desc: "سیستم هسته فقط خواندنی از بدافزار جلوگیری کرده و پایداری نهایی را در تمام استقرارها تضمین می‌کند.",
      feature2_title: "سیستم به‌روزرسانی دوگانه",
      feature2_desc: "به‌روزرسانی‌های چرخه شش ماهه به علاوه پچ‌های امنیتی دلتای فوری برای تعادل بهینه بین پایداری و امنیت.",
      feature3_title: "مدیریت مستر-اسلیو",
      feature3_desc: "کنترل متمرکز صدها یا هزاران دستگاه از یک داشبورد با نظارت بی‌درنگ.",
      feature4_title: "امنیت سازمانی",
      feature4_desc: "ویژگی‌های امنیتی داخلی بدون نیاز به ابزار یا پیکربندی‌های اضافی برای محیط‌های سازمانی.",
      feature5_title: "مقرون به صرفه",
      feature5_desc: "بخش کوچکی از هزینه‌های مجوز سیستم عامل سنتی با حفظ قابلیت‌ها و پشتیبانی در سطح سازمانی.",
      feature6_title: "پشتیبانی شبانه‌روزی",
      feature6_desc: "پشتیبانی فنی ۲۴ ساعته برای مشتریان تجاری با زمان‌های پاسخگویی تضمین شده.",
     
      // How It Works Section
      how_title: "نحوه عملکرد",
      how_subtitle: "فرآیند استقرار ساده برای مدیریت در مقیاس سازمانی",
      step1_title: "استقرار نود مستر",
      step1_desc: "نصب سیستم کنترل مستر روی ایستگاه کاری مدیر",
      step2_title: "اتصال دستگاه‌های اسلیو",
      step2_desc: "استقرار آپادانا روی نقاط پایانی در سراسر سازمان",
      step3_title: "پیکربندی سیاست‌ها",
      step3_desc: "راه‌اندازی سیاست‌ها و مجوزهای متمرکز از داشبورد",
      step4_title: "نظارت بر سیستم‌ها",
      step4_desc: "نظارت بی‌درنگ بر تمام دستگاه‌ها و سیستم‌های متصل",
      step5_title: "ارسال به‌روزرسانی‌ها",
      step5_desc: "استقرار فوری به‌روزرسانی‌ها و پچ‌های امنیتی برای همه دستگاه‌ها",
      step6_title: "تولید گزارش‌ها",
      step6_desc: "ایجاد گزارش‌های جامع و نگهداری لاگ‌های حسابرسی",
     
      // Use Cases Section
      usecases_title: "کاربردهای صنعتی",
      usecases_subtitle: "مورد اعتماد در بخش‌های مختلف برای زیرساخت سازمانی",
      usecase1_title: "موسسات آموزشی",
      usecase1_desc: "مدیریت صدها کامپیوتر دانشجو با کنترل متمرکز و امنیت تقویت شده",
      usecase2_title: "سازمان‌های دولتی",
      usecase2_desc: "زیرساخت امن و مطابق با الزامات سخت دولتی",
      usecase3_title: "خدمات مالی",
      usecase3_desc: "الزامات امنیتی بالا با معماری تغییرناپذیر محافظت از داده‌های حساس",
      usecase4_title: "شرکت‌های فناوری",
      usecase4_desc: "محیط دوستانه برای توسعه‌دهندگان با ابزارهای مدرن و پشتیبانی کانتینر",
      usecase5_title: "مراکز درمانی",
      usecase5_desc: "سیستم‌های پایدار و مطابق با HIPAA تضمین حفاظت از داده‌های بیماران",
     
      // Pricing Section
      pricing_title: "قیمت‌گذاری ساده و شفاف",
      pricing_subtitle: "پلانی را انتخاب کنید که نیازهای سازمان شما را برآورده کند",
      pricing_home_title: "نسخه خانگی",
      pricing_enterprise_title: "نسخه سازمانی",
      pricing_period: "/ماه",
      pricing_per_device: "/دستگاه/ماه",
      pricing_recommended: "توصیه شده",
      pricing_home_feature1: "ویژگی‌های محدود برای استفاده شخصی",
      pricing_home_feature2: "پشتیبانی جامعه",
      pricing_home_feature3: "بدون پنل مدیریت",
      pricing_home_feature4: "ویژگی‌های امنیتی پایه",
      pricing_enterprise_feature1: "ویژگی‌های کامل سازمانی",
      pricing_enterprise_feature2: "پشتیبانی اختصاصی ۲۴/۷",
      pricing_enterprise_feature3: "پنل مدیریت پیشرفته",
      pricing_enterprise_feature4: "آموزش شامل",
      pricing_enterprise_feature5: "یکپارچه‌سازی‌های سفارشی",
      pricing_enterprise_feature6: "به‌روزرسانی‌های اولویت‌دار",
      pricing_home_cta: "شروع کنید",
      pricing_enterprise_cta: "درخواست پیشنهاد",
     
      // Comparison Section
      comparison_title: "چرا آپادانا را انتخاب کنیم",
      comparison_subtitle: "ببینید چگونه با راه‌حل‌های سنتی مقایسه می‌کنیم",
      comparison_feature: "ویژگی",
      comparison_traditional: "سیستم عامل سنتی",
      comparison_cost: "هزینه کل",
      comparison_security: "امنیت",
      comparison_management: "مدیریت",
      comparison_low: "کم",
      comparison_high: "بالا",
      comparison_builtin: "داخلی",
      comparison_addons: "افزودنی‌ها",
      comparison_centralized: "متمرکز",
      comparison_manual: "دستی",
     
      // Technology Stack Section
      tech_title: "پشته فناوری",
      tech_subtitle: "ساخته شده بر روی فناوری‌های متن‌باز اثبات شده",
      tech_base_title: "سیستم پایه",
      tech_base_desc: "مبتنی بر پارچ لینوکس (مشتق آرچ) با قابلیت‌های انتشار مداوم",
      tech_repos_title: "رویکرد مخازن",
      tech_repos_desc: "سیستم مخزن یخ زده تضمین پایداری و قابلیت اطمینان",
      tech_desktop_title: "محیط دسکتاپ",
      tech_desktop_desc: "محیط دسکتاپ سینامون برای تجربه کاربری آشنا",
      tech_compatibility_title: "سازگاری",
      tech_compatibility_desc: "یکپارچه‌سازی واین برای سازگاری نرم‌افزار ویندوز",
      tech_optimization_title: "بهینه‌سازی",
      tech_optimization_desc: "بهینه‌سازی zRam و بهبودهای هسته سفارشی",
      tech_management_title: "مدیریت",
      tech_management_desc: "پنل مدیریت مبتنی بر وب با API REST",
     
      // About Section
      about_title: "درباره آپادانا",
      about_subtitle: "دموکراتیز کردن مدیریت زیرساخت در سطح سازمانی",
      about_mission: "مأموریت ما تبدیل نحوه مدیریت زیرساخت فناوری اطلاعات سازمان‌ها با ارائه قابلیت‌های سیستم عامل در سطح سازمانی در نقاط قیمت قابل دسترس است. ما معتقدیم که امنیت پیشرفته، مدیریت متمرکز، و معماری تغییرناپذیر باید برای سازمان‌های تمام اندازه‌ها در دسترس باشد.",
      about_vision: "ما آینده‌ای را تصور می‌کنیم که در آن هر سازمان بتواند زیرساخت محاسباتی امن و پایدار را بدون پیچیدگی و هزینه‌های سنتی مرتبط با راه‌حل‌های سازمانی مستقر و مدیریت کند. از طریق تعهد ما به ارزش‌های متن‌باز و قابلیت اطمینان در سطح تجاری، آپادانا لینوکس این چشم‌انداز را به واقعیت تبدیل می‌کند.",
     
      // Contact Section
      contact_title: "تماس با ما",
      contact_subtitle: "آماده تبدیل زیرساخت خود هستید؟ بیایید صحبت کنیم.",
      contact_name: "نام",
      contact_email: "ایمیل",
      contact_org: "سازمان",
      contact_message: "پیام",
      contact_lang: "زبان مورد نظر",
      contact_submit: "ارسال پیام",
      contact_email_title: "ایمیل",
      contact_phone_title: "تلفن",
      contact_follow: "ما را دنبال کنید",
     
      // Footer
      footer_company: "شرکت",
      footer_about: "درباره ما",
      footer_contact: "تماس با ما",
      footer_careers: "فرصت‌های شغلی",
      footer_partners: "شرکا",
      footer_resources: "منابع",
      footer_download: "دانلود",
      footer_docs: "مستندات",
      footer_community: "انجمن جامعه",
      footer_api: "مستندات API",
      footer_support: "پشتیبانی",
      footer_help: "مرکز کمک",
      footer_training: "آموزش",
      footer_status: "وضعیت سیستم",
      footer_feedback: "بازخورد",
      footer_legal: "قانونی",
      footer_privacy: "سیاست حفظ حریم خصوصی",
      footer_terms: "شرایط خدمات",
      footer_license: "قرارداد مجوز",
      footer_compliance: "انطباق",
      footer_rights: "تمام حقوق محفوظ است."
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const savedLang = localStorage.getItem('apadana-lang') || 'en';
    setCurrentLang(savedLang);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'fa' : 'en';
    setCurrentLang(newLang);
    localStorage.setItem('apadana-lang', newLang);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const t = (key) => translations[currentLang][key] || key;

  return (
    <div className={`min-h-screen ${currentLang === 'fa' ? 'rtl' : 'ltr'}`} dir={currentLang === 'fa' ? 'rtl' : 'ltr'}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
       
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :root {
          --bg-primary: #0a0e1a;
          --bg-secondary: #141925;
          --bg-tertiary: #1e2433;
          --bg-card: #1a1f2e;
          --bg-hover: #252b3d;
         
          --text-primary: #ffffff;
          --text-secondary: #94a3b8;
          --text-muted: #64748b;
         
          --accent-primary: #00d4ff;
          --accent-secondary: #0099cc;
          --accent-gradient: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
         
          --border-color: #2a3441;
          --border-hover: #3a4556;
         
          --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
          --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
          --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
         
          --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-persian: 'Vazir', 'Tahoma', sans-serif;
         
          --transition-fast: 0.15s ease;
          --transition-base: 0.3s ease;
          --transition-slow: 0.5s ease;
         
          --border-radius: 8px;
          --border-radius-lg: 12px;
          --border-radius-xl: 16px;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: var(--font-primary);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }
        body[dir="rtl"] {
          font-family: var(--font-persian);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        h1, h2, h3, h4, h5, h6 {
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        h1 { font-size: 3.5rem; font-weight: 800; }
        h2 { font-size: 2.5rem; font-weight: 700; }
        h3 { font-size: 1.875rem; font-weight: 600; }
        h4 { font-size: 1.5rem; font-weight: 600; }
        p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all var(--transition-base);
          backdrop-filter: blur(10px);
          background: rgba(10, 14, 26, 0.8);
        }
        .header.scrolled {
          background: var(--bg-secondary);
          box-shadow: var(--shadow-md);
        }
        .nav {
          padding: 1rem 0;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-brand .logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
          position: relative;
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gradient);
          transition: width var(--transition-base);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .lang-switcher {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all var(--transition-fast);
          font-weight: 500;
        }
        .lang-switcher:hover {
          background: var(--bg-hover);
          border-color: var(--accent-primary);
        }
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all var(--transition-base);
        }
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center top, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(ellipse at center bottom, rgba(0, 153, 204, 0.1) 0%, transparent 50%);
        }
        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
              radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 153, 204, 0.1) 0%, transparent 50%);
          animation: float 20s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-content {
          animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-illustration {
          width: 400px;
          height: 400px;
          position: relative;
          animation: float 15s ease-in-out infinite;
        }
        .illustration-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background: var(--accent-gradient);
          border-radius: 50%;
          box-shadow: 0 0 60px rgba(0, 212, 255, 0.3);
        }
        .illustration-nodes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .illustration-nodes::before,
        .illustration-nodes::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 40px;
          background: var(--bg-card);
          border: 2px solid var(--accent-primary);
          border-radius: 50%;
        }
        .illustration-nodes::before {
          top: 20%;
          left: 20%;
        }
        .illustration-nodes::after {
          bottom: 20%;
          right: 20%;
        }
        .illustration-connections {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .illustration-connections::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          border: 2px dashed var(--accent-secondary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.3;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all var(--transition-base);
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }
        .btn-primary {
          background: var(--accent-gradient);
          color: var(--bg-primary);
          box-shadow: var(--shadow-md);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        .btn-secondary {
          background: transparent;
          color: var(--accent-primary);
          border: 2px solid var(--accent-primary);
        }
        .btn-secondary:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
        }
        .btn-outline {
          background: transparent;
          color: var(--text-primary);
          border: 2px solid var(--border-color);
        }
        .btn-outline:hover {
          background: var(--bg-card);
          border-color: var(--accent-primary);
        }
        section {
          padding: 5rem 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        .features {
          background: var(--bg-secondary);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-gradient);
          transform: scaleX(0);
          transition: transform var(--transition-base);
        }
        .feature-card:hover::before {
          transform: scaleX(1);
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-primary);
        }
        .feature-icon {
          width: 60px;
          height: 60px;
          background: var(--accent-gradient);
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--bg-primary);
        }
        .feature-icon svg {
          width: 30px;
          height: 30px;
        }
        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .how-it-works {
          background: var(--bg-secondary);
        }
        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .step {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 1.5rem;
          background: var(--bg-card);
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-base);
        }
        .step:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-primary);
        }
        .step-number {
          width: 40px;
          height: 40px;
          background: var(--accent-gradient);
          color: var(--bg-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }
        .step-content h4 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .step-content p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }
        .use-cases {
          background: var(--bg-primary);
        }
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .use-case {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all var(--transition-base);
        }
        .use-case:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-primary);
        }
        .use-case-icon {
          width: 80px;
          height: 80px;
          background: var(--accent-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--bg-primary);
        }
        .use-case-icon svg {
          width: 40px;
          height: 40px;
        }
        .use-case h4 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .use-case p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        .pricing {
          background: var(--bg-secondary);
        }
        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .pricing-card {
          background: var(--bg-card);
          border-radius: var(--border-radius-xl);
          border: 2px solid var(--border-color);
          overflow: hidden;
          transition: all var(--transition-base);
          position: relative;
        }
        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }
        .pricing-featured {
          border-color: var(--accent-primary);
          transform: scale(1.05);
        }
        .pricing-badge {
          position: absolute;
          top: 15px;
          right: -30px;
          background: var(--accent-gradient);
          color: var(--bg-primary);
          padding: 0.25rem 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          transform: rotate(45deg);
        }
        .pricing-header {
          padding: 2rem;
          text-align: center;
          border-bottom: 1px solid var(--border-color);
        }
        .pricing-header h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .pricing-price {
          font-size: 3rem;
          font-weight: 800;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }
        .price-currency {
          font-size: 1.5rem;
          vertical-align: super;
        }
        .price-period {
          font-size: 1rem;
          color: var(--text-secondary);
        }
        .pricing-features {
          padding: 2rem;
          list-style: none;
        }
        .pricing-features li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.5rem;
        }
        .pricing-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-weight: bold;
        }
        .pricing-card .btn {
          margin: 0 2rem 2rem;
          width: calc(100% - 4rem);
        }
        .comparison {
          background: var(--bg-primary);
        }
        .comparison-table {
          max-width: 800px;
          margin: 0 auto;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .comparison-row:last-child {
          border-bottom: none;
        }
        .comparison-header {
          background: var(--bg-card);
          font-weight: 600;
          color: var(--text-primary);
        }
        .comparison-feature {
          color: var(--text-secondary);
        }
        .comparison-apadana {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-primary);
          font-weight: 500;
        }
        .comparison-traditional {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
        }
        .check-icon {
          width: 20px;
          height: 20px;
          color: #10b981;
        }
        .x-icon {
          width: 20px;
          height: 20px;
          color: #ef4444;
        }
        .tech-stack {
          background: var(--bg-secondary);
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .tech-item {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-base);
        }
        .tech-item:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-primary);
        }
        .tech-item h4 {
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }
        .tech-item p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        .about {
          background: var(--bg-primary);
        }
        .about-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .about-text {
          margin-bottom: 3rem;
        }
        .about-text p {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .contact {
          background: var(--bg-secondary);
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-form {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          color: var(--text-primary);
          font-family: inherit;
          transition: all var(--transition-fast);
        }
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .contact-icon {
          width: 40px;
          height: 40px;
          background: var(--accent-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bg-primary);
          flex-shrink: 0;
        }
        .contact-icon svg {
          width: 20px;
          height: 20px;
        }
        .contact-item h4 {
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .contact-item p {
          color: var(--text-secondary);
          margin: 0;
        }
        .social-links h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
          text-decoration: none;
        }
        .social-icon:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          border-color: var(--accent-primary);
        }
        .social-icon svg {
          width: 20px;
          height: 20px;
        }
        .footer {
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          padding: 3rem 0 1rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .footer-section ul {
          list-style: none;
        }
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .footer-section a:hover {
          color: var(--accent-primary);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }
        .footer-copyright p {
          color: var(--text-muted);
          margin: 0;
          font-size: 0.875rem;
        }
        .lang-switcher-footer {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all var(--transition-fast);
          font-weight: 500;
        }
        .lang-switcher-footer:hover {
          background: var(--bg-hover);
          border-color: var(--accent-primary);
        }
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-secondary);
            flex-direction: column;
            padding: 1rem;
            box-shadow: var(--shadow-lg);
          }
          .nav-menu.active {
            display: flex;
          }
          .mobile-menu-toggle {
            display: flex;
          }
          .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }
          .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
          }
          .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-illustration {
            width: 300px;
            height: 300px;
          }
          .hero-actions {
            justify-content: center;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .steps-container {
            grid-template-columns: 1fr;
          }
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
          .pricing-cards {
            grid-template-columns: 1fr;
          }
          .pricing-featured {
            transform: none;
          }
          .comparison-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .comparison-row > div {
            padding: 0.5rem 0;
          }
          .tech-grid {
            grid-template-columns: 1fr;
          }
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-content {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          h1 { font-size: 2.5rem; }
          h2 { font-size: 2rem; }
          h3 { font-size: 1.5rem; }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .section-title {
            font-size: 1.75rem;
          }
          .hero-illustration {
            width: 250px;
            height: 250px;
          }
          .illustration-core {
            width: 80px;
            height: 80px;
          }
          .illustration-nodes::before,
          .illustration-nodes::after {
            width: 30px;
            height: 30px;
          }
        }
        body[dir="rtl"] .nav-menu {
          left: auto;
          right: 0;
        }
        body[dir="rtl"] .hero-container {
          grid-template-columns: 1fr;
        }
        body[dir="rtl"] .step {
          flex-direction: row-reverse;
        }
        body[dir="rtl"] .pricing-features li {
          padding-left: 0;
          padding-right: 1.5rem;
        }
        body[dir="rtl"] .pricing-features li::before {
          left: auto;
          right: 0;
        }
        body[dir="rtl"] .comparison-apadana,
        body[dir="rtl"] .comparison-traditional {
          flex-direction: row-reverse;
        }
        body[dir="rtl"] .contact-item {
          flex-direction: row-reverse;
        }
      `}</style>
      {/* Header Navigation */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-container">
            <div className="nav-brand">
              <div className="logo">APADANA</div>
            </div>
           
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <a href="#home" className="nav-link">{t('nav_home')}</a>
              <a href="#features" className="nav-link">{t('nav_features')}</a>
              <a href="#pricing" className="nav-link">{t('nav_pricing')}</a>
              <a href="#about" className="nav-link">{t('nav_about')}</a>
              <a href="#contact" className="nav-link">{t('nav_contact')}</a>
            </div>
           
            <div className="nav-actions">
              <button className="lang-switcher" onClick={toggleLanguage}>
                {currentLang.toUpperCase()}
              </button>
              <button className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-particles"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">{t('hero_title')}</h1>
            <p className="hero-subtitle">{t('hero_subtitle')}</p>
            <div className="hero-actions">
              <button className="btn btn-primary">{t('hero_cta1')}</button>
              <button className="btn btn-secondary">{t('hero_cta2')}</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="illustration-core"></div>
              <div className="illustration-nodes"></div>
              <div className="illustration-connections"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Overview Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features_title')}</h2>
            <p className="section-subtitle">{t('features_subtitle')}</p>
          </div>
         
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="feature-title">{t('feature1_title')}</h3>
              <p className="feature-description">{t('feature1_desc')}</p>
            </div>
           
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <h3 className="feature-title">{t('feature2_title')}</h3>
              <p className="feature-description">{t('feature2_desc')}</p>
            </div>
           
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="feature-title">{t('feature3_title')}</h3>
              <p className="feature-description">{t('feature3_desc')}</p>
            </div>
           
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="feature-title">{t('feature4_title')}</h3>
              <p className="feature-description">{t('feature4_desc')}</p>
            </div>
           
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="feature-title">{t('feature5_title')}</h3>
              <p className="feature-description">{t('feature5_desc')}</p>
            </div>
           
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 className="feature-title">{t('feature6_title')}</h3>
              <p className="feature-description">{t('feature6_desc')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('how_title')}</h2>
            <p className="section-subtitle">{t('how_subtitle')}</p>
          </div>
         
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>{t('step1_title')}</h4>
                <p>{t('step1_desc')}</p>
              </div>
            </div>
           
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>{t('step2_title')}</h4>
                <p>{t('step2_desc')}</p>
              </div>
            </div>
           
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>{t('step3_title')}</h4>
                <p>{t('step3_desc')}</p>
              </div>
            </div>
           
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>{t('step4_title')}</h4>
                <p>{t('step4_desc')}</p>
              </div>
            </div>
           
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>{t('step5_title')}</h4>
                <p>{t('step5_desc')}</p>
              </div>
            </div>
           
            <div className="step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>{t('step6_title')}</h4>
                <p>{t('step6_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="use-cases">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('usecases_title')}</h2>
            <p className="section-subtitle">{t('usecases_subtitle')}</p>
          </div>
         
          <div className="use-cases-grid">
            <div className="use-case">
              <div className="use-case-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h4>{t('usecase1_title')}</h4>
              <p>{t('usecase1_desc')}</p>
            </div>
           
            <div className="use-case">
              <div className="use-case-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h4>{t('usecase2_title')}</h4>
              <p>{t('usecase2_desc')}</p>
            </div>
           
            <div className="use-case">
              <div className="use-case-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4>{t('usecase3_title')}</h4>
              <p>{t('usecase3_desc')}</p>
            </div>
           
            <div className="use-case">
              <div className="use-case-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h4>{t('usecase4_title')}</h4>
              <p>{t('usecase4_desc')}</p>
            </div>
           
            <div className="use-case">
              <div className="use-case-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h4>{t('usecase5_title')}</h4>
              <p>{t('usecase5_desc')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('pricing_title')}</h2>
            <p className="section-subtitle">{t('pricing_subtitle')}</p>
          </div>
         
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>{t('pricing_home_title')}</h3>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">0</span>
                  <span className="price-period">{t('pricing_period')}</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>{t('pricing_home_feature1')}</li>
                <li>{t('pricing_home_feature2')}</li>
                <li>{t('pricing_home_feature3')}</li>
                <li>{t('pricing_home_feature4')}</li>
              </ul>
              <button className="btn btn-outline">{t('pricing_home_cta')}</button>
            </div>
           
            <div className="pricing-card pricing-featured">
              <div className="pricing-badge">{t('pricing_recommended')}</div>
              <div className="pricing-header">
                <h3>{t('pricing_enterprise_title')}</h3>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">XX</span>
                  <span className="price-period">{t('pricing_per_device')}</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>{t('pricing_enterprise_feature1')}</li>
                <li>{t('pricing_enterprise_feature2')}</li>
                <li>{t('pricing_enterprise_feature3')}</li>
                <li>{t('pricing_enterprise_feature4')}</li>
                <li>{t('pricing_enterprise_feature5')}</li>
                <li>{t('pricing_enterprise_feature6')}</li>
              </ul>
              <button className="btn btn-primary">{t('pricing_enterprise_cta')}</button>
            </div>
          </div>
        </div>
      </section>
      {/* Comparison Section */}
      <section className="comparison">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('comparison_title')}</h2>
            <p className="section-subtitle">{t('comparison_subtitle')}</p>
          </div>
         
          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="comparison-feature">{t('comparison_feature')}</div>
              <div className="comparison-apadana">Apadana</div>
              <div className="comparison-traditional">{t('comparison_traditional')}</div>
            </div>
           
            <div className="comparison-row">
              <div className="comparison-feature">{t('comparison_cost')}</div>
              <div className="comparison-apadana">
                <svg viewBox="0 0 24 24" fill="currentColor" className="check-icon">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>{t('comparison_low')}</span>
              </div>
              <div className="comparison-traditional">
                <svg viewBox="0 0 24 24" fill="currentColor" className="x-icon">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                <span>{t('comparison_high')}</span>
              </div>
            </div>
           
            <div className="comparison-row">
              <div className="comparison-feature">{t('comparison_security')}</div>
              <div className="comparison-apadana">
                <svg viewBox="0 0 24 24" fill="currentColor" className="check-icon">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>{t('comparison_builtin')}</span>
              </div>
              <div className="comparison-traditional">
                <svg viewBox="0 0 24 24" fill="currentColor" className="x-icon">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                <span>{t('comparison_addons')}</span>
              </div>
            </div>
           
            <div className="comparison-row">
              <div className="comparison-feature">{t('comparison_management')}</div>
              <div className="comparison-apadana">
                <svg viewBox="0 0 24 24" fill="currentColor" className="check-icon">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>{t('comparison_centralized')}</span>
              </div>
              <div className="comparison-traditional">
                <svg viewBox="0 0 24 24" fill="currentColor" className="x-icon">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                <span>{t('comparison_manual')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technology Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('tech_title')}</h2>
            <p className="section-subtitle">{t('tech_subtitle')}</p>
          </div>
         
          <div className="tech-grid">
            <div className="tech-item">
              <h4>{t('tech_base_title')}</h4>
              <p>{t('tech_base_desc')}</p>
            </div>
           
            <div className="tech-item">
              <h4>{t('tech_repos_title')}</h4>
              <p>{t('tech_repos_desc')}</p>
            </div>
           
            <div className="tech-item">
              <h4>{t('tech_desktop_title')}</h4>
              <p>{t('tech_desktop_desc')}</p>
            </div>
           
            <div className="tech-item">
              <h4>{t('tech_compatibility_title')}</h4>
              <p>{t('tech_compatibility_desc')}</p>
            </div>
           
            <div className="tech-item">
              <h4>{t('tech_optimization_title')}</h4>
              <p>{t('tech_optimization_desc')}</p>
            </div>
           
            <div className="tech-item">
              <h4>{t('tech_management_title')}</h4>
              <p>{t('tech_management_desc')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('about_title')}</h2>
            <p className="section-subtitle">{t('about_subtitle')}</p>
          </div>
         
          <div className="about-content">
            <div className="about-text">
              <p>{t('about_mission')}</p>
              <p>{t('about_vision')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('contact_title')}</h2>
            <p className="section-subtitle">{t('contact_subtitle')}</p>
          </div>
         
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label>{t('contact_name')}</label>
                  <input type="text" required />
                </div>
               
                <div className="form-group">
                  <label>{t('contact_email')}</label>
                  <input type="email" required />
                </div>
               
                <div className="form-group">
                  <label>{t('contact_org')}</label>
                  <input type="text" />
                </div>
               
                <div className="form-group">
                  <label>{t('contact_message')}</label>
                  <textarea rows="5" required></textarea>
                </div>
               
                <div className="form-group">
                  <label>{t('contact_lang')}</label>
                  <select>
                    <option value="en">English</option>
                    <option value="fa">فارسی</option>
                  </select>
                </div>
               
                <button type="submit" className="btn btn-primary">{t('contact_submit')}</button>
              </form>
            </div>
           
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4>{t('contact_email_title')}</h4>
                  <p>apadanalinux@gmail.com</p>
                </div>
              </div>
             
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4>{t('contact_phone_title')}</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
             
              <div className="social-links">
                <h4>{t('contact_follow')}</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Telegram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>{t('footer_company')}</h4>
              <ul>
                <li><a href="#about">{t('footer_about')}</a></li>
                <li><a href="#contact">{t('footer_contact')}</a></li>
                <li><a href="#">{t('footer_careers')}</a></li>
                <li><a href="#">{t('footer_partners')}</a></li>
              </ul>
            </div>
           
            <div className="footer-section">
              <h4>{t('footer_resources')}</h4>
              <ul>
                <li><a href="#">{t('footer_download')}</a></li>
                <li><a href="#">{t('footer_docs')}</a></li>
                <li><a href="#">{t('footer_community')}</a></li>
                <li><a href="#">{t('footer_api')}</a></li>
              </ul>
            </div>
           
            <div className="footer-section">
              <h4>{t('footer_support')}</h4>
              <ul>
                <li><a href="#">{t('footer_help')}</a></li>
                <li><a href="#">{t('footer_training')}</a></li>
                <li><a href="#">{t('footer_status')}</a></li>
                <li><a href="#">{t('footer_feedback')}</a></li>
              </ul>
            </div>
           
            <div className="footer-section">
              <h4>{t('footer_legal')}</h4>
              <ul>
                <li><a href="#">{t('footer_privacy')}</a></li>
                <li><a href="#">{t('footer_terms')}</a></li>
                <li><a href="#">{t('footer_license')}</a></li>
                <li><a href="#">{t('footer_compliance')}</a></li>
              </ul>
            </div>
          </div>
         
          <div className="footer-bottom">
            <div className="footer-lang">
              <button className="lang-switcher-footer" onClick={toggleLanguage}>
                {currentLang.toUpperCase()}
              </button>
            </div>
            <div className="footer-copyright">
              <p>&copy; 1404 / 2025 Apadana Linux. {t('footer_rights')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}