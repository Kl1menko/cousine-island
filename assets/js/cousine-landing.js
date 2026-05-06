/* ================================================================
   Cousine Island Seychelles — Landing Page JS
   ================================================================ */

(function () {
  'use strict';

  /* --------------------------------------------------------------
     Sticky header
     -------------------------------------------------------------- */
  const header = document.getElementById('site-header');

  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 20);
    toggleStickyMobileCta();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --------------------------------------------------------------
     Sticky mobile CTA
     -------------------------------------------------------------- */
  const stickyCta = document.getElementById('sticky-cta');

  function toggleStickyMobileCta() {
    if (!stickyCta) return;
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;
    const heroBottom = heroEl.getBoundingClientRect().bottom;
    stickyCta.classList.toggle('is-visible', heroBottom < 0);
    stickyCta.setAttribute('aria-hidden', String(heroBottom >= 0));
  }

  /* --------------------------------------------------------------
     Mobile burger menu
     -------------------------------------------------------------- */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        burger.setAttribute('aria-label', 'Open menu');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        burger.focus();
      }
    });
  }

  /* --------------------------------------------------------------
     Smooth scroll for anchor links
     -------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* FAQ accordion — handled inline after FAQ section in HTML */

  /* --------------------------------------------------------------
     Gallery lightbox
     -------------------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  let lastGalleryTrigger = null;

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = '';
    lightboxImg.alt = '';
    document.body.style.overflow = '';
    if (lastGalleryTrigger) lastGalleryTrigger.focus();
  }

  document.querySelectorAll('[data-src]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      lastGalleryTrigger = this;
      openLightbox(
        this.getAttribute('data-src'),
        this.getAttribute('data-alt') || ''
      );
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* --------------------------------------------------------------
     Form validation & submission
     -------------------------------------------------------------- */
  const form = document.getElementById('enquiry-form');
  const formSuccess = document.getElementById('form-success');
  const formSubmit = document.getElementById('form-submit');

  function setError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(errorId);
    if (field) field.classList.toggle('has-error', !!message);
    if (errorEl) errorEl.textContent = message || '';
  }

  function clearErrors() {
    document.querySelectorAll('.has-error').forEach(function (el) {
      el.classList.remove('has-error');
    });
    document.querySelectorAll('.form-error').forEach(function (el) {
      el.textContent = '';
    });
  }

  function validateForm() {
    clearErrors();
    let isValid = true;

    const name = document.getElementById('field-name');
    if (name && !name.value.trim()) {
      setError('field-name', 'error-name', 'Please enter your full name.');
      isValid = false;
    }

    const email = document.getElementById('field-email');
    if (email) {
      if (!email.value.trim()) {
        setError('field-email', 'error-email', 'Please enter your email address.');
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setError('field-email', 'error-email', 'Please enter a valid email address.');
        isValid = false;
      }
    }

    const programme = document.getElementById('field-programme');
    if (programme && !programme.value) {
      setError('field-programme', 'error-programme', 'Please select a programme of interest.');
      isValid = false;
    }

    const purpose = document.getElementById('field-purpose');
    if (purpose && !purpose.value) {
      setError('field-purpose', 'error-purpose', 'Please select a purpose of enquiry.');
      isValid = false;
    }

    const consent = document.getElementById('field-consent');
    if (consent && !consent.checked) {
      setError('field-consent', 'error-consent', 'Please accept the Privacy Policy to continue.');
      isValid = false;
    }

    return isValid;
  }

  function populateHiddenFields() {
    const pageUrl = document.getElementById('field-page-url');
    if (pageUrl) pageUrl.value = window.location.href;

    const ts = document.getElementById('field-timestamp');
    if (ts) ts.value = new Date().toISOString();

    const params = new URLSearchParams(window.location.search);

    const utmSource = document.getElementById('field-utm-source');
    if (utmSource) utmSource.value = params.get('utm_source') || '';

    const utmCampaign = document.getElementById('field-utm-campaign');
    if (utmCampaign) utmCampaign.value = params.get('utm_campaign') || '';
  }

  if (form) {
    populateHiddenFields();

    form.addEventListener('submit', function (e) {
      if (!validateForm()) {
        e.preventDefault();
        const firstError = form.querySelector('.has-error');
        if (firstError) firstError.focus();
        return;
      }

      if (form.getAttribute('action') === '[[*form_action_url]]') {
        e.preventDefault();
        if (formSubmit) {
          formSubmit.disabled = true;
          formSubmit.textContent = 'Sending…';
        }
        setTimeout(function () {
          form.hidden = true;
          if (formSuccess) {
            formSuccess.hidden = false;
            formSuccess.focus();
          }
        }, 600);
      }
    });

    form.querySelectorAll('input, select, textarea').forEach(function (input) {
      input.addEventListener('blur', function () {
        if (this.classList.contains('has-error') && this.value.trim()) {
          this.classList.remove('has-error');
          const errorId = 'error-' + this.id.replace('field-', '');
          const errorEl = document.getElementById(errorId);
          if (errorEl) errorEl.textContent = '';
        }
      });
    });
  }

})();
