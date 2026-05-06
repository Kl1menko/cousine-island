# Landing Page Brief — Cousine Island Seychelles  
**Project:** English-language sales landing page for Medical Tourism Platform  
**Target implementation:** clean HTML + CSS + vanilla JS, easy to migrate into MODX templates/chunks/TVs  
**Do not write production code from this brief directly without verifying final commercial details.**

---

## 1. Goal of the landing page

Create a premium, conversion-focused English landing page for selling/enquiring about the **Cousine Island Seychelles** service/package through Medical Tourism Platform.

The current source page is too minimal and does not sell the offer properly. The new landing must:

- clearly explain what Cousine Island is;
- position it as a premium private island / luxury wellness / recovery / retreat destination;
- make enquiry easy and repeated across the page;
- build trust around Medical Tourism Platform;
- keep the page structure clean enough to move into MODX later;
- avoid overpromising medical results or making unsupported health claims;
- work well on mobile first.

---

## 2. Source information available from the current page

Current page URL:  
`https://www.medicaltourismplatform.com/packages/cousine-island-seychelles-`

Information currently visible on the page:

- Brand: **Medical Tourism Platform**
- Tagline: **“Medical Tourism. Make it SAFE!”**
- Official partner mentioned: **WhatClinicSafe.com**
- Page title: **Cousine Island Seychelles**
- Main CTA: **Enquire**
- Payment note:  
  “Payment is not required at this time. When you arrive at the clinic, you will be charged directly. Platform has a unique agreement with the clinic and does not charge extra. The clinic fee remains the same as if you asked directly.”
- Social links/icons: WhatsApp, Instagram, X, LinkedIn
- Footer legal links: Privacy policy, Cookies policy, Disclaimer, Service terms
- Copyright: **© 2026 MEDICAL TOURISM PLATFORM.COM**

Important: the current source page does not contain detailed service copy, itinerary, price, inclusions, accommodation details, medical/wellness details, or booking process. The landing must therefore use verified external/partner information or editable placeholders.

---

## 3. Additional factual content to verify before publication

Use these facts only after final verification with the business owner, supplier, or official Cousine Island materials.

Potentially useful verified-positioning points from public official/market sources:

- Cousine Island is an exclusive private island resort in the Seychelles.
- The island offers luxury villa accommodation and strong privacy.
- The island is associated with conservation/ecotourism.
- Official Cousine Island materials mention five beach villas / limited guest capacity.
- Public official materials mention luxury villas, presidential villa, whole-island rental, spa/yoga/wellness-style facilities, gourmet meals, beach, nature, snorkeling, romantic stays, celebrations, and private island experiences.
- Public prices may be shown on official materials, but prices must be checked before publishing because rates can change.

Do not hardcode prices unless the client confirms they are current.

---

## 4. Target audience

Primary audience: English-speaking international clients looking for a premium, discreet, safe travel/wellness/medical-tourism-related experience.

Likely segments:

1. High-income individuals seeking privacy, recovery, or restorative travel.
2. Couples planning luxury wellness escapes, honeymoon-style recovery trips, or private retreats.
3. Families or small groups looking for exclusive island rental.
4. Medical tourism clients who need a calm post-treatment recovery environment.
5. Clients who value safety, coordination, discretion, and vetted partners.

Tone should feel:

- premium;
- calm;
- trustworthy;
- discreet;
- human;
- concierge-like;
- not aggressive;
- not “cheap tourism”;
- not overly medical unless specific medical services are confirmed.

---

## 5. Core positioning

Suggested main positioning:

> **A private island escape in the Seychelles, arranged with safety, discretion, and personal support by Medical Tourism Platform.**

Alternative positioning variants:

- **Private island wellness in the Seychelles — safely arranged from enquiry to arrival.**
- **Recover, restore, and reconnect on Cousine Island Seychelles.**
- **Luxury, privacy, and nature-led recovery in one of the Seychelles’ most exclusive island settings.**

Avoid claims like:

- “Guaranteed healing”
- “Best medical recovery in the world”
- “Clinically proven”
- “No risks”
- “Cheapest price”
- “Medical treatment included” unless explicitly confirmed

---

## 6. Recommended page structure

The page should be built as a single landing page with anchor navigation. Each section should be independent and reusable as a MODX chunk.

Recommended order:

1. Header / Navigation
2. Hero Section
3. Trust Bar
4. Intro / What This Experience Is
5. Why Cousine Island
6. Ideal For
7. Accommodation / Private Island Experience
8. Wellness, Privacy & Recovery Angle
9. What Medical Tourism Platform Handles
10. How Enquiry Works
11. Payment / No Extra Platform Fee Note
12. Gallery / Visual Story
13. Testimonials or Trust Placeholder
14. FAQ
15. Final CTA
16. Footer

---

## 7. MODX-friendly implementation structure

The future HTML should be split logically so it can be moved into MODX chunks/templates.

Suggested MODX chunks:

- `landing-header`
- `landing-hero-cousine`
- `landing-trust-bar`
- `landing-intro`
- `landing-benefits`
- `landing-ideal-for`
- `landing-accommodation`
- `landing-wellness`
- `landing-platform-support`
- `landing-process`
- `landing-payment-note`
- `landing-gallery`
- `landing-faq`
- `landing-final-cta`
- `landing-footer`

Suggested MODX TVs/placeholders:

- `[[*pagetitle]]`
- `[[*longtitle]]`
- `[[*description]]`
- `[[*hero_image]]`
- `[[*hero_subtitle]]`
- `[[*cta_primary_text]]`
- `[[*cta_primary_url]]`
- `[[*cta_secondary_text]]`
- `[[*whatsapp_url]]`
- `[[*instagram_url]]`
- `[[*linkedin_url]]`
- `[[*x_url]]`
- `[[*gallery_images]]`
- `[[*faq_items]]`
- `[[*seo_title]]`
- `[[*seo_description]]`

HTML should use semantic tags:

- `<header>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<nav>`
- headings in logical order: one `<h1>`, then `<h2>`, `<h3>`

Use readable BEM-style class names, for example:

- `.site-header`
- `.hero`
- `.hero__content`
- `.hero__media`
- `.section`
- `.section__eyebrow`
- `.cards-grid`
- `.benefit-card`
- `.cta-panel`
- `.faq-item`

No framework-specific classes. No Tailwind. No Bootstrap. No jQuery.

---

## 8. Design direction

**Current design system: Sumip-inspired minimal — white, bold serif, black pills, stacked photo cards.**  
Reference: Dribbble "Sumip Event Agency Landing Page" (shot 24249028).

Visual style:

- pure white base (`#ffffff`), near-black text (`#111111`);
- huge bold italic Playfair Display headings — main visual differentiator;
- black pill-shaped buttons (`border-radius: 999px`, `background: #111`);
- overlapping rounded photo card stack in hero (main card + two smaller rotated cards);
- dark sections (`#1a1a1a`) for contrast and rhythm;
- off-white sections (`#f5f4f0`) as a soft rest between white sections;
- extreme whitespace — sections breathe;
- gold accent (`#c9a96e`) for icons and SVG highlights;
- no gradients, no navy/teal palette (old design is replaced).

Current CSS tokens:

```css
--black:       #111111;
--white:       #ffffff;
--offwhite:    #f5f4f0;
--dark:        #1a1a1a;
--muted:       #6b6b6b;
--border:      #e8e8e8;
--accent:      #c9a96e;
--font-serif:  'Playfair Display', Georgia, serif;
--font-sans:   'Inter', system-ui, sans-serif;
--radius-pill: 999px;
--radius-lg:   28px;
--radius-md:   18px;
```

Button system (`.btn-pill`):

- `.btn-pill--dark` — black fill, white text (primary on light sections)
- `.btn-pill--white` — white fill, black text (primary on dark sections)
- `.btn-pill--outline` — transparent, black border (secondary on light)
- `.btn-pill--outline-light` — transparent, white border (secondary on dark)
- `.btn-pill--lg` — larger padding variant

Header:

- transparent by default (page starts with hero image background);
- dark glass on scroll: `background: rgba(18,18,18,.72)` + `backdrop-filter: blur(22px)`;
- all nav/logo text white in both states.

Hero layout:

- two-column: text left, visual right;
- right side: `.hero__img-stack` — main tall image + two overlapping rotated card images + black pill badge;
- heading uses `font-style: italic`.

Typography:

- Headings: Playfair Display 700/900, italic on h1/h2;
- Body: Inter 300/400/500/600.

Image direction:

- Hero: aerial island, luxury villa, wellness/spa — used as stacked card collage;
- All from Unsplash CDN with real working URLs.
- All images have descriptive `alt` text.

---

## 9. Animation direction

Use light vanilla JS and CSS animations only where useful.

Allowed animation patterns:

- fade-in on scroll;
- soft upward reveal for cards;
- gentle hero image scale on page load;
- sticky header shadow after scroll;
- FAQ accordion;
- smooth anchor scrolling;
- optional gallery lightbox;
- optional form step/progress state.

Avoid:

- heavy parallax;
- autoplay video with sound;
- excessive motion;
- layout-shifting animations;
- animation that blocks content;
- third-party animation libraries.

Respect accessibility:

- add support for `prefers-reduced-motion`;
- keep content visible even if JS fails.

---

## 10. Section-by-section content brief

### 10.1 Header

Purpose: quick orientation and conversion.

Elements:

- logo / text logo: **Medical Tourism Platform**
- short tagline: **Medical Tourism. Make it SAFE!**
- navigation anchors:
  - Experience
  - Why Cousine
  - Support
  - How it works
  - FAQ
- CTA button:
  - **Enquire**
  - secondary optional: **WhatsApp**

Header behavior:

- sticky on desktop and mobile;
- compact after scroll;
- mobile burger menu;
- accessible keyboard navigation.

---

### 10.2 Hero Section

Purpose: immediately sell the emotional value and explain the offer.

Suggested H1:

> **Cousine Island Seychelles — Private Island Wellness, Safely Arranged**

Suggested subtitle:

> Escape to one of the Seychelles’ most exclusive private island settings, with discreet support from Medical Tourism Platform from enquiry to arrival.

Suggested CTA buttons:

- Primary: **Enquire Now**
- Secondary: **Ask on WhatsApp**

Suggested microcopy under CTA:

> No payment is required to enquire. We help coordinate your request and confirm availability, details, and next steps.

Hero content should include:

- location: Seychelles;
- private island / luxury / privacy;
- safety and coordination;
- visual focus on island/resort.

Optional hero trust badges:

- Private island setting
- Discreet support
- Direct partner pricing
- English-speaking assistance

---

### 10.3 Trust Bar

Purpose: reduce anxiety.

Content ideas:

- **Official partner:** WhatClinicSafe.com
- **No upfront payment to enquire**
- **Direct payment at the provider where applicable**
- **No extra platform fee**
- **Confidential support**

Important wording:

> Payment is not required at the enquiry stage. Where applicable, clients pay the provider directly. Medical Tourism Platform does not add extra fees to the provider’s confirmed price.

Use carefully because the current page mentions clinic payment, but this landing may be travel/wellness. Replace “clinic” with “provider” unless the owner confirms clinic-specific wording.

---

### 10.4 Intro / What This Experience Is

Purpose: clarify the offer.

Suggested heading:

> **A secluded Seychelles retreat designed around privacy, comfort, and peace of mind**

Suggested copy:

> Cousine Island is a private island experience for guests who want more than a standard luxury trip. It is designed for privacy, nature, personalised service, and restorative time away from crowded resorts. Medical Tourism Platform helps you request availability, clarify details, and arrange the next steps safely and transparently.

Key points:

- private island environment;
- personalised stay;
- calm setting;
- suitable for wellness/recovery-style travel if confirmed;
- assistance from platform.

---

### 10.5 Why Cousine Island

Purpose: benefits.

Use a 4–6 card layout.

Cards:

1. **Exceptional Privacy**  
   A limited-guest private island setting for travellers who value discretion.

2. **Luxury Villa Living**  
   Private villa-style accommodation, beach access, and refined island comfort.

3. **Nature-Led Escape**  
   Conservation-focused island environment with beaches, wildlife, and ocean views.

4. **Wellness-Friendly Atmosphere**  
   A quiet place for rest, reflection, light movement, and low-stress travel.

5. **Personalised Enquiry Support**  
   The platform helps you understand availability, options, and next steps.

6. **Transparent Payment Approach**  
   No payment is required at enquiry stage; final terms must be confirmed before booking.

---

### 10.6 Ideal For

Purpose: help the user self-identify.

Suggested heading:

> **Who this experience is ideal for**

Cards or list:

- Post-treatment rest or soft recovery travel, if approved by a medical professional.
- Luxury wellness retreats.
- Private couple escapes.
- Family or small group island stays.
- Executive burnout recovery.
- Celebration trips with privacy.
- Clients who want safety-focused coordination.

Add medical disclaimer:

> If you are travelling after a procedure or for health reasons, always confirm travel suitability with your treating doctor before booking.

---

### 10.7 Accommodation / Private Island Experience

Purpose: show tangible value.

Suggested heading:

> **Private island accommodation with space to breathe**

Content blocks:

- Luxury beach villas
- Presidential villa / premium villa option
- Whole-island rental option
- Dining and shared spaces
- Spa / wellness spaces if confirmed
- Beach and nature access
- Activities: snorkeling, beach walks, yoga, dining, conservation/nature experiences, boat/helicopter transfers if confirmed

Do not list exact amenities unless verified.

Use a note:

> Accommodation options, inclusions, transfer options, and seasonal rates must be confirmed for your selected dates.

---

### 10.8 Wellness, Privacy & Recovery Angle

Purpose: connect to Medical Tourism Platform audience without making medical claims.

Suggested heading:

> **A calm environment for restorative travel**

Suggested copy:

> For clients who need quiet time before or after treatment, or simply want a deeply private wellness escape, Cousine Island offers a slower rhythm: ocean air, nature, space, and privacy. Medical Tourism Platform can help align your enquiry with your travel needs and ensure the right questions are asked before confirming the stay.

Include safety note:

> This page does not replace medical advice. Travel after treatment should be approved by a qualified medical professional.

Possible bullets:

- low-crowd environment;
- privacy-first;
- restorative setting;
- suitable for low-stress stay;
- support with questions before commitment.

---

### 10.9 What Medical Tourism Platform Handles

Purpose: explain service value.

Suggested heading:

> **How Medical Tourism Platform supports your enquiry**

Cards:

1. **Initial request review**  
   We collect your preferred dates, group size, travel purpose, and any special requirements.

2. **Availability and option clarification**  
   We help clarify availability, accommodation options, inclusions, and provider terms.

3. **Transparent communication**  
   You receive clear next steps before committing.

4. **Safety-focused coordination**  
   We help you ask the right questions about suitability, logistics, and provider arrangements.

5. **No extra platform fee**  
   The platform does not add extra fees to the provider’s confirmed price, according to the current page’s payment note.

CTA after section:

> Start with a confidential enquiry

---

### 10.10 How Enquiry Works

Purpose: reduce friction.

Use 3–5 steps.

Suggested heading:

> **How to enquire**

Steps:

1. **Send your request**  
   Share your preferred dates, number of guests, and travel purpose.

2. **We clarify the details**  
   We help confirm what is available, what is included, and what should be checked.

3. **You receive next steps**  
   You review the information before making a decision.

4. **Payment is handled directly where applicable**  
   No payment is required at the enquiry stage. Direct payment terms are confirmed before booking.

5. **Travel with clearer expectations**  
   You arrive knowing the key details have been discussed in advance.

Add CTA button: **Enquire Now**

---

### 10.11 Payment / Pricing Note

Purpose: preserve the current page’s important commercial message.

Suggested heading:

> **No payment required to enquire**

Suggested copy:

> Payment is not required at this stage. Where applicable, you pay the provider directly according to the confirmed terms. Medical Tourism Platform does not charge extra on top of the provider’s confirmed price.

Add disclaimer:

> Final availability, inclusions, cancellation terms, taxes, transfer costs, and seasonal rates must be confirmed before booking.

Do not promise fixed rates unless confirmed.

---

### 10.12 Gallery / Visual Story

Purpose: create desire.

Recommended layout:

- one large featured image;
- 4–6 smaller images;
- optional lightbox;
- categories:
  - Island
  - Villas
  - Beach
  - Wellness
  - Dining
  - Nature

Technical requirements:

- lazy loading;
- responsive images;
- `alt` text;
- no huge uncompressed images;
- WebP preferred with fallback if needed.

---

### 10.13 Testimonials / Trust Placeholder

If verified testimonials are available, include them.

If not, use a trust section instead:

Suggested heading:

> **Built for travellers who value clarity before commitment**

Possible trust content:

- clear enquiry process;
- no upfront payment to enquire;
- provider details confirmed before booking;
- privacy-first communication;
- safety-focused approach.

Do not fabricate reviews.

---

### 10.14 FAQ

Purpose: answer objections.

Recommended FAQ items:

**Do I need to pay before enquiring?**  
No. Payment is not required at the enquiry stage. Final payment terms are confirmed before booking.

**Does Medical Tourism Platform add an extra fee?**  
According to the current page note, the platform does not charge extra on top of the provider’s confirmed price.

**Is this a medical treatment package?**  
Only present it as a medical package if specific treatment details are confirmed. Otherwise position it as a private island wellness / recovery-friendly travel experience.

**Can I use this for post-treatment recovery?**  
Potentially, but only if your doctor confirms that travel and island stay are suitable for your condition.

**Are prices shown on the page final?**  
No, unless confirmed by the business. Rates can vary by season, villa type, availability, taxes, transfers, and inclusions.

**Can you arrange transfers?**  
Mention only if confirmed. Recommended wording: “Transfer options can be discussed during enquiry and confirmed based on availability and provider terms.”

**Is my enquiry confidential?**  
Yes, position communication as discreet and privacy-aware.

**How fast will I receive a response?**  
Use only confirmed SLA. If unknown: “Our team will review your request and respond with the next available details.”

---

### 10.15 Final CTA

Purpose: strong close.

Suggested heading:

> **Ready to plan your private Seychelles escape?**

Suggested copy:

> Send a confidential enquiry and let Medical Tourism Platform help you clarify availability, options, and next steps before you commit.

CTA buttons:

- **Enquire Now**
- **Message on WhatsApp**

Microcopy:

> No payment is required to send an enquiry.

---

### 10.16 Footer

Include:

- Medical Tourism Platform logo/name
- tagline: **Medical Tourism. Make it SAFE!**
- official partner line: **Official partner: WhatClinicSafe.com**
- social icons:
  - WhatsApp
  - Instagram
  - X
  - LinkedIn
- legal links:
  - Privacy policy
  - Cookies policy
  - Disclaimer
  - Service terms
- copyright:
  - **© 2026 MEDICAL TOURISM PLATFORM.COM**

---

## 11. Lead form requirements

The enquiry form should be simple and premium.

Fields:

- Full name
- Email
- Phone / WhatsApp
- Country of residence
- Preferred travel dates
- Number of guests
- Purpose of enquiry:
  - Wellness retreat
  - Post-treatment recovery
  - Private holiday
  - Couple escape
  - Family/group stay
  - Other
- Message / special requirements
- Consent checkbox:
  - “I agree to be contacted about my enquiry and accept the Privacy Policy.”

Optional hidden fields:

- page URL
- package name
- UTM source
- UTM campaign
- timestamp

Form behavior:

- client-side validation;
- accessible error messages;
- success message;
- no page reload if AJAX is configured;
- fallback normal submit if JS fails;
- spam protection compatible with MODX/FormIt/hCaptcha or reCAPTCHA if needed.

Suggested success message:

> Thank you. Your enquiry has been received. The team will review your request and contact you with the next steps.

---

## 12. SEO requirements

Suggested meta title:

> Cousine Island Seychelles | Private Island Wellness Enquiry

Suggested meta description:

> Enquire about Cousine Island Seychelles with Medical Tourism Platform. Private island luxury, wellness-friendly travel, discreet support, and no payment required at enquiry stage.

Suggested H1:

> Cousine Island Seychelles — Private Island Wellness, Safely Arranged

Suggested URL slug:

> `/packages/cousine-island-seychelles/`

Schema ideas:

- `TravelAgency` or `Organization` for Medical Tourism Platform
- `FAQPage` for FAQ section
- `BreadcrumbList`

Avoid medical procedure schema unless the page includes confirmed medical service details.

---

## 13. Accessibility requirements

- All interactive elements keyboard-accessible.
- Use proper focus states.
- Use readable contrast.
- Use semantic buttons for FAQ toggles.
- Use `aria-expanded` for FAQ accordion.
- Use `aria-label` for social links.
- All images require meaningful `alt`.
- Forms need labels, not only placeholders.
- Support reduced motion.

---

## 14. Performance requirements

- No heavy frameworks.
- Vanilla JS only.
- CSS in one clean file or MODX asset.
- JS in one clean file or MODX asset.
- Images compressed and lazy-loaded.
- Use responsive image sizes.
- Avoid render-blocking third-party scripts.
- No autoplay video by default.
- Target good mobile Lighthouse score.

---

## 15. Conversion requirements

CTA placements:

- header;
- hero;
- after benefits;
- after process;
- final CTA;
- optional sticky mobile CTA.

CTA text variants:

- **Enquire Now**
- **Start a Confidential Enquiry**
- **Ask About Availability**
- **Message on WhatsApp**

Use urgency carefully:

- acceptable: “Availability may vary by season and villa type.”
- avoid: fake countdowns, fake scarcity, fake “only 1 left” claims.

---

## 16. Content rules and legal safety

Do not claim:

- guaranteed medical outcomes;
- guaranteed recovery;
- exact medical suitability;
- fixed prices without confirmation;
- included transfers unless confirmed;
- doctor/clinic involvement unless confirmed;
- awards unless verified and approved for use;
- testimonials unless real and permissioned.

Use disclaimers:

- “Information is provided for enquiry purposes only.”
- “Availability, inclusions, rates, and payment terms must be confirmed before booking.”
- “Travel for health reasons should be discussed with a qualified medical professional.”

---

## 17. Recommended page copy draft in English

### Hero

**Cousine Island Seychelles — Private Island Wellness, Safely Arranged**

Escape to a secluded private island in the Seychelles with discreet enquiry support from Medical Tourism Platform. Designed for travellers who value privacy, comfort, nature, and clarity before they commit.

CTA: **Enquire Now**  
Secondary CTA: **Ask on WhatsApp**

Microcopy: **No payment is required to send an enquiry.**

---

### Intro

**A private island escape with peace of mind built in**

Cousine Island offers the kind of privacy and natural beauty that standard resorts cannot match. Whether you are planning a luxury wellness retreat, a quiet recovery-friendly escape, or a private stay with loved ones, Medical Tourism Platform helps you ask the right questions and understand the next steps before booking.

---

### Benefits

**Why choose Cousine Island**

- **Privacy first:** a secluded island setting for guests who want discretion.
- **Luxury comfort:** villa-style accommodation and refined island living.
- **Nature-led calm:** beaches, ocean air, and conservation-focused surroundings.
- **Wellness-friendly rhythm:** space for rest, gentle movement, and quiet time.
- **Clear enquiry support:** we help clarify options, availability, and terms.
- **Transparent payment approach:** no payment is required at enquiry stage.

---

### Platform Support

**What we help with**

Medical Tourism Platform supports your enquiry from the first question. We help collect your requirements, clarify provider information, explain the process, and make sure you understand what needs to be confirmed before you commit.

---

### Payment Note

**No payment required to enquire**

You do not need to pay to submit an enquiry. Where applicable, payment is made directly to the provider according to confirmed terms. Medical Tourism Platform does not add an extra fee to the provider’s confirmed price.

---

### Final CTA

**Ready to plan your private Seychelles escape?**

Send a confidential enquiry and let Medical Tourism Platform help you clarify availability, options, and next steps.

CTA: **Enquire Now**

---

## 18. Developer notes

The final implementation should be:

- one HTML file for prototype;
- one CSS file;
- one JS file;
- no frameworks;
- no inline event handlers;
- no hardcoded CMS-specific logic in prototype;
- content blocks easy to convert into MODX chunks;
- image paths easy to replace with MODX TVs;
- form structure compatible with MODX FormIt or custom handler;
- repeated CTA URLs controlled by one variable/config in JS or one placeholder in MODX;
- clean comments marking section boundaries.

Recommended file names:

- `cousine-island-landing.html`
- `assets/css/cousine-landing.css`
- `assets/js/cousine-landing.js`
- `assets/img/cousine/`

---

## 19. Acceptance checklist

Before delivery, check:

- [ ] One clear H1
- [ ] All main sections present
- [ ] CTA visible above the fold
- [ ] Mobile layout polished
- [ ] Header navigation works
- [ ] Smooth scroll works
- [ ] FAQ accordion works
- [ ] Form validation works
- [ ] Reduced motion supported
- [ ] Images optimized
- [ ] No fake testimonials
- [ ] No unverified medical claims
- [ ] Payment note included
- [ ] Footer legal links included
- [ ] MODX chunk structure is easy to extract
- [ ] HTML passes basic validation
- [ ] CSS class naming is consistent
- [ ] JS does not depend on external libraries

---

## 20. Priority for the agent

Build the page around trust and premium calm, not aggressive sales.

The most important conversion message is:

> **Private island wellness in the Seychelles, with safe and transparent enquiry support — no payment required to enquire.**
