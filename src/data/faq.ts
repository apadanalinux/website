export interface FaqItem {
  id: number;
  q: {
    fa: string;
    en: string;
  };
  a: {
    fa: string;
    en: string;
  };
  category: {
    fa: string;
    en: string;
  };
}

export const faqList: FaqItem[] = [
  {
    id: 1,
    category: { fa: 'کلی و هویت', en: 'General & Identity' },
    q: {
      fa: 'آپادانا چه تفاوتی با پارچ دارد؟',
      en: 'How does Apadana differ from Parch Linux?',
    },
    a: {
      fa: 'پارچ لینوکس یک پروژه‌ی متن‌باز و جامعه‌محور است که به‌صورت آزاد توسعه داده می‌شود و در اختیار عموم کاربران قرار دارد. آپادانا نسخه‌ی سازمانی و تجاری است که بر پایه‌ی همان فناوری، یعنی معماری پارچ تغییرناپذیر، ساخته شده اما برای نیازهای سازمان‌ها و کسب‌وکارها طراحی شده است. به بیان دیگر، پارچ پایه‌ی فنی مشترک است و آپادانا محصولی است که با تمرکز بر پایداری، پشتیبانی و ملاحظات سازمانی روی همان پایه بنا شده است.',
      en: 'Parch Linux is an open-source, community-driven project developed freely for general users and enthusiasts. Apadana is the commercial enterprise edition built on the exact same technical foundation—Parch Immutable architecture—but tailored specifically for corporate and institutional requirements. In other words, Parch serves as the shared technical core, while Apadana is the enterprise product layered on top with dedicated focus on stability, SLA support, and organizational policies.',
    },
  },
  {
    id: 2,
    category: { fa: 'تجاری و قیمت‌گذاری', en: 'Commercial & Pricing' },
    q: {
      fa: 'آیا آپادانا رایگان است؟',
      en: 'Is Apadana free?',
    },
    a: {
      fa: 'هسته‌ی فنی آپادانا مبتنی بر نرم‌افزار آزاد و متن‌باز است، اما آپادانا به‌عنوان یک محصول تجاری با خدمات پشتیبانی، نگهداری و مواردی از این دست عرضه خواهد شد. جزئیات مدل قیمت‌گذاری و بسته‌های سازمانی به‌مرور و پیش از عرضه‌ی نهایی اعلام خواهد شد.',
      en: 'The technical core of Apadana is rooted in free and open-source software, but Apadana itself is offered as a commercial enterprise product backed by support contracts, maintenance services, and enterprise SLAs. Details on pricing tiers and organizational packaging will be announced prior to final release.',
    },
  },
  {
    id: 3,
    category: { fa: 'کلی و هویت', en: 'General & Identity' },
    q: {
      fa: 'آیا آپادانا یک پروژه دولتی است؟',
      en: 'Is Apadana a government project?',
    },
    a: {
      fa: 'خیر. آپادانا پروژه‌ای مستقل و تجاری است که توسط تیم پارچ لینوکس توسعه داده می‌شود و هیچ ارتباطی با نهادهای دولتی ندارد.',
      en: 'No. Apadana is a completely independent, commercial project engineered and maintained by the Parch Linux team, with no affiliation to government entities.',
    },
  },
  {
    id: 4,
    category: { fa: 'معماری و پایداری', en: 'Architecture & Stability' },
    q: {
      fa: 'آیا آپادانا پایدار است؟',
      en: 'Is Apadana stable?',
    },
    a: {
      fa: 'هدف اصلی طراحی آپادانا همین است. معماری تغییرناپذیر باعث می‌شود به‌روزرسانی‌ها به‌صورت اتمیک انجام شوند و در صورت بروز مشکل، بازگشت به حالت پایدار قبلی تنها چند ثانیه زمان ببرد. این رویکرد ریسک ناپایداری سیستم پس از به‌روزرسانی را که در توزیع‌های سنتی مبتنی بر بسته رایج است، به‌طور قابل توجهی کاهش می‌دهد.',
      en: 'Unbreakable stability is the primary design goal of Apadana. The immutable architecture ensures updates are staged atomically, and in the rare event of an issue, reverting to the prior verified state takes mere seconds at boot. This approach drastically reduces the post-update instability common in traditional package-managed distributions.',
    },
  },
  {
    id: 5,
    category: { fa: 'مهاجرت و استقرار', en: 'Migration & Deployment' },
    q: {
      fa: 'برای سازمان‌هایی که از ویندوز استفاده می‌کنند چه سلوشن‌هایی دارید؟',
      en: 'What solutions do you offer for organizations currently running Windows?',
    },
    a: {
      fa: 'این بخش هنوز در حال تدوین است و جزئیات فنی و راهکارهای مهاجرت برای سازمان‌های مبتنی بر ویندوز به‌زودی اعلام خواهد شد.',
      en: 'This roadmap is actively being drafted. Comprehensive migration frameworks and technical compatibility strategies for Windows-centric enterprise environments will be announced soon.',
    },
  },
  {
    id: 6,
    category: { fa: 'معماری و پایداری', en: 'Architecture & Stability' },
    q: {
      fa: 'ایمیوتبل یعنی چه؟',
      en: 'What does "Immutable" mean?',
    },
    a: {
      fa: 'سیستم‌عامل تغییرناپذیر یا Immutable سیستمی است که هسته‌ی اصلی آن، یعنی فایل‌ها و پیکربندی‌های سیستمی، پس از نصب قابل تغییر مستقیم نیست و به‌صورت یک ایمیج واحد و یکپارچه مدیریت می‌شود. نصب نرم‌افزار و تغییرات کاربر از طریق لایه‌های مجزا مانند Flatpak و کانتینرها انجام می‌شود، بدون آنکه به هسته‌ی سیستم دستکاری شود. همین موضوع باعث می‌شود سیستم در طول زمان دچار ناهماهنگی نشود و به‌روزرسانی‌ها قابل پیش‌بینی و قابل بازگشت باشند.',
      en: 'An Immutable operating system is one where the core root files and base system configurations cannot be directly modified after installation, but are instead managed as a verified, unified image. Application installation and user customizations occur strictly inside isolated layers like Flatpak sandboxes and containerized runtimes without touching core OS files. This eliminates configuration drift over time and makes all updates deterministic, predictable, and reversible.',
    },
  },
  {
    id: 7,
    category: { fa: 'انتشار و چرخه‌ی عمر', en: 'Releases & Lifecycle' },
    q: {
      fa: 'آیا آپادانا غلتان است؟',
      en: 'Is Apadana a rolling release distribution?',
    },
    a: {
      fa: 'خیر. برخلاف پارچ که یک توزیع غلتان (Rolling Release) است، آپادانا به‌دلیل ماهیت سازمانی و نیاز به پایداری بلندمدت، بر اساس نسخه‌های مشخص و تست‌شده منتشر خواهد شد.',
      en: 'No. Unlike Parch Linux which follows a rolling-release model for continuous innovation, Apadana is published on disciplined, discrete, rigorously tested versioned releases to fulfill enterprise requirements for predictability and long-term stability.',
    },
  },
  {
    id: 8,
    category: { fa: 'کلی و هویت', en: 'General & Identity' },
    q: {
      fa: 'آپادانا برای چه نوع سازمان‌هایی مناسب است؟',
      en: 'What types of organizations is Apadana designed for?',
    },
    a: {
      fa: 'آپادانا برای سازمان‌ها، شرکت‌ها و نهادهایی طراحی شده که به دنبال سیستم‌عاملی پایدار، امن و قابل مدیریت برای ایستگاه‌های کاری خود هستند. از سازمان‌های کوچک با چند ده سیستم تا مجموعه‌های بزرگتر با نیاز به مدیریت متمرکز، آپادانا می‌تواند جایگزینی برای سیستم‌عامل‌های رایج فعلی باشد.',
      en: 'Apadana is engineered for enterprises, commercial companies, financial institutions, and public organizations seeking a stable, secure, and easily manageable workstation OS. From small businesses managing dozens of endpoints to large enterprises requiring centralized fleet management, Apadana provides a robust alternative to legacy commercial desktop operating systems.',
    },
  },
  {
    id: 9,
    category: { fa: 'مهاجرت و استقرار', en: 'Migration & Deployment' },
    q: {
      fa: 'آیا امکان مهاجرت داده‌ها و تنظیمات از سیستم فعلی سازمان به آپادانا وجود دارد؟',
      en: 'Can data and configurations be migrated from our current OS to Apadana?',
    },
    a: {
      fa: 'بله، مهاجرت آسان یکی از اهداف اصلی طراحی آپادانا است. ابزارهای مهاجرت برای انتقال داده‌ها و تنظیمات از توزیع‌های رایج لینوکسی در حال توسعه هستند و جزئیات بیشتر پیش از عرضه‌ی نهایی اعلام خواهد شد.',
      en: 'Yes, seamless migration is a foundational priority. Migration toolchains for transferring user data and profile configurations from existing Linux environments are in active development, with full documentation released prior to commercial availability.',
    },
  },
  {
    id: 10,
    category: { fa: 'تجاری و قیمت‌گذاری', en: 'Commercial & Pricing' },
    q: {
      fa: 'پشتیبانی فنی آپادانا چگونه ارائه می‌شود؟',
      en: 'How is Apadana technical support delivered?',
    },
    a: {
      fa: 'پشتیبانی فنی آپادانا به‌صورت اختصاصی برای مشتریان سازمانی ارائه خواهد شد. جزئیات کانال‌های پشتیبانی و سطح خدمات همراه با عرضه‌ی نسخه‌های تجاری اعلام می‌شود.',
      en: 'Technical support is provided through dedicated enterprise channels for corporate clients. Full SLA tier specifications, response-time guarantees, and communication channels will be published alongside commercial availability.',
    },
  },
  {
    id: 11,
    category: { fa: 'انتشار و چرخه‌ی عمر', en: 'Releases & Lifecycle' },
    q: {
      fa: 'چرخه‌ی به‌روزرسانی و پشتیبانی بلندمدت آپادانا چگونه است؟',
      en: "What is Apadana's LTS lifecycle and update cadence?",
    },
    a: {
      fa: 'برخلاف پارچ که یک توزیع غلتان است، آپادانا بر اساس نسخه‌های مشخص منتشر می‌شود و برای هر نسخه دوره‌ی پشتیبانی بلندمدت در نظر گرفته خواهد شد. جزئیات دقیق طول این دوره پیش از عرضه‌ی نهایی مشخص و اعلام می‌شود.',
      en: 'Unlike rolling distributions, Apadana follows fixed, point-release version milestones with dedicated Long-Term Support (LTS) lifecycles for each major version. Exact LTS maintenance durations will be formalized prior to general availability.',
    },
  },
  {
    id: 12,
    category: { fa: 'سازگاری و سخت‌افزار', en: 'Hardware & Compatibility' },
    q: {
      fa: 'آیا آپادانا با سخت‌افزارهای رایج در ایران و تجهیزات اداری سازگار است؟',
      en: 'Is Apadana compatible with common regional hardware and enterprise peripherals?',
    },
    a: {
      fa: 'آپادانا بر پایه‌ی هسته‌ی لینوکس ساخته شده و از طیف گسترده‌ای از سخت‌افزارهای رایج پشتیبانی می‌کند. تست سازگاری با تجهیزات اداری متداول در بازار ایران بخشی از فرآیند توسعه است.',
      en: 'Apadana is built upon the modern Linux kernel, providing broad hardware support across enterprise workstations, laptops, and peripheral hardware. Extensive hardware compatibility verification with regional office equipment is an active part of our QA pipeline.',
    },
  },
  {
    id: 13,
    category: { fa: 'معماری و پایداری', en: 'Architecture & Stability' },
    q: {
      fa: 'آیا امکان نصب آپادانا روی سرورها و زیرساخت وجود دارد یا فقط مخصوص دسکتاپ است؟',
      en: 'Can Apadana be deployed on servers and infrastructure, or is it desktop-only?',
    },
    a: {
      fa: 'تمرکز اولیه‌ی آپادانا بر روی محیط دسکتاپ سازمانی است. با این حال، معماری bootc و تغییرناپذیر آن به‌طور طبیعی برای زیرساخت و سرور نیز قابل استفاده است و امکان توسعه در این مسیر در آینده وجود دارد.',
      en: "Apadana's initial primary focus is on enterprise desktop workstations. However, because its underlying bootc immutable architecture is inherently cloud-native and server-ready, headless infrastructure and server images represent a natural roadmap expansion in the future.",
    },
  },
  {
    id: 14,
    category: { fa: 'امنیت و انطباق', en: 'Security & Compliance' },
    q: {
      fa: 'در صورت بروز مشکل امنیتی، فرآیند اطلاع‌رسانی و رفع آن چگونه است؟',
      en: 'How are security vulnerabilities disclosed and patched?',
    },
    a: {
      fa: 'معماری تغییرناپذیر آپادانا این امکان را می‌دهد که وصله‌های امنیتی به‌صورت ایمیج کامل و آزمایش‌شده منتشر شوند و نصب آن‌ها به‌سرعت و بدون ریسک ناهماهنگی سیستم انجام شود. فرآیند رسمی اطلاع‌رسانی آسیب‌پذیری‌ها پیش از عرضه‌ی نسخه‌ی تجاری تدوین و منتشر خواهد شد.',
      en: "Apadana's immutable architecture enables security patches to be delivered as complete, cryptographically verified container images, ensuring zero-risk application across entire fleets without package conflict. Official security disclosure advisories and vulnerability response workflows will be published prior to commercial rollout.",
    },
  },
  {
    id: 15,
    category: { fa: 'سازگاری و سخت‌افزار', en: 'Hardware & Compatibility' },
    q: {
      fa: 'آیا نرم‌افزارهای اداری رایج روی آپادانا قابل اجرا هستند؟',
      en: 'Can common office and enterprise productivity software run on Apadana?',
    },
    a: {
      fa: 'بله. از طریق Flatpak، Distrobox و در صورت نیاز Waydroid، طیف گسترده‌ای از نرم‌افزارهای اداری و ابزارهای مورد نیاز سازمان‌ها قابل نصب و اجرا هستند، بدون آنکه به هسته‌ی تغییرناپذیر سیستم آسیبی برسد.',
      en: 'Yes. Through Flatpak sandboxes, Distrobox isolated containers, and hardware-accelerated Waydroid Android runtime, a comprehensive catalog of enterprise productivity suites, communication tools, and proprietary applications run natively without compromising the read-only OS root.',
    },
  },
  {
    id: 16,
    category: { fa: 'معماری و پایداری', en: 'Architecture & Stability' },
    q: {
      fa: 'تفاوت آپادانا با سایر توزیع‌های تغییرناپذیر مانند Fedora Silverblue یا openSUSE Aeon چیست؟',
      en: 'How does Apadana compare to other immutable distributions like Fedora Silverblue or openSUSE Aeon?',
    },
    a: {
      fa: 'اصول فنی زیربنایی مشابه است، اما آپادانا با تمرکز بر نیازهای منطقه‌ای، از جمله بومی‌سازی کامل فارسی، پشتیبانی محلی و انطباق با شرایط سازمان‌های ایرانی طراحی شده است، در کنار مدل پشتیبانی تجاری اختصاصی که در توزیع‌های یادشده به این شکل وجود ندارد.',
      en: 'While foundational containerized immutability principles are similar, Apadana is purpose-engineered for regional enterprise realities—including turnkey Persian localization (KDE Plasma RTL, Jalali calendar, typography), local enterprise consulting, and commercial SLA commitments that upstream community distributions do not offer.',
    },
  },
  {
    id: 17,
    category: { fa: 'کلی و هویت', en: 'General & Identity' },
    q: {
      fa: 'آیا کد آپادانا متن‌باز است یا بخشی از آن انحصاری خواهد بود؟',
      en: "Is Apadana's source code open-source or partially proprietary?",
    },
    a: {
      fa: 'هسته‌ی فنی آپادانا بر پایه‌ی نرم‌افزار آزاد و متن‌باز ساخته شده است. برخی ابزارها و خدمات سازمانی مختص آپادانا ممکن است به‌صورت انحصاری عرضه شوند، اما تعهد اصلی تیم به حفظ ماهیت متن‌باز پایه‌ی سیستم باقی می‌ماند.',
      en: 'The technical foundation of Apadana is built strictly on free and open-source software. While select enterprise management add-ons and commercial fleet services may be delivered as proprietary enterprise tooling, our commitment to open-source transparency in the base OS is steadfast.',
    },
  },
  {
    id: 18,
    category: { fa: 'تجاری و قیمت‌گذاری', en: 'Commercial & Pricing' },
    q: {
      fa: 'هزینه‌ی استقرار آپادانا برای یک سازمان با چند صد سیستم چگونه محاسبه می‌شود؟',
      en: 'How is deployment pricing calculated for organizations with hundreds of workstations?',
    },
    a: {
      fa: 'مدل قیمت‌گذاری آپادانا برای استقرارهای سازمانی بزرگ هنوز در حال تدوین است و بر اساس تعداد سیستم‌ها، سطح پشتیبانی مورد نیاز و مدت قرارداد محاسبه خواهد شد. برای دریافت مشاوره و برآورد اختصاصی می‌توانید از طریق صفحه‌ی تماس با ما در ارتباط باشید.',
      en: 'Enterprise volume pricing is currently being structured and will be calculated based on workstation seat counts, required SLA tiers, and contract duration. Organizations can request dedicated consultations and custom estimates directly through our Contact page.',
    },
  },
  {
    id: 19,
    category: { fa: 'مهاجرت و استقرار', en: 'Migration & Deployment' },
    q: {
      fa: 'آیا امکان تست آپادانا پیش از خرید یا استقرار کامل وجود دارد؟',
      en: 'Can organizations evaluate and test Apadana prior to procurement?',
    },
    a: {
      fa: 'بله، نسخه‌های آزمایشی برای ارزیابی فنی پیش از تصمیم‌گیری نهایی در نظر گرفته شده‌اند. جزئیات دسترسی به نسخه‌ی دمو همراه با پیشرفت پروژه اعلام خواهد شد.',
      en: 'Yes. Evaluation and Proof-of-Concept (PoC) images are designed specifically for technical due diligence prior to organizational adoption. Access procedures for evaluation builds will be shared as milestones progress.',
    },
  },
  {
    id: 20,
    category: { fa: 'سازگاری و سخت‌افزار', en: 'Hardware & Compatibility' },
    q: {
      fa: 'آپادانا از چه زبان‌هایی علاوه بر فارسی پشتیبانی می‌کند؟',
      en: 'Which languages are supported in addition to Persian?',
    },
    a: {
      fa: 'آپادانا بر پایه‌ی KDE Plasma ساخته شده و از تمام زبان‌هایی که این محیط دسکتاپ پشتیبانی می‌کند بهره می‌برد، با این تفاوت که فارسی به‌عنوان زبان اصلی و اولویت‌دار توسعه و بومی‌سازی در نظر گرفته شده است.',
      en: 'Apadana is built upon KDE Plasma and inherits all languages supported by the KDE ecosystem, with Persian designated as the primary first-class citizen for all localization, typography, and regional ergonomic development.',
    },
  },
];
