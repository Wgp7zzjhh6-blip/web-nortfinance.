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
  const tinInput     = document.getElementById('sim-tin');
  const contractSel  = document.getElementById('sim-contrato');
  const ccaaSel      = document.getElementById('sim-ccaa');

  const priceVal   = document.getElementById('sim-precio-val');
  const savingsVal = document.getElementById('sim-ahorros-val');
  const yearsVal   = document.getElementById('sim-plazo-val');
  const tinVal     = document.getElementById('sim-tin-val');

  const resQuota      = document.getElementById('res-cuota');
  const resQuotaNote  = document.getElementById('res-cuota-note');
  const resFinanc     = document.getElementById('res-financ');
  const resPct        = document.getElementById('res-pct');
  const resTasa       = document.getElementById('res-tasa');
  const resIntereses  = document.getElementById('res-intereses');
  const resPrecio     = document.getElementById('res-precio');
  const lblImpuesto   = document.getElementById('lbl-impuesto');
  const resImpuesto   = document.getElementById('res-impuesto-val');
  const resGastos     = document.getElementById('res-gastos');
  const resCosteTotal = document.getElementById('res-coste-total');
  const resTotalHip   = document.getElementById('res-total-hipoteca');
  const resGrandTotal = document.getElementById('res-grand-total');
  const resMsgEl      = document.getElementById('res-mensaje-text');

  // ITP by CCAA (segunda mano). Canarias uses IGIC instead of ITP/IVA.
  const CCAA = {
    andalucia:          { label: 'Andalucía',          itp: 0.07 },
    aragon:             { label: 'Aragón',             itp: 0.08 },
    asturias:           { label: 'Asturias',           itp: 0.08 },
    baleares:           { label: 'Baleares',           itp: 0.08 },
    canarias:           { label: 'Canarias',           itp: 0.065, igic: true },
    cantabria:          { label: 'Cantabria',          itp: 0.10 },
    castilla_la_mancha: { label: 'Castilla-La Mancha', itp: 0.09 },
    castilla_y_leon:    { label: 'Castilla y León',    itp: 0.08 },
    cataluna:           { label: 'Cataluña',           itp: 0.10 },
    com_valenciana:     { label: 'C. Valenciana',      itp: 0.10 },
    extremadura:        { label: 'Extremadura',        itp: 0.08 },
    galicia:            { label: 'Galicia',            itp: 0.09 },
    la_rioja:           { label: 'La Rioja',           itp: 0.07 },
    madrid:             { label: 'Madrid',             itp: 0.06 },
    murcia:             { label: 'Murcia',             itp: 0.08 },
    navarra:            { label: 'Navarra',            itp: 0.06 },
    pais_vasco:         { label: 'País Vasco',         itp: 0.04 },
  };

  const CONTRACT_MSG = {
    indefinido:  'Perfil empleado estable. Las entidades financian habitualmente hasta el 80 % del valor de tasación.',
    autonomo:    'Con 2 años de actividad demostrable y declaraciones actualizadas, la financiación es completamente viable.',
    funcionario: 'Perfil de bajo riesgo. Acceso preferente a las condiciones más competitivas del mercado hipotecario.',
  };

  const DEFAULT_TIN = { fija: 3.5, variable: 2.5, mixta: 3.0 };

  let estadoInmueble = 'segunda_mano';
  let tipoHipoteca   = 'fija';

  function fmtE(n) {
    return new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(Math.round(n)) + ' €';
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
    const price   = parseFloat(priceInput.value);
    const savings = parseFloat(savingsInput.value);
    const years   = parseFloat(yearsInput.value);
    const tin     = parseFloat(tinInput.value) / 100;
    const ccaa    = CCAA[ccaaSel.value] || CCAA.madrid;

    const loan          = Math.max(0, price - savings);
    const monthly       = calcMonthly(loan, tin, years);
    const totalPaid     = monthly * years * 12;
    const totalInterest = Math.max(0, totalPaid - loan);
    const pctFinanc     = price > 0 ? (loan / price * 100).toFixed(0) : 0;

    // Taxes
    let taxRate, taxLabel;
    if (estadoInmueble === 'nuevo') {
      taxRate  = ccaa.igic ? 0.065 : 0.10;
      const taxType = ccaa.igic ? 'IGIC' : 'IVA';
      taxLabel = `${taxType} · ${ccaa.label} (${(taxRate * 100).toFixed(0)}%)`;
    } else {
      taxRate  = ccaa.itp;
      taxLabel = `ITP · ${ccaa.label} (${(taxRate * 100).toFixed(0)}%)`;
    }
    const taxAmount  = price * taxRate;
    const gastos     = price * 0.01;
    const costTotal  = price + taxAmount + gastos;
    const grandTotal = costTotal - savings + totalPaid;

    // Labels
    priceVal.textContent   = new Intl.NumberFormat('es-ES').format(price) + ' €';
    savingsVal.textContent = new Intl.NumberFormat('es-ES').format(savings) + ' €';
    yearsVal.textContent   = years + ' años';
    tinVal.textContent     = (tin * 100).toFixed(2).replace('.', ',') + ' %';

    // Cuota + note
    resQuota.textContent = loan > 0
      ? new Intl.NumberFormat('es-ES').format(Math.round(monthly)) + ' €/mes'
      : '0 €/mes';
    const modalLabels = { fija: 'Hipoteca fija', variable: 'Variable · sujeta a revisión Euribor', mixta: 'Hipoteca mixta' };
    resQuotaNote.textContent = 'Estimación orientativa · ' + (modalLabels[tipoHipoteca] || '');

    // Metrics
    resFinanc.textContent   = fmtE(loan);
    resPct.textContent      = pctFinanc + ' %';
    resTasa.textContent     = (tin * 100).toFixed(2).replace('.', ',') + ' % TIN';
    resIntereses.textContent = fmtE(totalInterest);

    // Breakdown
    resPrecio.textContent    = fmtE(price);
    lblImpuesto.textContent  = taxLabel;
    resImpuesto.textContent  = fmtE(taxAmount);
    resGastos.textContent    = fmtE(gastos);
    resCosteTotal.textContent = fmtE(costTotal);
    resTotalHip.textContent  = fmtE(totalPaid);
    resGrandTotal.textContent = fmtE(grandTotal);

    resMsgEl.textContent = CONTRACT_MSG[contractSel.value] || '';

    [priceInput, savingsInput, yearsInput, tinInput].forEach(updateFill);
  }

  // Toggle buttons (estado + hipoteca)
  simWrap.querySelectorAll('.sim-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      simWrap.querySelectorAll(`.sim-toggle__btn[data-group="${group}"]`)
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (group === 'estado') {
        estadoInmueble = btn.dataset.value;
      } else if (group === 'hipoteca') {
        tipoHipoteca = btn.dataset.value;
        tinInput.value = DEFAULT_TIN[tipoHipoteca] || 3.5;
      }
      calculate();
    });
  });

  [priceInput, savingsInput, yearsInput, tinInput].forEach(inp =>
    inp.addEventListener('input', calculate)
  );
  contractSel.addEventListener('change', calculate);
  ccaaSel.addEventListener('change', calculate);

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
