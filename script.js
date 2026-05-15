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
  const ccaaSel      = document.getElementById('sim-ccaa');

  const priceVal   = document.getElementById('sim-precio-val');
  const savingsVal = document.getElementById('sim-ahorros-val');
  const yearsVal   = document.getElementById('sim-plazo-val');
  const tinVal     = document.getElementById('sim-tin-val');

  const resQuota           = document.getElementById('res-cuota');
  const resQuotaNote       = document.getElementById('res-cuota-note');
  const resFinanc          = document.getElementById('res-financ');
  const resPct             = document.getElementById('res-pct');
  const resTasa            = document.getElementById('res-tasa');
  const resIntereses       = document.getElementById('res-intereses');
  const resPrecio          = document.getElementById('res-precio');
  const lblImpuesto        = document.getElementById('lbl-impuesto');
  const resImpuesto        = document.getElementById('res-impuesto-val');
  const resGastos          = document.getElementById('res-gastos');
  const resTasacion        = document.getElementById('res-tasacion');
  const resCosteTotal      = document.getElementById('res-coste-total');
  const resAhorro          = document.getElementById('res-ahorro');
  const resTotalHip        = document.getElementById('res-total-hipoteca');
  const resInteresesBreakdown = document.getElementById('res-intereses-breakdown');
  const resGrandTotal      = document.getElementById('res-grand-total');
  const resMsgEl           = document.getElementById('res-mensaje-text');

  // itp = segunda mano; ajd = nueva (IVA/IGIC + AJD); igic = Canarias usa IGIC en vez de IVA
  const CCAA = {
    andalucia:          { label: 'Andalucía',          itp: 0.07,  ajd: 0.012  },
    aragon:             { label: 'Aragón',             itp: 0.08,  ajd: 0.015  },
    asturias:           { label: 'Asturias',           itp: 0.08,  ajd: 0.012  },
    baleares:           { label: 'Baleares',           itp: 0.08,  ajd: 0.012  },
    canarias:           { label: 'Canarias',           itp: 0.065, ajd: 0.0075, igic: true },
    cantabria:          { label: 'Cantabria',          itp: 0.10,  ajd: 0.015  },
    castilla_la_mancha: { label: 'Castilla-La Mancha', itp: 0.09,  ajd: 0.009  },
    castilla_y_leon:    { label: 'Castilla y León',    itp: 0.08,  ajd: 0.015  },
    cataluna:           { label: 'Cataluña',           itp: 0.10,  ajd: 0.015  },
    com_valenciana:     { label: 'C. Valenciana',      itp: 0.10,  ajd: 0.015  },
    extremadura:        { label: 'Extremadura',        itp: 0.08,  ajd: 0.015  },
    galicia:            { label: 'Galicia',            itp: 0.09,  ajd: 0.015  },
    la_rioja:           { label: 'La Rioja',           itp: 0.07,  ajd: 0.010  },
    madrid:             { label: 'Madrid',             itp: 0.06,  ajd: 0.0075 },
    murcia:             { label: 'Murcia',             itp: 0.08,  ajd: 0.015  },
    navarra:            { label: 'Navarra',            itp: 0.06,  ajd: 0.005  },
    pais_vasco:         { label: 'País Vasco',         itp: 0.04,  ajd: 0.005  },
  };

  const DEFAULT_TIN  = { fija: 3.5, variable: 2.5 };
  const TASACION     = 400;

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

    // Taxes
    let taxRate, taxLabel;
    if (estadoInmueble === 'nuevo') {
      const ivaRate  = ccaa.igic ? 0.065 : 0.10;
      const ajdRate  = ccaa.ajd || 0;
      taxRate        = ivaRate + ajdRate;
      const taxType  = ccaa.igic ? 'IGIC' : 'IVA';
      const ivaPct   = (ivaRate * 100).toFixed(2);
      const ajdPct   = (ajdRate * 100).toFixed(2);
      taxLabel = `${taxType} + AJD · ${ccaa.label} (${ivaPct}% + ${ajdPct}%)`;
    } else {
      taxRate  = ccaa.itp;
      taxLabel = `ITP · ${ccaa.label} (${(taxRate * 100).toFixed(2)}%)`;
    }
    const taxAmount = price * taxRate;
    const gastos    = price * 0.01;
    const costTotal = price + taxAmount + gastos + TASACION;

    // Loan = everything beyond savings (price + taxes + fees)
    const loan          = Math.max(0, costTotal - savings);
    const monthly       = calcMonthly(loan, tin, years);
    const totalPaid     = monthly * years * 12;
    const totalInterest = Math.max(0, totalPaid - loan);
    const pctFinanc     = costTotal > 0 ? (loan / costTotal * 100).toFixed(0) : 0;

    // Grand total: savings + loan + interest = costTotal + interest
    const grandTotal = costTotal + totalInterest;

    // Slider labels
    priceVal.textContent   = new Intl.NumberFormat('es-ES').format(price) + ' €';
    savingsVal.textContent = new Intl.NumberFormat('es-ES').format(savings) + ' €';
    yearsVal.textContent   = years + ' años';
    tinVal.textContent     = (tin * 100).toFixed(1).replace('.', ',') + ' %';

    // Cuota + note
    resQuota.textContent = loan > 0
      ? new Intl.NumberFormat('es-ES').format(Math.round(monthly)) + ' €/mes'
      : '0 €/mes';
    const modalLabels = { fija: 'Hipoteca fija', variable: 'Variable · sujeta a revisión Euribor' };
    resQuotaNote.textContent = 'Estimación orientativa · ' + (modalLabels[tipoHipoteca] || '');

    // Metrics grid
    resFinanc.textContent    = fmtE(loan);
    resPct.textContent       = pctFinanc + ' %';
    resTasa.textContent      = (tin * 100).toFixed(1).replace('.', ',') + ' % TIN';
    resIntereses.textContent = fmtE(totalInterest);

    // Breakdown — Coste del inmueble
    resPrecio.textContent     = fmtE(price);
    lblImpuesto.textContent   = taxLabel;
    resImpuesto.textContent   = fmtE(taxAmount);
    resGastos.textContent     = fmtE(gastos);
    resTasacion.textContent   = fmtE(TASACION);
    resCosteTotal.textContent = fmtE(costTotal);

    // Breakdown — Financiación total
    resAhorro.textContent            = fmtE(savings);
    resTotalHip.textContent          = fmtE(loan);
    resInteresesBreakdown.textContent = fmtE(totalInterest);
    resGrandTotal.textContent        = fmtE(grandTotal);

    if (resMsgEl) {
      const pct = parseFloat(pctFinanc);
      if (pct > 90) {
        resMsgEl.textContent = 'Financiación superior al 90 %. Algunas entidades financian hasta el 100 % con perfil sólido o inmuebles de banco. Es una operación viable, aunque requiere análisis detallado del perfil crediticio.';
      } else if (pct > 80) {
        resMsgEl.textContent = 'Financiación entre el 80 % y el 90 %. Varias entidades llegan hasta el 90–100 % en función del perfil. Con buena documentación y solvencia demostrable, es una operación completamente viable.';
      } else if (pct > 60) {
        resMsgEl.textContent = 'Financiación dentro del límite habitual del 80 %. Perfil favorable para la aprobación bancaria y acceso a las mejores condiciones del mercado.';
      } else {
        resMsgEl.textContent = 'Financiación conservadora. Excelente posición negociadora para obtener las condiciones más competitivas y reducir el coste total de la operación.';
      }
    }

    [priceInput, savingsInput, yearsInput, tinInput].forEach(updateFill);
  }

  simWrap.querySelectorAll('.sim-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      simWrap.querySelectorAll(`.sim-toggle__btn[data-group="${group}"]`)
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (group === 'estado') {
        estadoInmueble = btn.dataset.value;
      } else if (group === 'hipoteca') {
        tipoHipoteca   = btn.dataset.value;
        tinInput.value = DEFAULT_TIN[tipoHipoteca] || 3.5;
      }
      calculate();
    });
  });

  [priceInput, savingsInput, yearsInput, tinInput].forEach(inp =>
    inp.addEventListener('input', calculate)
  );
  ccaaSel.addEventListener('change', calculate);

  calculate();
})();

/* ── Questionnaire Modal ─────────────────────────────────── */
(function () {
  const CALENDAR_URL = 'https://calendar.app.google/eswZcNy9r4kqvqsMA';

  const CCAA = ['Andalucía','Aragón','Asturias','Islas Baleares','Islas Canarias',
    'Cantabria','Castilla-La Mancha','Castilla y León','Cataluña','Ceuta',
    'Comunidad de Madrid','Comunidad Valenciana','Extremadura','Galicia',
    'La Rioja','Melilla','Región de Murcia','Navarra','País Vasco'];

  const SERVICES = [
    { id: 'nueva_hipoteca',   label: 'Nueva hipoteca' },
    { id: 'mejorar_hipoteca', label: 'Mejorar hipoteca actual' },
    { id: 'reunificar_deuda', label: 'Reunificar deuda' },
    { id: 'otros_servicios',  label: 'Otros servicios' },
  ];

  const TITULAR_FIELDS = [
    { key: 'situacion',  label: 'Situación laboral',           placeholder: 'Asalariado/a, Autónomo/a, Funcionario/a...' },
    { key: 'edad',       label: 'Edad',                        placeholder: 'Ej. 35' },
    { key: 'ingresos',   label: 'Ingresos mensuales netos',    placeholder: 'Ej. 2.500 €' },
    { key: 'antiguedad', label: 'Antigüedad laboral',          placeholder: 'Ej. 5 años' },
    { key: 'pagas',      label: 'Número de pagas anuales',     placeholder: 'Ej. 14' },
    { key: 'deudas',     label: '¿Tienes deudas activas?', type: 'yn_text', placeholder: 'Importe mensual de las deudas (Ej. 350 €/mes)' },
  ];

  const BASE_QUESTIONS = {
    nueva_hipoteca: [
      { id: 'precio', type: 'options', q: '¿Cuál es el precio aproximado de la vivienda?',
        opts: ['Menos de 150.000 €', '150.000 – 300.000 €', '300.000 – 500.000 €', 'Más de 500.000 €'] },
      { id: 'ahorro', type: 'text',   q: '¿Cuánto tienes ahorrado para la entrada?', placeholder: 'Ej. 40.000 €' },
      { id: 'banco',  type: 'text',   q: '¿Con qué banco trabajas actualmente?', placeholder: 'Ej. BBVA, Santander, CaixaBank...' },
      { id: 'ccaa',   type: 'select', q: '¿En qué comunidad autónoma está la vivienda?', opts: CCAA },
      { id: 'num_titulares', type: 'options', q: '¿Cuántos titulares tendrá la hipoteca?',
        opts: ['1', '2', 'Más de 2'], titulares_trigger: true },
    ],
    mejorar_hipoteca: [
      { id: 'ccaa',   type: 'select', q: '¿En qué comunidad autónoma está la vivienda?', opts: CCAA },
      { id: 'num_titulares', type: 'options', q: '¿Cuántas personas solicitan la hipoteca?',
        opts: ['1', '2', 'Más de 2'], titulares_trigger: true },
    ],
    reunificar_deuda: [
      { id: 'tipo_deuda',  type: 'options', q: '¿Qué tipo de deudas tienes?',
        opts: ['Hipoteca + préstamos', 'Solo préstamos / tarjetas', 'Hipoteca + tarjetas'] },
      { id: 'total_deuda', type: 'options', q: '¿Cuál es el total aproximado de tu deuda?',
        opts: ['Menos de 50.000 €', '50.000 – 100.000 €', 'Más de 100.000 €'] },
      { id: 'vivienda',    type: 'options', q: '¿Tienes vivienda propia?',
        opts: ['Sí, con hipoteca', 'Sí, sin hipoteca', 'No'] },
    ],
    otros_servicios: [
      { id: 'servicio', type: 'options', q: '¿Qué servicio te interesa?',
        opts: ['Intermediación inmobiliaria', 'Inversión en Oro', 'Club Privado de Inversores', 'Corredor de Seguros'] },
    ],
  };

  function buildSteps(serviceId, numTitulares) {
    const base = (BASE_QUESTIONS[serviceId] || []).map(q => Object.assign({}, q));
    if ((serviceId === 'nueva_hipoteca' || serviceId === 'mejorar_hipoteca') && numTitulares > 0) {
      const trigIdx = base.findIndex(s => s.titulares_trigger);
      const titSteps = [];
      for (let t = 1; t <= numTitulares; t++) {
        titSteps.push({ id: `titular_${t}`, type: 'titular_form', titular_num: t });
      }
      base.splice(trigIdx + 1, 0, ...titSteps);
    }
    base.push({ id: 'contact', type: 'contact' });
    return base;
  }

  const overlay     = document.getElementById('questModal');
  const content     = document.getElementById('questContent');
  const progressBar = document.getElementById('questProgressBar');
  if (!overlay) return;

  let service = null, step = -1, answers = {}, steps = [];

  function open() {
    service = null; step = -1; answers = {}; steps = [];
    overlay.classList.add('open');
    overlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    render();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function pct() {
    if (step < 0 || !steps.length) return 0;
    return Math.round(((step + 1) / steps.length) * 100);
  }

  function render() {
    progressBar.style.width = pct() + '%';
    content.innerHTML = '';
    if (step === -1) { renderService(); return; }
    const s = steps[step];
    if (!s) return;
    if      (s.type === 'options')      renderOptions(s);
    else if (s.type === 'text')         renderText(s);
    else if (s.type === 'select')       renderSelect(s);
    else if (s.type === 'titular_form') renderTitularForm(s);
    else if (s.type === 'contact')      renderContact();
  }

  function nav(back) {
    return `<div class="quest-nav">
      ${back ? '<button class="quest-back" id="qBack">← Volver</button>' : '<span></span>'}
      <button class="quest-next" id="qNext" disabled>Continuar →</button>
    </div>`;
  }

  function renderService() {
    content.innerHTML = `
      <div class="quest-step-label">¿En qué podemos ayudarte?</div>
      <div class="quest-question">¿Qué necesitas?</div>
      <div class="quest-options">
        ${SERVICES.map(s => `<button class="quest-option${service === s.id ? ' selected' : ''}" data-svc="${s.id}">${s.label}</button>`).join('')}
      </div>
      <div class="quest-nav"><span></span><button class="quest-next" id="qNext"${!service ? ' disabled' : ''}>Continuar →</button></div>`;
    content.querySelectorAll('.quest-option').forEach(b => b.addEventListener('click', () => {
      service = b.dataset.svc;
      content.querySelectorAll('.quest-option').forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
      content.querySelector('#qNext').disabled = false;
    }));
    content.querySelector('#qNext').addEventListener('click', () => {
      if (!service) return;
      steps = buildSteps(service, 0);
      step = 0; render();
    });
  }

  function renderOptions(s) {
    const sel = answers[s.id];
    content.innerHTML = `
      <div class="quest-step-label">Paso ${step + 1} de ${steps.length - 1}</div>
      <div class="quest-question">${s.q}</div>
      <div class="quest-options">
        ${s.opts.map(o => `<button class="quest-option${sel === o ? ' selected' : ''}" data-val="${o}">${o}</button>`).join('')}
      </div>
      ${nav(step > 0)}`;
    if (sel) content.querySelector('#qNext').disabled = false;
    content.querySelectorAll('.quest-option').forEach(b => b.addEventListener('click', () => {
      answers[s.id] = b.dataset.val;
      content.querySelectorAll('.quest-option').forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
      content.querySelector('#qNext').disabled = false;
      if (s.titulares_trigger) {
        const n = b.dataset.val === '1' ? 1 : b.dataset.val === '2' ? 2 : 3;
        steps = buildSteps(service, n);
      }
    }));
    content.querySelector('#qNext').addEventListener('click', () => {
      if (!answers[s.id]) return;
      if (s.titulares_trigger) {
        const n = answers[s.id] === '1' ? 1 : answers[s.id] === '2' ? 2 : 3;
        steps = buildSteps(service, n);
      }
      step++; render();
    });
    if (step > 0) content.querySelector('#qBack').addEventListener('click', () => { step--; render(); });
  }

  function renderText(s) {
    const val = answers[s.id] || '';
    content.innerHTML = `
      <div class="quest-step-label">Paso ${step + 1} de ${steps.length - 1}</div>
      <div class="quest-question">${s.q}</div>
      <div class="quest-text-wrap">
        <input class="quest-input" id="qIn" type="text" placeholder="${s.placeholder || ''}" value="${val}" autocomplete="off" />
      </div>
      ${nav(step > 0)}`;
    if (val) content.querySelector('#qNext').disabled = false;
    const inp = content.querySelector('#qIn');
    inp.addEventListener('input', () => {
      answers[s.id] = inp.value.trim() || null;
      content.querySelector('#qNext').disabled = !inp.value.trim();
    });
    content.querySelector('#qNext').addEventListener('click', () => { if (answers[s.id]) { step++; render(); } });
    if (step > 0) content.querySelector('#qBack').addEventListener('click', () => { step--; render(); });
    inp.focus();
  }

  function renderSelect(s) {
    const sel = answers[s.id] || '';
    content.innerHTML = `
      <div class="quest-step-label">Paso ${step + 1} de ${steps.length - 1}</div>
      <div class="quest-question">${s.q}</div>
      <div class="quest-select-wrap">
        <select class="quest-select" id="qSel">
          <option value="">— Selecciona una opción —</option>
          ${s.opts.map(o => `<option value="${o}"${sel === o ? ' selected' : ''}>${o}</option>`).join('')}
        </select>
      </div>
      ${nav(step > 0)}`;
    if (sel) content.querySelector('#qNext').disabled = false;
    content.querySelector('#qSel').addEventListener('change', e => {
      answers[s.id] = e.target.value || null;
      content.querySelector('#qNext').disabled = !e.target.value;
    });
    content.querySelector('#qNext').addEventListener('click', () => { if (answers[s.id]) { step++; render(); } });
    if (step > 0) content.querySelector('#qBack').addEventListener('click', () => { step--; render(); });
  }

  function renderTitularForm(s) {
    const val = answers[s.id] || {};
    const regularFields = TITULAR_FIELDS.filter(f => f.type !== 'yn_text');
    const ynFields      = TITULAR_FIELDS.filter(f => f.type === 'yn_text');
    content.innerHTML = `
      <div class="quest-step-label">Titular ${s.titular_num} · Paso ${step + 1} de ${steps.length - 1}</div>
      <div class="quest-question">Datos del Titular ${s.titular_num}</div>
      <div class="quest-titular-form">
        ${regularFields.map(f => `
          <div class="quest-field">
            <label class="quest-label">${f.label}</label>
            <input class="quest-input" data-key="${f.key}" type="text" placeholder="${f.placeholder}" value="${(val[f.key] || '').replace(/"/g, '&quot;')}" autocomplete="off" />
          </div>`).join('')}
        ${ynFields.map(f => `
          <div class="quest-field">
            <label class="quest-label">${f.label}</label>
            <div class="quest-yn">
              <button type="button" class="quest-yn-btn${val[f.key+'_yn']==='no'?' active':''}" data-yn-field="${f.key}" data-yn="no">No</button>
              <button type="button" class="quest-yn-btn${val[f.key+'_yn']==='si'?' active':''}" data-yn-field="${f.key}" data-yn="si">Sí</button>
            </div>
            <input class="quest-input" data-key="${f.key}_importe" type="text" placeholder="${f.placeholder}"
                   value="${(val[f.key+'_importe']||'').replace(/"/g,'&quot;')}"
                   style="display:${val[f.key+'_yn']==='si'?'block':'none'};margin-top:8px" autocomplete="off" />
          </div>`).join('')}
      </div>
      ${nav(step > 0)}`;

    content.querySelectorAll('.quest-yn-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const field = btn.dataset.ynField;
        content.querySelectorAll(`[data-yn-field="${field}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const inp = content.querySelector(`[data-key="${field}_importe"]`);
        inp.style.display = btn.dataset.yn === 'si' ? 'block' : 'none';
        if (btn.dataset.yn === 'si') inp.focus(); else inp.value = '';
        checkFields();
      });
    });

    function checkFields() {
      const data = {};
      content.querySelectorAll('[data-key]').forEach(i => { if (i.value.trim()) data[i.dataset.key] = i.value.trim(); });
      content.querySelectorAll('.quest-yn-btn.active').forEach(b => { data[b.dataset.ynField + '_yn'] = b.dataset.yn; });
      const firstFilled = content.querySelector('[data-key="situacion"]').value.trim();
      content.querySelector('#qNext').disabled = !firstFilled;
      answers[s.id] = Object.keys(data).length ? data : null;
    }
    content.querySelectorAll('[data-key]').forEach(i => i.addEventListener('input', checkFields));
    checkFields();
    content.querySelector('#qNext').addEventListener('click', () => {
      const data = {};
      content.querySelectorAll('[data-key]').forEach(i => { if (i.value.trim()) data[i.dataset.key] = i.value.trim(); });
      content.querySelectorAll('.quest-yn-btn.active').forEach(b => { data[b.dataset.ynField + '_yn'] = b.dataset.yn; });
      answers[s.id] = data;
      step++; render();
    });
    if (step > 0) content.querySelector('#qBack').addEventListener('click', () => { step--; render(); });
    content.querySelector('[data-key="situacion"]').focus();
  }

  function renderContact() {
    progressBar.style.width = '100%';
    const a = answers._contact || {};
    content.innerHTML = `
      <div class="quest-step-label">Último paso</div>
      <div class="quest-question">¿Cómo nos ponemos en contacto contigo?</div>
      <div class="quest-contact-form">
        <input class="quest-input" id="qNombre" type="text"  placeholder="Nombre completo"    value="${a.nombre   || ''}" />
        <input class="quest-input" id="qEmail"  type="email" placeholder="Correo electrónico" value="${a.email    || ''}" />
        <input class="quest-input" id="qTel"    type="tel"   placeholder="Teléfono"            value="${a.telefono || ''}" />
      </div>
      <div class="quest-nav" style="flex-direction:column;gap:12px;align-items:stretch;margin-top:24px">
        <button class="quest-book-btn" id="qBook" disabled>Solicitar llamada →</button>
        <button class="quest-back" id="qBack" style="align-self:flex-start">← Volver</button>
      </div>`;
    const nombre = content.querySelector('#qNombre');
    const email  = content.querySelector('#qEmail');
    const tel    = content.querySelector('#qTel');
    const book   = content.querySelector('#qBook');
    function check() {
      const ok = nombre.value.trim() && email.value.includes('@') && tel.value.trim().length >= 9;
      book.disabled = !ok;
      answers._contact = { nombre: nombre.value.trim(), email: email.value.trim(), telefono: tel.value.trim() };
    }
    [nombre, email, tel].forEach(i => i.addEventListener('input', check));
    check();
    book.addEventListener('click', () => {
      book.disabled = true;
      window.open(CALENDAR_URL, '_blank', 'noopener,noreferrer');
      close();
      const payload = {};
      Object.keys(answers).forEach(key => {
        if (key === '_contact') {
          Object.assign(payload, answers._contact);
        } else if (answers[key] && typeof answers[key] === 'object') {
          const obj = answers[key];
          const processed = {};
          Object.keys(obj).forEach(f => {
            if (f.endsWith('_yn')) {
              const base = f.replace('_yn', '');
              processed[base] = obj[f] === 'no' ? 'No' : (obj[base + '_importe'] || 'Sí');
            } else if (!f.endsWith('_importe')) {
              processed[f] = obj[f];
            }
          });
          Object.keys(processed).forEach(f => { payload[`${key} - ${f}`] = processed[f]; });
        } else {
          payload[key] = answers[key];
        }
      });
      const serviceLabel = (SERVICES.find(s => s.id === service) || {}).label || service;
      payload._subject = `Lead NortFinance · ${payload.nombre} · ${serviceLabel}`;
      payload._replyto = payload.email;
      fetch('https://formspree.io/f/xrejngqv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    });
    content.querySelector('#qBack').addEventListener('click', () => { step--; render(); });
    nombre.focus();
  }

  document.querySelectorAll('[data-estudio]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); open(); }));
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  overlay.querySelector('.quest-close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });
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
