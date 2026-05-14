/* ═══════════════════════════════════════════════════════════════
   NORTFINANCE — Main Script
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Navbar: transparent → frosted on scroll ─────────────── */
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ── Hamburger menu ──────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  function openMenu() {
    hamburger.classList.add('open');
    navMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on nav link click (mobile)
  navMenu.querySelectorAll('.navbar__link, .navbar__cta').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on overlay click
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) closeMenu();
  });

  /* ── Scroll-reveal (IntersectionObserver) ────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings in the same grid/flex container
          const siblings = entry.target.parentElement.querySelectorAll('.reveal');
          let delay = 0;
          siblings.forEach((sib, idx) => {
            if (sib === entry.target) delay = idx * 80;
          });
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── Counter animation ───────────────────────────────────── */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

  /* ── FAQ accordion ───────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const btn    = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      faqItems.forEach(other => {
        other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq__answer').classList.remove('open');
      });

      // Toggle current
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Active nav link on scroll ───────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(s => sectionObserver.observe(s));

})();

/* ── Mortgage simulator (recursos.html only) ─────────────── */
(function () {
  const simWrap = document.getElementById('simulador');
  if (!simWrap) return;

  const priceInput   = document.getElementById('sim-precio');
  const savingsInput = document.getElementById('sim-ahorros');
  const yearsInput   = document.getElementById('sim-plazo');
  const contractSel  = document.getElementById('sim-contrato');

  const priceVal   = document.getElementById('sim-precio-val');
  const savingsVal = document.getElementById('sim-ahorros-val');
  const yearsVal   = document.getElementById('sim-plazo-val');

  const resQuota  = document.getElementById('res-cuota');
  const resFinanc = document.getElementById('res-financ');
  const resTasa   = document.getElementById('res-tasa');
  const resMsgEl  = document.getElementById('res-mensaje-text');

  const RATES = {
    indefinido:  0.035,
    autonomo:    0.040,
    funcionario: 0.032,
  };

  const MESSAGES = {
    indefinido:  'Perfil empleado estable. Las entidades financian habitualmente hasta el 80 % del valor de tasación.',
    autonomo:    'Con 2 años de actividad demostrable y declaraciones actualizadas, la financiación es completamente viable.',
    funcionario: 'Perfil de bajo riesgo. Acceso preferente a las condiciones más competitivas del mercado hipotecario.',
  };

  function fmt(n) {
    return new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(n);
  }

  function calcMonthly(loan, annualRate, years) {
    if (loan <= 0 || years <= 0) return 0;
    const r = annualRate / 12;
    const n = years * 12;
    if (r === 0) return loan / n;
    return loan * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  function updateFill(input) {
    const pct = ((parseFloat(input.value) - parseFloat(input.min)) /
                 (parseFloat(input.max) - parseFloat(input.min))) * 100;
    input.style.setProperty('--fill', pct.toFixed(1) + '%');
  }

  function calculate() {
    const price    = parseFloat(priceInput.value);
    const savings  = parseFloat(savingsInput.value);
    const years    = parseFloat(yearsInput.value);
    const contract = contractSel.value;

    const loan    = Math.max(0, price - savings);
    const rate    = RATES[contract] || RATES.indefinido;
    const monthly = calcMonthly(loan, rate, years);

    priceVal.textContent   = fmt(price) + ' €';
    savingsVal.textContent = fmt(savings) + ' €';
    yearsVal.textContent   = years + ' años';

    resQuota.textContent  = loan > 0 ? fmt(Math.round(monthly)) + ' €/mes' : '0 €/mes';
    resFinanc.textContent = fmt(loan) + ' €';
    resTasa.textContent   = (rate * 100).toFixed(1).replace('.', ',') + ' % TIN est.';
    resMsgEl.textContent  = MESSAGES[contract] || '';

    [priceInput, savingsInput, yearsInput].forEach(updateFill);
  }

  [priceInput, savingsInput, yearsInput].forEach(inp => {
    inp.addEventListener('input', calculate);
  });
  contractSel.addEventListener('change', calculate);

  calculate();
})();

/* ── Contact form handler (contacto.html only) ───────────── */
(function () {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('cnt-submit-btn');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre    = form.querySelector('#cnt-nombre').value.trim();
    const telefono  = form.querySelector('#cnt-telefono').value.trim();
    const email     = form.querySelector('#cnt-email').value.trim();
    const situacion = form.querySelector('#cnt-situacion').value;

    if (!nombre || !telefono || !email || !situacion) {
      [form.querySelector('#cnt-nombre'), form.querySelector('#cnt-telefono'),
       form.querySelector('#cnt-email'), form.querySelector('#cnt-situacion')].forEach(el => {
        if (!el.value.trim()) {
          el.style.borderColor = 'rgba(212,100,100,0.55)';
          el.addEventListener('input', function () { el.style.borderColor = ''; }, { once: true });
        }
      });
      return;
    }

    submitBtn.textContent = '✓ Mensaje enviado — Te contactamos pronto';
    submitBtn.classList.add('success');
    form.querySelectorAll('input, select, textarea').forEach(el => el.disabled = true);
  });
})();
