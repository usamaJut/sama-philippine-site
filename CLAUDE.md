# Project: Sama Alkhobar – Philippine Embassy Services Website

You are building a **modern, premium, responsive one-page website** for our business. Read this whole file before writing any code. Everything the website says must come from this file. Do not invent information.

---

## 0. Technical Setup (read first)

### Output format
- Build a **static website** with no build step, so it can be uploaded directly to normal web hosting (e.g. Hostinger `public_html`).
- Files:
  - `index.html`
  - `css/style.css`
  - `js/main.js`
  - Assets in `assets/`
- Vanilla HTML, CSS and JavaScript only. No frameworks, no npm, no build tools.
- Allowed external resources: Google Fonts, and the Google tag (googletagmanager.com, id AW-18491974841) for Google Ads click tracking (owner request 2026-10-04). Icons must be inline SVG (no icon libraries).
- All translations (Arabic + English) live in `js/main.js` as a single translations object, OR use `data-ar` / `data-en` attributes. Choose one approach and keep it consistent.
- Remember the chosen language in `localStorage` (wrapped in try/catch), default to Arabic.

### Assets provided by the owner
| File | Purpose |
|---|---|
| `assets/logo.png` | Company logo (header, footer, favicon) |
| `assets/images/hero.jpg` | Hero section image (optional) |
| `assets/images/service-1.jpg` | Image for Service 1 (contract renewal) |
| `assets/images/service-2.jpg` | Image for Service 2 (job order / recruitment) |

Current images (2026-10-03): the site serves optimized WebP files (hero.webp, service-1.webp, service-2.webp, logo.webp); originals are kept in marketing/originals. The hero shows only the workers and the Philippine flag, never the embassy building. At the owner's request (2026-10-03) the hero image carries a text band: "نُنجز المعاملات عبر مكتب العمل الفلبيني (POLO)" / "Transactions processed through POLO". Source files: marketing/hero-work (hero-new.png is the version without text).

Rules for assets:
- **Check that these files exist before starting.** If `logo.png`, `service-1.jpg` or `service-2.jpg` is missing, stop and tell me which ones are missing. Do not use placeholder images or external stock URLs.
- If `hero.jpg` is missing, design the hero without a photo (use the logo colors, gradients, subtle patterns, or decorative shapes).
- Do not redesign, recolor, crop, or distort the logo.
- Optimize image display: use `loading="lazy"` on images below the fold, proper `alt` text in both languages, and `object-fit: cover`.
- Extract the brand color palette from the logo and build the design around it.

### Business address
ADDRESS (Arabic): شارع الأمير بندر بن عبدالعزيز، العدامة، طريق الملك فهد، الدمام 32242
ADDRESS (English): Prince Bandar bin Abdulaziz Street, Al Adamah, King Fahd Road, Dammam 32242

- If the address fields above are filled, show them in the location section and footer.
- If they are empty, **do not invent an address**. Show only the location card with the map button.

---

## 1. Website Language

- **Default language:** Arabic
- Clear **Arabic / English language switcher** in the header.
- Arabic uses proper RTL layout (`<html lang="ar" dir="rtl">`).
- English switches the entire website to LTR (`lang="en" dir="ltr"`).
- All content, buttons, navigation, service descriptions, contact info, alt text, and meta tags must have both Arabic and English versions.
- Arabic must feel natural and professional, not machine-translated.
- Use a high-quality Arabic font (e.g. IBM Plex Sans Arabic, Tajawal, or Almarai) and a matching modern English font.
- Use CSS logical properties (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`, etc.) so the layout flips correctly between RTL and LTR. Directional icons (arrows) must flip too.

---

## 2. Website Reference

For general inspiration only: https://cafaaco.com/

**Do not copy this website.** It is only a reference for the concept of a simple one-page business website. Our website must look **significantly more modern, polished, premium, and advanced**, like a professional Saudi business website, not a basic template.

---

## 3. Business Information

### Phone / WhatsApp
+966 50 112 8411

The primary CTA throughout the website:

**تواصل معنا عبر الواتساب**

Base WhatsApp link: `https://wa.me/966501128411`

WhatsApp links must include a URL-encoded pre-filled message (`https://wa.me/966501128411?text=...`). Messages:

| Where | Arabic message | English message |
|---|---|---|
| General (hero, header, floating button, contact) | السلام عليكم، أرغب في الاستفسار عن خدمات العمالة الفلبينية. | Hello, I would like to inquire about your Filipino worker services. |
| Service 1 buttons | السلام عليكم، أرغب في الاستفسار عن خدمة تجديد عقد العمالة الفلبينية. | Hello, I would like to inquire about the Filipino worker contract renewal service. |
| Service 2 buttons | السلام عليكم، أرغب في الاستفسار عن خدمة الجوب أوردر لأصحاب الأعمال. | Hello, I would like to inquire about the Job Order service for business owners. |

The message language should match the currently selected website language.
All WhatsApp and Maps links open in a new tab with `target="_blank" rel="noopener"`.

### Email
sama5visa@gmail.com (use `mailto:sama5visa@gmail.com`)

---

## 4. Location

Google Maps link: https://maps.app.goo.gl/XB128ue94CdsazWE7

Include a **location section / location card** near the bottom of the page with:
- Location icon
- Address (only if provided in section 0; never invent one)
- Button: **عرض الموقع على الخريطة** / **View on Map**
- The button opens the Google Maps link above.

---

## 5. Logo

Use `assets/logo.png` as the main brand identity, in:
- Header
- Footer
- Hero section, if it improves the design
- Favicon

---

## 6. Website Structure

Single-page website.

### Header
- Logo
- الرئيسية (Home)
- خدماتنا (Services)
- تواصل معنا (Contact)
- الموقع (Location)
- Arabic / English switcher
- Prominent WhatsApp button
- Sticky while scrolling (with a subtle background/shadow change once scrolled)
- On mobile: a clean hamburger menu that is accessible (keyboard, `aria-expanded`, closes on link click and Escape)
- Highlight the active nav link based on the section in view

---

## 7. Hero Section

Visually impressive. Must immediately communicate that we provide professional services related to the **Philippine Embassy / Filipino workers**.

- Headline: **خدمات العمالة الفلبينية في السعودية** (owner decision 2026-10-03: never use the word "embassy" in the headline, page title or hero image; Google Ads policy risk)
- Supporting text: **ننجز معاملاتكم الخاصة بالعمالة الفلبينية بسرعة وسهولة، مع إمكانية متابعة الإجراءات والتواصل مباشرة عبر الواتساب.**
- Primary CTA: **تواصل معنا عبر الواتساب**
- Secondary CTA: **استعرض خدماتنا** (smooth-scrolls to services)
- Small note under the buttons (owner request 2026-10-03): **نستلم مستنداتكم ونقدمها إلى مكتب POLO — نحن لسنا جهة حكومية** / *We collect your documents and submit them to POLO. We are not a government body.*

No cheesy stock visuals. Premium and modern.

---

## 8. Services Section

Two main service cards. Each card has:
- Image
- Service title
- Short description
- Required documents
- "احصل على الخدمة" CTA
- WhatsApp button with the service-specific message

**Do not show a processing-time badge or any specific timeframe on either service card** (owner's decision,
2026-09-27 — do not commit to a specific number of days/weeks/months for either service).

**The business does not perform استقدام (recruiting/importing workers from the Philippines).** Job Order work is
processing done through the POLO (Philippine Overseas Labor Office) in Riyadh — it is not affiliated with, or
routed through, the Philippine Embassy. Never describe Service 2 as recruiting or importing workers from the
Philippines, and never mention the embassy in connection with Service 2.

### SERVICE 1

**تجديد عقود الخادمات والعمالة الفلبينية 🇵🇭**

نُجدد عقود الخادمات والعمالة الفلبينية بكل سهولة ويُسر عبر الواتساب دون الحاجة لمراجعة السفارة.

لإتمام التجديد، يرجى إرسال صور المستندات التالية عبر الواتساب:

1. صورة الإقامة
2. صورة الصفحة الأولى من الجواز + التأشيرة
3. صورة بطاقة صاحب العمل
4. صورة تأشيرة الخروج والعودة
5. تحديد الراتب
6. تذكرة السفر إن وجدت

CTA: **احصل على الخدمة عبر الواتساب**

### SERVICE 2

**خدمات أصحاب الأعمال ("جوب أوردر") 🇵🇭**

نقدم خدمة معالجة طلبات العمل الخاصة بالعمالة الفلبينية بدقة واحترافية عالية.

**المستندات المطلوبة:**

1. السجل التجاري
2. صورة تأشيرات العمل من موقع إنجاز
3. هوية الكفيل
4. رخصة البلدية
5. صورة من موقع المؤسسة على Google Maps
6. العنوان الوطني للشركة
7. ليتر هيد الشركة، وتكون البيانات مطابقة للسجل التجاري بالعربي والإنجليزي
8. صور السكن من الداخل والخارج، مع صور غرفة النوم والمطبخ والحمام إن وجدت
9. صورة المحل أو المؤسسة التي سيعمل بها العمال

CTA: **احصل على الخدمة عبر الواتساب**

Design note: Service 2 has a long document list. Keep the card clean (e.g. a well-styled checklist, two columns on desktop, or an expandable "show all documents" area that is open by default on desktop). All documents must remain visible/accessible; do not hide information permanently.

---

## 9. Service Images

- Service 1 uses `assets/images/service-1.jpg`
- Service 2 uses `assets/images/service-2.jpg`
- Give both images a consistent visual treatment (same aspect ratio, same overlay/gradient style, same corner radius) so the cards look like one brand.

---

## 10. Why Choose Us / Trust Section

| Arabic | English |
|---|---|
| **سرعة الإنجاز** – سرعة في الإنجاز وسهولة في الإجراءات. | **Fast Processing** – Fast processing and simple procedures. |
| **سهولة الإجراءات** – إرسال المستندات ومتابعة المعاملة عبر الواتساب. | **Simple Process** – Send your documents and follow up on your request via WhatsApp. |
| **خدمة عن بُعد** – فقط أرسل مستنداتك عبر الواتساب، وتولَّينا نحن الباقي دون تكبد عناء الحضور. | **Remote Service** – Just send your documents via WhatsApp, and we handle the rest — no need to visit us in person. |
| **متابعة مباشرة** – متابعة مباشرة معك خطوة بخطوة. | **Direct Follow-up** – Direct, step-by-step follow-up with you. |

**Never** add claims like "government approved", "official embassy service", "licensed", "100% guaranteed", "partnered with the embassy", etc.

---

## 11. How It Works

A modern 4-step process with icons and connecting lines (horizontal on desktop, vertical on mobile; the line direction must work in both RTL and LTR).

| # | Arabic | English |
|---|---|---|
| 01 | **أرسل المستندات** – أرسل المستندات المطلوبة عبر الواتساب. | **Send Your Documents** – Send the required documents via WhatsApp. |
| 02 | **مراجعة المستندات** – نراجع البيانات والمستندات المطلوبة. | **Document Review** – We review your details and documents. |
| 03 | **بدء المعاملة** – نبدأ في تنفيذ الخدمة المطلوبة. | **Processing Begins** – We start processing your request. |
| 04 | **استلام النتيجة** – يتم إبلاغ العميل عند اكتمال المعاملة. | **Receive the Result** – We notify you once your request is complete. |

---

## 12. WhatsApp Floating Button

- Always visible while scrolling, elegant but highly visible.
- Positioned at the bottom corner on the "end" side (flips with RTL/LTR), and must not cover content or the mobile menu.
- Uses the general WhatsApp message in the current language.
- Accessible label: "تواصل معنا عبر الواتساب" / "Contact us on WhatsApp".
- Optional subtle pulse animation (respect `prefers-reduced-motion`).

---

## 13. Contact Section

**تواصل معنا / Contact Us**

- **واتساب / WhatsApp:** +966 50 112 8411 (clickable). In Arabic mode, display the phone number with `dir="ltr"` so it doesn't get reversed.
- **البريد الإلكتروني / Email:** sama5visa@gmail.com (clickable `mailto:`)
- **الموقع / Location:** Google Maps button
- Primary CTA: **تواصل معنا الآن** / **Contact Us Now** (opens WhatsApp)

---

## 14. Footer

Clean, elegant, not overcrowded:
- Logo
- Business name: سما الخبر للسفر والسياحة / Sama Alkhobar Travel & Tourism
- Short description (based only on the services above)
- WhatsApp, Email, Location
- Copyright with the current year (generated with JavaScript)
- Language switch

---

## 15. Design Direction (very important)

Not a beginner template. The website must feel: modern, premium, professional, trustworthy, clean, minimal, corporate, mobile-first, fast, visually impressive.

Use:
- Modern typography with clear hierarchy
- Generous, consistent spacing
- Rounded cards, subtle shadows
- Smooth, restrained scroll-reveal animations (IntersectionObserver), not overused
- Elegant hover effects
- Modern inline SVG icons
- Proper Arabic RTL layout

Must look great on desktop, laptop, tablet, and mobile (test at 375px, 768px, 1024px, 1440px widths).

Respect `prefers-reduced-motion`.

---

## 16. User Experience

Within a few seconds, a visitor must understand:
1. What services we provide
2. Who they are for
3. How long they take
4. What documents are required
5. How to contact us

WhatsApp is the main conversion channel. WhatsApp CTAs must appear in: header, hero, each service card, contact section, floating button.

---

## 17. Important Content Rule

Do NOT add information that is not in this file. Never invent:
- Prices
- Government approvals
- Licenses
- Guarantees
- Embassy partnerships
- Processing times other than the ones provided
- Additional services
- Addresses, working hours, customer numbers, testimonials, or statistics

You may improve wording and presentation, but **do not change the meaning**.

---

## 18. English Version

Complete, natural, professional English (not word-for-word). Key titles:

- خدمات العمالة الفلبينية في السعودية → **Filipino Worker Services in Saudi Arabia**
- تجديد عقود الخادمات والعمالة الفلبينية → **Filipino Domestic Worker & Employee Contract Renewal**
- خدمات أصحاب الأعمال ("جوب أوردر") → **Business Owner Services ("Job Order")**

Translate every document in both service lists accurately (e.g. إقامة → Iqama / residence permit; إنجاز → Enjaz platform; العنوان الوطني → National Address; ليتر هيد → company letterhead).

---

## 19. Technical Requirements

- Clean, well-organized, commented code
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- Responsive, mobile-first CSS using CSS custom properties for colors/spacing
- RTL/LTR support; Arabic default
- SEO: proper `<title>`, meta description, Open Graph tags, canonical-ready structure, one `h1`, logical heading order; update `title`, meta description and `lang`/`dir` when the language changes
- Accessibility: sufficient color contrast, visible focus states, `aria-label`s on icon buttons, skip-to-content link, keyboard-friendly menu
- Smooth scrolling with correct offset for the sticky header
- Fast loading: no unnecessary dependencies, lazy-loaded images, fonts with `display=swap`
- No broken links, no placeholder text, no lorem ipsum, no "TODO" left in the final version

---

## 20. Final Goal & Self-Review

The result must look like a **real professional business website ready to publish immediately**.

Priority: **Trust → Clarity → Professional Design → WhatsApp Conversion**

After building, review everything yourself and fix problems before telling me you're done:

- [ ] Arabic RTL layout correct everywhere (alignment, icons, arrows, steps line, floating button)
- [ ] English LTR layout correct everywhere
- [ ] Language switch changes ALL text, alt text, title and meta description
- [ ] Mobile responsiveness at 375px, 768px, 1024px, 1440px
- [ ] Typography and spacing consistent
- [ ] Every button works; every WhatsApp link has the correct number and correct message
- [ ] Google Maps link opens the correct location
- [ ] Email link works
- [ ] Images display correctly with consistent style
- [ ] No invented information anywhere
- [ ] No placeholder text anywhere
- [ ] Overall visual polish

When finished, give me a short summary of what you built and anything I need to check or provide.
