(function () {
  "use strict";

  var WA_NUMBER = "966501128411";

  var WA_MESSAGES = {
    general: {
      ar: "السلام عليكم، أرغب في الاستفسار عن خدمات العمالة الفلبينية.",
      en: "Hello, I would like to inquire about your Filipino worker services."
    },
    service1: {
      ar: "السلام عليكم، أرغب في الاستفسار عن خدمة تجديد عقد العمالة الفلبينية.",
      en: "Hello, I would like to inquire about the Filipino worker contract renewal service."
    },
    service2: {
      ar: "السلام عليكم، أرغب في الاستفسار عن خدمة الجوب أوردر لأصحاب الأعمال.",
      en: "Hello, I would like to inquire about the Job Order service for business owners."
    }
  };

  var translations = {
    ar: {
      meta_title: "خدمات العمالة الفلبينية في السعودية | سما الخبر",
      meta_description: "تجديد عقود العمالة الفلبينية وخدمات أصحاب الأعمال (جوب أوردر)، بسرعة وسهولة عبر الواتساب مع سما الخبر.",
      og_locale: "ar_SA",
      skip_link: "تخطي إلى المحتوى",
      logo_alt: "شعار سما الخبر",

      nav_home: "الرئيسية",
      nav_services: "خدماتنا",
      nav_contact: "تواصل معنا",
      nav_location: "الموقع",
      whatsapp_header: "تواصل معنا عبر الواتساب",

      hero_title: "خدمات العمالة الفلبينية في السعودية",
      hero_desc: "ننجز معاملاتكم الخاصة بالعمالة الفلبينية بسرعة وسهولة، مع إمكانية متابعة الإجراءات والتواصل مباشرة عبر الواتساب.",
      hero_cta_primary: "تواصل معنا عبر الواتساب",
      hero_cta_secondary: "استعرض خدماتنا",
      hero_note: "نستلم مستنداتكم ونقدمها إلى مكتب POLO — نحن لسنا جهة حكومية",
      hero_image_alt: "عاملون فلبينيون مبتسمون أمام العلم الفلبيني - نُنجز المعاملات عبر مكتب العمل الفلبيني (POLO)",

      services_eyebrow: "خدماتنا",
      services_title: "خدماتنا المتخصصة",
      services_subtitle: "خدمات مخصصة للعمالة الفلبينية وأصحاب الأعمال، تتم بالكامل عبر الواتساب.",

      service1_title: "تجديد عقود الخادمات والعمالة الفلبينية 🇵🇭",
      service1_intro: "نُجدد عقود الخادمات والعمالة الفلبينية بكل سهولة ويُسر عبر الواتساب دون الحاجة لمراجعة السفارة.",
      service1_docs_heading: "لإتمام التجديد، يرجى إرسال صور المستندات التالية عبر الواتساب:",
      service1_doc_1: "صورة الإقامة",
      service1_doc_2: "صورة الصفحة الأولى من الجواز + التأشيرة",
      service1_doc_3: "صورة بطاقة صاحب العمل",
      service1_doc_4: "صورة تأشيرة الخروج والعودة",
      service1_doc_5: "تحديد الراتب",
      service1_doc_6: "تذكرة السفر إن وجدت",
      service1_cta: "احصل على الخدمة عبر الواتساب",
      service1_image_alt: "خدمة تجديد عقود العمالة الفلبينية",

      service2_title: "خدمات أصحاب الأعمال (\"جوب أوردر\") 🇵🇭",
      service2_intro: "نقدم خدمة معالجة طلبات العمل الخاصة بالعمالة الفلبينية بدقة واحترافية عالية.",
      service2_docs_heading: "المستندات المطلوبة:",
      service2_doc_1: "السجل التجاري",
      service2_doc_2: "صورة تأشيرات العمل من موقع إنجاز",
      service2_doc_3: "هوية الكفيل",
      service2_doc_4: "رخصة البلدية",
      service2_doc_5: "صورة من موقع المؤسسة على خرائط Google",
      service2_doc_6: "العنوان الوطني للشركة",
      service2_doc_7: "ليتر هيد الشركة، وتكون البيانات مطابقة للسجل التجاري بالعربي والإنجليزي",
      service2_doc_8: "صور السكن من الداخل والخارج، مع صور غرفة النوم والمطبخ والحمام إن وجدت",
      service2_doc_9: "صورة المحل أو المؤسسة التي سيعمل بها العمال",
      service2_cta: "احصل على الخدمة عبر الواتساب",
      service2_image_alt: "خدمة جوب أوردر لأصحاب الأعمال",

      why_eyebrow: "لماذا نحن",
      why_title: "لماذا تختارنا",
      why1_title: "سرعة الإنجاز",
      why1_text: "سرعة في الإنجاز وسهولة في الإجراءات.",
      why2_title: "سهولة الإجراءات",
      why2_text: "إرسال المستندات ومتابعة المعاملة عبر الواتساب.",
      why3_title: "خدمة عن بُعد",
      why3_text: "فقط أرسل مستنداتك عبر الواتساب، وتولَّينا نحن الباقي دون تكبد عناء الحضور.",
      why4_title: "متابعة مباشرة",
      why4_text: "متابعة مباشرة معك خطوة بخطوة.",

      how_eyebrow: "خطوات العمل",
      how_title: "كيف نعمل",
      how1_title: "أرسل المستندات",
      how1_text: "أرسل المستندات المطلوبة عبر الواتساب.",
      how2_title: "مراجعة المستندات",
      how2_text: "نراجع البيانات والمستندات المطلوبة.",
      how3_title: "بدء المعاملة",
      how3_text: "نبدأ في تنفيذ الخدمة المطلوبة.",
      how4_title: "استلام النتيجة",
      how4_text: "يتم إبلاغ العميل عند اكتمال المعاملة.",

      faq_eyebrow: "أسئلة شائعة",
      faq_title: "الأسئلة الشائعة",
      faq1_q: "كيف أجدد عقد العاملة الفلبينية؟",
      faq1_a: "أرسل لنا صور المستندات المطلوبة عبر الواتساب، ونتولى باقي الإجراءات دون الحاجة للحضور.",
      faq2_q: "ما المستندات المطلوبة لتجديد عقد العاملة الفلبينية؟",
      faq2_a: "صورة الإقامة، صورة الصفحة الأولى من الجواز مع التأشيرة، صورة بطاقة صاحب العمل، صورة تأشيرة الخروج والعودة، تحديد الراتب، وتذكرة السفر إن وجدت.",
      faq3_q: "ما هو الجوب أوردر ومن يحتاجه؟",
      faq3_a: "خدمة معالجة طلبات العمل الخاصة بالعمالة الفلبينية، وهي موجهة لأصحاب الأعمال. نراجع مستندات منشأتكم ونقدمها إلى مكتب POLO.",
      faq4_q: "ما المستندات المطلوبة للجوب أوردر؟",
      faq4_a: "السجل التجاري، صورة تأشيرات العمل من موقع إنجاز، هوية الكفيل، رخصة البلدية، موقع المؤسسة على Google Maps، العنوان الوطني للشركة، ليتر هيد الشركة، صور السكن، وصورة المحل أو المؤسسة التي سيعمل بها العمال.",
      faq5_q: "هل أنتم جهة حكومية؟",
      faq5_a: "لا، نحن لسنا جهة حكومية. نستلم مستنداتكم ونقدمها إلى مكتب POLO.",
      faq6_q: "كيف أتابع معاملتي؟",
      faq6_a: "نتابع معك مباشرة خطوة بخطوة عبر الواتساب، ونبلغك عند اكتمال المعاملة.",

      contact_eyebrow: "تواصل معنا",
      contact_title: "تواصل معنا",
      contact_whatsapp_label: "واتساب",
      contact_email_label: "البريد الإلكتروني",
      contact_location_label: "الموقع",
      contact_location_cta: "عرض الموقع على الخريطة",
      contact_cta: "تواصل معنا الآن",

      location_title: "موقعنا",
      location_address: "شارع الأمير بندر بن عبدالعزيز، العدامة، طريق الملك فهد، الدمام 32242",
      location_cta: "عرض الموقع على الخريطة",

      footer_business_name: "سما الخبر",
      footer_desc: "نقدم خدمات تجديد عقود العمالة الفلبينية وخدمات أصحاب الأعمال (جوب أوردر)، بسهولة وسرعة عبر الواتساب.",
      footer_whatsapp_label: "واتساب:",
      footer_email_label: "البريد:",
      footer_location: "عرض الموقع على الخريطة",
      footer_rights: "جميع الحقوق محفوظة"
    },

    en: {
      meta_title: "Filipino Worker Services in Saudi Arabia | Sama Alkhobar",
      meta_description: "Filipino worker contract renewal and Job Order services for business owners, fast and easy via WhatsApp with Sama Alkhobar.",
      og_locale: "en_US",
      skip_link: "Skip to content",
      logo_alt: "Sama Alkhobar logo",

      nav_home: "Home",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_location: "Location",
      whatsapp_header: "Contact Us on WhatsApp",

      hero_title: "Filipino Worker Services in Saudi Arabia",
      hero_desc: "We complete your Filipino worker transactions quickly and easily, with the ability to follow up on your request and communicate directly via WhatsApp.",
      hero_cta_primary: "Contact Us on WhatsApp",
      hero_cta_secondary: "View Our Services",
      hero_note: "We collect your documents and submit them to POLO. We are not a government body.",
      hero_image_alt: "Smiling Filipino workers in front of the Philippine flag - transactions processed through POLO",

      services_eyebrow: "Our Services",
      services_title: "Our Specialized Services",
      services_subtitle: "Services dedicated to Filipino workers and business owners, handled entirely via WhatsApp.",

      service1_title: "Filipino Domestic Worker & Employee Contract Renewal 🇵🇭",
      service1_intro: "We renew Filipino domestic worker and employee contracts easily and smoothly via WhatsApp, with no need to visit the embassy.",
      service1_docs_heading: "To complete the renewal, please send photos of the following documents via WhatsApp:",
      service1_doc_1: "Photo of the Iqama (residence permit)",
      service1_doc_2: "Photo of the passport's first page + visa page",
      service1_doc_3: "Photo of the employer's ID card",
      service1_doc_4: "Photo of the exit/re-entry visa",
      service1_doc_5: "The worker's salary",
      service1_doc_6: "Travel ticket (if available)",
      service1_cta: "Get This Service via WhatsApp",
      service1_image_alt: "Filipino worker contract renewal service",

      service2_title: "Business Owner Services (\"Job Order\") 🇵🇭",
      service2_intro: "We process Job Order requests for Filipino workers with precision and a high level of professionalism.",
      service2_docs_heading: "Required Documents:",
      service2_doc_1: "Commercial registration",
      service2_doc_2: "Photo of the work visas from the Enjaz platform",
      service2_doc_3: "Sponsor's ID",
      service2_doc_4: "Municipality license",
      service2_doc_5: "Photo of the business location on Google Maps",
      service2_doc_6: "The company's National Address",
      service2_doc_7: "Company letterhead, with details matching the commercial registration in both Arabic and English",
      service2_doc_8: "Photos of the housing, inside and outside, including the bedroom, kitchen, and bathroom if available",
      service2_doc_9: "Photo of the shop or establishment where the workers will be employed",
      service2_cta: "Get This Service via WhatsApp",
      service2_image_alt: "Job Order service for business owners",

      why_eyebrow: "Why Us",
      why_title: "Why Choose Us",
      why1_title: "Fast Processing",
      why1_text: "Fast processing and simple procedures.",
      why2_title: "Simple Process",
      why2_text: "Send your documents and follow up on your request via WhatsApp.",
      why3_title: "Remote Service",
      why3_text: "Just send your documents via WhatsApp, and we handle the rest — no need to visit us in person.",
      why4_title: "Direct Follow-up",
      why4_text: "Direct, step-by-step follow-up with you.",

      how_eyebrow: "The Process",
      how_title: "How It Works",
      how1_title: "Send Your Documents",
      how1_text: "Send the required documents via WhatsApp.",
      how2_title: "Document Review",
      how2_text: "We review your details and documents.",
      how3_title: "Processing Begins",
      how3_text: "We start processing your request.",
      how4_title: "Receive the Result",
      how4_text: "We notify you once your request is complete.",

      faq_eyebrow: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq1_q: "How do I renew a Filipino worker's contract?",
      faq1_a: "Send us photos of the required documents via WhatsApp and we handle the rest, with no need to visit us.",
      faq2_q: "What documents are needed to renew a Filipino worker's contract?",
      faq2_a: "Photo of the Iqama, photo of the passport's first page with the visa, photo of the employer's ID card, photo of the exit/re-entry visa, the worker's salary, and the travel ticket if available.",
      faq3_q: "What is a Job Order and who needs it?",
      faq3_a: "A service that processes work requests for Filipino workers, for business owners. We review your company's documents and submit them to POLO.",
      faq4_q: "What documents are needed for a Job Order?",
      faq4_a: "Commercial registration, work visas from the Enjaz platform, the sponsor's ID, municipality license, the establishment's location on Google Maps, the company's National Address, company letterhead, photos of the accommodation, and a photo of the shop or establishment where the workers will work.",
      faq5_q: "Are you a government body?",
      faq5_a: "No, we are not a government body. We collect your documents and submit them to POLO.",
      faq6_q: "How do I follow up on my request?",
      faq6_a: "We follow up with you directly, step by step, via WhatsApp, and notify you once your request is complete.",

      contact_eyebrow: "Contact",
      contact_title: "Contact Us",
      contact_whatsapp_label: "WhatsApp",
      contact_email_label: "Email",
      contact_location_label: "Location",
      contact_location_cta: "View on Map",
      contact_cta: "Contact Us Now",

      location_title: "Our Location",
      location_address: "Prince Bandar bin Abdulaziz Street, Al Adamah, King Fahd Road, Dammam 32242",
      location_cta: "View on Map",

      footer_business_name: "Sama Alkhobar",
      footer_desc: "We provide Filipino worker contract renewal and Job Order services for business owners, quickly and easily via WhatsApp.",
      footer_whatsapp_label: "WhatsApp:",
      footer_email_label: "Email:",
      footer_location: "View on Map",
      footer_rights: "All rights reserved"
    }
  };

  var STORAGE_KEY = "sama-site-lang";
  var DEFAULT_LANG = "ar";

  function getStoredLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === "ar" || v === "en") return v;
    } catch (e) { /* ignore storage errors */ }
    return null;
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore storage errors */ }
  }

  function buildWaLink(key, lang) {
    var msg = WA_MESSAGES[key][lang];
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  }

  function updateWaLinks(lang) {
    var map = {
      "wa-header": "general",
      "wa-hero": "general",
      "wa-contact": "general",
      "wa-contact-cta": "general",
      "wa-footer": "general",
      "wa-float": "general",
      "wa-service1": "service1",
      "wa-service2": "service2"
    };
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute("href", buildWaLink(map[id], lang));
    });
  }

  function applyTranslations(lang) {
    var dict = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-content");
      if (dict[key] !== undefined) el.setAttribute("content", dict[key]);
    });
  }

  function setLanguage(lang) {
    if (lang !== "ar" && lang !== "en") lang = DEFAULT_LANG;

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    applyTranslations(lang);
    updateWaLinks(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    var hamburger = document.getElementById("hamburger");
    if (hamburger) {
      hamburger.setAttribute("aria-label", lang === "ar" ? "فتح القائمة" : "Open menu");
    }

    storeLang(lang);
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  function initMobileNav() {
    var hamburger = document.getElementById("hamburger");
    var mobileNav = document.getElementById("mobile-nav");
    if (!hamburger || !mobileNav) return;

    function closeMenu() {
      hamburger.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
    }

    function openMenu() {
      hamburger.setAttribute("aria-expanded", "true");
      mobileNav.classList.add("is-open");
    }

    hamburger.addEventListener("click", function () {
      var isOpen = hamburger.getAttribute("aria-expanded") === "true";
      if (isOpen) closeMenu(); else openMenu();
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  function initStickyHeader() {
    var header = document.getElementById("site-header");
    if (!header) return;
    function update() {
      if (window.scrollY > 8) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initActiveNav() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      byId[id] = byId[id] || [];
      byId[id].push(link);
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          var active = byId[entry.target.id] || [];
          active.forEach(function (l) { l.classList.add("is-active"); });
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (el) { observer.observe(el); });
  }

  var ADS_ID = "AW-18491974841";
  var ADS_CONVERSION_LABEL = "6ZL3CK_LxZAdELnJ1PFE";

  function initWhatsAppTracking() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest ? e.target.closest('a[href^="https://wa.me/"]') : null;
      if (!link || typeof gtag !== "function") return;
      gtag("event", "whatsapp_click", { link_id: link.id || "" });
      if (ADS_CONVERSION_LABEL) {
        gtag("event", "conversion", { send_to: ADS_ID + "/" + ADS_CONVERSION_LABEL });
      }
    });
  }

  function initFooterYear() {
    var el = document.getElementById("footer-year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = getStoredLang() || DEFAULT_LANG;
    setLanguage(lang);
    initLangSwitch();
    initMobileNav();
    initStickyHeader();
    initActiveNav();
    initReveal();
    initFooterYear();
    initWhatsAppTracking();
  });
})();
