(function () {
  'use strict';

  var T = {
    es: {
      /* ── Navbar ─────────────────────────────── */
      'nav.mortgages': 'Hipotecas',
      'nav.services': 'Servicios',
      'nav.resources': 'Recursos',
      'nav.contact': 'Contacto',
      'nav.cases': 'Casos de éxito',
      'nav.cta': 'Mi Estudio Gratuito',
      'nav.aria': 'Abrir menú',

      /* ── Hero ───────────────────────────────── */
      'hero.badge': 'Firma de Asesoramiento Hipotecario',
      'hero.title': 'Hipoteca, Inversión<br />y <span class="text-gold">Estrategia Patrimonial</span>',
      'hero.subtitle': 'Gestionamos tu hipoteca, optimizamos tus inversiones y protegemos tu patrimonio.<br class="desktop-break" />Una firma familiar con criterios reales y resultados medibles.',
      'hero.cta2': 'Cómo trabajamos →',
      'hero.trust1': 'Sin compromiso inicial',
      'hero.trust2': '100% Transparentes',
      'hero.trust3': 'Respuesta en 24h',

      /* ── Stats ──────────────────────────────── */
      'stats.mortgages': 'Hipotecas gestionadas',
      'stats.banks': 'Entidades bancarias',
      'stats.transparent': 'Transparentes',
      'stats.response': 'Respuesta garantizada',

      /* ── Why ────────────────────────────────── */
      'why.tag': 'Nuestra diferencia',
      'why.title': '¿Por qué elegir <span class="text-gold">NortFinance?</span>',
      'why.c1.title': 'Cercanía real,<br /><span class="text-gold">no automatizada</span>',
      'why.c1.text': 'Trabajamos contigo directamente, de persona a persona. Sin formularios que nadie lee ni bots que responden.',
      'why.c2.title': 'Estrategia adaptada<br /><span class="text-gold">a tu situación</span>',
      'why.c2.text': 'Cada cliente es único. Analizamos tu perfil en profundidad para encontrar la solución coherente con tu realidad.',
      'why.c3.title': 'Transparencia<br /><span class="text-gold">desde el primer momento</span>',
      'why.c3.text': 'Te decimos la verdad sobre viabilidad, opciones y condiciones reales.',
      'why.c4.title': 'Acompañamiento<br /><span class="text-gold">durante todo el proceso</span>',
      'why.c4.text': 'Estamos a tu lado desde el análisis inicial hasta la firma notarial.',

      /* ── First call ─────────────────────────── */
      'firstcall.tag': 'Primera toma de contacto',
      'firstcall.title': 'Lo que obtendrás en tu<br /><span class="text-gold">primera llamada</span>',
      'firstcall.desc': 'Una toma de contacto para entender tu situación, resolver tus dudas y definir la mejor estrategia hipotecaria para ti.',
      'firstcall.tag1': '✦ Asesoramiento estratégico',
      'firstcall.tag2': '✦ Proceso personalizado',
      'firstcall.tag3': '✦ Sin compromiso inicial',
      'firstcall.c1.title': 'Análisis Personalizado',
      'firstcall.c1.text': 'Revisamos tu situación financiera completa, ingresos y objetivos para trazar la estrategia más adecuada a tu perfil.',
      'firstcall.c2.title': 'Opciones Realistas',
      'firstcall.c2.text': 'Te orientamos sobre viabilidad real, rangos de financiación y condiciones según tu perfil. Sin falsas promesas ni expectativas infladas.',
      'firstcall.c3.title': 'Resolución de Dudas',
      'firstcall.c3.text': 'Te explicamos el proceso completo con claridad y lenguaje sencillo. Saldrás con las ideas claras sobre tu próximo paso.',

      /* ── Proceso ────────────────────────────── */
      'proceso.tag': 'Paso a paso',
      'proceso.title': 'Así será tu <span class="text-gold">proceso</span>',
      'proceso.s1.title': 'Primera toma de contacto',
      'proceso.s1.text': 'Entendemos tu situación y objetivos. Sin compromiso de ningún tipo.',
      'proceso.s2.title': 'Análisis estratégico',
      'proceso.s2.text': 'Estudiamos tu viabilidad y definimos las opciones reales disponibles para tu perfil.',
      'proceso.s3.title': 'Búsqueda y negociación',
      'proceso.s3.text': 'En función de tu perfil financiero y de tus necesidades, acudimos a los bancos que con anterioridad sabemos que pueden encajar.',
      'proceso.s4.title': 'Acompañamiento final',
      'proceso.s4.text': 'Te guiamos hasta la firma final y la resolución definitiva de la operación.',

      /* ── Testimonials ───────────────────────── */
      'testimonios.tag': 'Clientes reales',
      'testimonios.title': 'Lo que dicen nuestros <span class="text-gold">clientes</span>',
      'testimonios.q1': '"Desde el primer día nos sentimos en buenas manos. Todo muy claro, sin sorpresas, y con un resultado mejor del esperado. Sin NortFinance no habríamos conseguido las condiciones que tenemos ahora."',
      'testimonios.q1.role': 'Primera vivienda · Barcelona',
      'testimonios.q2': '"Dos bancos me habían dicho que no. NortFinance encontró la solución en dos semanas. Proceso directo, sin rodeos y con resultado. No volvería a gestionar una hipoteca sin ellos."',
      'testimonios.q2.role': 'Autónomo · Madrid',
      'testimonios.q3': '"Trato cercano y muy profesional en todo momento. Nos guiaron sin agobios, resolvieron cada duda y el resultado superó lo que esperábamos. Repetiríamos sin dudarlo."',
      'testimonios.q3.role': 'Segunda residencia · Valencia',

      /* ── FAQ ────────────────────────────────── */
      'faq.tag': 'Preguntas frecuentes',
      'faq.title': 'Todo lo que<br />necesitas <span class="text-gold">saber</span>',
      'faq.desc': '¿Tienes dudas? Aquí respondemos las preguntas más habituales de nuestros clientes antes de empezar.',
      'faq.cta': 'Hacer una pregunta →',
      'faq.q1.q': '¿Cómo es el proceso de trabajo?',
      'faq.q1.a': 'Comenzamos con una primera llamada sin compromiso para entender tu situación. A continuación hacemos un análisis estratégico de tu perfil, consultamos más de 20 entidades bancarias para encontrar las mejores condiciones y te acompañamos durante todo el proceso hasta la firma notarial.',
      'faq.q2.q': '¿Cuándo se realiza el primer pago?',
      'faq.q2.a': 'Se firma un contrato de aceptación de servicio, donde se especifican claramente los pagos a realizar.',
      'faq.q3.q': '¿Qué documentación necesitaré?',
      'faq.q3.a': 'La documentación básica incluye: DNI/NIE, 3 últimas nóminas, última renta, extractos bancarios, recibos de deudas (si las hay), información sobre la vivienda a comprar (nota simple), contrato de arras (si existe) y vida laboral. Te guiaremos en cada paso para que el proceso sea lo más sencillo posible.',
      'faq.q4.q': '¿Trabajáis cada caso de forma personalizada?',
      'faq.q4.a': 'Absolutamente. Cada cliente tiene una situación financiera, objetivos y circunstancias únicas. Nunca usamos plantillas genéricas; analizamos tu caso en profundidad para ofrecerte la estrategia hipotecaria más adecuada a tu realidad concreta.',
      'faq.q5.q': '¿Qué diferencia a NortFinance de un banco?',
      'faq.q5.a': 'Un banco solo puede ofrecerte sus propios productos. NortFinance es una firma de asesoramiento que trabaja exclusivamente para ti: consultamos más de 20 bancos y negociamos en tu nombre para conseguir las mejores condiciones del mercado. Tu interés es siempre nuestra única prioridad.',
      'faq.q6.q': '¿Puedo contactar durante el proceso?',
      'faq.q6.a': 'Por supuesto. Estamos disponibles en todo momento para resolver tus dudas, actualizar el estado de tu operación y acompañarte en cada decisión. Garantizamos respuesta en menos de 24 horas laborables.',

      /* ── CTA final ──────────────────────────── */
      'cta.tag': 'Empieza hoy',
      'cta.title': 'Toma decisiones financieras<br />con total <span class="text-gold">claridad</span>',
      'cta.text': 'Te acompañamos durante todo el proceso con un enfoque cercano, transparente<br class="desktop-break" />y completamente adaptado a tu situación.',
      'cta.btn2': 'Escríbenos',

      /* ── Hipotecas hero ─────────────────────── */
      'hipo.tag': 'Broker Hipotecario',
      'hipo.title': 'Tus necesidades,<br />nuestra <span class="text-gold">estrategia.</span>',
      'hipo.subtitle': 'Cada perfil financiero es único. Diseñamos la estrategia hipotecaria que encaja con tu situación real, no con una plantilla.',
      'hipo.cta1': 'Mi Estudio Gratuito',
      'hipo.cta2': 'Ver casos',
      'hipo.stat1': 'operaciones gestionadas',
      'hipo.stat2': 'entidades bancarias',
      'hipo.stat3': 'ahorro medio por cliente',

      /* ── Para quién ─────────────────────────── */
      'pq.tag': 'Cada situación tiene su estrategia',
      'pq.title': 'Trabajamos con <span class="text-gold">todos los perfiles</span>',
      'pq.c1.tag': 'Más habitual',
      'pq.c1.title': 'Primera vivienda',
      'pq.c1.desc': 'El paso más importante de tu vida merece la mejor estrategia. Analizamos tu capacidad real, buscamos la financiación óptima y te guiamos desde el primer "quiero comprar" hasta la firma notarial. Sin sorpresas, con total claridad.',
      'pq.c2.tag': 'Perfil especial',
      'pq.c2.title': 'Autónomos',
      'pq.c2.desc': 'Sabemos cómo presentar tu perfil para que los bancos vean tu solvencia real más allá de la nómina. Experiencia contrastada con autónomos de todos los sectores.',
      'pq.c3.tag': 'Mejorar condiciones',
      'pq.c3.title': 'Cambio de hipoteca',
      'pq.c3.desc': 'Si tienes hipoteca y crees que puedes mejorar tus condiciones, tienes razón. Analizamos si una subrogación o novación te conviene y gestionamos todo el proceso.',
      'pq.c4.tag': 'Patrimonio',
      'pq.c4.title': 'Segunda residencia',
      'pq.c4.desc': 'La financiación de una segunda vivienda tiene condiciones distintas a la habitual. Conocemos las particularidades de cada entidad y buscamos la propuesta más eficiente para tu patrimonio.',
      'pq.c5.tag': 'Rentabilidad',
      'pq.c5.title': 'Inversión',
      'pq.c5.desc': 'Para compradores con visión patrimonial. Estructuramos la financiación para maximizar el retorno y optimizar el apalancamiento en cada operación.',
      'pq.c6.tag': 'Hasta el 100%',
      'pq.c6.title': 'Jóvenes compradores',
      'pq.c6.desc': 'Acompañamiento especializado para primeros compradores. Exploramos vías de financiación ampliada y ayudas disponibles para perfiles jóvenes con alto potencial.',
      'pq.c7.tag': 'Perfil especial',
      'pq.c7.title': 'No residentes',
      'pq.c7.desc': 'Somos conscientes de la complejidad que implica para los no residentes en España el conseguir una hipoteca. Por eso sabemos exactamente a qué bancos acudir para vosotros.',
      'pq.c8.tag': 'Proyecto propio',
      'pq.c8.title': 'Autopromoción',
      'pq.c8.desc': 'Financiación especializada para proyectos de autopromoción. Analizamos la viabilidad económica del proyecto, te acompañamos durante todo el proceso y coordinamos documentación, certificaciones de obra y aprobación bancaria.',

      /* ── Que hacemos (hipotecas) ─────────────── */
      'qh.tag': 'Nuestro método',
      'qh.title': 'Lo que <span class="text-gold">hacemos</span><br />por ti.',
      'qh.s1.title': 'Analizamos tu perfil financiero',
      'qh.s1.desc': 'Estudiamos en profundidad tu situación económica, ingresos, ahorros y objetivos a largo plazo. Solo con ese mapa completo definimos qué hipoteca tiene sentido real para ti.',
      'qh.s2.title': 'Comparamos opciones',
      'qh.s2.desc': 'Consultamos más de 20 entidades bancarias —incluyendo alternativas que no están en comparadores públicos— para construir un mapa real de las mejores condiciones disponibles.',
      'qh.s3.title': 'Negociamos condiciones',
      'qh.s3.desc': 'Presentamos tu perfil de la forma más sólida y favorable. Negociamos contigo como protagonista: tipo de interés, plazos, vinculaciones y comisiones están sobre la mesa.',
      'qh.s4.title': 'Te acompañamos hasta la firma',
      'qh.s4.desc': 'No desaparecemos al conseguir la aprobación. Coordinamos tasación, revisamos la documentación final y estamos contigo hasta el día de la firma. Cierre total de la operación.',

      /* ── Diferencia pillars ──────────────────── */
      'dif.tag': 'Nuestros pilares',
      'dif.title': 'Por qué nos<br />eligen a <span class="text-gold">nosotros.</span>',
      'dif.desc': 'Cinco pilares que definen cómo trabajamos y por qué nuestros clientes nos recomiendan. No son valores de marketing — son compromisos que cumplimos operación a operación.',
      'dif.p1.title': 'Cercanía real',
      'dif.p1.desc': 'Trabajamos de tú a tú. Una persona real que conoce tu caso, responde tus llamadas y entiende lo que necesitas. Sin procesos automatizados, sin respuestas genéricas.',
      'dif.p2.title': 'Tú eres nuestro cliente.',
      'dif.p2.desc': 'Un banco trabaja para su entidad, nosotros trabajamos para ti.',
      'dif.p3.title': 'Estrategia personalizada',
      'dif.p3.desc': 'Cada perfil es distinto. Diseñamos la estrategia hipotecaria que encaja con tu realidad concreta, no con una plantilla estándar.',
      'dif.p4.title': 'Transparencia total',
      'dif.p4.desc': 'Te decimos la verdad desde el primer momento: viabilidad real, condiciones exactas y costes sin letra pequeña. Nunca vendemos humo ni creamos falsas expectativas.',
      'dif.p5.title': 'Experiencia probada',
      'dif.p5.desc': 'Más de 200 operaciones gestionadas con éxito en perfiles muy distintos. Sabemos lo que funciona y lo que no, y eso marca la diferencia en el resultado final.',

      /* ── Hipo CTA ───────────────────────────── */
      'hipo.cta.tag': 'Empieza ahora',
      'hipo.cta.title': '¿Listo para conseguir<br />la mejor <span class="text-gold">hipoteca?</span>',
      'hipo.cta.text': 'Cuéntanos tu situación y te ayudamos a encontrar la hipoteca que realmente encaja con tu perfil.',

      /* ── Footer ─────────────────────────────── */
      'footer.desc': 'Firma de asesoramiento financiero y soluciones hipotecarias premium. Tu hipoteca, tu inversión y tu patrimonio, gestionados con criterio real.',
      'footer.nav.heading': 'Navegación',
      'footer.services.heading': 'Servicios',
      'footer.contact.heading': 'Contacto',
      'footer.nav.home': 'Inicio',
      'footer.nav.mortgages': 'Hipotecas',
      'footer.nav.services': 'Servicios',
      'footer.nav.resources': 'Recursos',
      'footer.nav.contact': 'Contacto',
      'footer.nav.cases': 'Casos de éxito',
      'footer.nav.partners': 'Partners',
      'footer.s1': 'Hipotecas Primera Vivienda',
      'footer.s2': 'Intermediación Inmobiliaria',
      'footer.s3': 'Inversión en Oro',
      'footer.s4': 'Club Privado de Inversores',
      'footer.s5': 'Corredor de Seguros',
      'footer.sim': 'Simulador de hipoteca',
      'footer.estudio': 'Estudio gratuito',
      'footer.hours': 'Lun–Vie · 9:00 – 19:00h',
      'footer.location': 'España',
      'footer.cta': 'Mi Estudio Gratuito',
      'footer.copy': '© 2026 NortFinance. Todos los derechos reservados.',
      'footer.privacy': 'Política de privacidad',
      'footer.cookies': 'Cookies',
      'footer.legal': 'Aviso legal',
      'footer.terms': 'Condiciones generales',

      /* ── Collaborators section (index) ──────── */
      'collab.tag': 'Nuestros colaboradores',
      'collab.title': 'Empresas que confían en <span class="text-gold">nosotros</span>',
      'collab.desc': 'Trabajamos mano a mano con empresas del sector inmobiliario y de construcción para ofrecerte un servicio integral — desde la financiación hasta las llaves.',
      'collab.btn': 'Ver colaboradores →',

      /* ── Servicios page ─────────────────────── */
      'srv.hero.badge': 'Servicios · NortFinance',
      'srv.hero.title': 'Soluciones Financieras y<br /><span class="text-gold">Patrimoniales</span>',
      'srv.hero.desc': 'Ofrecemos un asesoramiento integral, cercano y estratégico. Nos encargamos de todo el proceso para proteger y hacer crecer tu patrimonio.',
      'srv.arch.tag': 'Arquitectura de servicios',
      'srv.arch.title': 'Lo que hacemos <span class="text-gold">por ti</span>',
      'srv.c1.tag': 'Financiación',
      'srv.c1.title': 'Tipos de Hipotecas',
      'srv.c1.desc': 'Te ofreceremos la hipoteca que mejor se adapte a tus necesidades en función de tu edad, ingresos, necesidad de financiación y cuota máxima que puedes asumir. Financiación desde el 100% hasta lo que necesites.',
      'srv.c1.l1': 'Subrogaciones',
      'srv.c1.l2': 'Novaciones',
      'srv.c1.l3': 'Reunificación de deuda',
      'srv.c2.tag': 'Inmobiliaria',
      'srv.c2.title': 'Intermediación Inmobiliaria',
      'srv.c2.desc': 'Te acompaño en todo el proceso de compra o venta de inmuebles, ofreciendo un servicio integral y cercano.',
      'srv.c2.l1': 'Venta de propiedades',
      'srv.c2.l2': 'Búsqueda de oportunidades',
      'srv.c2.l3': 'Valoración de inmuebles',
      'srv.c2.l4': 'Estrategia de comercialización',
      'srv.c2.l5': 'Coordinación documental',
      'srv.c3.tag': 'Inversión',
      'srv.c3.title': 'Asesoramiento en Inversiones (Unit Linked)',
      'srv.c3.desc': 'Te ayudo a construir una estrategia patrimonial adaptada a tus objetivos y perfil de riesgo mediante soluciones de inversión vinculadas a seguros de vida ahorro.',
      'srv.c3.l1': 'Planificación patrimonial',
      'srv.c3.l2': 'Optimización fiscal',
      'srv.c3.l3': 'Inversión a largo plazo',
      'srv.c3.l4': 'Diversificación financiera',
      'srv.c4.tag': 'Activo refugio',
      'srv.c4.title': 'Inversión en Oro',
      'srv.c4.desc': 'Asesoramiento en inversión en oro físico como activo refugio y diversificación patrimonial.',
      'srv.c4.l1': 'Oro de inversión',
      'srv.c4.l2': 'Lingotes certificados',
      'srv.c4.l3': 'Preservación patrimonial',
      'srv.c4.l4': 'Compra segura y almacenamiento',
      'srv.c5.tag': 'Protección',
      'srv.c5.title': 'Corredor de Seguros',
      'srv.c5.desc': 'Como agentes de seguros, buscamos soluciones adaptadas a cada cliente y situación.',
      'srv.c5.l1': 'Seguro de vida',
      'srv.c5.l2': 'Seguro de hogar',
      'srv.c5.l3': 'Protección de hipoteca e impagos',
      'srv.c6.tag': 'Alto impacto',
      'srv.c6.title': 'Inversión Inmobiliaria',
      'srv.c6.desc': 'Analizo oportunidades inmobiliarias para identificar operaciones con potencial de rentabilidad y revalorización. Ayudo a inversores y compradores a tomar decisiones basadas en criterios financieros reales, estudiando la viabilidad y el potencial de cada activo.',
      'srv.c6.l1': 'Análisis de rentabilidad',
      'srv.c6.l2': 'Estudio de revalorización del inmueble',
      'srv.c6.l3': 'Evaluación de riesgo y viabilidad',
      'srv.c6.l4': 'Estrategias de inversión patrimonial',
      'srv.c6.l5': 'Inversiones para alquiler o reventa',
      'srv.c6.quote': 'Además, formo parte de una red y club privado de inversores inmobiliarios especializados en operaciones de compra, rehabilitación y venta de inmuebles con objetivos de rentabilidad aproximados entre el <strong>15% y el 25%</strong>, según la operación y condiciones de mercado.',
      'srv.cta.tag': '¿Hablamos?',
      'srv.cta.title': 'Diseñemos juntos tu próxima<br /><span class="text-gold">estrategia financiera</span>',
      'srv.cta.desc': 'El primer paso es gratuito. Cuéntanos tu situación y te proponemos el mejor camino.',
      'srv.cta.btn2': 'Escríbenos',

      /* ── Recursos page ──────────────────────── */
      'rec.hero.badge': 'Recursos · NortFinance',
      'rec.hero.title': 'Conocimiento Financiero para<br /><span class="text-gold">Tomar Decisiones Claras</span>',
      'rec.hero.desc': 'Aportamos valor antes de vender. Explora nuestras guías, consejos prácticos y herramientas interactivas diseñadas para darte total claridad en tu estrategia hipotecaria.',
      'rec.sim.eyebrow': 'Herramienta Interactiva',
      'rec.sim.title': 'Simula tu Hipoteca<br /><span class="text-gold">en Tiempo Real</span>',
      'rec.sim.heading': 'Parámetros de tu operación',
      'rec.sim.g1': 'El Inmueble',
      'rec.sim.g2': 'Tu Financiación',
      'rec.sim.g3': 'Tipo de Interés',
      'rec.sim.precio': 'Precio de la vivienda',
      'rec.sim.ccaa': 'Comunidad Autónoma',
      'rec.sim.estado': 'Estado del inmueble',
      'rec.sim.estado.used': 'Segunda mano',
      'rec.sim.estado.new': 'Vivienda nueva',
      'rec.sim.ahorros': 'Ahorros aportados',
      'rec.sim.plazo': 'Plazo de la hipoteca',
      'rec.sim.modalidad': 'Modalidad hipotecaria',
      'rec.sim.mod.fixed': 'Fija',
      'rec.sim.mod.var': 'Variable',
      'rec.sim.tin': 'Tipo de interés',
      'rec.sim.res.eyebrow': 'Cuota Mensual Estimada',
      'rec.sim.m1': 'Financiación necesaria',
      'rec.sim.m2': '% Financiación',
      'rec.sim.m3': 'TIN aplicado',
      'rec.sim.m4': 'Total intereses',
      'rec.sim.bd1.title': 'Coste del inmueble',
      'rec.sim.bd1.r1': 'Precio del inmueble',
      'rec.sim.bd1.r3': 'Notaría, registro y gestoría (~1%)',
      'rec.sim.bd1.r4': 'Tasación del inmueble (~400 €)',
      'rec.sim.bd1.total': 'Coste total del inmueble',
      'rec.sim.bd2.title': 'Financiación total',
      'rec.sim.bd2.r1': 'Ahorro aportado',
      'rec.sim.bd2.r2': 'Importe hipoteca solicitada',
      'rec.sim.bd2.r3': 'Intereses de la hipoteca',
      'rec.sim.bd2.total': 'Coste total con hipoteca',
      'rec.sim.cta': 'Validar Estudio Gratis con un Asesor',
      'rec.guides.eyebrow': 'Base de Conocimiento',
      'rec.guides.title': 'Guías Hipotecarias<br /><span class="text-gold">y Consejos Prácticos</span>',
      'rec.g1.tag': 'Guía Completa',
      'rec.g1.title': 'Guía Hipotecaria Premium',
      'rec.g1.desc': 'Explicaciones simples sobre financiación y cómo prepararse para el banco. Todo lo que necesitas saber antes de iniciar el proceso.',
      'rec.g2.tag': 'Consejos Prácticos',
      'rec.g2.title': 'Consejos para Compradores',
      'rec.g2.desc': 'Los errores comunes al elegir tu primera vivienda y cómo evitarlos. Decisiones que marcan la diferencia en el largo plazo.',
      'rec.g3.tag': 'Autónomos',
      'rec.g3.title': 'Recursos para Autónomos',
      'rec.g3.desc': 'Cómo presentar tu perfil financiero para garantizar la aprobación de la firma. Estrategias específicas para trabajadores por cuenta propia.',
      'rec.g4.tag': 'Documentación',
      'rec.g4.title': 'Documentación Necesaria',
      'rec.g4.desc': 'La lista de control definitiva con los papeles que te pedirán para el estudio. Sin sorpresas ni retrasos en el proceso de aprobación.',
      'rec.g5.tag': 'Comparativas',
      'rec.g5.title': 'Comparativas Directas',
      'rec.g5.desc': 'Hipoteca Fija vs. Variable vs. Mixta: ¿Cuál se adapta a la situación actual? Análisis objetivo para elegir con criterio real.',
      'rec.g6.tag': 'FAQ',
      'rec.g6.title': 'Dudas Frecuentes de la Firma',
      'rec.g6.desc': 'Resolución de las preguntas clave antes de dar el próximo paso. Claridad total sobre nuestro proceso y metodología de trabajo.',
      'rec.g.footer': 'Próximamente',
      'rec.cta.eyebrow': 'Da el Próximo Paso',
      'rec.cta.title': 'Tu estrategia financiera<br />merece <span class="text-gold">claridad absoluta</span>',
      'rec.cta.desc': 'Hablemos de tu caso y usemos criterios reales para encontrar tu viabilidad.',
      'rec.cta.btn2': 'Escríbenos',

      /* ── Article pages — structural UI ────────── */
      /* guia-hipotecaria-completa */
      'art.guia.tag': 'Guía Hipotecaria · 2026',
      'art.guia.title': 'Guía Hipotecaria Completa 2026:<br />Todo lo que Necesitas Saber',
      'art.guia.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 12 min de lectura',
      'art.guia.breadcrumb': 'Guía Hipotecaria Completa',
      'art.guia.cta.h2': '¿Listo para Empezar tu Proceso Hipotecario?',
      'art.guia.cta.p': 'Te hacemos un estudio personalizado gratuito y sin compromiso. Analizamos tu perfil y te decimos exactamente qué hipoteca puedes conseguir.',
      'art.guia.cta.btn': 'Solicitar Estudio Gratuito →',

      /* hipoteca-primera-vivienda */
      'art.pv.tag': 'Primera Vivienda · 2026',
      'art.pv.title': 'Cómo Comprar tu Primera Vivienda<br />en España: Guía Paso a Paso',
      'art.pv.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 11 min de lectura',
      'art.pv.breadcrumb': 'Primera Vivienda',
      'art.pv.cta.h2': '¿Preparado para Comprar tu Primera Vivienda?',
      'art.pv.cta.p': 'Analizamos tu situación y te orientamos sobre viabilidad real, ahorros necesarios y las mejores opciones del mercado.',
      'art.pv.cta.btn': 'Solicitar Estudio Gratuito →',

      /* hipoteca-autonomo */
      'art.auto.tag': 'Hipoteca Autónomos · 2026',
      'art.auto.title': 'Cómo Conseguir una Hipoteca<br />siendo Autónomo en España',
      'art.auto.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 10 min de lectura',
      'art.auto.breadcrumb': 'Hipoteca para Autónomos',
      'art.auto.cta.h2': '¿Eres Autónomo y Quieres una Hipoteca?',
      'art.auto.cta.p': 'Sabemos exactamente cómo presentar tu perfil para que los bancos digan sí. Solicita tu estudio gratuito.',
      'art.auto.cta.btn': 'Solicitar Estudio Gratuito →',

      /* documentacion-necesaria-hipoteca */
      'art.doc.tag': 'Documentación · 2026',
      'art.doc.title': 'Documentación Necesaria para<br />Pedir una Hipoteca en 2026',
      'art.doc.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 9 min de lectura',
      'art.doc.breadcrumb': 'Documentación Hipoteca',
      'art.doc.cta.h2': '¿Tienes Todo Listo para el Banco?',
      'art.doc.cta.p': 'Te ayudamos a preparar y organizar toda la documentación para maximizar las posibilidades de aprobación.',
      'art.doc.cta.btn': 'Solicitar Estudio Gratuito →',

      /* hipoteca-fija-variable-mixta */
      'art.tipos.tag': 'Tipos de Hipoteca · 2026',
      'art.tipos.title': 'Hipoteca Fija, Variable o Mixta:<br />¿Cuál Elegir en 2026?',
      'art.tipos.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 10 min de lectura',
      'art.tipos.breadcrumb': 'Tipos de Hipoteca',
      'art.tipos.cta.h2': '¿No Sabes Qué Hipoteca Elegir?',
      'art.tipos.cta.p': 'Te ayudamos a elegir la modalidad hipotecaria que mejor encaja con tu perfil y objetivos financieros.',
      'art.tipos.cta.btn': 'Solicitar Estudio Gratuito →',

      /* preguntas-frecuentes-hipoteca */
      'art.faq.tag': 'FAQ Hipotecas · 2026',
      'art.faq.title': 'Preguntas Frecuentes sobre Hipotecas:<br />Todo Resuelto',
      'art.faq.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 14 min de lectura',
      'art.faq.breadcrumb': 'FAQ Hipotecas',
      'art.faq.cta.h2': '¿Tienes Más Preguntas sobre tu Hipoteca?',
      'art.faq.cta.p': 'Cuéntanos tu caso y te respondemos con criterios reales y soluciones concretas.',
      'art.faq.cta.btn': 'Solicitar Estudio Gratuito →',

      /* euribor-que-es */
      'art.euribor.tag': 'Euríbor · 2026',
      'art.euribor.title': 'Euríbor 2026: Qué es, Cómo Funciona<br />y Cómo Afecta tu Hipoteca',
      'art.euribor.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 10 min de lectura',
      'art.euribor.breadcrumb': 'Euríbor 2026',
      'art.euribor.cta.h2': '¿Tienes Dudas sobre Hipoteca Fija o Variable?',
      'art.euribor.cta.p': 'Analizamos el Euríbor actual y tu perfil para recomendarte la mejor modalidad hipotecaria.',
      'art.euribor.cta.btn': 'Solicitar Estudio Gratuito →',

      /* hipoteca-no-residente */
      'art.nores.tag': 'No Residentes · 2026',
      'art.nores.title': 'Hipoteca para No Residentes en España:<br />Guía Completa 2026',
      'art.nores.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 10 min de lectura',
      'art.nores.breadcrumb': 'Hipoteca No Residentes',
      'art.nores.cta.h2': '¿Buscas una Hipoteca en España sin ser Residente?',
      'art.nores.cta.p': 'Conocemos los bancos que trabajan con no residentes y sabemos cómo presentar tu expediente para conseguir la aprobación.',
      'art.nores.cta.btn': 'Solicitar Estudio Gratuito →',

      /* mejorar-perfil-hipotecario */
      'art.perfil.tag': 'Perfil Hipotecario · 2026',
      'art.perfil.title': 'Cómo Mejorar tu Perfil Hipotecario<br />para que el Banco te diga Sí',
      'art.perfil.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 11 min de lectura',
      'art.perfil.breadcrumb': 'Mejorar Perfil Hipotecario',
      'art.perfil.cta.h2': '¿Quieres Mejorar tu Perfil antes de Pedir la Hipoteca?',
      'art.perfil.cta.p': 'Te analizamos el perfil y te damos un plan de acción concreto para maximizar tus opciones.',
      'art.perfil.cta.btn': 'Solicitar Estudio Gratuito →',

      /* hipoteca-barcelona */
      'art.bcn.tag': 'Barcelona · 2026',
      'art.bcn.title': 'Hipoteca en Barcelona 2026: Guía para<br />Compradores y el Papel del Broker',
      'art.bcn.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 11 min de lectura',
      'art.bcn.breadcrumb': 'Hipoteca Barcelona',
      'art.bcn.cta.h2': '¿Compras en Barcelona y Necesitas una Hipoteca?',
      'art.bcn.cta.p': 'Somos un broker hipotecario especializado en el mercado barcelonés. Te acompañamos en todo el proceso.',
      'art.bcn.cta.btn': 'Solicitar Estudio Gratuito →',

      /* recursos page — new guide cards */
      'rec.g7.tag': 'Euríbor',
      'rec.g7.title': 'Euríbor 2026: Guía Completa',
      'rec.g7.desc': 'Qué es el Euríbor, cómo ha evolucionado y cómo afecta a tu hipoteca variable. Todo lo que necesitas saber para tomar decisiones informadas.',
      'rec.g8.tag': 'No Residentes',
      'rec.g8.title': 'Hipoteca para No Residentes',
      'rec.g8.desc': 'Guía completa para extranjeros que quieren comprar vivienda en España: requisitos, financiación máxima, documentación y mejores bancos.',
      'rec.g9.tag': 'Estrategia',
      'rec.g9.title': 'Mejora tu Perfil Hipotecario',
      'rec.g9.desc': 'Cómo mejorar tu puntuación crediticia, reducir deudas y presentar el mejor expediente posible para que el banco apruebe tu hipoteca.',
      'rec.g10.tag': 'Barcelona',
      'rec.g10.title': 'Hipoteca en Barcelona 2026',
      'rec.g10.desc': 'Mercado inmobiliario barcelonés, precios actuales, mejores barrios y cómo un broker local puede marcar la diferencia en tu proceso.',
      'rec.g11.tag': 'Segunda Vivienda',
      'rec.g11.title': 'Hipoteca Segunda Vivienda',
      'rec.g11.desc': 'Financiación máxima del 70–75%, diferencias fiscales con la vivienda habitual y cómo acceder a las mejores condiciones en una operación más exigente.',
      'rec.g12.tag': 'Cómo Funciona',
      'rec.g12.title': 'Cómo Trabaja un Broker',
      'rec.g12.desc': 'Qué hace un broker hipotecario paso a paso, cuándo cobra (solo en el momento de la firma) y por qué puede conseguirte mejores condiciones que el banco directo.',
      'rec.g13.tag': 'Capacidad',
      'rec.g13.title': '¿Cuánto Puedo Pedir de Hipoteca?',
      'rec.g13.desc': 'Cómo calculan los bancos cuánto te prestan: la regla del 35%, el 80% de tasación y ejemplos reales según tu salario y perfil.',
      'rec.g14.tag': 'Gastos',
      'rec.g14.title': 'Gastos al Comprar Vivienda 2026',
      'rec.g14.desc': 'ITP, notaría, registro, gestoría y tasación: guía completa de todos los gastos al comprar piso en España y cuánto dinero necesitas ahorrado.',
      'rec.g15.tag': 'Mercado',
      'rec.g15.title': 'Las Mejores Hipotecas de 2026',
      'rec.g15.desc': 'Cómo encontrar la mejor hipoteca en 2026: qué comparar, fija vs variable vs mixta, y cómo un broker consigue condiciones que el banco no ofrece directamente.',
      'rec.g16.tag': 'Madrid',
      'rec.g16.title': 'Broker Hipotecario en Madrid',
      'rec.g16.desc': 'Cómo conseguir la mejor hipoteca en Madrid. Mercado, perfiles, proceso y por qué un broker independiente consigue mejores condiciones que ir directamente al banco.',
      'rec.g17.tag': 'Valencia',
      'rec.g17.title': 'Broker Hipotecario en Valencia',
      'rec.g17.desc': 'Asesoramiento hipotecario experto en Valencia. Obra nueva, segunda residencia e inversores. Acceso a más de 20 bancos y acompañamiento hasta la firma.',
      'rec.g18.tag': 'Sevilla',
      'rec.g18.title': 'Broker Hipotecario en Sevilla',
      'rec.g18.desc': 'Tu hipoteca en Sevilla con las mejores condiciones. Autónomos, funcionarios y compradores en general. Proceso digital y sin desplazamientos.',
      'rec.g19.tag': 'Málaga',
      'rec.g19.title': 'Broker Hipotecario en Málaga',
      'rec.g19.desc': 'Hipotecas en Málaga y la Costa del Sol para residentes y extranjeros. Especialistas en no residentes e inversores internacionales.',
      'rec.g20.tag': 'No Residentes',
      'rec.g20.title': 'Hipoteca para Extranjeros en España',
      'rec.g20.desc': 'Guía completa para obtener hipoteca en España siendo extranjero o no residente. Requisitos, documentación y cómo conseguir las mejores condiciones en 2026.',
      'rec.read': 'Leer guía',

      /* ── Article: Segunda Vivienda ─────────── */
      'art.seg.tag': 'Segunda Vivienda · 2026',
      'art.seg.title': 'Hipoteca para Segunda Vivienda:<br />Requisitos y Diferencias con la Vivienda Habitual',
      'art.seg.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 10 min de lectura',
      'art.seg.breadcrumb': 'Hipoteca Segunda Vivienda',
      'art.seg.cta.h2': '¿Pensando en Comprar una Segunda Vivienda?',
      'art.seg.cta.p': 'Analizamos tu capacidad financiera, te orientamos sobre el porcentaje de financiación alcanzable y buscamos el banco que mejores condiciones te ofrece para tu segunda residencia.',
      'art.seg.cta.btn': 'Solicitar Estudio Gratuito →',

      /* ── Article: Broker Hipotecario ───────── */
      'art.broker.tag': 'Cómo Funciona · 2026',
      'art.broker.title': 'Cómo Funciona un Broker Hipotecario:<br />Qué Hace, Cuánto Cobra y Por Qué Usarlo',
      'art.broker.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 9 min de lectura',
      'art.broker.breadcrumb': 'Cómo Funciona un Broker Hipotecario',
      'art.broker.cta.h2': '¿Quieres Saber Qué Hipoteca Puedes Conseguir?',
      'art.broker.cta.p': 'Primera reunión gratuita y sin compromiso. Te analizamos, te orientamos y, si decides avanzar, gestionamos tu hipoteca de principio a fin. Sin hipoteca, sin honorarios.',
      'art.broker.cta.btn': 'Solicitar Estudio Gratuito →',

      /* ── Contacto page ──────────────────────── */
      'cnt.hero.badge': 'Contacto · NortFinance',
      'cnt.hero.title': 'Hablemos de tu<br /><span class="text-gold">situación financiera</span>',
      'cnt.hero.desc': 'Cuéntanos tu caso y diseñaremos una estrategia hipotecaria a tu medida. Sin costes iniciales ni compromisos de ningún tipo.',
      'cnt.trust1': 'Estudio 100% Gratuito',
      'cnt.trust2': 'Sin Compromisos',
      'cnt.trust3': 'Respuesta en menos de 24h',
      'cnt.trust4': 'Firma Familiar y Cercana',
      'cnt.form.heading': 'Cuéntanos tu caso<br /><span>y te damos claridad</span>',
      'cnt.form.name': 'Nombre completo',
      'cnt.form.tel': 'Teléfono',
      'cnt.form.email': 'Correo electrónico',
      'cnt.form.situation': 'Situación actual',
      'cnt.form.msg': 'Mensaje o detalles de tu caso',
      'cnt.form.submit': 'Solicitar Mi Estudio Gratuito',
      'cnt.form.legal': 'Al enviar, aceptas nuestra <a href="privacidad.html">política de privacidad</a>. Tus datos no serán cedidos a terceros.',
      'cnt.info.heading': 'Contacto Directo',
      'cnt.wa.title': 'Línea Personal<br />de WhatsApp',
      'cnt.wa.desc': 'Escríbenos directamente sin formularios. Respondemos de persona a persona, con la cercanía de una firma familiar.',
      'cnt.wa.btn': 'Escribir por WhatsApp Directo',
      'cnt.info.l1': 'Correo oficial',
      'cnt.info.l2': 'Horario de atención personalizada',
      'cnt.info.l3': 'Nuestro compromiso',
      'cnt.info.v2': 'Lunes a Viernes<br />9:00h a 19:00h',
      'cnt.info.v3': 'Como firma familiar, respondemos directamente de persona a persona en menos de 24 horas.',

      /* ── Contact form select & placeholders ─── */
      'cnt.select.default': 'Selecciona tu situación',
      'cnt.select.opt1': 'Quiero comprar mi primera vivienda',
      'cnt.select.opt2': 'Soy autónomo/a',
      'cnt.select.opt3': 'Quiero cambiar de hipoteca',
      'cnt.select.opt4': 'Inversión o Segunda residencia',
      'cnt.select.opt5': 'Otros servicios patrimoniales',
      'cnt.form.name.ph': 'Tu nombre y apellidos',
      'cnt.form.msg.ph': 'Cuéntanos brevemente tu situación: precio de la vivienda que buscas, ingresos aproximados, plazos… cualquier detalle nos ayuda a preparar tu estudio.',

      /* ── Footer brand description ───────────── */
      'footer.desc': 'Firma de asesoramiento financiero y soluciones hipotecarias premium. Tu hipoteca, tu inversión y tu patrimonio, gestionados con criterio real.',

      /* ── Partners page ──────────────────────── */
      'partners.hero.tag': 'Colaboradores',
      'partners.hero.title': 'Empresas que comparten<br />nuestro <span class="text-gold">criterio</span>',
      'partners.hero.sub': 'NortFinance trabaja con una red seleccionada de profesionales y empresas que ofrecen servicios complementarios con la misma exigencia y honestidad que nosotros aplicamos al asesoramiento hipotecario.',
      'partners.grid.tag': 'Nuestra red',
      'partners.grid.title': 'Partners <span class="text-gold">actuales</span>',
      'partners.card.cat': 'Construcción',
      'partners.card.name': 'Empresa de Construcciones',
      'partners.card.desc': 'Especialistas en construcción residencial y rehabilitación. Proyectos de calidad con décadas de experiencia en el sector.',
      'partners.card.soon': 'Próximamente →',

      /* ── Suite Maison ── */
      'partners.sm.cat': 'Construcción Sostenible',
      'partners.sm.name': 'Suite Maison',
      'partners.sm.desc': 'Especialistas en construcción de viviendas sostenibles y eficientes energéticamente. Proyectos llave en mano con precio cerrado, diseño personalizado y certificación energética categoría A.',
      'partners.sm.link': 'Visitar web →',
      'partners.net.note': '✦   Red en construcción — nuevos partners próximamente',
      'partners.cta.tag': 'Colabora con nosotros',
      'partners.cta.title': '¿Quieres ser<br />partner de <span class="text-gold">NortFinance?</span>',
      'partners.cta.desc1': 'Si tu empresa ofrece servicios complementarios al asesoramiento hipotecario o patrimonial, y compartes nuestra filosofía de trabajo honesto y orientado al cliente, nos encantaría conocerte.',
      'partners.cta.desc2': 'Trabajamos con inmobiliarias, promotores, constructores, gestorías, seguros y cualquier profesional que quiera ofrecer más valor a sus clientes.',
      'partners.form.nombre': 'Nombre',
      'partners.form.nombre.ph': 'Tu nombre',
      'partners.form.empresa': 'Empresa',
      'partners.form.empresa.ph': 'Nombre de tu empresa',
      'partners.form.email': 'Email',
      'partners.form.email.ph': 'tu@empresa.com',
      'partners.form.web': 'Web',
      'partners.form.web.ph': 'https://tuempresa.com',
      'partners.form.tel': 'Teléfono',
      'partners.form.tel.ph': '+34 600 000 000',
      'partners.form.msg': 'Cuéntanos sobre tu empresa',
      'partners.form.msg.ph': '¿A qué os dedicáis? ¿Por qué crees que encajaríamos?',
      'partners.form.privacy': 'He leído y acepto la <a href="privacidad.html">Política de Privacidad</a> de NortFinance.',
      'partners.form.submit': 'Enviar solicitud →',
      'partners.footer.cta': 'Ser partner →',

      /* ── Casos de éxito page ─────────────────── */
      'ce.hero.badge': 'Resultados reales · Clientes reales',
      'ce.hero.title': 'No cuentes lo que<br>podemos hacer.<br><em>Te lo demostramos.</em>',
      'ce.hero.sub': 'Cada caso aquí documentado es un cliente real que llegó con una situación concreta — y salió con las mejores condiciones que el mercado podía ofrecer.',
      'ce.hero.t1': 'Datos reales anonimizados',
      'ce.hero.t2': 'Ahorro verificable',
      'ce.hero.t3': 'Proceso transparente',
      'ce.hero.t4': '+20 bancos comparados',
      'ce.stats.l1': 'Hipotecas gestionadas',
      'ce.stats.l2': 'Total ahorrado',
      'ce.stats.l3': 'Tasa de aprobación',
      'ce.stats.l4': 'Atención garantizada',
      'ce.cases.tag': 'Casos documentados',
      'ce.cases.title': 'Lo que conseguimos para<br>nuestros clientes',
      'ce.cases.sub': 'Tres situaciones distintas, un mismo resultado: las mejores condiciones posibles.',
      'ce.cta.title': '¿Quieres ser el próximo<br><em>caso de éxito</em>?',
      'ce.cta.sub': 'El estudio es gratuito, sin compromiso y sin letra pequeña. En 24–48h te decimos exactamente qué podemos conseguir para tu perfil.',
      'ce.cta.btn1': 'Mi Estudio Gratuito',
      'ce.cta.btn2': 'Simular mi hipoteca →',
      /* ── WhatsApp widget ───────────────────── */
      'wa.label': 'Escríbenos',
      'wa.sub': 'Respuesta inmediata',

      /* ── Recursos: read article CTA ────────── */
      'art.read': 'Leer artículo →',
      'art.also': 'También te puede interesar',
      'art.more': 'Más recursos',

      /* ── Article: Cuánto Puedo Pedir ────────── */
      'art.cuanto.tag': 'Capacidad Hipotecaria · 2026',
      'art.cuanto.title': '¿Cuánto Puedo Pedir de Hipoteca?<br />Cálculo y Requisitos 2026',
      'art.cuanto.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 11 min de lectura',
      'art.cuanto.breadcrumb': '¿Cuánto Puedo Pedir de Hipoteca?',
      'art.cuanto.cta.h2': '¿Quieres Saber Cuánto Puedes Pedir?',
      'art.cuanto.cta.p': 'Analizamos tu perfil y te decimos exactamente qué financiación puedes conseguir.',
      'art.cuanto.cta.btn': 'Solicitar Estudio Gratuito →',

      /* ── Article: Gastos Compra Vivienda ─────── */
      'art.gastos.tag': 'Gastos y Fiscalidad · 2026',
      'art.gastos.title': 'Gastos al Comprar una Vivienda<br />en España 2026: Guía Completa',
      'art.gastos.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 12 min de lectura',
      'art.gastos.breadcrumb': 'Gastos de Compraventa',
      'art.gastos.cta.h2': '¿Quieres Calcular el Coste Total de tu Compra?',
      'art.gastos.cta.p': 'Te ayudamos a planificar todos los gastos e impuestos para que no haya sorpresas.',
      'art.gastos.cta.btn': 'Solicitar Estudio Gratuito →',

      /* ── Article: Mejores Hipotecas 2026 ─────── */
      'art.mejores.tag': 'Mercado Hipotecario · 2026',
      'art.mejores.title': 'Las Mejores Hipotecas de 2026:<br />Cómo Encontrar la Oferta Ideal',
      'art.mejores.meta': 'NortFinance · Asesoría Financiera · Mayo 2026 · 13 min de lectura',
      'art.mejores.breadcrumb': 'Mejores Hipotecas 2026',
      'art.mejores.cta.h2': '¿Buscas la Mejor Hipoteca para tu Perfil?',
      'art.mejores.cta.p': 'Accedemos a más de 20 entidades y negociamos para conseguirte las condiciones más competitivas del mercado.',
      'art.mejores.cta.btn': 'Solicitar Estudio Gratuito →',

      /* ── Article: Broker Madrid ──────────────── */
      'art.madrid.tag': 'Asesoramiento Hipotecario · 2026',
      'art.madrid.title': 'Broker Hipotecario en Madrid:<br />Cómo Conseguir la Mejor Hipoteca',
      'art.madrid.meta': 'NortFinance · Asesoría Financiera · Junio 2026 · 5 min de lectura',
      'art.madrid.breadcrumb': 'Broker Hipotecario Madrid',
      'art.madrid.cta.h2': '¿Quieres saber cuánto puedes pedir y en qué condiciones?',
      'art.madrid.cta.p': 'Te hacemos un análisis gratuito de tu perfil en menos de 24 horas.',
      'art.madrid.cta.btn': 'Mi Estudio Gratuito →',

      /* ── Article: Broker Valencia ────────────── */
      'art.valencia.tag': 'Asesoramiento Hipotecario · 2026',
      'art.valencia.title': 'Broker Hipotecario en Valencia:<br />Asesoramiento Hipotecario Experto',
      'art.valencia.meta': 'NortFinance · Asesoría Financiera · Junio 2026 · 5 min de lectura',
      'art.valencia.breadcrumb': 'Broker Hipotecario Valencia',
      'art.valencia.cta.h2': '¿Quieres saber cuánto puedes pedir y en qué condiciones?',
      'art.valencia.cta.p': 'Te hacemos un análisis gratuito de tu perfil en menos de 24 horas.',
      'art.valencia.cta.btn': 'Mi Estudio Gratuito →',

      /* ── Article: Broker Sevilla ─────────────── */
      'art.sevilla.tag': 'Asesoramiento Hipotecario · 2026',
      'art.sevilla.title': 'Broker Hipotecario en Sevilla:<br />Tu Hipoteca con las Mejores Condiciones',
      'art.sevilla.meta': 'NortFinance · Asesoría Financiera · Junio 2026 · 5 min de lectura',
      'art.sevilla.breadcrumb': 'Broker Hipotecario Sevilla',
      'art.sevilla.cta.h2': '¿Quieres saber cuánto puedes pedir y en qué condiciones?',
      'art.sevilla.cta.p': 'Te hacemos un análisis gratuito de tu perfil en menos de 24 horas.',
      'art.sevilla.cta.btn': 'Mi Estudio Gratuito →',

      /* ── Article: Broker Málaga ──────────────── */
      'art.malaga.tag': 'Asesoramiento Hipotecario · 2026',
      'art.malaga.title': 'Broker Hipotecario en Málaga:<br />Hipotecas para Residentes y No Residentes',
      'art.malaga.meta': 'NortFinance · Asesoría Financiera · Junio 2026 · 5 min de lectura',
      'art.malaga.breadcrumb': 'Broker Hipotecario Málaga',
      'art.malaga.cta.h2': '¿Quieres saber cuánto puedes pedir y en qué condiciones?',
      'art.malaga.cta.p': 'Te hacemos un análisis gratuito de tu perfil en menos de 24 horas.',
      'art.malaga.cta.btn': 'Mi Estudio Gratuito →',

      /* ── Article: Hipoteca Extranjeros ───────── */
      'art.ext.tag': 'Asesoramiento Hipotecario · 2026',
      'art.ext.title': 'Hipoteca para Extranjeros en España:<br />Guía Completa 2026',
      'art.ext.meta': 'NortFinance · Asesoría Financiera · Junio 2026 · 5 min de lectura',
      'art.ext.breadcrumb': 'Hipoteca para Extranjeros en España',
      'art.ext.cta.h2': '¿Quieres saber cuánto puedes pedir y en qué condiciones?',
      'art.ext.cta.p': 'Te hacemos un análisis gratuito de tu perfil en menos de 24 horas.',
      'art.ext.cta.btn': 'Mi Estudio Gratuito →',
    },

    /* ════════════════════════════════════════
       CATALÀ
    ════════════════════════════════════════ */
    ca: {
      'nav.mortgages': 'Hipoteques',
      'nav.services': 'Serveis',
      'nav.resources': 'Recursos',
      'nav.contact': 'Contacte',
      'nav.cases': "Casos d'èxit",
      'nav.cta': 'El meu estudi gratuït',
      'nav.aria': 'Obrir menú',

      'hero.badge': "Firma d'Assessorament Hipotecari",
      'hero.title': 'Hipoteca, Inversió<br />i <span class="text-gold">Estratègia Patrimonial</span>',
      'hero.subtitle': 'Gestionem la teva hipoteca, optimitzem les teves inversions i protegim el teu patrimoni.<br class="desktop-break" />Una firma familiar amb criteris reals i resultats mesurables.',
      'hero.cta2': 'Com treballem →',
      'hero.trust1': 'Sense compromís inicial',
      'hero.trust2': '100% Transparents',
      'hero.trust3': 'Resposta en 24h',

      'stats.mortgages': 'Hipoteques gestionades',
      'stats.banks': 'Entitats bancàries',
      'stats.transparent': 'Transparents',
      'stats.response': 'Resposta garantida',

      'why.tag': 'La nostra diferència',
      'why.title': 'Per què triar <span class="text-gold">NortFinance?</span>',
      'why.c1.title': 'Proximitat real,<br /><span class="text-gold">no automatitzada</span>',
      'why.c1.text': 'Treballem amb tu directament, de persona a persona. Sense formularis que ningú llegeix ni bots que responen.',
      'why.c2.title': 'Estratègia adaptada<br /><span class="text-gold">a la teva situació</span>',
      'why.c2.text': 'Cada client és únic. Analitzem el teu perfil en profunditat per trobar la solució coherent amb la teva realitat.',
      'why.c3.title': 'Transparència<br /><span class="text-gold">des del primer moment</span>',
      'why.c3.text': "Et diem la veritat sobre la viabilitat, opcions i condicions reals des del principi.",
      'why.c4.title': 'Acompanyament<br /><span class="text-gold">durant tot el procés</span>',
      'why.c4.text': "Som al teu costat des de l'anàlisi inicial fins a la signatura notarial.",

      'firstcall.tag': 'Primera presa de contacte',
      'firstcall.title': 'El que obtindràs en la teva<br /><span class="text-gold">primera trucada</span>',
      'firstcall.desc': "Una presa de contacte per entendre la teva situació, resoldre els teus dubtes i definir la millor estratègia hipotecària per a tu.",
      'firstcall.tag1': '✦ Assessorament estratègic',
      'firstcall.tag2': '✦ Procés personalitzat',
      'firstcall.tag3': '✦ Sense compromís inicial',
      'firstcall.c1.title': 'Anàlisi Personalitzada',
      'firstcall.c1.text': "Revisem la teva situació financera completa, ingressos i objectius per traçar l'estratègia més adequada al teu perfil.",
      'firstcall.c2.title': 'Opcions Realistes',
      'firstcall.c2.text': "T'orientem sobre la viabilitat real, rangs de finançament i condicions segons el teu perfil. Sense falses promeses ni expectatives inflades.",
      'firstcall.c3.title': 'Resolució de Dubtes',
      'firstcall.c3.text': "T'expliquem el procés complet amb claredat i llenguatge senzill. Sortiràs amb les idees clares sobre el teu proper pas.",

      'proceso.tag': 'Pas a pas',
      'proceso.title': 'Així serà el teu <span class="text-gold">procés</span>',
      'proceso.s1.title': 'Primera presa de contacte',
      'proceso.s1.text': 'Entenem la teva situació i objectius. Sense compromís de cap mena.',
      'proceso.s2.title': 'Anàlisi estratègica',
      'proceso.s2.text': 'Estudiem la teva viabilitat i definim les opcions reals disponibles per al teu perfil.',
      'proceso.s3.title': 'Cerca i negociació',
      'proceso.s3.text': "En funció del teu perfil financer i de les teves necessitats, acudim als bancs que prèviament sabem que poden encaixar.",
      'proceso.s4.title': 'Acompanyament final',
      'proceso.s4.text': "T'acompanyem fins a la signatura final i la resolució definitiva de l'operació.",

      'testimonios.tag': 'Clients reals',
      'testimonios.title': 'El que diuen els nostres <span class="text-gold">clients</span>',
      'testimonios.q1': '"Des del primer dia ens vam sentir totalment acollits. Ens van explicar cada pas amb paciència i sempre van estar disponibles per a qualsevol dubte. Al final vam aconseguir unes condicions molt millors del que esperàvem. Els recomanem sense dubtar."',
      'testimonios.q1.role': 'Primera habitatge · Barcelona',
      'testimonios.q2': '"Feia temps que intentava que algun banc m\'aprovés la hipoteca, sense èxit. NortFinance va analitzar el meu perfil i en poques setmanes tenia diverses ofertes. El resultat va ser increïble, no m\'ho podia creure."',
      'testimonios.q2.role': 'Autònom · Madrid',
      'testimonios.q3': '"Durant tot el procés vam sentir que teníem algú de veritat al nostre costat. No només van gestionar-ho tot amb eficiència, sinó que ens van assessorar amb una proximitat i professionalitat que no esperàvem. Molt recomanable."',
      'testimonios.q3.role': 'Segona residència · València',

      'faq.tag': 'Preguntes freqüents',
      'faq.title': 'Tot el que<br />necessites <span class="text-gold">saber</span>',
      'faq.desc': "Tens dubtes? Aquí responem les preguntes més habituals dels nostres clients abans de començar.",
      'faq.cta': 'Fer una pregunta →',
      'faq.q1.q': 'Com és el procés de treball?',
      'faq.q1.a': "Comencem amb una primera trucada sense compromís per entendre la teva situació. A continuació fem una anàlisi estratègica del teu perfil, consultem més de 20 entitats bancàries per trobar les millors condicions i t'acompanyem durant tot el procés fins a la signatura notarial.",
      'faq.q2.q': 'Quan es fa el primer pagament?',
      'faq.q2.a': "Es signa un contracte d'acceptació de servei, on s'especifiquen clarament els pagaments a realitzar.",
      'faq.q3.q': 'Quina documentació necessitaré?',
      'faq.q3.a': "La documentació bàsica inclou: DNI/NIE, 3 últimes nòmines, última renda, extractes bancaris, rebuts de deutes (si n'hi ha), informació sobre l'habitatge a comprar (nota simple), contracte d'arres (si existeix) i vida laboral. Et guiarem en cada pas perquè el procés sigui el més senzill possible.",
      'faq.q4.q': 'Treballeu cada cas de manera personalitzada?',
      'faq.q4.a': "Absolutament. Cada client té una situació financera, objectius i circumstàncies úniques. Mai fem servir plantilles genèriques; analitzem el teu cas en profunditat per oferir-te l'estratègia hipotecària més adequada a la teva realitat concreta.",
      'faq.q5.q': "Què diferencia NortFinance d'un banc?",
      'faq.q5.a': "Un banc només et pot oferir els seus propis productes. NortFinance és una firma d'assessorament que treballa exclusivament per a tu: consultem més de 20 bancs i negociem en el teu nom per aconseguir les millors condicions del mercat. El teu interès és sempre la nostra única prioritat.",
      'faq.q6.q': 'Puc contactar durant el procés?',
      'faq.q6.a': "Per descomptat. Estem disponibles en tot moment per resoldre els teus dubtes, actualitzar l'estat de la teva operació i acompanyar-te en cada decisió. Garantim resposta en menys de 24 hores laborables.",

      'cta.tag': 'Comença avui',
      'cta.title': 'Pren decisions financeres<br />amb total <span class="text-gold">claredat</span>',
      'cta.text': "T'acompanyem durant tot el procés amb un enfocament proper, transparent<br class=\"desktop-break\" />i completament adaptat a la teva situació.",
      'cta.btn2': 'Escriu-nos',

      'hipo.tag': 'Assessorament hipotecari',
      'hipo.title': 'Les teves necessitats,<br />la nostra <span class="text-gold">estratègia.</span>',
      'hipo.subtitle': "Cada perfil financer és únic. Dissenyem l'estratègia hipotecària que encaixa amb la teva situació real, no amb una plantilla.",
      'hipo.cta1': 'El meu estudi gratuït',
      'hipo.cta2': 'Veure casos',
      'hipo.stat1': 'operacions gestionades',
      'hipo.stat2': 'entitats bancàries',
      'hipo.stat3': 'estalvi mitjà per client',

      'pq.tag': 'Cada situació té la seva estratègia',
      'pq.title': 'Treballem amb <span class="text-gold">tots els perfils</span>',
      'pq.c1.tag': 'Més habitual',
      'pq.c1.title': 'Primera habitatge',
      'pq.c1.desc': "El pas més important de la teva vida mereix la millor estratègia. Analitzem la teva capacitat real, busquem el finançament òptim i t'acompanyem des del primer «vull comprar» fins a la signatura notarial. Sense sorpreses, amb total claredat.",
      'pq.c2.tag': 'Perfil especial',
      'pq.c2.title': 'Autònoms',
      'pq.c2.desc': "Sabem com presentar el teu perfil perquè els bancs vegin la teva solvència real més enllà de la nòmina. Experiència contrastada amb autònoms de tots els sectors.",
      'pq.c3.tag': 'Millorar condicions',
      'pq.c3.title': 'Canvi d\'hipoteca',
      'pq.c3.desc': "Si tens hipoteca i creus que pots millorar les teves condicions, tens raó. Analitzem si una subrogació o novació et convé i gestionem tot el procés.",
      'pq.c4.tag': 'Patrimoni',
      'pq.c4.title': 'Segona residència',
      'pq.c4.desc': "El finançament d'una segona habitatge té condicions diferents a l'habitual. Coneixem les particularitats de cada entitat i busquem la proposta més eficient per al teu patrimoni.",
      'pq.c5.tag': 'Rendibilitat',
      'pq.c5.title': 'Inversió',
      'pq.c5.desc': "Per a compradors amb visió patrimonial. Estructurem el finançament per maximitzar el retorn i optimitzar l'apalancament en cada operació.",
      'pq.c6.tag': 'Fins al 100%',
      'pq.c6.title': 'Joves compradors',
      'pq.c6.desc': "Acompanyament especialitzat per a primers compradors. Explorem vies de finançament ampliat i ajudes disponibles per a perfils joves amb alt potencial.",
      'pq.c7.tag': 'Perfil especial',
      'pq.c7.title': 'No residents',
      'pq.c7.desc': "Som conscients de la complexitat que implica per als no residents a Espanya el fet d'obtenir una hipoteca. Per això sabem exactament a quins bancs acudir per a vosaltres.",
      'pq.c8.tag': 'Projecte propi',
      'pq.c8.title': 'Autopromoció',
      'pq.c8.desc': "Finançament especialitzat per a projectes d'autopromoció. Analitzem la viabilitat econòmica del projecte, t'acompanyem durant tot el procés i coordinem documentació, certificacions d'obra i aprovació bancària.",

      'qh.tag': 'El nostre mètode',
      'qh.title': 'El que <span class="text-gold">fem</span><br />per tu.',
      'qh.s1.title': 'Analitzem el teu perfil financer',
      'qh.s1.desc': "Estudiem en profunditat la teva situació econòmica, ingressos, estalvis i objectius a llarg termini. Només amb aquest mapa complet definim quina hipoteca té sentit real per a tu.",
      'qh.s2.title': 'Comparem opcions',
      'qh.s2.desc': "Consultem més de 20 entitats bancàries —incloent alternatives que no estan en comparadors públics— per construir un mapa real de les millors condicions disponibles.",
      'qh.s3.title': 'Negociem condicions',
      'qh.s3.desc': "Presentem el teu perfil de la forma més sòlida i favorable. Negociem amb tu com a protagonista: tipus d'interès, terminis, vinculacions i comissions estan sobre la taula.",
      'qh.s4.title': "T'acompanyem fins a la signatura",
      'qh.s4.desc': "No desapareixem en aconseguir l'aprovació. Coordinem taxació, revisem la documentació final i som amb tu fins al dia de la signatura. Tancament total de l'operació.",

      'dif.tag': 'Els nostres pilars',
      'dif.title': 'Per què ens<br />trien a <span class="text-gold">nosaltres.</span>',
      'dif.desc': "Cinc pilars que defineixen com treballem i per què els nostres clients ens recomanen. No són valors de màrqueting — són compromisos que complim operació a operació.",
      'dif.p1.title': 'Proximitat real',
      'dif.p1.desc': "Treballem de tu a tu. Una persona real que coneix el teu cas, respon les teves trucades i entén el que necessites. Sense processos automatitzats, sense respostes genèriques.",
      'dif.p2.title': 'Tu ets el nostre client.',
      'dif.p2.desc': 'Un banc treballa per a la seva entitat, nosaltres treballem per a tu.',
      'dif.p3.title': 'Estratègia personalitzada',
      'dif.p3.desc': "Cada perfil és diferent. Dissenyem l'estratègia hipotecària que encaixa amb la teva realitat concreta, no amb una plantilla estàndard.",
      'dif.p4.title': 'Transparència total',
      'dif.p4.desc': "Et diem la veritat des del primer moment: viabilitat real, condicions exactes i costos sense lletra petita. Mai venem fum ni creem falses expectatives.",
      'dif.p5.title': 'Experiència provada',
      'dif.p5.desc': "Més de 200 operacions gestionades amb èxit en perfils molt diferents. Sabem el que funciona i el que no, i això marca la diferència en el resultat final.",

      'hipo.cta.tag': 'Comença ara',
      'hipo.cta.title': "Preparat per aconseguir<br />la millor <span class=\"text-gold\">hipoteca?</span>",
      'hipo.cta.text': "Explica'ns la teva situació i t'ajudem a trobar la hipoteca que realment encaixa amb el teu perfil.",

      'footer.desc': "Firma d'assessorament financer i solucions hipotecàries premium. La teva hipoteca, la teva inversió i el teu patrimoni, gestionats amb criteri real.",
      'footer.nav.heading': 'Navegació',
      'footer.services.heading': 'Serveis',
      'footer.contact.heading': 'Contacte',
      'footer.nav.home': 'Inici',
      'footer.nav.mortgages': 'Hipoteques',
      'footer.nav.services': 'Serveis',
      'footer.nav.resources': 'Recursos',
      'footer.nav.contact': 'Contacte',
      'footer.nav.cases': "Casos d'èxit",
      'footer.nav.partners': 'Partners',
      'footer.s1': 'Hipoteques Primera Habitatge',
      'footer.s2': 'Intermediació Immobiliària',
      'footer.s3': "Inversió en Or",
      'footer.s4': "Club Privat d'Inversors",
      'footer.s5': "Corredor d'Assegurances",
      'footer.sim': "Simulador d'hipoteca",
      'footer.estudio': 'Estudi gratuït',
      'footer.hours': 'Dl–Dv · 9:00 – 19:00h',
      'footer.location': 'Espanya',
      'footer.cta': 'El meu estudi gratuït',
      'footer.copy': '© 2026 NortFinance. Tots els drets reservats.',
      'footer.privacy': 'Política de privacitat',
      'footer.cookies': 'Galetes',
      'footer.legal': 'Avís legal',
      'footer.terms': 'Condicions generals',

      /* ── Collaborators section (index) ──────── */
      'collab.tag': 'Els nostres col·laboradors',
      'collab.title': 'Empreses que confien en <span class="text-gold">nosaltres</span>',
      'collab.desc': "Treballem colze a colze amb empreses del sector immobiliari i de la construcció per oferir-te un servei integral — des del finançament fins a les claus.",
      'collab.btn': 'Veure col·laboradors →',

      /* ── Servicios page ─────────────────────── */
      'srv.hero.badge': 'Serveis · NortFinance',
      'srv.hero.title': 'Solucions Financeres i<br /><span class="text-gold">Patrimonials</span>',
      'srv.hero.desc': 'Oferim un assessorament integral, proper i estratègic. Ens encarreguem de tot el procés per protegir i fer créixer el teu patrimoni.',
      'srv.arch.tag': 'Arquitectura de serveis',
      'srv.arch.title': 'El que fem <span class="text-gold">per tu</span>',
      'srv.c1.tag': 'Finançament',
      'srv.c1.title': "Tipus d'Hipoteques",
      'srv.c1.desc': "T'oferirem la hipoteca que millor s'adapti a les teves necessitats en funció de la teva edat, ingressos, necessitat de finançament i quota màxima que pots assumir. Finançament des del 100% fins al que necessitis.",
      'srv.c1.l1': 'Subrogacions',
      'srv.c1.l2': 'Novacions',
      'srv.c1.l3': 'Reunificació de deute',
      'srv.c2.tag': 'Immobiliària',
      'srv.c2.title': 'Intermediació Immobiliària',
      'srv.c2.desc': "T'acompanyo en tot el procés de compra o venda d'immobles, oferint un servei integral i proper.",
      'srv.c2.l1': 'Venda de propietats',
      'srv.c2.l2': "Cerca d'oportunitats",
      'srv.c2.l3': "Valoració d'immobles",
      'srv.c2.l4': 'Estratègia de comercialització',
      'srv.c2.l5': 'Coordinació documental',
      'srv.c3.tag': 'Inversió',
      'srv.c3.title': 'Assessorament en Inversions (Unit Linked)',
      'srv.c3.desc': "T'ajudo a construir una estratègia patrimonial adaptada als teus objectius i perfil de risc mitjançant solucions d'inversió vinculades a assegurances de vida estalvi.",
      'srv.c3.l1': 'Planificació patrimonial',
      'srv.c3.l2': 'Optimització fiscal',
      'srv.c3.l3': 'Inversió a llarg termini',
      'srv.c3.l4': 'Diversificació financera',
      'srv.c4.tag': 'Actiu refugi',
      'srv.c4.title': "Inversió en Or",
      'srv.c4.desc': "Assessorament en inversió en or físic com a actiu refugi i diversificació patrimonial.",
      'srv.c4.l1': "Or d'inversió",
      'srv.c4.l2': 'Lingots certificats',
      'srv.c4.l3': 'Preservació patrimonial',
      'srv.c4.l4': 'Compra segura i emmagatzematge',
      'srv.c5.tag': 'Protecció',
      'srv.c5.title': "Corredor d'Assegurances",
      'srv.c5.desc': "Com a agents d'assegurances, busquem solucions adaptades a cada client i situació.",
      'srv.c5.l1': 'Assegurança de vida',
      'srv.c5.l2': 'Assegurança de llar',
      'srv.c5.l3': "Protecció d'hipoteca i impagaments",
      'srv.c6.tag': 'Alt impacte',
      'srv.c6.title': 'Inversió Immobiliària',
      'srv.c6.desc': "Analitzo oportunitats immobiliàries per identificar operacions amb potencial de rendibilitat i revalorització. Ajudo a inversors i compradors a prendre decisions basades en criteris financers reals, estudiant la viabilitat i el potencial de cada actiu.",
      'srv.c6.l1': 'Anàlisi de rendibilitat',
      'srv.c6.l2': "Estudi de revalorització de l'immoble",
      'srv.c6.l3': 'Avaluació de risc i viabilitat',
      'srv.c6.l4': "Estratègies d'inversió patrimonial",
      'srv.c6.l5': 'Inversions per a lloguer o revenda',
      'srv.c6.quote': "A més, formo part d'una xarxa i club privat d'inversors immobiliaris especialitzats en operacions de compra, rehabilitació i venda d'immobles amb objectius de rendibilitat aproximats entre el <strong>15% i el 25%</strong>, segons l'operació i condicions de mercat.",
      'srv.cta.tag': 'Parlem?',
      'srv.cta.title': 'Dissenyem junts la teva propera<br /><span class="text-gold">estratègia financera</span>',
      'srv.cta.desc': "El primer pas és gratuït. Explica'ns la teva situació i et proposem el millor camí.",
      'srv.cta.btn2': 'Escriu-nos',

      /* ── Recursos page ──────────────────────── */
      'rec.hero.badge': 'Recursos · NortFinance',
      'rec.hero.title': 'Coneixement Financer per<br /><span class="text-gold">Prendre Decisions Clares</span>',
      'rec.hero.desc': "Aportem valor abans de vendre. Explora les nostres guies, consells pràctics i eines interactives dissenyades per donar-te total claredat en la teva estratègia hipotecària.",
      'rec.sim.eyebrow': 'Eina Interactiva',
      'rec.sim.title': 'Simula la teva Hipoteca<br /><span class="text-gold">en Temps Real</span>',
      'rec.sim.heading': 'Paràmetres de la teva operació',
      'rec.sim.g1': "L'Immoble",
      'rec.sim.g2': 'El teu Finançament',
      'rec.sim.g3': "Tipus d'Interès",
      'rec.sim.precio': "Preu de l'habitatge",
      'rec.sim.ccaa': 'Comunitat Autònoma',
      'rec.sim.estado': "Estat de l'immoble",
      'rec.sim.estado.used': 'Segona mà',
      'rec.sim.estado.new': 'Habitatge nou',
      'rec.sim.ahorros': 'Estalvis aportats',
      'rec.sim.plazo': 'Termini de la hipoteca',
      'rec.sim.modalidad': 'Modalitat hipotecària',
      'rec.sim.mod.fixed': 'Fixa',
      'rec.sim.mod.var': 'Variable',
      'rec.sim.tin': "Tipus d'interès",
      'rec.sim.res.eyebrow': 'Quota Mensual Estimada',
      'rec.sim.m1': 'Finançament necessari',
      'rec.sim.m2': '% Finançament',
      'rec.sim.m3': 'TIN aplicat',
      'rec.sim.m4': 'Total interessos',
      'rec.sim.bd1.title': "Cost de l'immoble",
      'rec.sim.bd1.r1': "Preu de l'immoble",
      'rec.sim.bd1.r3': 'Notaria, registre i gestoria (~1%)',
      'rec.sim.bd1.r4': "Taxació de l'immoble (~400 €)",
      'rec.sim.bd1.total': "Cost total de l'immoble",
      'rec.sim.bd2.title': 'Finançament total',
      'rec.sim.bd2.r1': 'Estalvi aportat',
      'rec.sim.bd2.r2': 'Import hipoteca sol·licitada',
      'rec.sim.bd2.r3': 'Interessos de la hipoteca',
      'rec.sim.bd2.total': 'Cost total amb hipoteca',
      'rec.sim.cta': 'Validar Estudi Gratis amb un Assessor',
      'rec.guides.eyebrow': 'Base de Coneixement',
      'rec.guides.title': 'Guies Hipotecàries<br /><span class="text-gold">i Consells Pràctics</span>',
      'rec.g1.tag': 'Guia Completa',
      'rec.g1.title': 'Guia Hipotecària Premium',
      'rec.g1.desc': "Explicacions simples sobre finançament i com preparar-se per al banc. Tot el que necessites saber abans d'iniciar el procés.",
      'rec.g2.tag': 'Consells Pràctics',
      'rec.g2.title': 'Consells per a Compradors',
      'rec.g2.desc': "Els errors comuns en triar la teva primera vivenda i com evitar-los. Decisions que marquen la diferència a llarg termini.",
      'rec.g3.tag': 'Autònoms',
      'rec.g3.title': 'Recursos per a Autònoms',
      'rec.g3.desc': "Com presentar el teu perfil financer per garantir l'aprovació de la signatura. Estratègies específiques per a treballadors per compte propi.",
      'rec.g4.tag': 'Documentació',
      'rec.g4.title': 'Documentació Necessària',
      'rec.g4.desc': "La llista de control definitiva amb els papers que et demanaran per a l'estudi. Sense sorpreses ni endarreriments en el procés d'aprovació.",
      'rec.g5.tag': 'Comparatives',
      'rec.g5.title': 'Comparatives Directes',
      'rec.g5.desc': 'Hipoteca Fixa vs. Variable vs. Mixta: Quina s\'adapta a la situació actual? Anàlisi objectiva per triar amb criteri real.',
      'rec.g6.tag': 'FAQ',
      'rec.g6.title': 'Dubtes Freqüents de la Firma',
      'rec.g6.desc': "Resolució de les preguntes clau abans de fer el proper pas. Claredat total sobre el nostre procés i metodologia de treball.",
      'rec.g.footer': 'Properament',
      'rec.cta.eyebrow': 'Fes el Proper Pas',
      'rec.cta.title': 'La teva estratègia financera<br />mereix <span class="text-gold">claredat absoluta</span>',
      'rec.cta.desc': "Parlem del teu cas i fem servir criteris reals per trobar la teva viabilitat.",
      'rec.cta.btn2': 'Escriu-nos',

      /* ── Article pages — structural UI ────────── */
      /* guia-hipotecaria-completa */
      'art.guia.tag': 'Guia Hipotecària · 2026',
      'art.guia.title': 'Guia Hipotecària Completa 2026:<br />Tot el que Necessites Saber',
      'art.guia.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 12 min de lectura',
      'art.guia.breadcrumb': 'Guia Hipotecària Completa',
      'art.guia.cta.h2': 'Preparat per Iniciar el teu Procés Hipotecari?',
      'art.guia.cta.p': "Et fem un estudi personalitzat gratuït i sense compromís. Analitzem el teu perfil i t'indiquem exactament quina hipoteca pots aconseguir.",
      'art.guia.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* hipoteca-primera-vivienda */
      'art.pv.tag': 'Primera Habitatge · 2026',
      'art.pv.title': 'Com Comprar el teu Primer Habitatge<br />a Espanya: Guia Pas a Pas',
      'art.pv.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 11 min de lectura',
      'art.pv.breadcrumb': 'Primera Habitatge',
      'art.pv.cta.h2': 'Preparat per Comprar el teu Primer Habitatge?',
      'art.pv.cta.p': "Analitzem la teva situació i t'orientem sobre viabilitat real, estalvis necessaris i les millors opcions del mercat.",
      'art.pv.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* hipoteca-autonomo */
      'art.auto.tag': 'Hipoteca Autònoms · 2026',
      'art.auto.title': "Com Aconseguir una Hipoteca<br />sent Autònom a Espanya",
      'art.auto.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 10 min de lectura',
      'art.auto.breadcrumb': 'Hipoteca per a Autònoms',
      'art.auto.cta.h2': 'Ets Autònom i Vols una Hipoteca?',
      'art.auto.cta.p': "Sabem exactament com presentar el teu perfil perquè els bancs diguin sí. Sol·licita el teu estudi gratuït.",
      'art.auto.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* documentacion-necesaria-hipoteca */
      'art.doc.tag': 'Documentació · 2026',
      'art.doc.title': 'Documentació Necessària per<br />Sol·licitar una Hipoteca el 2026',
      'art.doc.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 9 min de lectura',
      'art.doc.breadcrumb': 'Documentació Hipoteca',
      'art.doc.cta.h2': 'Tens Tot Llest per al Banc?',
      'art.doc.cta.p': "T'ajudem a preparar i organitzar tota la documentació per maximitzar les possibilitats d'aprovació.",
      'art.doc.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* hipoteca-fija-variable-mixta */
      'art.tipos.tag': "Tipus d'Hipoteca · 2026",
      'art.tipos.title': "Hipoteca Fixa, Variable o Mixta:<br />Quina Triar el 2026?",
      'art.tipos.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 10 min de lectura',
      'art.tipos.breadcrumb': "Tipus d'Hipoteca",
      'art.tipos.cta.h2': 'No Saps Quina Hipoteca Triar?',
      'art.tipos.cta.p': "T'ajudem a escollir la modalitat hipotecària que millor encaixa amb el teu perfil i objectius financers.",
      'art.tipos.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* preguntas-frecuentes-hipoteca */
      'art.faq.tag': 'FAQ Hipoteques · 2026',
      'art.faq.title': 'Preguntes Freqüents sobre Hipoteques:<br />Tot Resolt',
      'art.faq.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 14 min de lectura',
      'art.faq.breadcrumb': 'FAQ Hipoteques',
      'art.faq.cta.h2': 'Tens Més Preguntes sobre la teva Hipoteca?',
      'art.faq.cta.p': "Explica'ns el teu cas i et responem amb criteris reals i solucions concretes.",
      'art.faq.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* euribor-que-es */
      'art.euribor.tag': 'Euríbor · 2026',
      'art.euribor.title': "Euríbor 2026: Què és, Com Funciona<br />i Com Afecta la teva Hipoteca",
      'art.euribor.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 10 min de lectura',
      'art.euribor.breadcrumb': 'Euríbor 2026',
      'art.euribor.cta.h2': 'Tens Dubtes sobre Hipoteca Fixa o Variable?',
      'art.euribor.cta.p': "Analitzem l'Euríbor actual i el teu perfil per recomanar-te la millor modalitat hipotecària.",
      'art.euribor.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* hipoteca-no-residente */
      'art.nores.tag': 'No Residents · 2026',
      'art.nores.title': 'Hipoteca per a No Residents a Espanya:<br />Guia Completa 2026',
      'art.nores.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 10 min de lectura',
      'art.nores.breadcrumb': 'Hipoteca No Residents',
      'art.nores.cta.h2': "Busques una Hipoteca a Espanya sense ser Resident?",
      'art.nores.cta.p': "Coneixem els bancs que treballen amb no residents i sabem com presentar el teu expedient per aconseguir l'aprovació.",
      'art.nores.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* mejorar-perfil-hipotecario */
      'art.perfil.tag': 'Perfil Hipotecari · 2026',
      'art.perfil.title': "Com Millorar el teu Perfil Hipotecari<br />perquè el Banc et digui Sí",
      'art.perfil.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 11 min de lectura',
      'art.perfil.breadcrumb': 'Millorar Perfil Hipotecari',
      'art.perfil.cta.h2': 'Vols Millorar el teu Perfil abans de Demanar la Hipoteca?',
      'art.perfil.cta.p': "T'analitzem el perfil i et donem un pla d'acció concret per maximitzar les teves opcions.",
      'art.perfil.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* hipoteca-barcelona */
      'art.bcn.tag': 'Barcelona · 2026',
      'art.bcn.title': 'Hipoteca a Barcelona 2026: Guia per a<br />Compradors i el Paper del Broker',
      'art.bcn.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 11 min de lectura',
      'art.bcn.breadcrumb': 'Hipoteca Barcelona',
      'art.bcn.cta.h2': 'Compres a Barcelona i Necessites una Hipoteca?',
      'art.bcn.cta.p': "Som un broker hipotecari especialitzat en el mercat barceloní. T'acompanyem en tot el procés.",
      'art.bcn.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* recursos page — new guide cards */
      'rec.g7.tag': 'Euríbor',
      'rec.g7.title': 'Euríbor 2026: Guia Completa',
      'rec.g7.desc': "Què és l'Euríbor, com ha evolucionat i com afecta la teva hipoteca variable. Tot el que necessites saber per prendre decisions informades.",
      'rec.g8.tag': 'No Residents',
      'rec.g8.title': 'Hipoteca per a No Residents',
      'rec.g8.desc': "Guia completa per a estrangers que volen comprar habitatge a Espanya: requisits, finançament màxim, documentació i millors bancs.",
      'rec.g9.tag': 'Estratègia',
      'rec.g9.title': 'Millora el teu Perfil Hipotecari',
      'rec.g9.desc': "Com millorar la teva puntuació creditícia, reduir deutes i presentar el millor expedient possible perquè el banc aprovi la teva hipoteca.",
      'rec.g10.tag': 'Barcelona',
      'rec.g10.title': 'Hipoteca a Barcelona 2026',
      'rec.g10.desc': "Mercat immobiliari barceloní, preus actuals, millors barris i com un broker local pot marcar la diferència en el teu procés.",
      'rec.g11.tag': 'Segona Residència',
      'rec.g11.title': 'Hipoteca Segona Residència',
      'rec.g11.desc': "Finançament màxim del 70–75%, diferències fiscals amb l'habitatge habitual i com accedir a les millors condicions en una operació més exigent.",
      'rec.g12.tag': 'Com Funciona',
      'rec.g12.title': 'Com Treballa un Broker',
      'rec.g12.desc': "Què fa un broker hipotecari pas a pas, quan cobra (només en el moment de la signatura) i per què pot aconseguir-te millors condicions que el banc directe.",
      'rec.g13.tag': 'Capacitat',
      'rec.g13.title': 'Quant Puc Demanar d\'Hipoteca?',
      'rec.g13.desc': 'Com calculen els bancs quant et presten: la regla del 35%, el 80% de taxació i exemples reals segons el teu salari i perfil.',
      'rec.g14.tag': 'Despeses',
      'rec.g14.title': 'Despeses en Comprar Habitatge 2026',
      'rec.g14.desc': 'ITP, notaria, registre, gestoria i taxació: guia completa de totes les despeses al comprar pis a Espanya i quants diners necessites estalviats.',
      'rec.g15.tag': 'Mercat',
      'rec.g15.title': 'Les Millors Hipoteques de 2026',
      'rec.g15.desc': 'Com trobar la millor hipoteca el 2026: què comparar, fixa vs variable vs mixta, i com un broker aconsegueix condicions que el banc no ofereix directament.',
      'rec.g16.tag': 'Madrid',
      'rec.g16.title': 'Broker Hipotecari a Madrid',
      'rec.g16.desc': 'Com aconseguir la millor hipoteca a Madrid. Mercat, perfils, procés i per què un broker independent aconsegueix millors condicions que anar directament al banc.',
      'rec.g17.tag': 'València',
      'rec.g17.title': 'Broker Hipotecari a València',
      'rec.g17.desc': 'Assessorament hipotecari expert a València. Obra nova, segona residència i inversors. Accés a més de 20 bancs i acompanyament fins a la signatura.',
      'rec.g18.tag': 'Sevilla',
      'rec.g18.title': 'Broker Hipotecari a Sevilla',
      'rec.g18.desc': 'La teva hipoteca a Sevilla amb les millors condicions. Autònoms, funcionaris i compradors en general. Procés digital i sense desplaçaments.',
      'rec.g19.tag': 'Màlaga',
      'rec.g19.title': 'Broker Hipotecari a Màlaga',
      'rec.g19.desc': 'Hipoteques a Màlaga i la Costa del Sol per a residents i estrangers. Especialistes en no residents i inversors internacionals.',
      'rec.g20.tag': 'No Residents',
      'rec.g20.title': 'Hipoteca per a Estrangers a Espanya',
      'rec.g20.desc': 'Guia completa per obtenir hipoteca a Espanya sent estranger o no resident. Requisits, documentació i com aconseguir les millors condicions el 2026.',
      'rec.read': 'Llegir guia',

      /* ── Article: Segona Residència ────────── */
      'art.seg.tag': 'Segona Residència · 2026',
      'art.seg.title': "Hipoteca per a Segona Residència:<br />Requisits i Diferències amb l'Habitatge Habitual",
      'art.seg.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 10 min de lectura',
      'art.seg.breadcrumb': 'Hipoteca Segona Residència',
      'art.seg.cta.h2': 'Pensant en Comprar una Segona Residència?',
      'art.seg.cta.p': "Analitzem la teva capacitat financera, t'orientem sobre el percentatge de finançament assolible i busquem el banc que millors condicions t'ofereix per a la teva segona residència.",
      'art.seg.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* ── Article: Broker Hipotecari ─────────── */
      'art.broker.tag': 'Com Funciona · 2026',
      'art.broker.title': "Com Funciona un Broker Hipotecari:<br />Què Fa, Quant Cobra i Per Què Usar-lo",
      'art.broker.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 9 min de lectura',
      'art.broker.breadcrumb': 'Com Funciona un Broker Hipotecari',
      'art.broker.cta.h2': 'Vols Saber Quina Hipoteca Pots Aconseguir?',
      'art.broker.cta.p': 'Primera reunió gratuïta i sense compromís. T\'analitzem, t\'orientem i, si decideixes avançar, gestionem la teva hipoteca de principi a fi. Sense hipoteca, sense honoraris.',
      'art.broker.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* ── Contacto page ──────────────────────── */
      'cnt.hero.badge': 'Contacte · NortFinance',
      'cnt.hero.title': 'Parlem de la teva<br /><span class="text-gold">situació financera</span>',
      'cnt.hero.desc': "Explica'ns el teu cas i dissenyarem una estratègia hipotecària a la teva mida. Sense costos inicials ni compromisos de cap mena.",
      'cnt.trust1': 'Estudi 100% Gratuït',
      'cnt.trust2': 'Sense Compromisos',
      'cnt.trust3': 'Resposta en menys de 24h',
      'cnt.trust4': 'Firma Familiar i Propera',
      'cnt.form.heading': "Explica'ns el teu cas<br /><span>i et donem claredat</span>",
      'cnt.form.name': 'Nom complet',
      'cnt.form.tel': 'Telèfon',
      'cnt.form.email': 'Correu electrònic',
      'cnt.form.situation': 'Situació actual',
      'cnt.form.msg': 'Missatge o detalls del teu cas',
      'cnt.form.submit': "Sol·licitar el meu Estudi Gratuït",
      'cnt.form.legal': 'En enviar, acceptes la nostra <a href="privacidad.html">política de privacitat</a>. Les teves dades no seran cedides a tercers.',
      'cnt.info.heading': 'Contacte Directe',
      'cnt.wa.title': 'Línia Personal<br />de WhatsApp',
      'cnt.wa.desc': "Escriu-nos directament sense formularis. Responem de persona a persona, amb la proximitat d'una firma familiar.",
      'cnt.wa.btn': 'Escriure per WhatsApp Directe',
      'cnt.info.l1': 'Correu oficial',
      'cnt.info.l2': "Horari d'atenció personalitzada",
      'cnt.info.l3': 'El nostre compromís',
      'cnt.info.v2': 'Dilluns a Divendres<br />9:00h a 19:00h',
      'cnt.info.v3': "Com a firma familiar, responem directament de persona a persona en menys de 24 hores.",

      /* ── Contact form select & placeholders ─── */
      'cnt.select.default': 'Selecciona la teva situació',
      'cnt.select.opt1': 'Vull comprar el meu primer habitatge',
      'cnt.select.opt2': 'Sóc autònom/a',
      'cnt.select.opt3': "Vull canviar d'hipoteca",
      'cnt.select.opt4': 'Inversió o Segona residència',
      'cnt.select.opt5': 'Altres serveis patrimonials',
      'cnt.form.name.ph': 'El teu nom i cognoms',
      'cnt.form.msg.ph': "Explica'ns breument la teva situació: preu de l'habitatge que busques, ingressos aproximats, terminis… qualsevol detall ens ajuda a preparar el teu estudi.",

      /* ── Footer brand description ───────────── */
      'footer.desc': "Firma d'assessorament financer i solucions hipotecàries premium. La teva hipoteca, la teva inversió i el teu patrimoni, gestionats amb criteri real.",

      /* ── Partners page ──────────────────────── */
      'partners.hero.tag': 'Col·laboradors',
      'partners.hero.title': 'Empreses que comparteixen<br />el nostre <span class="text-gold">criteri</span>',
      'partners.hero.sub': "NortFinance treballa amb una xarxa seleccionada de professionals i empreses que ofereixen serveis complementaris amb la mateixa exigència i honestedat que nosaltres apliquem a l'assessorament hipotecari.",
      'partners.grid.tag': 'La nostra xarxa',
      'partners.grid.title': 'Partners <span class="text-gold">actuals</span>',
      'partners.card.cat': 'Construcció',
      'partners.card.name': 'Empresa de Construccions',
      'partners.card.desc': "Especialistes en construcció residencial i rehabilitació. Projectes de qualitat amb dècades d'experiència en el sector.",
      'partners.card.soon': 'Properament →',

      /* ── Suite Maison ── */
      'partners.sm.cat': 'Construcció Sostenible',
      'partners.sm.name': 'Suite Maison',
      'partners.sm.desc': "Especialistes en construcció d'habitatges sostenibles i eficients energèticament. Projectes clau en mà amb preu tancat, disseny personalitzat i certificació energètica categoria A.",
      'partners.sm.link': 'Visitar web →',
      'partners.net.note': '✦   Xarxa en construcció — nous partners properament',
      'partners.cta.tag': 'Col·labora amb nosaltres',
      'partners.cta.title': 'Vols ser<br />partner de <span class="text-gold">NortFinance?</span>',
      'partners.cta.desc1': "Si la teva empresa ofereix serveis complementaris a l'assessorament hipotecari o patrimonial, i comparteixes la nostra filosofia de treball honest i orientat al client, ens encantaria conèixer-te.",
      'partners.cta.desc2': "Treballem amb immobiliàries, promotors, constructors, gestories, assegurances i qualsevol professional que vulgui oferir més valor als seus clients.",
      'partners.form.nombre': 'Nom',
      'partners.form.nombre.ph': 'El teu nom',
      'partners.form.empresa': 'Empresa',
      'partners.form.empresa.ph': 'Nom de la teva empresa',
      'partners.form.email': 'Email',
      'partners.form.email.ph': 'tu@empresa.com',
      'partners.form.web': 'Web',
      'partners.form.web.ph': 'https://latevaweb.com',
      'partners.form.tel': 'Telèfon',
      'partners.form.tel.ph': '+34 600 000 000',
      'partners.form.msg': "Explica'ns sobre la teva empresa",
      'partners.form.msg.ph': "A què us dediqueu? Per què creus que encaixaríem?",
      'partners.form.privacy': 'He llegit i accepto la <a href="privacidad.html">Política de Privacitat</a> de NortFinance.',
      'partners.form.submit': 'Enviar sol·licitud →',
      'partners.footer.cta': 'Ser partner →',

      /* ── Casos de éxito page ─────────────────── */
      'ce.hero.badge': 'Resultats reals · Clients reals',
      'ce.hero.title': 'No expliquis el que<br>podem fer.<br><em>T\'ho demostrem.</em>',
      'ce.hero.sub': "Cada cas aquí documentat és un client real que va arribar amb una situació concreta — i va sortir amb les millors condicions que el mercat podia oferir.",
      'ce.hero.t1': 'Dades reals anonimitzades',
      'ce.hero.t2': 'Estalvi verificable',
      'ce.hero.t3': 'Procés transparent',
      'ce.hero.t4': '+20 bancs comparats',
      'ce.stats.l1': 'Hipoteques gestionades',
      'ce.stats.l2': 'Total estalviat',
      'ce.stats.l3': "Taxa d'aprovació",
      'ce.stats.l4': 'Atenció garantida',
      'ce.cases.tag': 'Casos documentats',
      'ce.cases.title': 'El que aconseguim per<br>als nostres clients',
      'ce.cases.sub': 'Tres situacions diferents, un mateix resultat: les millors condicions possibles.',
      'ce.cta.title': "Vols ser el proper<br><em>cas d'èxit</em>?",
      'ce.cta.sub': "L'estudi és gratuït, sense compromís i sense lletra petita. En 24–48h et diem exactament què podem aconseguir per al teu perfil.",
      'ce.cta.btn1': 'El meu estudi gratuït',
      'ce.cta.btn2': 'Simular la meva hipoteca →',
      /* ── WhatsApp widget ───────────────────── */
      'wa.label': 'Escriu-nos',
      'wa.sub': 'Resposta immediata',

      /* ── Recursos: read article CTA ────────── */
      'art.read': "Llegir l'article →",
      'art.also': 'També et pot interessar',
      'art.more': 'Més recursos',

      /* ── Article: Quant Puc Demanar ─────────── */
      'art.cuanto.tag': 'Capacitat Hipotecària · 2026',
      'art.cuanto.title': "Quant Puc Demanar d'Hipoteca?<br />Càlcul i Requisits 2026",
      'art.cuanto.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 11 min de lectura',
      'art.cuanto.breadcrumb': "Quant Puc Demanar d'Hipoteca?",
      'art.cuanto.cta.h2': 'Vols Saber Quant Pots Demanar?',
      'art.cuanto.cta.p': 'Analitzem el teu perfil i et diem exactament quina finançament pots aconseguir.',
      'art.cuanto.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* ── Article: Despeses Compra Habitatge ─── */
      'art.gastos.tag': 'Despeses i Fiscalitat · 2026',
      'art.gastos.title': 'Despeses en Comprar un Habitatge<br />a Espanya 2026: Guia Completa',
      'art.gastos.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 12 min de lectura',
      'art.gastos.breadcrumb': 'Despeses de Compravenda',
      'art.gastos.cta.h2': 'Vols Calcular el Cost Total de la Teva Compra?',
      'art.gastos.cta.p': "T'ajudem a planificar totes les despeses i impostos perquè no hi hagi sorpreses.",
      'art.gastos.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* ── Article: Millors Hipoteques 2026 ────── */
      'art.mejores.tag': 'Mercat Hipotecari · 2026',
      'art.mejores.title': "Les Millors Hipoteques de 2026:<br />Com Trobar l'Oferta Ideal",
      'art.mejores.meta': 'NortFinance · Assessoria Financera · Maig 2026 · 13 min de lectura',
      'art.mejores.breadcrumb': 'Millors Hipoteques 2026',
      'art.mejores.cta.h2': 'Busques la Millor Hipoteca per al teu Perfil?',
      'art.mejores.cta.p': "Accedim a més de 20 entitats i negociem per aconseguir-te les condicions més competitives del mercat.",
      'art.mejores.cta.btn': 'Sol·licitar Estudi Gratuït →',

      /* ── Article: Broker Madrid ──────────────── */
      'art.madrid.breadcrumb': 'Broker Hipotecari Madrid',
      'art.madrid.tag': 'Assessorament Hipotecari · 2026',
      'art.madrid.title': 'Broker Hipotecari a Madrid:<br />Com Aconseguir la Millor Hipoteca',
      'art.madrid.meta': 'NortFinance · Assessoria Financera · Juny 2026 · 5 min de lectura',
      'art.madrid.cta.h2': 'Vols saber quant pots demanar i en quines condicions?',
      'art.madrid.cta.p': 'Et fem una anàlisi gratuïta del teu perfil en menys de 24 hores.',
      'art.madrid.cta.btn': 'El Meu Estudi Gratuït →',

      /* ── Article: Broker Valencia ────────────── */
      'art.valencia.breadcrumb': 'Broker Hipotecari València',
      'art.valencia.tag': 'Assessorament Hipotecari · 2026',
      'art.valencia.title': 'Broker Hipotecari a València:<br />Assessorament Hipotecari Expert',
      'art.valencia.meta': 'NortFinance · Assessoria Financera · Juny 2026 · 5 min de lectura',
      'art.valencia.cta.h2': 'Vols saber quant pots demanar i en quines condicions?',
      'art.valencia.cta.p': 'Et fem una anàlisi gratuïta del teu perfil en menys de 24 hores.',
      'art.valencia.cta.btn': 'El Meu Estudi Gratuït →',

      /* ── Article: Broker Sevilla ─────────────── */
      'art.sevilla.breadcrumb': 'Broker Hipotecari Sevilla',
      'art.sevilla.tag': 'Assessorament Hipotecari · 2026',
      'art.sevilla.title': 'Broker Hipotecari a Sevilla:<br />La Teva Hipoteca amb les Millors Condicions',
      'art.sevilla.meta': 'NortFinance · Assessoria Financera · Juny 2026 · 5 min de lectura',
      'art.sevilla.cta.h2': 'Vols saber quant pots demanar i en quines condicions?',
      'art.sevilla.cta.p': 'Et fem una anàlisi gratuïta del teu perfil en menys de 24 hores.',
      'art.sevilla.cta.btn': 'El Meu Estudi Gratuït →',

      /* ── Article: Broker Màlaga ──────────────── */
      'art.malaga.breadcrumb': 'Broker Hipotecari Màlaga',
      'art.malaga.tag': 'Assessorament Hipotecari · 2026',
      'art.malaga.title': 'Broker Hipotecari a Màlaga:<br />Hipoteques per a Residents i No Residents',
      'art.malaga.meta': 'NortFinance · Assessoria Financera · Juny 2026 · 5 min de lectura',
      'art.malaga.cta.h2': 'Vols saber quant pots demanar i en quines condicions?',
      'art.malaga.cta.p': 'Et fem una anàlisi gratuïta del teu perfil en menys de 24 hores.',
      'art.malaga.cta.btn': 'El Meu Estudi Gratuït →',

      /* ── Article: Hipoteca Estrangers ────────── */
      'art.ext.breadcrumb': 'Hipoteca per a Estrangers a Espanya',
      'art.ext.tag': 'Assessorament Hipotecari · 2026',
      'art.ext.title': 'Hipoteca per a Estrangers a Espanya:<br />Guia Completa 2026',
      'art.ext.meta': 'NortFinance · Assessoria Financera · Juny 2026 · 5 min de lectura',
      'art.ext.cta.h2': 'Vols saber quant pots demanar i en quines condicions?',
      'art.ext.cta.p': 'Et fem una anàlisi gratuïta del teu perfil en menys de 24 hores.',
      'art.ext.cta.btn': 'El Meu Estudi Gratuït →',
      /* ── Article prose: Guia Hipotecaria ──────── */
      'art.guia.prose': `<p>Aconseguir una hipoteca a Espanya pot semblar un procés laberíntic: documentació, negociacions amb bancs, oferta vinculant, notaria… Però amb la informació correcta i l'acompanyament adequat, el camí es simplifica enormement. En aquesta guia hipotecària completa per a 2026 t'expliquem tot el procés, des que decideixes comprar fins que signes davant de notari.</p>

      <h2>Què és una Hipoteca i Com Funciona?</h2>
      <p>Una hipoteca és un préstec a llarg termini en el qual l'immoble que adquireixes actua com a garantia de pagament. A diferència d'altres crèdits, el banc pot executar la garantia (quedar-se amb l'habitatge) si deixes de pagar les quotes. A Espanya, les hipoteques solen tenir terminis d'entre 15 i 30 anys, tot i que alguns productes arriben fins als 40 anys per a primeres residències.</p>
      <p>El cost real d'una hipoteca no el determina únicament el tipus d'interès nominal, sinó la <strong>TAE (Taxa Anual Equivalent)</strong>, que incorpora comissions, assegurances vinculades i altres costos associats. Compara sempre les hipoteques usant la TAE, no el TIN.</p>

      <h2>Passos per Demanar una Hipoteca a Espanya</h2>

      <h3>1. Avalua la teva situació financera</h3>
      <p>Abans de visitar un banc, analitza la teva situació real. El criteri general és que la quota mensual de la hipoteca no superi el <strong>35% dels teus ingressos nets</strong>. Si tens altres deutes (cotxe, préstecs personals), el percentatge d'esforç puja i els bancs ho penalitzen.</p>

      <h3>2. Calcula quants diners necessites estalviar</h3>
      <p>Els bancs a Espanya financen com a màxim el <strong>80% del valor de taxació</strong> de l'habitatge (o del preu de compra, el menor dels dos). Això significa que necessites tenir estalviat almenys el 20% del preu més un 10-12% addicional per cobrir despeses: impost de transmissions patrimonials (ITP) o IVA en obra nova, notaria, registre, gestoria i taxació.</p>

      <h3>3. Reuneix la documentació necessària</h3>
      <p>Els bancs exigiran DNI o NIE, les últimes tres nòmines, la declaració de l'IRPF dels dos darrers exercicis, vida laboral, extractes bancaris dels últims sis mesos i la nota simple de l'immoble. Com més ordenada i completa estigui la teva documentació, més ràpid anirà el procés. Consulta la nostra <a href="documentacion-necesaria-hipoteca.html">guia de documentació hipotecària</a> per no deixar res enrere.</p>

      <h3>4. Sol·licita ofertes a diversos bancs</h3>
      <p>Un error freqüent és anar únicament al banc on tens la nòmina domiciliada. Cada entitat té polítiques de risc diferents, i la diferència entre l'oferta més cara i la més barata pot suposar desenes de milers d'euros al llarg de la vida del préstec. Negocia sempre amb almenys tres o quatre bancs simultàniament.</p>

      <h3>5. Analitza la FEIN i la FIAE</h3>
      <p>Un cop el banc aprova la teva operació, està obligat a lliurar-te la <strong>FEIN (Fitxa Europea d'Informació Normalitzada)</strong>, que és el document precontractual vinculant amb totes les condicions del préstec. També rebràs la <strong>FIAE (Fitxa d'Advertències Estandarditzades)</strong>, que alerta sobre clàusules amb possible impacte financer. Disposes d'un mínim de 10 dies naturals per estudiar-les abans de signar.</p>

      <h3>6. La visita al notari abans de signar</h3>
      <p>La Llei de Contractes de Crèdit Immobiliari de 2019 obliga que, almenys el dia hàbil anterior a la signatura, acudeixis sense el banc al notari perquè aquest verifiqui que has llegit i entès la FEIN i et faci un test de comprensió. És una protecció legal per al comprador.</p>

      <h3>7. Signatura davant de notari</h3>
      <p>La signatura final es realitza davant de notari amb la presència del banc, el venedor i el comprador. En aquell acte es lliura els diners i es transmet la propietat. A partir d'aquest moment, la hipoteca comença a córrer.</p>

      <h2>Tipus d'Hipoteca a Espanya el 2026</h2>
      <p>Hi ha tres modalitats principals, i l'elecció correcta depèn del teu perfil i de les teves expectatives sobre l'evolució dels tipus d'interès:</p>
      <ul>
        <li><strong>Hipoteca fixa:</strong> el tipus d'interès no canvia en tota la vida del préstec. Quota estable i previsible.</li>
        <li><strong>Hipoteca variable:</strong> el tipus es revisa periòdicament (generalment cada any) en funció de l'Euríbor. Pot baixar o pujar.</li>
        <li><strong>Hipoteca mixta:</strong> combina un període inicial a tipus fix (normalment 5-10 anys) amb la resta a tipus variable.</li>
      </ul>
      <p>Si vols aprofundir en les diferències, llegeix el nostre article <a href="hipoteca-fija-variable-mixta.html">Hipoteca Fixa, Variable o Mixta: Quina Triar el 2026?</a></p>

      <h2>Per Què Contractar un Broker Hipotecari a Espanya</h2>
      <p>Un broker hipotecari actua com a intermediari entre tu i els bancs. No treballa per a cap entitat: treballa per a tu. La seva funció és presentar el teu expedient de forma òptima a múltiples bancs, negociar les condicions en el teu nom i acompanyar-te durant tot el procés.</p>

      <h3>Avantatges concrets d'usar un broker</h3>
      <ul>
        <li>Accés a condicions que no s'ofereixen al client de carrer a la xarxa d'oficines.</li>
        <li>Estalvi de temps: en lloc d'anar banc per banc, el broker ho fa per tu.</li>
        <li>Anàlisi objectiu: el broker et diu quina hipoteca et convé, no quina li dona més comissió.</li>
        <li>Presentació professional de l'expedient, la qual cosa redueix les denegacions.</li>
        <li>Acompanyament fins a la signatura notarial, incloent-hi coordinació amb taxador, gestoria i notaria.</li>
      </ul>
      <p>A <a href="../hipotecas.html">NortFinance</a> oferim aquest servei de manera integral. Analitzem la teva situació, presentem el teu expedient a la xarxa bancària més adequada i negociem per aconseguir-te les millors condicions possibles.</p>

      <h2>Com Negociar amb els Bancs: Claus que Funcionen</h2>
      <p>Els bancs no ofereixen de bon principi les seves millors condicions. Sempre són negociables. Aquestes són les palanques més efectives:</p>
      <ul>
        <li><strong>Estalvi demostrat:</strong> com més gran sigui el percentatge d'entrada respecte al valor de l'immoble, millor risc representa per al banc i millors condicions obtindràs.</li>
        <li><strong>Estabilitat laboral:</strong> contracte indefinit amb antiguitat superior a dos anys és el perfil que més agrada als bancs.</li>
        <li><strong>Competència entre entitats:</strong> si tens diverses ofertes sobre la taula, utilitza-les com a palanca. Els bancs milloren condicions quan saben que hi ha competència real.</li>
        <li><strong>Vinculació selectiva:</strong> alguns bancs ofereixen bonificacions en el tipus a canvi de domiciliar la nòmina, contractar assegurances o un pla de pensions. Calcula sempre si l'estalvi en interessos compensa el cost dels productes vinculats.</li>
      </ul>

      <h2>La FEIN: Què és i Per Què és Tan Important</h2>
      <p>La Fitxa Europea d'Informació Normalitzada (FEIN) és el document precontractual que el banc ha de lliurar-te quan aprova la teva hipoteca. Té un format estandarditzat a tota la Unió Europea i recull de forma exhaustiva totes les condicions del préstec: import, termini, tipus d'interès, TAE, quota mensual, despeses incloses i excloses, condicions d'amortització anticipada i possibles penalitzacions.</p>
      <p>La FEIN és <strong>vinculant per al banc durant almenys 10 dies naturals</strong>. Durant aquest temps el banc no pot canviar les condicions ofertes. És la teva finestra legal per comparar, consultar amb un broker o un advocat, i prendre una decisió informada sense pressió.</p>
      <p>No signies mai sense haver llegit la FEIN detingudament. Si tens dubtes sobre alguna clàusula, consulta'ns a <a href="../contacto.html">NortFinance</a> abans de comprometre't.</p>

      <h2>Despeses Associades a la Hipoteca que Has de Conèixer</h2>
      <p>Després de la Llei de Contractes de Crèdit Immobiliari de 2019, el repartiment de despeses va canviar significativament. Actualment:</p>
      <ul>
        <li>El banc paga: notaria de l'escriptura d'hipoteca, gestoria, registre de la propietat i Impost d'Actes Jurídics Documentats (AJD).</li>
        <li>El comprador paga: taxació de l'habitatge (entre 300 i 600 euros segons l'entitat) i la notaria de la compravenda.</li>
      </ul>
      <p>A més, el comprador assumeix l'ITP en habitatge de segona mà (entre el 6% i el 10% del preu segons la comunitat autònoma) o l'IVA del 10% en obra nova. Aquestes despeses no són negociables i han d'estar cobertes pels teus estalvis.</p>

      <h2>Conclusió: La Informació és la Teva Millor Eina</h2>
      <p>El mercat hipotecari espanyol és complex, però no inaccessible. Entendre el procés, conèixer els teus drets com a consumidor i comptar amb el suport de professionals especialitzats marca la diferència entre aconseguir la hipoteca que mereixes o acceptar condicions per sota del que et correspon.</p>
      <p>A <a href="../hipotecas.html">NortFinance</a> portem anys ajudant famílies i particulars a obtenir finançament hipotecari en les millors condicions. Si tens dubtes sobre el teu cas concret, sol·licita el teu estudi gratuït i sense compromís.</p>`,
      /* ── Article prose: Primera Vivienda ─────── */
      'art.pv.prose': `<p>Comprar el teu primer habitatge és probablement la decisió financera més important de la teva vida. El procés implica planificació, paciència i conèixer bé les regles del joc. En aquesta guia t'expliquem tot el que necessites saber: quants diners necessites realment estalviar, quins errors cometen la majoria dels compradors primerencs, quines ajudes existeixen el 2026 i com preparar-te perquè els bancs diguin sí.</p>

      <h2>Quant Necessito Estalviar per Comprar el meu Primer Habitatge?</h2>
      <p>Aquesta és la pregunta que més ens fan, i la resposta honesta és: <strong>més del que molta gent creu</strong>. El càlcul correcte és el següent:</p>

      <h3>El 20% d'entrada</h3>
      <p>Els bancs financen com a màxim el 80% del valor de taxació o del preu de compra (el menor dels dos). Això significa que has d'aportar almenys el <strong>20% del preu de l'habitatge</strong> del teu propi butxaca. Si l'habitatge costa 250.000 euros, necessites 50.000 euros només per a l'entrada.</p>

      <h3>El 10-12% per a despeses</h3>
      <p>A l'entrada cal sumar-li les despeses de compravenda, que a la major part d'Espanya oscil·len entre el 10% i el 12% del preu de compra. Aquestes inclouen:</p>
      <ul>
        <li><strong>Impost de Transmissions Patrimonials (ITP):</strong> per a habitatge de segona mà, entre el 6% i el 10% segons la comunitat autònoma.</li>
        <li><strong>IVA del 10%:</strong> per a obra nova (més l'1,5% d'AJD a la majoria de comunitats).</li>
        <li><strong>Notaria de compravenda:</strong> entre 600 i 1.200 euros aproximadament.</li>
        <li><strong>Registre de la propietat:</strong> entre 400 i 900 euros.</li>
        <li><strong>Taxació de l'immoble:</strong> entre 300 i 600 euros (la paga el comprador).</li>
        <li><strong>Gestoria:</strong> entre 300 i 600 euros.</li>
      </ul>

      <div class="info-box">
        <p><strong>Exemple real:</strong> per a un habitatge de 200.000 euros a Catalunya necessitaries: 40.000 euros d'entrada + 22.000 euros de despeses (ITP 10% + resta) = <strong>62.000 euros</strong> estalviats abans de començar el procés.</p>
      </div>

      <h2>Els 7 Errors Més Comuns en Comprar el Primer Habitatge</h2>

      <h3>Error 1: Anar al banc abans d'estar preparat</h3>
      <p>Molts compradors acudeixen al banc abans de tenir l'expedient complet o fins i tot sense haver escollit immoble. Això genera consultes al CIRBE (Central d'Informació de Riscos del Banc d'Espanya) innecessàries i, en alguns casos, pot perjudicar el teu perfil si hi ha diverses consultes en poc temps.</p>

      <h3>Error 2: Calcular només la quota mensual</h3>
      <p>Fixar-se només en que "puc pagar la quota" sense considerar les despeses associades, les derrames de la comunitat, l'IBI, el manteniment o possibles períodes d'atur és un error freqüent. La regla del 35% d'esforç existeix per alguna cosa: és el marge que et permet viure sense asfíxia financera.</p>

      <h3>Error 3: No comparar ofertes de diferents bancs</h3>
      <p>El banc on tens la nòmina no té per què ser el que millors condicions t'ofereixi. En una hipoteca a 25 anys, una diferència de 0,3 punts en el tipus d'interès pot suposar més de 15.000 euros de diferència total. Compara sempre amb l'ajuda d'un broker com <a href="../hipotecas.html">NortFinance</a>.</p>

      <h3>Error 4: Acceptar els productes vinculats sense negociar</h3>
      <p>Els bancs solen oferir bonificacions en el tipus d'interès a canvi de domiciliar la nòmina, contractar una assegurança de vida, una assegurança de llar o un pla de pensions. No tot el que el banc ofereix és dolent, però has de calcular si el cost anual d'aquests productes és menor que l'estalvi en interessos que obtens a canvi.</p>

      <h3>Error 5: Signar abans de revisar la FEIN</h3>
      <p>La Fitxa Europea d'Informació Normalitzada és el document legal amb totes les condicions del préstec. No signies mai sense haver-la llegit en detall. Tens almenys 10 dies per estudiar-la i consultar amb qui necessitis.</p>

      <h3>Error 6: No revisar la nota simple de l'immoble</h3>
      <p>La nota simple registral de l'immoble és un document clau: mostra qui és el propietari real, si hi ha càrregues pendents (hipoteques, embargaments, servituds) i la descripció registral de la finca. No compris mai sense haver-la verificat.</p>

      <h3>Error 7: Subestimar el temps del procés</h3>
      <p>Des que trobes l'immoble fins que signes davant de notari poden passar entre 2 i 4 mesos fàcilment. Si tens un arrendament que venç o una mudança planificada, tingues en compte aquests terminis.</p>

      <h2>Com Preparar el teu Perfil Bancari</h2>
      <p>Els bancs analitzen la teva sol·licitud segons diversos criteris de risc. Aquests són els factors que més pesen en la seva decisió:</p>
      <ul>
        <li><strong>Estabilitat laboral:</strong> un contracte indefinit amb més de dos anys d'antiguitat és el perfil ideal.</li>
        <li><strong>Ràtio d'endeutament:</strong> el total dels teus deutes mensuals (incloent-hi la nova hipoteca) no ha de superar el 35-40% dels teus ingressos nets.</li>
        <li><strong>Historial de pagaments:</strong> si has tingut impagaments registrats en fitxers de morositat (ASNEF, RAI), resol-los abans de sol·licitar la hipoteca.</li>
        <li><strong>Estalvi demostrat:</strong> els bancs valoren molt positivament que l'estalvi que aportes estigui al teu compte des de fa almenys sis mesos.</li>
        <li><strong>Antiguitat al banc:</strong> tenir historial previ com a client pot ajudar, tot i que no substitueix comparar amb altres entitats.</li>
      </ul>

      <h2>Ajudes per a Joves Compradors a Espanya 2026</h2>
      <p>El 2026 hi ha diverses línies de suport per facilitar l'accés a l'habitatge a joves i famílies:</p>

      <h3>Aval ICO per a primera residència</h3>
      <p>El Govern d'Espanya, a través de l'ICO (Institut de Crèdit Oficial), ofereix un programa d'avals del 20% del valor de compra per a joves menors de 35 anys i famílies amb fills menors d'edat que comprin el seu primer habitatge. Això permet accedir a finançament del 100% del preu sense necessitat de tenir el 20% d'entrada propi, tot i que sí cal cobrir les despeses.</p>

      <h3>Reducció de l'ITP en habitatge habitual</h3>
      <p>Moltes comunitats autònomes tenen tipus reduïts de l'ITP per a compradors de primera residència, joves, famílies nombroses o persones amb discapacitat. Abans de calcular les teves despeses, verifica quines bonificacions s'apliquen a la teva comunitat.</p>

      <h2>El Paper del Broker Hipotecari en la teva Primera Compra</h2>
      <p>Per a un comprador primerenc, el procés hipotecari pot ser aclaparador. Un broker hipotecari especialitzat com <a href="../hipotecas.html">NortFinance</a> actua com a guia i negociador durant tot el procés:</p>
      <ul>
        <li>T'ajuda a entendre quina hipoteca pots aconseguir abans de comprometre't amb la compra d'un immoble.</li>
        <li>Prepara i presenta el teu expedient de forma òptima a múltiples bancs simultàniament.</li>
        <li>Negocia en el teu nom per obtenir les millors condicions possibles.</li>
        <li>T'acompanya en la revisió de la FEIN i en la visita prèvia al notari.</li>
        <li>Coordina tots els agents del procés: taxador, gestoria, notaria i banc.</li>
      </ul>
      <p>El cost del broker hipotecari només es paga si l'operació es duu a terme amb èxit. En molts casos, l'estalvi obtingut en condicions del préstec supera àmpliament els honoraris del broker.</p>

      <h2>Quan és el Bon Moment per Comprar</h2>
      <p>Aquesta és una pregunta trampa. No existeix un moment perfecte objectivament. El que sí existeix és el moment adequat per a tu: quan tens l'estalvi necessari, l'estabilitat laboral suficient, i la certesa que romandràs en aquella ciutat almenys cinc o set anys. Comprar per menys temps generalment no és rendible si es tenen en compte els costos d'entrada i sortida del mercat immobiliari.</p>
      <p>Si tens dubtes sobre si estàs llest per comprar, sol·licita una <a href="../contacto.html">anàlisi personalitzada gratuïta</a> i t'ajudem a avaluar la teva situació sense compromís.</p>`,
      /* ── Article prose: Autònom ──────────────── */
      'art.auto.prose': `<p>Ser autònom a Espanya no significa que no puguis accedir a una hipoteca. Però sí significa que el procés és diferent, que els bancs t'exigiran més documentació i que hauràs de presentar el teu cas de forma més estratègica. En aquesta guia expliquem per què els bancs són més prudents amb els treballadors per compte propi, quina documentació necessites, com presentar els teus ingressos correctament i per què un broker hipotecari especialitzat pot marcar la diferència decisiva.</p>

      <h2>Per Què és Més Difícil Aconseguir Hipoteca sent Autònom</h2>
      <p>Els bancs valoren fonamentalment l'estabilitat i la predictibilitat dels ingressos futurs. Un treballador assalariat amb contracte indefinit ofereix una certesa: la seva empresa pagarà la nòmina mes a mes. Un autònom, en canvi, té ingressos que poden variar segons l'activitat, la temporalitat del sector o la situació econòmica general.</p>
      <p>Aquesta percepció de risc més elevat es tradueix en criteris més exigents: els bancs solen demanar major antiguitat en l'activitat, més historial d'ingressos documentats, millors ràtios d'estalvi i, en ocasions, apliquen tipus d'interès lleugerament superiors o condicionen l'operació a major vinculació de productes.</p>
      <p>Tanmateix, això no significa que sigui impossible. Milers d'autònoms obtenen hipoteques cada any a Espanya amb excel·lents condicions. La clau és preparar bé l'expedient i acudir als bancs adequats.</p>

      <h2>Quina Documentació Demanen els Bancs a un Autònom</h2>
      <p>La documentació estàndard per a un autònom és significativament més extensa que per a un assalariat. Aquests són els documents que normalment exigirà qualsevol entitat:</p>

      <h3>Documentació personal i d'identitat</h3>
      <ul>
        <li>DNI o NIE en vigor.</li>
        <li>Vida laboral actualitzada (que acrediti l'antiguitat com a autònom).</li>
        <li>Certificat d'estar al corrent de pagaments amb la Seguretat Social.</li>
        <li>Certificat d'estar al corrent amb Hisenda.</li>
      </ul>

      <h3>Documentació d'ingressos</h3>
      <ul>
        <li><strong>Declaracions de l'IRPF:</strong> dels últims 2-3 exercicis fiscals complets.</li>
        <li><strong>Declaracions trimestrals d'IVA:</strong> els últims 4-8 trimestres (models 303 i 390).</li>
        <li><strong>Models 130 o 131:</strong> pagaments fraccionats de l'IRPF dels últims trimestres.</li>
        <li><strong>Extractes bancaris:</strong> dels últims 6-12 mesos del compte bancari vinculat a l'activitat.</li>
        <li><strong>Comptabilitat:</strong> alguns bancs exigeixen balanços i comptes de resultats si ets autònom amb empresa o activitat complexa.</li>
      </ul>

      <h3>Documentació de l'immoble</h3>
      <ul>
        <li>Nota simple registral de l'immoble a comprar.</li>
        <li>Contracte d'arres o promesa de compravenda (si ja està signat).</li>
      </ul>

      <p>Per a una llista completa de documentació, pots consultar la nostra <a href="documentacion-necesaria-hipoteca.html">guia de documentació hipotecària</a>.</p>

      <h2>Com Presentar els teus Ingressos de Forma Òptima</h2>
      <p>Aquest és el punt més crític per als autònoms. Els bancs analitzen els ingressos nets declarats en l'IRPF, no la facturació bruta. Si ets autònom que declara pocs ingressos per pagar menys impostos, el banc també veurà pocs ingressos i et concedirà menys finançament o te'l denegarà.</p>

      <h3>Utilitza el rendiment net real</h3>
      <p>El banc prendrà com a referència el rendiment net de la teva activitat, és a dir, els ingressos declarats menys les despeses deduïbles. Si en els últims dos o tres anys has declarat rendiments nets consistents i creixents, el teu perfil és molt més sòlid.</p>

      <h3>L'antiguitat importa molt</h3>
      <p>La majoria dels bancs exigeixen un mínim de 2 anys d'antiguitat com a autònom. Alguns són més flexibles i accepten 1 any si els ingressos són sòlids, però en general, com més gran sigui la teva trajectòria com a autònom, millor. Si portes menys d'un any d'alta, espera a completar almenys dos exercicis fiscals complets abans de sol·licitar la hipoteca.</p>

      <h3>Mostra tendència positiva</h3>
      <p>Si els teus ingressos han anat augmentant any rere any, això transmet al banc una imatge de negoci en creixement. Si per contra hi ha un exercici especialment dolent, prepara't per explicar-ho.</p>

      <div class="info-box">
        <p><strong>Consell clau:</strong> si estàs planificant demanar una hipoteca en el futur, coordina amb el teu gestor fiscal per optimitzar la declaració d'ingressos amb suficient antelació. Pagar una mica més d'impostos durant un o dos anys pot ser la inversió més rendible que facis si et permet accedir a una hipoteca amb bones condicions.</p>
      </div>

      <h2>Consells per Millorar el teu Perfil Bancari com a Autònom</h2>

      <h3>Augmenta el percentatge d'entrada</h3>
      <p>Com més gran sigui l'entrada que aportes (per sobre del 20% mínim habitual), menor és el risc que assumeix el banc i més probable és que aprovin l'operació.</p>

      <h3>Demostra historial d'estalvi</h3>
      <p>Els diners que aportes com a entrada han d'estar almenys 6 mesos al teu compte bancari. Els bancs ho verifiquen. Si provenen d'una venda, una herència o qualsevol ingrés extraordinari, hauràs de documentar-ho adequadament.</p>

      <h3>Elimina deutes previs</h3>
      <p>Préstecs personals, targetes de crèdit amb saldo, finançaments de cotxe… Tot el que redueixi la teva capacitat d'endeutament disponible perjudica la teva sol·licitud. Si pots cancel·lar deutes menors abans de demanar la hipoteca, fes-ho.</p>

      <h3>Considera un cotitular assalariat</h3>
      <p>Si tens parella o familiar amb ingressos assalariats estables, incloure'l com a cotitular pot enfortir significativament la sol·licitud. El banc suma els ingressos de tots dos titulars per avaluar la solvència conjunta.</p>

      <h2>Per Què un Broker Hipotecari Ajuda Especialment als Autònoms</h2>
      <p>Per a un autònom, els beneficis de treballar amb un broker com <a href="../hipotecas.html">NortFinance</a> són especialment rellevants:</p>
      <ul>
        <li><strong>Selecció d'entitats:</strong> el broker sap quins bancs són més favorables per a autònoms en cada moment.</li>
        <li><strong>Presentació estratègica:</strong> un broker expert sap com presentar els ingressos d'un autònom de la manera més favorable.</li>
        <li><strong>Negociació real:</strong> el broker té accés a condicions de negociació que no estan disponibles a la xarxa d'oficines estàndard.</li>
        <li><strong>Estalvi de temps:</strong> en lloc d'anar banc per banc, el broker gestiona tot el procés en paral·lel.</li>
        <li><strong>Acompanyament jurídic:</strong> t'ajuda a entendre la FEIN, les condicions de la hipoteca i qualsevol clàusula que requereixi atenció especial.</li>
      </ul>

      <h2>La Hipoteca de l'Autònom és Possible: Conclusió</h2>
      <p>Ser autònom no és un obstacle insuperable per accedir a finançament hipotecari. És un condicionant que exigeix major preparació i estratègia. Amb els documents adequats, un perfil financer sanejat i el suport de professionals especialitzats, les possibilitats d'èxit són altes.</p>
      <p>Si ets autònom i estàs pensant en comprar un habitatge, comença per sol·licitar una <a href="../contacto.html">anàlisi de viabilitat gratuïta</a> amb el nostre equip. A NortFinance tenim experiència específica gestionant operacions hipotecàries per a treballadors per compte propi.</p>`,

      /* ── Article prose: Documentació ─────────── */
      'art.doc.prose': `<p>Un dels motius més freqüents pels quals una sol·licitud hipotecària es retarda o es complica és la documentació incompleta o mal preparada. Els bancs necessiten verificar la teva identitat, la teva solvència econòmica i les característiques de l'immoble que desitges comprar. En aquesta guia trobaràs la llista completa de documents que et demanaran, amb les diferències entre assalariats i autònoms, més consells pràctics per tenir-ho tot llest en el menor temps possible.</p>

      <h2>Documentació Personal i d'Identitat</h2>
      <p>Tots els titulars de l'operació (inclosos els avaladors, si n'hi ha) han de presentar la documentació bàsica d'identificació:</p>
      <ul class="checklist">
        <li><strong>DNI o NIE en vigor</strong> — còpia de les dues cares. Si el DNI ha caducat, renova'l abans d'iniciar el procés.</li>
        <li><strong>Llibre de família</strong> — si estàs casat o tens fills a càrrec, pot ser necessari per avaluar les càrregues familiars.</li>
        <li><strong>Certificat de matrimoni o convivència</strong> — si la hipoteca és a nom de dues persones amb relació de parella.</li>
        <li><strong>Capítols matrimonials</strong> — si n'hi ha, el banc necessita conèixer el règim econòmic del matrimoni.</li>
      </ul>

      <h2>Documentació Laboral i d'Ingressos: Assalariats</h2>
      <p>Per als treballadors per compte aliè, el banc busca acreditar l'estabilitat i el nivell d'ingressos. Els documents estàndard són:</p>
      <ul class="checklist">
        <li><strong>Últimes 3 nòmines</strong> — o 6 si el salari té components variables (comissions, pagues extra prorratejades).</li>
        <li><strong>Contracte de treball</strong> — especialment rellevant per verificar si és indefinit, temporal o a temps parcial.</li>
        <li><strong>Vida laboral actualitzada</strong> — obtenible gratuïtament a la Seu Electrònica de la Seguretat Social.</li>
        <li><strong>Últimes 2 declaracions de la Renda (IRPF)</strong> — exercicis complets, amb segell o justificant de presentació telemàtica.</li>
        <li><strong>Certificat d'ingressos del treball</strong> — alguns bancs el demanen com a complement a les nòmines.</li>
      </ul>

      <h2>Documentació Laboral i d'Ingressos: Autònoms</h2>
      <p>Per als treballadors per compte propi, la documentació d'ingressos és més extensa. Consulta la nostra guia específica sobre <a href="hipoteca-autonomo.html">hipoteca per a autònoms</a> per a més detalls. En resum, necessitaràs:</p>
      <ul class="checklist">
        <li><strong>Últimes 2-3 declaracions de l'IRPF completes</strong> — models 100 o 131.</li>
        <li><strong>Declaracions trimestrals d'IVA</strong> — models 303 dels últims 4-8 trimestres i el model 390 anual.</li>
        <li><strong>Models 130 de pagaments fraccionats</strong> — dels últims 4 trimestres.</li>
        <li><strong>Vida laboral actualitzada</strong> — que acrediti l'antiguitat com a autònom donat d'alta al RETA.</li>
        <li><strong>Certificat d'estar al corrent amb l'AEAT</strong> — sense deutes pendents amb Hisenda.</li>
        <li><strong>Certificat d'estar al corrent amb la Seguretat Social</strong> — sense quotes pendents del RETA.</li>
        <li><strong>Extractes bancaris de 6-12 mesos</strong> — del compte vinculat a l'activitat econòmica.</li>
      </ul>

      <h2>Documentació Bancària i Patrimonial</h2>
      <ul class="checklist">
        <li><strong>Extractes bancaris dels últims 6 mesos</strong> — de tots els teus comptes.</li>
        <li><strong>Justificant de l'estalvi aportat</strong> — si els diners per a l'entrada provenen d'una donació, herència o venda d'un altre bé, hauràs de documentar-ho.</li>
        <li><strong>Declaració d'altres béns</strong> — immobles en propietat, vehicles, inversions.</li>
        <li><strong>Préstecs vigents</strong> — els contractes de qualsevol préstec personal, finançament de cotxe, etc.</li>
      </ul>

      <h2>Documentació de l'Immoble a Comprar</h2>
      <ul class="checklist">
        <li><strong>Nota simple del Registre de la Propietat</strong> — identifica el propietari actual i mostra si hi ha càrregues.</li>
        <li><strong>Contracte d'arres o promesa de compravenda</strong> — si ja l'has signat amb el venedor.</li>
        <li><strong>Últim rebut de l'IBI</strong> — acredita que l'impost municipal està al dia.</li>
        <li><strong>Certificat de la comunitat de propietaris</strong> — que no hi ha deutes pendents a càrrec del venedor.</li>
        <li><strong>Plànols i memòria de qualitats</strong> — per a immobles d'obra nova.</li>
        <li><strong>Llicència de primera ocupació o cèdula d'habitabilitat</strong> — necessària per confirmar que l'immoble es pot habitar legalment.</li>
      </ul>

      <h2>Taula Comparativa: Documents per Perfil</h2>
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>Assalariat</th>
            <th>Autònom</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>DNI / NIE vigent</td><td>Sí</td><td>Sí</td></tr>
          <tr><td>Vida laboral</td><td>Sí</td><td>Sí</td></tr>
          <tr><td>Últimes 3-6 nòmines</td><td>Sí</td><td>No</td></tr>
          <tr><td>Contracte de treball</td><td>Sí</td><td>No</td></tr>
          <tr><td>IRPF últims 2-3 anys</td><td>Sí</td><td>Sí</td></tr>
          <tr><td>Declaracions IVA trimestrals</td><td>No</td><td>Sí</td></tr>
          <tr><td>Models 130 / 131</td><td>No</td><td>Sí</td></tr>
          <tr><td>Cert. corrent AEAT</td><td>No habitual</td><td>Sí</td></tr>
          <tr><td>Cert. corrent SS</td><td>No habitual</td><td>Sí</td></tr>
          <tr><td>Extractes bancaris 6-12 mesos</td><td>Sí</td><td>Sí (més)</td></tr>
          <tr><td>Nota simple immoble</td><td>Sí</td><td>Sí</td></tr>
          <tr><td>Contracte d'arres</td><td>Si disponible</td><td>Si disponible</td></tr>
        </tbody>
      </table>

      <h2>Consells per Tenir la Documentació Llesta Ràpidament</h2>

      <h3>Comença pels documents que triguen més</h3>
      <p>Alguns documents requereixen temps o tràmits previs. La nota simple del registre triga entre 24 hores i diversos dies segons el mètode. Identifica quins et portaran més temps i comença per ells.</p>

      <h3>Organitza-ho tot en una carpeta digital</h3>
      <p>Els bancs i brokers treballen cada vegada més amb expedients digitals. Escaneja tots els documents en PDF, anomena'ls de forma clara i guarda'ls en una carpeta organitzada. Això agilitza enormement el procés quan calgui enviar-los a diverses entitats.</p>

      <h3>Verifica les dates de vigència</h3>
      <p>Alguns documents tenen caducitat efectiva per als bancs. Els extractes bancaris solen demanar-se dels últims 3-6 mesos; la vida laboral no hauria de tenir més de 30 dies; la nota simple del registre, no més de 3 mesos.</p>

      <h3>No et llancis sense tenir-ho tot</h3>
      <p>Presentar un expedient incomplet obliga el banc a demanar-te documentació addicional després, la qual cosa allarga el procés setmanes. Un broker com <a href="../hipotecas.html">NortFinance</a> t'indica exactament què necessites i t'ajuda a organitzar l'expedient abans de presentar-lo a les entitats.</p>

      <h2>La Taxació: Un Document que Encarrega el Banc</h2>
      <p>La taxació oficial de l'immoble l'encarrega el banc un cop l'operació està pre-aprovada. No obstant, és el comprador qui la paga (entre 300 i 600 euros). Si el valor de taxació és inferior al preu de compra acordat, el banc només finançarà el 80% del valor taxat, no del preu de compra. Per això és important no comprometre't amb un preu de compra molt per sobre del valor de mercat.</p>

      <h2>Següent Pas: Inicia el Procés amb Seguretat</h2>
      <p>Tenir la documentació llesta és el primer pas d'un procés que, ben gestionat, porta entre 6 i 10 setmanes des de la sol·licitud fins a la signatura notarial. A <a href="../contacto.html">NortFinance</a> revisem la teva documentació gratuïtament abans de presentar-la als bancs, per assegurar-nos que és completa i presentada de forma òptima.</p>`,
      /* ── Article prose: Tipus Hipoteca ──────── */
      'art.tipos.prose': `<p>L'elecció entre hipoteca fixa, variable o mixta és una de les decisions més importants que prendràs en el teu procés hipotecari. No hi ha una resposta universal: la millor opció depèn del teu perfil, de la teva tolerància al risc, del termini que contemplis i de la situació del mercat en el moment de la signatura. En aquesta guia t'expliquem amb claredat les diferències, els pros i contres de cada modalitat, el context actual de l'Euríbor i una recomanació per perfil.</p>

      <h2>La Hipoteca a Tipus Fix</h2>
      <p>En una hipoteca fixa, el tipus d'interès que aplica el banc no canvia durant tota la vida del préstec. Signes avui al 3% (per exemple) i pagues al 3% fins a l'última quota, independentment del que faci l'Euríbor o els tipus del BCE.</p>
      <p>Això es tradueix en una quota mensual completament previsible durant dècades. Per a molts compradors, aquella estabilitat té un valor enorme, especialment quan s'ajusten al màxim de la seva capacitat de pagament.</p>

      <div class="pros-cons">
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--pro">Avantatges</p>
          <ul>
            <li>Quota mensual estable i invariable</li>
            <li>Protecció total davant pujades de tipus</li>
            <li>Planificació financera a llarg termini</li>
            <li>Tranquil·litat psicològica</li>
          </ul>
        </div>
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--con">Inconvenients</p>
          <ul>
            <li>Tipus inicial generalment més alt que en variable</li>
            <li>No et beneficies si els tipus baixen molt</li>
            <li>Comissions per amortització anticipada més elevades</li>
          </ul>
        </div>
      </div>

      <h3>Quan convé la hipoteca fixa?</h3>
      <p>La hipoteca fixa convé especialment quan els tipus d'interès estan baixos, quan el termini del préstec és llarg (20 anys o més), quan tens poca tolerància a la incertesa financera o quan el teu marge econòmic mensual és ajustat i no pots assumir pujades de quota.</p>

      <h2>La Hipoteca a Tipus Variable</h2>
      <p>En una hipoteca variable, el tipus d'interès es revisa periòdicament (generalment una vegada a l'any) en funció de l'Euríbor més un diferencial fix que negocia el banc. Si l'Euríbor baixa, la teva quota baixa. Si l'Euríbor puja, la teva quota puja.</p>

      <div class="pros-cons">
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--pro">Avantatges</p>
          <ul>
            <li>Tipus inicial més baix que la fixa</li>
            <li>Et beneficies si l'Euríbor cau</li>
            <li>Menor comissió per amortització anticipada</li>
            <li>Pot ser millor opció en terminis curts</li>
          </ul>
        </div>
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--con">Inconvenients</p>
          <ul>
            <li>Incertesa en la quota futura</li>
            <li>Risc de pujades significatives de l'Euríbor</li>
            <li>Dificulta la planificació a llarg termini</li>
          </ul>
        </div>
      </div>

      <h3>Quan convé la hipoteca variable?</h3>
      <p>La hipoteca variable pot convenir quan el termini del préstec és relativament curt (menys de 15 anys), quan tens capacitat financera per absorbir eventuals pujades de quota, quan l'Euríbor està en nivells històricament alts i s'espera que baixi, o quan tens planificada l'amortització anticipada del préstec.</p>

      <h2>La Hipoteca Mixta</h2>
      <p>La hipoteca mixta combina les dues modalitats: durant un primer període (habitualment entre 5 i 15 anys) el tipus és fix, i a partir d'aquell moment passa a ser variable (Euríbor + diferencial). És un producte que intenta el millor dels dos mons: seguretat inicial i possibilitat de beneficiar-se de tipus més baixos a llarg termini.</p>

      <div class="pros-cons">
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--pro">Avantatges</p>
          <ul>
            <li>Quota fixa i previsible en els primers anys</li>
            <li>Tipus fix inicial més baix que la hipoteca 100% fixa</li>
            <li>Opció de refinançar abans que canviï el tram</li>
            <li>Equilibri entre seguretat i flexibilitat</li>
          </ul>
        </div>
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--con">Inconvenients</p>
          <ul>
            <li>Incertesa en el tram variable</li>
            <li>Complexitat per comparar amb altres hipoteques</li>
            <li>Pot no ser la més barata a llarg termini si els tipus pugen</li>
          </ul>
        </div>
      </div>

      <h2>La Situació de l'Euríbor el 2026</h2>
      <p>Després del cicle alcista del BCE entre 2022 i 2023, que va portar l'Euríbor a 12 mesos fins a màxims del 4,2%, els tipus d'interès s'han anat moderant. El 2024 el BCE va iniciar un cicle de baixades, i el 2025-2026 l'Euríbor se situa en nivells més moderats, amb perspectives de major estabilització.</p>

      <h2>Taula Comparativa: Fixa vs. Variable vs. Mixta</h2>
      <table>
        <thead>
          <tr>
            <th>Característica</th>
            <th>Fixa</th>
            <th>Variable</th>
            <th>Mixta</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Quota mensual</td><td>Estable sempre</td><td>Canvia cada any</td><td>Estable els primers anys</td></tr>
          <tr><td>Tipus inicial</td><td>Més alt</td><td>Més baix</td><td>Intermedi</td></tr>
          <tr><td>Risc de pujada</td><td>Cap</td><td>Alt</td><td>Baix a l'inici, alt després</td></tr>
          <tr><td>Benefici si baixen tipus</td><td>No</td><td>Sí</td><td>Només en el tram variable</td></tr>
          <tr><td>Comissió amortització</td><td>Més alta (fins 2%)</td><td>Més baixa (0,15-0,25%)</td><td>Variable segons tram</td></tr>
          <tr><td>Perfil ideal</td><td>Aversió al risc, terminis llargs</td><td>Tolerància al risc, terminis curts</td><td>Equilibri risc-seguretat</td></tr>
        </tbody>
      </table>

      <h2>Recomanació per Perfil el 2026</h2>

      <h3>Perfil conservador o pressupost ajustat</h3>
      <p>Si la teva quota no pot pujar significativament sense comprometre la teva economia domèstica, la <strong>hipoteca fixa</strong> és la teva opció. La tranquil·litat que aporta té un cost (tipus inicial més alt), però és una assegurança davant escenaris adversos que no et pots permetre.</p>

      <h3>Perfil amb marge financer i termini curt-mig</h3>
      <p>Si pots absorbir pujades moderades de quota, tens un termini de 15 anys o menys, i el diferencial ofert és competitiu, la <strong>hipoteca variable</strong> pot resultar més barata a llarg termini en un escenari de tipus estabilitzats o baixistes.</p>

      <h3>Perfil que busca equilibri</h3>
      <p>Si vols seguretat en els primers anys però estàs disposat a assumir el risc variable en la segona meitat, una <strong>hipoteca mixta</strong> amb un període fix de 10 anys pot ser una solució equilibrada, especialment si planeges amortitzar capital en els primers anys.</p>

      <h2>La Decisió Correcta Depèn del teu Cas Concret</h2>
      <p>Les generalitzacions tenen un límit. La hipoteca que li convé al teu veí pot no ser la que et convé a tu. A <a href="../hipotecas.html">NortFinance</a> realitzem una anàlisi personalitzada del teu cas i et presentem escenaris comparatius reals amb les millors ofertes disponibles al mercat per als tres tipus d'hipoteca.</p>
      <p>Si encara tens dubtes, consulta la nostra <a href="preguntas-frecuentes-hipoteca.html">guia de preguntes freqüents sobre hipoteques</a> o contacta directament amb el nostre equip.</p>`,
      /* ── Article prose: FAQ ──────────────────── */
      'art.faq.prose': `<p>Reunim aquí les preguntes que més ens fan els nostres clients abans, durant i després del procés hipotecari. Respostes directes, sense rodaments i basades en l'experiència real de centenars d'operacions gestionades a Espanya.</p>

      <h2>Procés i Terminis</h2>

      <div class="faq-item">
        <p class="faq-question">Quant tarda a aprovar-se una hipoteca?</p>
        <p class="faq-answer">Des que presentes la documentació completa fins que reps una resposta formal del banc, el termini habitual és de <strong>2 a 4 setmanes</strong>. No obstant, el procés complet —des de la primera consulta fins a la signatura davant de notari— sol durar entre 6 i 10 setmanes, depenent de la rapidesa del banc, la complexitat de l'operació i els terminis de taxació i notaria. Amb un broker que gestiona el procés en paral·lel amb diversos bancs, els terminis s'optimitzen considerablement.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Quina documentació necessito per demanar una hipoteca?</p>
        <p class="faq-answer">Els documents bàsics són: DNI o NIE en vigor, vida laboral, últimes 3-6 nòmines (o declaracions d'IRPF i models fiscals si ets autònom), les dues últimes declaracions de la Renda, extractes bancaris dels últims 6 mesos, i la nota simple de l'immoble. Consulta la nostra <a href="documentacion-necesaria-hipoteca.html">guia completa de documentació</a> per a un llistat exhaustiu.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Què significa que em demanin la FEIN?</p>
        <p class="faq-answer">La <strong>FEIN (Fitxa Europea d'Informació Normalitzada)</strong> és el document precontractual estandarditzat que el banc ha de lliurar-te quan aprova la teva sol·licitud hipotecària. Conté totes les condicions del préstec en un format homogeni per a tota la UE. És vinculant per al banc durant almenys 10 dies naturals, durant els quals pots estudiar-la i comparar sense pressió.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Per a què serveix la visita al notari prèvia a la signatura?</p>
        <p class="faq-answer">La Llei de Contractes de Crèdit Immobiliari de 2019 obliga que, almenys el dia hàbil anterior a la signatura de la hipoteca, acudeixis <strong>sol, sense el banc</strong>, al notari. L'objectiu és que el notari verifiqui que has rebut i entès la FEIN i et faci un test de comprensió oral. És una protecció legal per al consumidor. Sense aquesta visita prèvia, no pot haver-hi signatura.</p>
      </div>

      <h2>Conceptes Financers Clau</h2>

      <div class="faq-item">
        <p class="faq-question">Quina diferència hi ha entre el TIN i la TAE?</p>
        <p class="faq-answer">El <strong>TIN (Tipus d'Interès Nominal)</strong> és el tipus d'interès pur del préstec, sense incloure despeses addicionals. La <strong>TAE (Taxa Anual Equivalent)</strong> incorpora tots els costos associats al préstec: comissions d'obertura, assegurances vinculades obligatòries, despeses de gestió i periodicitat dels pagaments. La TAE és l'indicador real del cost del crèdit i és el que has d'usar sempre per comparar hipoteques.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Què és l'Euríbor i com afecta la meva hipoteca variable?</p>
        <p class="faq-answer">L'<strong>Euríbor</strong> (Euro Interbank Offered Rate) és el tipus d'interès al qual els bancs europeus es presten diners entre ells. L'Euríbor a 12 mesos és l'índex de referència més usat en hipoteques variables a Espanya. La teva quota es calcula com Euríbor + el diferencial que hagis negociat amb el banc. La revisió es fa habitualment cada 12 mesos.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Quants diners necessito estalviats abans de demanar una hipoteca?</p>
        <p class="faq-answer">Com a regla general, necessites almenys un <strong>30-32% del preu de compra</strong>: el 20% com a entrada més un 10-12% per a les despeses de compravenda. Per a un habitatge de 200.000 euros hauries de tenir disponibles entre 58.000 i 64.000 euros. Llegeix la nostra guia sobre <a href="hipoteca-primera-vivienda.html">primera vivienda</a> per a més detalls.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Què és el ràtio d'esforç hipotecari?</p>
        <p class="faq-answer">El ràtio d'esforç és el percentatge dels teus ingressos nets mensuals que destinaràs al pagament de la hipoteca. Els bancs estableixen com a límit màxim entre el <strong>35% i el 40%</strong> dels ingressos nets del sol·licitant. Aquest ràtio inclou tots els deutes existents, no només la hipoteca.</p>
      </div>

      <h2>Negociació i Condicions</h2>

      <div class="faq-item">
        <p class="faq-question">Es pot negociar el tipus d'interès amb el banc?</p>
        <p class="faq-answer">Sí, i és <strong>fonamental fer-ho</strong>. Els bancs no ofereixen de bon principi les seves millors condicions. Tenir ofertes formals de diversos bancs sobre la taula és la palanca negociadora més efectiva. Un broker hipotecari fa aquesta feina en el teu nom de forma professional.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Els productes vinculats (assegurances, nòmina) són obligatoris?</p>
        <p class="faq-answer">No són legalment obligatoris, però els bancs els usen per bonificar el tipus d'interès. Tens dret a rebutjar-los, però llavors el tipus pujarà segons la bonificació que cada producte atorga. La clau és calcular si el cost anual dels productes vinculats és menor que l'estalvi obtingut per la reducció del tipus.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Quant costa amortitzar anticipadament una hipoteca?</p>
        <p class="faq-answer">Depèn del tipus d'hipoteca. En hipoteques <strong>variables</strong>, la comissió màxima per amortització anticipada total és del 0,25% del capital amortitzat durant els primers 3 anys, i del 0,15% fins al cinquè any (després, sense comissió). En hipoteques <strong>fixes</strong>, la comissió màxima és del 2% durant els primers 10 anys i de l'1,5% a partir del desè any.</p>
      </div>

      <h2>Denegacions i Problemes</h2>

      <div class="faq-item">
        <p class="faq-question">Què passa si el banc em denega la hipoteca?</p>
        <p class="faq-answer">Una denegació d'un banc no significa que no puguis aconseguir hipoteca. Cada entitat té els seus propis criteris de risc, i el que un rebutja, un altre pot aprovar. El primer és entendre per què va ser denegada i treballar per millorar el perfil o buscar entitats més adequades per al teu cas concret.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Puc demanar hipoteca estant a l'ASNEF o amb deutes?</p>
        <p class="faq-answer">Estar inclòs en fitxers de morositat (ASNEF, RAI) és pràcticament incompatible amb aconseguir una hipoteca amb un banc convencional. El més recomanable és <strong>resoldre qualsevol deute pendent</strong> abans d'iniciar el procés hipotecari i esperar que et donin de baixa al fitxer.</p>
      </div>

      <h2>El Broker Hipotecari</h2>

      <div class="faq-item">
        <p class="faq-question">Quant cobra un broker hipotecari a Espanya?</p>
        <p class="faq-answer">Els honoraris d'un broker hipotecari a Espanya solen situar-se entre el <strong>0,5% i l'1,5% de l'import del préstec</strong>, i generalment només s'abonen si l'operació es formalitza amb èxit. A <a href="../hipotecas.html">NortFinance</a>, l'estudi inicial és sempre gratuït i sense compromís.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Quina avantatge real té un broker davant d'anar al banc directament?</p>
        <p class="faq-answer">Els avantatges concrets són: accés a condicions no disponibles a la finestreta, presentació professional de l'expedient, negociació simultània amb diversos bancs, estalvi de temps i gestió de tota la burocràcia, i acompanyament fins a la signatura notarial.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">He de contractar la hipoteca pel banc que em proposa el broker?</p>
        <p class="faq-answer">No. El broker et presenta les millors ofertes que ha aconseguit per al teu cas, però la decisió final és sempre teva. El broker treballa per a tu, no per al banc. Si l'oferta aconseguida no et convenç, no estàs obligat a acceptar-la ni a pagar res.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Puc canviar la meva hipoteca actual a millors condicions?</p>
        <p class="faq-answer">Sí. Hi ha dos mecanismes principals: la <strong>novació</strong> (negociar directament amb el teu banc actual la modificació de condicions) i la <strong>subrogació</strong> (traslladar la hipoteca a un altre banc que t'ofereixi millors condicions). Tots dos tenen costos, però si la diferència de tipus d'interès és significativa, l'estalvi a llarg termini pot ser molt rellevant. <a href="../contacto.html">Consulta'ns</a> si creus que estàs pagant més del que hauries.</p>
      </div>`,
      /* ── Article prose: Euríbor ──────────────── */
      'art.euribor.prose': `<p>L'Euríbor és probablement l'indicador financer que més afecta l'economia domèstica dels espanyols. Milions d'hipoteques a Espanya tenen la seva quota mensual directament lligada a aquest índex, que pot pujar o baixar cada any. Entendre què és l'Euríbor, per què fluctua i com impacta en la teva hipoteca és fonamental per prendre decisions hipotecàries intel·ligents el 2026.</p>

      <h2>Què és l'Euríbor i Com es Calcula</h2>
      <p>L'<strong>Euríbor</strong> (Euro Interbank Offered Rate) és el tipus d'interès al qual els principals bancs europeus es presten diners entre ells a curt termini. No és un tipus fixat pel Banc Central Europeu (BCE), sinó el resultat d'una mitjana calculada diàriament a partir de les estimacions que aporten les principals entitats financeres de la zona euro.</p>
      <p>El que s'utilitza com a referència per a la majoria de les hipoteques variables a Espanya és l'<strong>Euríbor a 12 mesos</strong>. Es publica cada dia hàbil i reflecteix el cost del diner al mercat interbancari europeu.</p>

      <div class="info-box">
        <p><strong>Dada clau:</strong> L'Euríbor no el fixa el BCE directament, però la política de tipus del BCE és el principal motor que determina el seu nivell. Quan el BCE puja tipus per frenar la inflació, l'Euríbor puja. Quan els baixa per estimular l'economia, l'Euríbor tendeix a baixar.</p>
      </div>

      <h2>Història de l'Euríbor: Dels Mínims Històrics al Cicle Alcista</h2>
      <ul>
        <li><strong>2009–2015:</strong> Després de la crisi financera global, el BCE va iniciar una política de tipus ultra-baixos. L'Euríbor va iniciar una caiguda prolongada.</li>
        <li><strong>2016:</strong> L'Euríbor a 12 mesos va entrar en terreny negatiu per primera vegada en la història, arribant a mínims del -0,5% el 2021.</li>
        <li><strong>2022:</strong> La inflació desbocada a Europa va forçar el BCE a iniciar la pujada de tipus més agressiva de la seva història. L'Euríbor va passar del -0,5% al gener de 2022 a superar el 4% el 2023.</li>
        <li><strong>2024–2025:</strong> Amb la inflació sota control, el BCE va reprendre les baixades de tipus. L'Euríbor va iniciar un descens gradual.</li>
        <li><strong>2026:</strong> L'Euríbor se situa en nivells moderats, al voltant del 2,5-3%, amb perspectives d'estabilització o lleugera baixada addicional.</li>
      </ul>

      <h2>Com Afecta l'Euríbor la teva Hipoteca Variable</h2>
      <p>Si tens una <strong>hipoteca variable</strong>, el teu tipus d'interès es calcula sumant l'Euríbor més un diferencial fix que vas pactar amb el banc en signar. Per exemple, si la teva hipoteca és "Euríbor + 0,75%", i l'Euríbor en el moment de la revisió anual és al 2,5%, el teu tipus d'interès aplicat serà del 3,25%.</p>

      <h3>Exemple pràctic de revisió anual</h3>
      <p>Suposem una hipoteca de 200.000 euros a 25 anys amb Euríbor + 0,75%:</p>
      <table>
        <thead><tr><th>Euríbor</th><th>Tipus aplicat</th><th>Quota mensual aprox.</th></tr></thead>
        <tbody>
          <tr><td>-0,50% (2021)</td><td>0,25%</td><td>~797 €</td></tr>
          <tr><td>4,00% (2023)</td><td>4,75%</td><td>~1.130 €</td></tr>
          <tr><td>2,50% (2026)</td><td>3,25%</td><td>~974 €</td></tr>
        </tbody>
      </table>

      <h2>Euríbor 2026: Situació Actual i Previsions</h2>
      <p>El 2026, l'Euríbor a 12 mesos es troba en una fase d'estabilització després del cicle alcista de 2022–2023 i les baixades iniciades el 2024. Les perspectives dels principals analistes apunten a un Euríbor que es manté en el rang del 2%–3% durant 2026, amb possibilitat de descensos addicionals si el BCE continua relaxant la seva política monetària.</p>

      <h2>Hipoteca Fixa vs. Variable: Què Convé el 2026 segons l'Euríbor?</h2>

      <h3>Arguments a favor de la hipoteca fixa el 2026</h3>
      <ul>
        <li>Certesa absoluta sobre la quota durant tota la vida del préstec.</li>
        <li>Els tipus fixos actuals, tot i que han pujat respecte al 2020–2021, segueixen sent històricament raonables.</li>
        <li>Si l'Euríbor repunta en el futur, la hipoteca fixa et protegeix completament.</li>
        <li>Recomanable si tens poca tolerància al risc o si la quota representa un percentatge alt dels teus ingressos.</li>
      </ul>

      <h3>Arguments a favor de la hipoteca variable el 2026</h3>
      <ul>
        <li>Si l'Euríbor continua baixant, la teva quota es reduirà automàticament.</li>
        <li>El diferencial que ofereixen els bancs en variables pot resultar competitiu si l'Euríbor es manté per sota del 2%.</li>
        <li>Adequat si planeges amortitzar anticipadament una part significativa del préstec.</li>
      </ul>

      <h3>L'opció mixta com a punt intermedi</h3>
      <p>La <strong>hipoteca mixta</strong> ofereix un període inicial a tipus fix seguit d'un tram variable referenciat a l'Euríbor. Per saber més, consulta la nostra guia <a href="hipoteca-fija-variable-mixta.html">Hipoteca Fixa, Variable o Mixta: Quina Triar el 2026?</a></p>

      <h2>Consells Pràctics per a Hipotecats a Tipus Variable</h2>
      <ul>
        <li><strong>Subrogació d'acreedor:</strong> canviar la teva hipoteca a un altre banc que t'ofereixi millors condicions o passar a tipus fix.</li>
        <li><strong>Novació:</strong> negociar directament amb el teu banc actual per modificar les condicions del préstec.</li>
        <li><strong>Amortització anticipada parcial:</strong> si tens estalvis, reduir el capital pendent disminueix l'impacte de les pujades de l'Euríbor sobre la teva quota.</li>
      </ul>
      <p>A <a href="../hipotecas.html">NortFinance</a> analitzem la teva situació actual i et diem si et convé renegociar la teva hipoteca existent o si les condicions del mercat justifiquen una subrogació. La consulta és gratuïta i sense compromís.</p>

      <h2>Conclusió: L'Euríbor és una Variable, No una Destinació</h2>
      <p>L'Euríbor no està sota el teu control, però sí pots dissenyar una estratègia hipotecària que minimitzi la teva exposició a la seva volatilitat. Si tens dubtes sobre com l'Euríbor afecta el teu cas concret o estàs valorant canviar la teva hipoteca actual, <a href="../contacto.html">contacta'ns</a> per a una anàlisi personalitzada gratuïta.</p>`,
      /* ── Article prose: No Residents ────────── */
      'art.nores.prose': `<p>Espanya és un dels destins favorits per a la compra d'habitatge per part d'estrangers i ciutadans espanyols residents a l'exterior. No obstant, aconseguir una hipoteca com a no resident a Espanya és un procés més complex que per a un resident: les condicions són diferents, la documentació requerida és més extensa i no tots els bancs treballen amb aquest perfil. En aquesta guia t'expliquem tot el que necessites saber per aconseguir finançament hipotecari a Espanya sense ser resident.</p>

      <h2>Qui és Considerat No Resident a Efectes Hipotecaris?</h2>
      <p>A efectes bancaris i fiscals a Espanya, es considera <strong>no resident</strong> tota persona física que no romangui en territori espanyol més de 183 dies a l'any i que, per tant, no està obligada a presentar l'IRPF a Espanya. Això inclou tant estrangers amb o sense NIE, com a ciutadans espanyols que resideixen habitualment a l'estranger.</p>

      <h2>Diferències Clau entre la Hipoteca per a Residents i No Residents</h2>

      <h3>Percentatge de finançament màxim: el 60-70%</h3>
      <p>Mentre que un resident pot obtenir finançament de fins al <strong>80% del valor de taxació</strong>, un no resident habitualment obté com a màxim el <strong>60-70%</strong>. Això implica que el comprador no resident haurà de tenir estalvis del voltant del 30-40% del preu de compra, més les despeses de compravenda.</p>

      <div class="info-box">
        <p><strong>Exemple:</strong> Per a un habitatge de 400.000 euros, un no resident que aconsegueixi el 70% de finançament necessitarà 120.000 euros d'entrada més uns 40.000-48.000 euros en despeses. En total, entre 160.000 i 168.000 euros de recursos propis.</p>
      </div>

      <h3>Tipus d'interès i condicions</h3>
      <p>Els bancs apliquen condicions una mica més conservadores als no residents, en part perquè el risc d'impagament és més difícil de gestionar quan el prestatari és a l'estranger. No obstant, amb un bon perfil financer i una adequada presentació de l'expedient, és possible obtenir condicions molt competitives.</p>

      <h3>Termini màxim del préstec</h3>
      <p>El termini màxim habitual per a no residents és de 20-25 anys, enfront dels 30-35 anys disponibles per a residents.</p>

      <h2>Documentació Necessària per al No Resident</h2>

      <h3>Documentació personal</h3>
      <ul>
        <li>Passaport en vigor (o DNI si és ciutadà de la UE).</li>
        <li>NIE (Número d'Identificació d'Estranger), obligatori per a qualsevol operació immobiliària a Espanya.</li>
        <li>Certificat de residència fiscal al país on tributes.</li>
      </ul>

      <h3>Documentació d'ingressos (acreditats al país de residència)</h3>
      <ul>
        <li>Últimes 3-6 nòmines o equivalent al país de treball, amb traducció jurada al castellà si el banc ho requereix.</li>
        <li>Declaració d'impostos de l'últim exercici al país de residència fiscal.</li>
        <li>Contracte de treball o acreditació d'activitat professional.</li>
        <li>Extractes bancaris dels últims 6 mesos del compte principal.</li>
      </ul>

      <h3>Documentació de l'immoble</h3>
      <ul>
        <li>Nota simple del Registre de la Propietat.</li>
        <li>Contracte d'arres o senyal (si existeix).</li>
      </ul>

      <h2>Impostos i Obligacions Fiscals per a No Residents a Espanya</h2>
      <ul>
        <li><strong>ITP o IVA:</strong> en la compra, s'apliquen els mateixos impostos que per a residents.</li>
        <li><strong>IRNR (Impost sobre la Renda de No Residents):</strong> tot i que no s'arrendeixi l'habitatge, l'Agència Tributària espanyola imputa una renda fictícia i exigeix el pagament d'un impost anual.</li>
        <li><strong>Impost sobre el Patrimoni:</strong> si el valor dels béns a Espanya supera 700.000 euros, el no resident podria estar subjecte a aquest impost.</li>
        <li><strong>Impost sobre plusvàlues:</strong> en la venda futura de l'immoble, s'aplica la retenció del 3% del preu de venda.</li>
      </ul>

      <h2>Com un Broker Hipotecari Ajuda al No Resident</h2>
      <ul>
        <li><strong>Coneixement del mercat local:</strong> sabem quins bancs treballen bé amb no residents i en quines condicions reals aproven aquestes operacions.</li>
        <li><strong>Gestió remota del procés:</strong> coordinem tota la documentació i el procés sense que el comprador hagi de desplaçar-se innecessàriament a Espanya.</li>
        <li><strong>Presentació òptima de l'expedient:</strong> sabem com presentar ingressos en moneda estrangera i com anticipar les objeccions que posaran els bancs.</li>
        <li><strong>Negociació de condicions:</strong> aconseguim diferencials i condicions que un client que arriba sol al banc rarament obté.</li>
        <li><strong>Coordinació amb notaria i registre:</strong> acompanyem fins a la signatura, incloent-hi la gestió del poder notarial si no pots ser present a Espanya el dia de la signatura.</li>
      </ul>

      <h2>Conclusió: És Possible, però Requereix Preparació</h2>
      <p>Aconseguir una hipoteca a Espanya sent no resident és perfectament possible. El procés és més complex que per a un resident, requereix major estalvi previ i una presentació de l'expedient més acurada. Amb l'orientació adequada i els bancs correctes, el procés pot resoldre's en terminis similars al d'un resident.</p>
      <p>Si estàs pensant en comprar un habitatge a Espanya des de l'estranger, <a href="../contacto.html">contacta amb NortFinance</a> per a una primera consulta gratuïta.</p>`,

      /* ── Article prose: Millorar Perfil ──────── */
      'art.perfil.prose': `<p>Quan un banc analitza una sol·licitud hipotecària, el que avalua és el risc que el client no pagui. Cada banc té els seus propis models de scoring, però tots comparteixen els mateixos pilars d'anàlisi: solvència, estabilitat, historial creditici i capital. Entendre què mira el banc i com pots millorar cada un d'aquests pilars és la diferència entre rebre un "sí" o un "ho sentim, però en aquest moment no podem ajudar-lo".</p>

      <h2>Els Cinc Pilars que Avalua el Banc</h2>
      <ol>
        <li><strong>Ingressos i estabilitat laboral:</strong> quant guanyes i com de segur és que continuïs guanyant-ho.</li>
        <li><strong>Ràtio d'endeutament:</strong> quin percentatge dels teus ingressos anirà destinat a pagar deutes (inclosa la nova hipoteca).</li>
        <li><strong>Historial creditici:</strong> si has pagat puntualment en el passat.</li>
        <li><strong>Estalvis i patrimoni:</strong> quant capital aportes i quin coixí tens després de la compra.</li>
        <li><strong>L'immoble:</strong> el seu valor de taxació, liquiditat i característiques.</li>
      </ol>

      <h2>Com Millorar el teu Historial Creditici</h2>
      <p>L'historial creditici és el primer filtre que apliquen els bancs. Consulten bases de dades com CIRBE, fitxers de morositat com ASNEF o RAI, i el propi historial intern si ja ets client.</p>

      <h3>Si apareixis en un fitxer de morosos</h3>
      <p>Si tens un deute impagat registrat a l'ASNEF o RAI, aconseguir una hipoteca és pràcticament impossible a la gran majoria dels bancs convencionals. La solució és:</p>
      <ul>
        <li>Pagar el deute i sol·licitar la cancel·lació del fitxer.</li>
        <li>Si el deute ha prescrit o les dades són incorrectes, pots reclamar la cancel·lació directament davant el fitxer.</li>
      </ul>

      <h3>Si tens rebuts retornats o incidències puntuals</h3>
      <ul>
        <li>Regularitza tots els pagaments pendents amb almenys 6 mesos d'antelació a la sol·licitud hipotecària.</li>
        <li>Elimina targetes de crèdit que no usis.</li>
        <li>Evita sol·licitar nous préstecs o finançaments en els mesos previs a demanar la hipoteca.</li>
      </ul>

      <h2>Reduir el Ràtio d'Endeutament</h2>
      <p>El <strong>ràtio d'endeutament</strong> és el percentatge dels teus ingressos nets mensuals que destines a pagar deutes. El criteri general dels bancs és que aquest ràtio no superi el 35-40%, incloent-hi la futura quota hipotecària.</p>

      <h3>Estratègies per reduir el ràtio</h3>
      <ul>
        <li><strong>Cancel·lar préstecs personals o de cotxe</strong> abans de sol·licitar la hipoteca.</li>
        <li><strong>Reduir el saldo de targetes de crèdit</strong>: el banc té en compte el límit disponible, no només l'utilitzat.</li>
        <li><strong>Ajornar la compra</strong> si estàs a pocs mesos d'acabar de pagar un préstec rellevant.</li>
      </ul>

      <h2>Estabilitat Laboral: El Factor que Més Pesa</h2>
      <p>Per al banc, l'estabilitat laboral és la garantia que els ingressos que apareixen en les nòmines d'avui seguiran existint demà. El perfil ideal és un treballador amb <strong>contracte indefinit de més de dos anys d'antiguitat</strong> a la mateixa empresa.</p>

      <h3>Si ets autònom</h3>
      <p>La hipoteca per a autònoms requereix una preparació específica de l'expedient. Consulta la nostra guia dedicada: <a href="hipoteca-autonomo.html">Com Aconseguir una Hipoteca sent Autònom a Espanya</a>.</p>

      <h2>Augmentar els Estalvis: Més Entrada, Millors Condicions</h2>
      <p>El percentatge d'entrada és un dels factors que més influeix en la resposta del banc i en les condicions que ofereix. Com més gran sigui l'entrada, menor el risc per al banc i millors condicions obtindràs.</p>

      <h3>El coixí post-compra és igualment important</h3>
      <p>Els bancs valoren molt que, un cop realitzada la compra i pagades totes les despeses, el sol·licitant mantingui un coixí d'estalvis d'almenys 3-6 mesos de quota hipotecària.</p>

      <h2>Com un Broker Presenta el teu Perfil de Forma Òptima</h2>
      <ul>
        <li><strong>A quins bancs portar cada perfil:</strong> no tots els bancs tenen el mateix apetit pel mateix tipus de client.</li>
        <li><strong>Com estructurar la documentació:</strong> l'ordre, la claredat i la completitud de l'expedient influeixen en la velocitat i el sentit de la resposta bancària.</li>
        <li><strong>Com anticipar objeccions:</strong> si hi ha un punt feble en el perfil, el broker ho aborda proactivament amb argumentació i documentació complementària.</li>
        <li><strong>Quan esperar i quan actuar:</strong> de vegades l'estratègia correcta és esperar 3-6 mesos per millorar un aspecte concret del perfil.</li>
      </ul>
      <p>A <a href="../hipotecas.html">NortFinance</a> fem exactament això. Analitzem el teu perfil en detall, identifiquem les teves fortaleses i punts de millora, i definim l'estratègia més eficaç per a la teva situació concreta. Sol·licita el teu estudi gratuït a <a href="../contacto.html">la nostra pàgina de contacte</a>.</p>

      <h2>Resum: El Pla d'Acció per Millorar el teu Perfil</h2>
      <ol>
        <li>Revisa la teva situació al CIRBE i als fitxers de morosos. Cancel·la qualsevol deute registrat.</li>
        <li>Redueix o elimina préstecs personals, de cotxe i saldo de targetes de crèdit.</li>
        <li>Maximitza el teu estalvi mensual i protegeix el coixí post-compra.</li>
        <li>Evita canvis laborals innecessaris en els mesos previs a la sol·licitud.</li>
        <li>Parla amb un broker abans d'anar al banc per conèixer la teva viabilitat real.</li>
      </ol>`,
      /* ── Article prose: Barcelona ────────────── */
      'art.bcn.prose': `<p>Barcelona és un dels mercats immobiliaris més dinàmics i competitius d'Espanya. Els preus de l'habitatge a la ciutat comtal se situen entre els més alts del país, l'oferta és limitada i la demanda —tant nacional com internacional— és consistentment elevada. Comprar un habitatge a Barcelona requereix una preparació financera sòlida i, en la majoria dels casos, el suport d'un broker hipotecari que conegui a fons el mercat local.</p>

      <h2>El Mercat Immobiliari de Barcelona el 2026</h2>
      <p>El mercat d'habitatge a Barcelona porta anys caracteritzat per una oferta estructuralment escassa i una demanda sostinguda. El 2026, el preu mitjà del metre quadrat a la ciutat de Barcelona se situa al voltant dels <strong>4.800-5.200 euros/m²</strong>, amb variacions molt significatives segons el districte.</p>

      <h3>Preus per zones el 2026</h3>
      <table>
        <thead><tr><th>Zona</th><th>Preu mitjà €/m²</th><th>Perfil</th></tr></thead>
        <tbody>
          <tr><td>Sarrià-Sant Gervasi / Les Corts</td><td>6.500–8.500</td><td>Premium / famílies</td></tr>
          <tr><td>Eixample</td><td>5.500–7.000</td><td>Central, alta demanda</td></tr>
          <tr><td>Gràcia</td><td>4.800–6.200</td><td>Bohemi, molt demanat</td></tr>
          <tr><td>Sant Martí / Poblenou</td><td>4.500–5.800</td><td>Tech hub, en creixement</td></tr>
          <tr><td>Nou Barris / Sant Andreu</td><td>2.800–3.800</td><td>Accessible, revaloritzable</td></tr>
        </tbody>
      </table>

      <div class="info-box">
        <p><strong>Per posar en perspectiva:</strong> un habitatge de 80 m² a l'Eixample pot costar entre 440.000 i 560.000 euros. Amb finançament del 80%, necessites uns 100.000 euros d'entrada més entre 55.000 i 70.000 euros en despeses. Un total d'entre 155.000 i 170.000 euros de recursos propis.</p>
      </div>

      <h2>Factors que Fan Especial el Mercat Barcelonès</h2>

      <h3>Tensió de preus i escassa oferta</h3>
      <p>Barcelona porta anys amb una demanda d'habitatge molt superior a l'oferta de noves construccions. Les restriccions urbanístiques, la dificultat d'obtenir noves llicències en determinats districtes i la pressió del mercat turístic han creat un mercat on els pisos es venen ràpidament.</p>

      <h3>Demanda internacional significativa</h3>
      <p>Barcelona atrau compradors estrangers de tota Europa, Llatinoamèrica i l'Orient Mitjà, tant per a residència habitual com per a segona residència o inversió. Per als compradors nacionals, això significa que de vegades competeixen amb compradors que paguen al comptat o que compten amb finançament pre-aprovat.</p>

      <h3>La regulació del lloguer i el seu efecte en preus de compra</h3>
      <p>Les polítiques de regulació del lloguer a Barcelona han tingut un efecte complex al mercat: en alguns casos han desincentivat la posada d'habitatges en lloguer, comprimint encara més l'oferta d'arrendament i empenyent més persones cap a la compra.</p>

      <h2>Com Funciona la Hipoteca a Barcelona: Particularitats</h2>

      <h3>Taxacions més complexes en el parc antic</h3>
      <p>Barcelona té un parc immobiliari molt antic, especialment a l'Eixample (construccions del XIX i principis del XX) i en els barris històrics. Les taxacions d'aquests immobles poden ser més complexes, amb valors de taxació que de vegades no arriben al preu de mercat. Això pot reduir el finançament efectiu que rebràs del banc.</p>

      <h3>L'ITP a Catalunya</h3>
      <p>Catalunya aplica un <strong>ITP del 10%</strong> per a habitatges de segona mà (el més alt d'Espanya). Per a obra nova, l'IVA és el 10% estàndard més l'1,5% d'AJD autonòmic. Utilitza el nostre <a href="../recursos.html">simulador d'hipoteca</a> per calcular les despeses completes de la teva operació a Catalunya.</p>

      <h3>La velocitat del mercat exigeix pre-aprovació</h3>
      <p>Als barris més demandats de Barcelona, esperar a tenir una oferta sobre un pis concret per llavors iniciar el procés hipotecari és un error estratègic. Treballar amb un broker que pugui obtenir una pre-aprovació bancària abans que comenci la recerca et posa en una posició de negociació molt superior.</p>

      <h2>Per Què Usar un Broker Hipotecari a Barcelona</h2>

      <h3>Accés a les millors condicions del mercat</h3>
      <p>En hipoteques d'imports elevats (a partir de 250.000-300.000 euros), les diferències en el tipus d'interès entre l'oferta directa d'un banc i el que pot negociar un broker són especialment significatives. Un 0,3% de diferència en una hipoteca de 350.000 euros a 25 anys suposa més de 15.000 euros d'estalvi en interessos.</p>

      <h3>Coneixement dels bancs amb millor presència a Catalunya</h3>
      <p>No tots els bancs tenen el mateix apetit hipotecari a Barcelona. Alguns tenen equips locals més àgils, polítiques de risc més favorables per al parc antic barcelonès o millors productes per a determinats perfils. El broker local coneix aquests matisos.</p>

      <h3>Gestió de la pre-aprovació</h3>
      <p>A <a href="../hipotecas.html">NortFinance</a>, abans que els nostres clients facin una oferta seria per un pis a Barcelona, treballem per obtenir una carta de pre-aprovació bancària que els permeti negociar des d'una posició de força.</p>

      <h2>En Quines Zones de Barcelona Convé Comprar el 2026?</h2>
      <ul>
        <li><strong>Poblenou i Sant Martí:</strong> zona en transformació amb projecció a l'alça, especialment a l'entorn del @22 i la Vila Olímpica.</li>
        <li><strong>Gràcia i el Born:</strong> demanda consistent, bona liquiditat en cas de venda futura, però amb preus elevats i poca oferta nova.</li>
        <li><strong>L'Hospitalet de Llobregat i àrea metropolitana:</strong> per a compradors que busquen més espai amb pressupost contingut.</li>
        <li><strong>Badalona i Sant Adrià:</strong> opcions vàlides per a famílies amb bona connexió al centre.</li>
      </ul>

      <h2>Resum: Claus per Comprar Habitatge amb Hipoteca a Barcelona</h2>
      <ol>
        <li>Prepara l'estalvi necessari: entre el 30 i el 35% del preu de compra (entrada + despeses amb l'ITP català del 10%).</li>
        <li>Treballa amb un broker per obtenir la pre-aprovació bancària abans de fer ofertes.</li>
        <li>Tingues en compte la complexitat de la taxació en immobles del parc antic.</li>
        <li>Actua amb agilitat: als barris més demandats, els millors pisos es tanquen ràpid.</li>
        <li>Considera l'àrea metropolitana si el pressupost no arriba per a Barcelona ciutat.</li>
      </ol>
      <p>Consulta també la nostra <a href="guia-hipotecaria-completa.html">guia hipotecària completa</a> per entendre tot el procés des del principi.</p>`,
      /* ── Article prose: Segona Residència ───── */
      'art.seg.prose': `<p>Comprar una segona residència a Espanya és una decisió financera de calat: pot tractar-se d'una residència d'estiueig, un pied-à-terre a la ciutat o una inversió destinada al lloguer. Independentment del motiu, les condicions hipotecàries per a una segona residència difereixen de manera significativa respecte a les de l'habitatge habitual. Conèixer aquestes diferències abans d'iniciar el procés et permetrà planificar-te correctament i evitar sorpreses.</p>

      <h2>Per Què és Diferent una Hipoteca per a Segona Residència?</h2>
      <p>El sistema bancari espanyol tracta de forma diferent el finançament de l'habitatge habitual i el de la segona residència. Davant d'una dificultat econòmica, un deutor prioritzarà sempre el pagament de la hipoteca del seu llar principal abans que el de la segona residència. Aquesta percepció de major risc es tradueix en condicions més restrictives en tots els fronts.</p>

      <h2>Percentatge de Finançament: El Gran Diferenciador</h2>
      <p>Mentre que per a l'habitatge habitual els bancs solen finançar fins al <strong>80% del valor de taxació</strong>, per a la segona residència el límit habitual se situa entre el <strong>60% i el 75%</strong>.</p>

      <table>
        <thead>
          <tr>
            <th>Concepte</th>
            <th>Habitatge Habitual</th>
            <th>Segona Residència</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Finançament màxim</td><td>Fins al 80%</td><td>60–75%</td></tr>
          <tr><td>Entrada mínima necessària</td><td>20% + despeses</td><td>25–40% + despeses</td></tr>
          <tr><td>Tipus d'interès</td><td>Més competitiu</td><td>+0,1 a +0,5 punts</td></tr>
          <tr><td>Termini màxim</td><td>Fins a 40 anys</td><td>20–25 anys habitual</td></tr>
        </tbody>
      </table>

      <h2>Tipus d'Interès: Diferencial Habitual en Segona Residència</h2>
      <p>Els bancs apliquen un diferencial addicional sobre el tipus d'interès per a les hipoteques de segona residència, generalment d'entre <strong>0,1 i 0,5 punts percentuals</strong> més que per a l'habitatge habitual. Aquesta és una de les raons per les quals comptar amb un broker hipotecari resulta especialment valuós en operacions de segona residència: la variabilitat entre entitats és major.</p>

      <h2>Requisits per a una Hipoteca de Segona Residència</h2>

      <h3>Capacitat financera demostrable</h3>
      <p>Els bancs exigiran que la quota de la nova hipoteca, sumada a tots els teus deutes existents (inclosa la hipoteca del teu habitatge habitual si en tens), no superi el <strong>35-40% dels teus ingressos nets mensuals</strong>.</p>

      <h3>Estalvi acreditat i origen del capital</h3>
      <p>Donat que l'entrada requerida és major, el banc voldrà verificar que disposes dels fons necessaris i que el seu origen és lícit.</p>

      <h3>Perfil laboral estable</h3>
      <p>Contracte indefinit amb antiguitat superior a dos anys és el perfil òptim. Consulta la nostra <a href="documentacion-necesaria-hipoteca.html">guia de documentació hipotecària</a> per preparar-te al màxim.</p>

      <h2>Fiscalitat: Diferències Importants amb l'Habitatge Habitual</h2>

      <h3>Impost de Transmissions Patrimonials (ITP)</h3>
      <p>En la compra d'una segona residència de segona mà, l'ITP s'aplica igual que en qualsevol altra compravenda. El tipus varia per comunitat autònoma, oscil·lant entre el <strong>6% de Madrid i el 10% de Catalunya o Comunitat Valenciana</strong>.</p>

      <h3>IRPF: imputació de rendes immobiliàries</h3>
      <p>Si la segona residència no està llogada, Hisenda t'imputarà una <strong>renda immobiliària fictícia</strong> en la teva declaració de l'IRPF. L'import imputable és el 2% del valor cadastral (o l'1,1% si el valor cadastral ha estat revisat en els últims 10 anys).</p>

      <h2>El Rol del Broker en Operacions de Segona Residència</h2>
      <ul>
        <li>La variabilitat de condicions entre entitats és major que en l'habitatge habitual.</li>
        <li>La presentació de l'expedient és més crítica: el banc analitza amb més detall el perfil financer global.</li>
        <li>Hi ha bancs que, sense la intermediació d'un broker, no ofereixen el seu producte de segona residència o ho fan en condicions molt pitjors.</li>
        <li>En perfils complexos (autònoms, no residents, ingressos mixtos), el broker pot accedir a entitats especialitzades que el client no coneix.</li>
      </ul>

      <h2>¿Segona Residència com a Inversió?</h2>
      <p>Si la motivació és invertir per llogar, l'anàlisi financera canvia. La quota hipotecària ha de comparar-se amb l'ingrés per lloguer esperat, descomptant despeses de gestió, manteniment, vacants i l'IBI. Si estàs considerant una compra inversora, escriu-nos a <a href="../contacto.html">NortFinance</a> per a una primera valoració sense compromís.</p>`,

      /* ── Article prose: Com Funciona Broker ──── */
      'art.broker.prose': `<p>Si estàs buscant hipoteca, probablement hagis escoltat el terme "broker hipotecari". Però, què fa exactament? En què es diferencia d'anar directament a un banc? Quan cobra i quant? En aquest article responem totes aquestes preguntes amb total transparència, perquè creiem que un client ben informat pren millors decisions.</p>

      <h2>Què és un Broker Hipotecari?</h2>
      <p>Un broker hipotecari —també anomenat intermediari de crèdit immobiliari— és un professional o firma que actua com a intermediari entre el sol·licitant d'una hipoteca i les entitats bancàries. A diferència de l'empleat d'un banc, que només pot oferir-te els productes de la seva entitat, el broker treballa amb un panel de bancs i busca la millor opció per a cada client en concret.</p>
      <p>A Espanya, els brokers hipotecaris estan regulats per la <strong>Llei 5/2019 de Contractes de Crèdit Immobiliari</strong> i han d'estar registrats al Banc d'Espanya o a la CNMV com a intermediaris de crèdit immobiliari.</p>

      <h2>Què Fa un Broker Hipotecari: Pas a Pas</h2>

      <h3>1. Anàlisi inicial i viabilitat</h3>
      <p>El procés comença amb una reunió (presencial o telemàtica) en la qual el broker analitza la teva situació financera completa. Amb aquesta informació, pot dir-te des del primer moment quina és la teva viabilitat real i quina hipoteca pots assolir. Aquest anàlisi previ, que a NortFinance oferim de forma gratuïta, evita que perdis temps sol·licitant hipoteques que els bancs van a denegar.</p>

      <h3>2. Preparació i optimització de l'expedient</h3>
      <p>Un cop confirmada la viabilitat, el broker treballa amb tu per preparar la documentació de la manera més favorable possible. La presentació de l'expedient és un art. El mateix perfil financer, presentat de dues maneres diferents, pot generar respostes radicalment diferents dels bancs.</p>

      <h3>3. Consulta simultània a múltiples bancs</h3>
      <ul>
        <li>Accedeix a condicions que els bancs reserven per al canal de brokers i que no estan disponibles a les seves oficines al client de carrer.</li>
        <li>El procés és més ràpid: en lloc d'anar banc per banc durant setmanes, reps diverses respostes en un termini reduït.</li>
        <li>El teu expedient només "es mou" una vegada: redueixis les consultes al CIRBE.</li>
      </ul>

      <h3>4. Negociació de condicions</h3>
      <p>Quan arriben les ofertes dels bancs, el broker no accepta la primera que rep. Negocia activament les condicions: tipus d'interès, comissions, productes vinculats i clàusules específiques. El resultat concret d'aquesta negociació pot suposar des d'una reducció de 0,1 punts en el tipus d'interès fins a l'eliminació de comissions.</p>

      <h3>5. Acompanyament fins a la signatura</h3>
      <p>La feina del broker no acaba quan el banc diu sí. S'estén fins a la signatura davant de notari, coordinant amb el taxador, la gestoria i la notaria, revisant la FEIN i la FIAE, i explicant-te cada clàusula abans que signies.</p>

      <h2>Quan Cobra el Broker i Quant?</h2>
      <p>La resposta és clara: <strong>el broker hipotecari només cobra si l'operació arriba a bon port</strong>. És a dir, els seus honoraris s'abonen en el moment de la signatura davant de notari. No hi ha pagaments avançats, no hi ha honoraris si la hipoteca no s'aprova.</p>
      <p>En quant a l'import, els honoraris d'un broker solen situar-se entre el <strong>0,5% i l'1% del capital hipotecat</strong>. A NortFinance som transparents des de la primera reunió.</p>

      <table>
        <thead>
          <tr>
            <th>Concepte</th>
            <th>Amb broker</th>
            <th>Directament al banc</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Nombre de bancs consultats</td><td>8–15 entitats</td><td>1–3 entitats</td></tr>
          <tr><td>Temps de gestió</td><td>Delegat al broker</td><td>Tot a càrrec del client</td></tr>
          <tr><td>Accés a condicions canal broker</td><td>Sí</td><td>No</td></tr>
          <tr><td>Negociació professional</td><td>Sí</td><td>Limitada</td></tr>
          <tr><td>Cost</td><td>0,5–1% només si hi ha signatura</td><td>Gratuït (però pitjors condicions)</td></tr>
        </tbody>
      </table>

      <h2>Val la Pena el Cost del Broker?</h2>
      <p>La pregunta correcta no és quant cobra el broker, sinó quant t'estalvia. Si el broker aconsegueix millorar el tipus d'interès en 0,2 punts percentuals en una hipoteca de 250.000 euros a 25 anys, l'estalvi en interessos supera els <strong>12.000 euros</strong>. Davant uns honoraris de 2.000-2.500 euros, el retorn de la inversió és evident.</p>

      <h2>Com Treballa NortFinance: El Nostre Procés</h2>
      <ol>
        <li><strong>Primera reunió gratuïta:</strong> anàlisi de viabilitat sense compromís i sense cost.</li>
        <li><strong>Estudi i preparació:</strong> preparem el teu expedient amb els documents adequats.</li>
        <li><strong>Consulta al panel bancari:</strong> accedim al nostre panel d'entitats financeres de forma simultània.</li>
        <li><strong>Presentació d'ofertes:</strong> reps una anàlisi comparativa de totes les ofertes rebudes.</li>
        <li><strong>Negociació:</strong> treballem per millorar la millor oferta abans de presentar-te-la com a definitiva.</li>
        <li><strong>Acompanyament fins a la signatura:</strong> coordinem cada pas i estem disponibles per resoldre qualsevol dubte.</li>
      </ol>

      <h2>Quan Té Més Sentit Usar un Broker?</h2>
      <ul>
        <li><strong>Perfils complexos:</strong> autònoms, treballadors amb ingressos variables, persones amb historial creditici no perfecte.</li>
        <li><strong>Operacions de segona residència o inversió:</strong> on la variabilitat de condicions entre bancs és major.</li>
        <li><strong>No residents:</strong> perfil amb accés molt limitat al canal bancari convencional.</li>
        <li><strong>Imports elevats:</strong> com més gran és la hipoteca, major és l'estalvi potencial en termes absoluts.</li>
        <li><strong>Poc temps disponible:</strong> delegar la gestió bancària allibera temps valuós.</li>
        <li><strong>Primera vegada comprant:</strong> l'assessorament integral evita errors costosos.</li>
      </ul>`,
      /* ── Article prose: Quant Puc Demanar ───── */
      'art.cuanto.prose': `<p>«Quant em donarà el banc?» És, sens dubte, la primera pregunta que tot comprador d'habitatge es fa abans d'iniciar la seva recerca. La resposta no és un número fix: depèn del teu sou, dels teus deutes actuals, del tipus de contracte que tinguis i del percentatge que el banc estigui disposat a finançar sobre el valor de taxació. En aquest article desgranem la fórmula que utilitzen els bancs i et donem les claus per maximitzar la teva capacitat d'endeutament.</p>

      <h2>La Regla del 35%: El Límit d'Endeutament Bancari</h2>
      <p>Els bancs a Espanya apliquen de forma generalitzada un principi bàsic: <strong>la quota mensual de la hipoteca no ha de superar el 35% dels ingressos nets mensuals</strong> del sol·licitant o la unitat familiar. Algunes entitats són una mica més flexibles —arribant al 40%— quan el perfil és molt solvent.</p>

      <h3>Com es calcula el ràtio d'endeutament</h3>
      <p>La fórmula és senzilla però hi ha un detall important: <strong>el banc suma tots els teus deutes vigents</strong>, no només la hipoteca que vols contractar.</p>

      <p><strong>Ràtio d'endeutament = (Quota hipoteca + resta de quotes de deute) ÷ Ingressos nets mensuals × 100</strong></p>

      <table>
        <thead>
          <tr>
            <th>Ingressos nets/mes</th>
            <th>Quota màxima (35%)</th>
            <th>Capital aprox. (3,5% · 25 anys)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1.500 €</td><td>525 €</td><td>~90.000 €</td></tr>
          <tr><td>2.000 €</td><td>700 €</td><td>~121.000 €</td></tr>
          <tr><td>2.500 €</td><td>875 €</td><td>~151.000 €</td></tr>
          <tr><td>3.000 €</td><td>1.050 €</td><td>~181.000 €</td></tr>
          <tr><td>4.000 €</td><td>1.400 €</td><td>~242.000 €</td></tr>
        </tbody>
      </table>

      <h2>Quant Finança el Banc: El 80% del Valor de Taxació</h2>
      <p>El banc limita el <strong>préstec hipotecari al 80% del valor de taxació</strong> de l'immoble —o del preu de compra si aquest fos inferior—. Independentment de quant puguis pagar al mes, necessitaràs tenir estalviat almenys el 20% restant més les despeses de compravenda.</p>

      <h3>El problema de la taxació vs el preu de compra</h3>
      <p>En un mercat a l'alça com l'actual, la taxació no sempre coincideix amb el preu de mercat. Si el taxador oficial valora el pis en 280.000 € però el venedor demana 300.000 €, el banc et prestarà com a màxim 224.000 € (el 80% de 280.000 €). Per això és fonamental realitzar una taxació orientativa abans de signar la senyal o el contracte d'arres.</p>

      <div class="info-box">
        <p><strong>Regla pràctica d'estalvi previ:</strong> Per comprar un habitatge a Espanya necessites tenir estalviat, com a mínim, el <strong>20% del preu de compra per a l'entrada</strong> més un <strong>10-15% addicional per cobrir les despeses</strong>. En total, calcula disposar d'entre el 30% i el 35% del preu de l'immoble. Consulta la nostra <a href="gastos-compra-vivienda.html">guia completa de despeses de compravenda</a> per a un desglosament detallat.</p>
      </div>

      <h2>Factors que Augmenten o Redueixen el que Pots Demanar</h2>

      <h3>Nombre de titulars</h3>
      <p>Sol·licitar la hipoteca amb dos titulars és la forma més eficaç d'augmentar la capacitat d'endeutament. Els bancs sumen els ingressos de tots dos, la qual cosa eleva el sostre del 35% de forma immediata.</p>

      <h3>Tipus de contracte laboral</h3>
      <p>El banc no valora igual un contracte indefinit en una gran empresa que un contracte temporal de sis mesos. En general, l'ordre de preferència és: <strong>funcionari &gt; contracte indefinit &gt; contracte temporal &gt; autònom amb rendes estables &gt; autònom amb rendes variables</strong>. Consulta el nostre article sobre <a href="hipoteca-autonomo.html">hipoteques per a autònoms</a> per a més detalls.</p>

      <h3>Deutes existents</h3>
      <p>Cada deute actiu —préstec personal, cotxe a terminis, targeta de crèdit amb quota mínima— redueix el marge disponible dins del 35%. Cancel·lar els deutes existents abans de sol·licitar la hipoteca és, en molts casos, la decisió financera més rendible que pots prendre.</p>

      <h2>Exemples Pràctics de Capacitat Hipotecària</h2>

      <table>
        <thead>
          <tr>
            <th>Perfil</th>
            <th>Ingressos nets</th>
            <th>Deutes previs</th>
            <th>Quota màx.</th>
            <th>Hipoteca aprox.</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Sol/a · contracte indefinit</td><td>2.000 €/mes</td><td>Cap</td><td>700 €</td><td>~121.000 €</td></tr>
          <tr><td>Parella · dos sous</td><td>4.500 €/mes</td><td>Cotxe 250 €/mes</td><td>1.325 €</td><td>~229.000 €</td></tr>
          <tr><td>Autònom/a · 3 anys d'activitat</td><td>3.000 €/mes (mitjana)</td><td>Cap</td><td>1.050 €</td><td>~181.000 €*</td></tr>
        </tbody>
      </table>

      <p>*En el cas de l'autònom, el banc pot aplicar un descompte sobre la renda declarada. L'import real dependrà del criteri de l'entitat i de la presentació de l'expedient.</p>

      <h2>Com Maximitzar el que el Banc et Prestarà</h2>
      <ul>
        <li><strong>Cancel·la els deutes de consum.</strong> Préstecs personals, deutes de targeta o finançaments d'electrodomèstics redueixen la teva quota disponible.</li>
        <li><strong>Incorpora un cotitular solvent.</strong> La suma d'ingressos és el multiplicador més potent.</li>
        <li><strong>Millora l'estabilitat contractual.</strong> Si tens una oferta de contracte indefinit, espera a signar-lo i superar el període de prova.</li>
        <li><strong>Augmenta l'estalvi previ.</strong> Si pots aportar més del 20% d'entrada, el banc assumeix menys risc i sol oferir millors condicions.</li>
        <li><strong>Usa un broker hipotecari.</strong> Un intermediari amb accés a múltiples entitats pot identificar quin banc té els criteris de risc més favorables per al teu perfil específic.</li>
      </ul>

      <div class="info-box">
        <p><strong>Important:</strong> els imports calculats en aquest article són orientatius i es basen en condicions de mercat vigents al maig de 2026. Cada banc aplica els seus propis criteris de risc, i el resultat real pot diferir en funció del perfil complet del sol·licitant i de l'entitat escollida.</p>
      </div>`,

      /* ── Article prose: Despeses Compra ──────── */
      'art.gastos.prose': `<p>Comprar un habitatge a Espanya té un cost que va molt més enllà del preu de venda que figura en l'anunci. Una de les sorpreses més freqüents que s'enduen els compradors primerencs és descobrir, ja amb el contracte d'arres signat, que necessiten molt més diners dels que havien calculat. La regla d'or que manem a NortFinance és senzilla: <strong>calcula entre un 10% i un 15% addicional sobre el preu de compra només per cobrir les despeses i impostos</strong>. Aquesta guia desglossa, partida per partida, cadascuna d'aquelles despeses perquè no hi hagi cap sorpresa a la notaria.</p>

      <h2>Impostos: La Major Despesa en Comprar Habitatge</h2>
      <p>Els impostos representen, amb diferència, el major desemborsament addicional al preu de compra. El tipus d'impost que pagaràs depèn fonamentalment de si l'habitatge és d'obra nova o de segona mà, i —en el cas de segona mà— de la comunitat autònoma on es trobi l'immoble.</p>

      <h3>ITP per a habitatge de segona mà</h3>
      <p>En la compra d'habitatge usat es tributa per l'<strong>Impost de Transmissions Patrimonials (ITP)</strong>, un tribut cedit a les comunitats autònomes, la qual cosa explica la gran variabilitat geogràfica. A continuació, els tipus generals vigents el 2026:</p>

      <table>
        <thead>
          <tr>
            <th>Comunitat Autònoma</th>
            <th>Tipus general ITP</th>
            <th>Bonificacions destacades</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Andalusia</td><td>7%</td><td>3,5% per a joves i famílies nombroses</td></tr>
          <tr><td>Aragó</td><td>8%</td><td>5% per a menors de 35 anys (fins 100.000 €)</td></tr>
          <tr><td>Astúries</td><td>8%</td><td>3% per a joves (residència habitual)</td></tr>
          <tr><td>Illes Balears</td><td>8% – 11%</td><td>Escala progressiva segons valor</td></tr>
          <tr><td>Canàries</td><td>6,5%</td><td>Tipus reduït molt competitiu</td></tr>
          <tr><td>Cantàbria</td><td>10%</td><td>5% per a menors de 30 anys</td></tr>
          <tr><td>Castella-La Manxa</td><td>9%</td><td>6% per a joves i famílies nombroses</td></tr>
          <tr><td>Castella i Lleó</td><td>8%</td><td>4% per a menors de 36 anys (fins 135.000 €)</td></tr>
          <tr><td>Catalunya</td><td>10%</td><td>5% per a menors de 33 anys i discapacitats</td></tr>
          <tr><td>Ceuta</td><td>6%</td><td>—</td></tr>
          <tr><td>Comunitat de Madrid</td><td>6%</td><td>Tipus únic, sense trams</td></tr>
          <tr><td>Comunitat Valenciana</td><td>10%</td><td>8% per a menors de 35 anys (residència habitual)</td></tr>
          <tr><td>Extremadura</td><td>8% – 11%</td><td>Escala progressiva; 7% per a joves</td></tr>
          <tr><td>Galícia</td><td>10%</td><td>3% per a menors de 36 anys i famílies nombroses</td></tr>
          <tr><td>La Rioja</td><td>7%</td><td>5% per a joves i zones despoblades</td></tr>
          <tr><td>Melilla</td><td>6%</td><td>—</td></tr>
          <tr><td>Múrcia</td><td>8%</td><td>3% per a menors de 35 anys</td></tr>
          <tr><td>Navarra</td><td>6%</td><td>Règim foral propi</td></tr>
          <tr><td>País Basc</td><td>4%</td><td>Règim foral; tipus molt reduït</td></tr>
        </tbody>
      </table>

      <h3>IVA + AJD per a habitatge nou</h3>
      <ul>
        <li><strong>IVA:</strong> el tipus general és el <strong>10%</strong> sobre el preu de compra. Per a habitatges de protecció oficial (VPO) el tipus es redueix al 4%.</li>
        <li><strong>AJD:</strong> varia per comunitat autònoma, però generalment se situa entre el <strong>0,5% i l'1,5%</strong> del preu escripturat.</li>
      </ul>

      <h2>Despeses de Notaria</h2>
      <p>L'escriptura pública de compravenda davant de notari és obligatòria per inscriure la propietat en el Registre. Des de l'aprovació de la <strong>Llei 5/2019 de contractes de crèdit immobiliari</strong>, el banc és obligat a assumir les despeses notarials de l'escriptura d'hipoteca. El comprador només paga l'escriptura de compravenda i la seva còpia. Per a operacions típiques d'entre 200.000 € i 400.000 € els costos oscil·len entre <strong>600 € i 1.200 €</strong>.</p>

      <h2>Despeses de Registre de la Propietat</h2>
      <p>Un cop signada l'escriptura de compravenda davant de notari, el document ha d'inscriure's en el Registre de la Propietat. Els aranzels registrals estan regulats i són proporcionals al preu de compra. Per a operacions d'entre 200.000 € i 500.000 €, les despeses de registre se situen habitualment entre <strong>400 € i 800 €</strong>.</p>

      <h2>Gestoria</h2>
      <p>La gestoria s'encarrega de tramitar la liquidació d'impostos i presentar l'escriptura en el registre. El cost habitual se situa entre <strong>300 € i 600 €</strong>, tot i que algunes gestories cobren per hores o per partides concretes.</p>

      <h2>Taxació de l'Habitatge</h2>
      <p>Si financiaràs la compra amb una hipoteca, el banc exigirà una <strong>taxació oficial</strong> realitzada per una societat de taxació homologada pel Banc d'Espanya. El cost de la taxació per a un habitatge residencial estàndard oscil·la entre <strong>300 € i 600 €</strong>.</p>

      <h2>Resum: Quants Diners Necessites Estalviats?</h2>

      <table>
        <thead>
          <tr>
            <th>Preu de compra</th>
            <th>Entrada (20%)</th>
            <th>Despeses Madrid (~8%)</th>
            <th>Despeses Catalunya (~12%)</th>
            <th>Total Madrid</th>
            <th>Total Catalunya</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>200.000 €</td><td>40.000 €</td><td>16.000 €</td><td>24.000 €</td><td><strong>56.000 €</strong></td><td><strong>64.000 €</strong></td></tr>
          <tr><td>300.000 €</td><td>60.000 €</td><td>24.000 €</td><td>36.000 €</td><td><strong>84.000 €</strong></td><td><strong>96.000 €</strong></td></tr>
          <tr><td>400.000 €</td><td>80.000 €</td><td>32.000 €</td><td>48.000 €</td><td><strong>112.000 €</strong></td><td><strong>128.000 €</strong></td></tr>
          <tr><td>500.000 €</td><td>100.000 €</td><td>40.000 €</td><td>60.000 €</td><td><strong>140.000 €</strong></td><td><strong>160.000 €</strong></td></tr>
        </tbody>
      </table>

      <div class="info-box">
        <p><strong>La regla pràctica de NortFinance:</strong> Calcula un <strong>30–35% del preu de compra entre entrada i despeses</strong>. Si compres en una comunitat amb ITP alt (Catalunya, Comunitat Valenciana, Galícia) aproxima el 35%. Si compres a Madrid, País Basc o Canàries, el 28-30% pot ser suficient.</p>
      </div>

      <h2>Com Reduir les Despeses de Compra</h2>
      <ul>
        <li><strong>Aprofita les bonificacions autonòmiques.</strong> Si ets menor de 35 anys, tens una família nombrosa o una discapacitat reconeguda, comprova si la teva comunitat autònoma ofereix un tipus reduït d'ITP.</li>
        <li><strong>Verifica el valor de referència cadastral abans de signar.</strong> Si el valor de referència assignat per Hisenda és superior al preu de compra, pot ser convenient sol·licitar una taxació pericial contradictòria.</li>
        <li><strong>Negocia el preu de compra.</strong> Cada euro que redueixes en el preu de compra redueix també la base de l'ITP.</li>
        <li><strong>Tria bé la gestoria.</strong> A diferència de la notaria o el registre, els honoraris de gestoria són negociables. Demana pressupost a diverses i compara.</li>
      </ul>

      <p>Per planificar la teva operació amb totes les dades sobre la taula, no oblidis consultar també la nostra guia sobre <a href="cuanto-puedo-pedir-hipoteca.html">quant puc demanar d'hipoteca</a> i la <a href="documentacion-necesaria-hipoteca.html">documentació necessària per a la compra</a>.</p>`,
      /* ── Article prose: Millors Hipoteques ──── */
      'art.mejores.prose': `<p>Cada setmana milers de persones busquen a internet «millors hipoteques 2026» esperant trobar una llista definitiva amb el banc que més convé. La realitat és que aquesta llista no existeix —o almenys no de forma universal—. La millor hipoteca no és un producte estàtic que serveix igual per a tothom: és la que millor s'adapta a <strong>el teu perfil específic</strong>, a la teva capacitat d'assumir risc, al teu horitzó temporal i a les condicions que un banc concret estigui disposat a oferir-te a tu en particular. Aquesta guia no et dirà quin banc és «el millor», però sí et donarà totes les eines per identificar-lo i negociar-lo.</p>

      <h2>El Context del Mercat Hipotecari el 2026</h2>
      <p>Per entendre quines hipoteques són competitives el 2026, és imprescindible situar el moment de mercat. El cicle de pujades de tipus que va iniciar el BCE el 2022 va quedar enrere: després de les baixades graduals de 2024 i 2025, l'Euríbor a 12 mesos se troba en nivells significativament més baixos que els pics de finals de 2023. El resultat és un mercat hipotecari més competitiu i amb major varietat d'opcions vàlides que en anys recents.</p>

      <h3>Tipus fixos actuals: 2,9% – 3,8% TIN</h3>
      <p>Les hipoteques a tipus fix el 2026 se situen, per a perfils solents amb alta vinculació, en forquilles d'entre el <strong>2,9% i el 3,3% TIN</strong>. Per a perfils estàndard o amb menor vinculació, els tipus es mouen entre el <strong>3,3% i el 3,8% TIN</strong>.</p>

      <h3>Tipus variables actuals: Euríbor + 0,5% – 1,2%</h3>
      <p>Les hipoteques a tipus variable s'articulen com un diferencial sobre l'Euríbor a 12 mesos. Els millors diferencials del mercat el 2026 per a perfils Prime se situen al voltant de <strong>Euríbor + 0,50%</strong>, mentre que la mitjana del mercat ronda <strong>Euríbor + 0,80% – 1,00%</strong>.</p>

      <h3>Tipus mixtos: primer tram fix 2,5% – 3,2%, després variable</h3>
      <p>Les hipoteques mixtes han guanyat molta popularitat en els últims anys. Ofereixen un <strong>tipus fix durant els primers 5, 10 o 15 anys</strong> —habitualment entre el 2,5% i el 3,2% TIN—, i posteriorment passen a ser variables.</p>

      <h2>Quina Hipoteca és Millor el 2026: Fixa, Variable o Mixta?</h2>

      <table>
        <thead>
          <tr>
            <th>Característica</th>
            <th>Hipoteca Fixa</th>
            <th>Hipoteca Variable</th>
            <th>Hipoteca Mixta</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Estabilitat de quota</td><td>Total durant tota la vida</td><td>Varia amb l'Euríbor cada any</td><td>Fixa en el primer tram, després variable</td></tr>
          <tr><td>Tipus d'interès inicial</td><td>2,9% – 3,8% TIN</td><td>Euríbor + 0,5% – 1,2%</td><td>2,5% – 3,2% TIN (tram fix)</td></tr>
          <tr><td>Ideal per a</td><td>Aversió al risc, planificació a llarg termini</td><td>Expectativa de tipus baixos, termini curt o amortització anticipada</td><td>Compradors amb horitzó de 10-15 anys o que preveuen amortitzar</td></tr>
          <tr><td>Risc principal</td><td>Pagar de més si els tipus baixen molt</td><td>Pujada de l'Euríbor que encareix la quota</td><td>Incertesa després del tram fix</td></tr>
          <tr><td>Comissió d'amortització anticipada</td><td>Fins al 2% (primers 10 anys) / 1,5% (resta)</td><td>Màx. 0,25% (5 anys) / 0% després</td><td>Segons tram; similar a fixa en període fix</td></tr>
        </tbody>
      </table>

      <div class="info-box">
        <p><strong>El moment de mercat afavoreix el tipus fix.</strong> Amb l'Euríbor en nivells moderats però sense garanties que continuï baixant, el tipus fix ofereix el 2026 una equació risc/recompensa molt atractiva. Per a la majoria de compradors d'habitatge habitual, la hipoteca fixa continua sent l'opció més prudent en el context actual. Per aprofundir en aquesta decisió, llegeix la nostra anàlisi detallada sobre <a href="hipoteca-fija-variable-mixta.html">hipoteca fixa, variable o mixta</a>.</p>
      </div>

      <h2>Els 5 Factors que Defineixen una Bona Hipoteca</h2>

      <h3>1. El tipus d'interès (TIN i TAE)</h3>
      <p>El <strong>TIN (Tipus d'Interès Nominal)</strong> és el tipus que s'aplica directament al capital pendent per calcular la quota. Tanmateix, l'indicador que realment permet comparar el cost total de la hipoteca és la <strong>TAE (Taxa Anual Equivalent)</strong>, que incorpora el TIN més totes les comissions i despeses de l'operació expressats de forma anualitzada.</p>

      <h3>2. Les comissions (obertura, amortització anticipada)</h3>
      <p>Les comissions més rellevants són la d'<strong>obertura</strong> —que molts bancs han eliminat per ser més competitius— i la d'<strong>amortització anticipada</strong>. Si tens perspectives d'amortitzar anticipadament o de subrogar la hipoteca en el futur, aquest factor cobra especial importància.</p>

      <h3>3. Els productes vinculats (assegurança de vida, llar, targeta)</h3>
      <p>Els bancs ofereixen els seus millors tipus d'interès condicionats a la contractació de productes addicionals. El truc és calcular quant et costa realment cada vinculació i comparar-ho amb l'estalvi en tipus que obtens. En molts casos, contractar les assegurances en companyies independents amb la hipoteca sense bonificació resulta més barat en la suma total.</p>

      <h3>4. El termini d'amortització</h3>
      <p>El termini determina l'equilibri entre quota mensual i cost total. A major termini, menor quota mensual però major cost total en interessos. Per exemple, per a un préstec de 200.000 € al 3,5%, la diferència entre 20 i 30 anys és d'aproximadament 35.000 € en interessos totals.</p>

      <h3>5. El finançament màxim (LTV)</h3>
      <p>El <strong>LTV (Loan to Value)</strong> és el percentatge del valor de taxació que el banc finança. L'estàndard del mercat és el 80%. Si tens capacitat d'aportar més del 20%, fer-ho sol millorar el tipus que t'ofereixen.</p>

      <h2>Per Què un Broker Hipotecari Aconsegueix Millors Condicions</h2>
      <p>La diferència entre acudir directament a un banc i fer-ho a través d'un broker especialitzat pot suposar diferències d'entre 0,3 i 0,8 punts en el tipus d'interès, la qual cosa en una hipoteca de 250.000 € a 25 anys es tradueix en <strong>entre 12.000 € i 30.000 € menys en interessos totals</strong>.</p>
      <ul>
        <li><strong>Accés simultani a múltiples entitats.</strong> Un broker treballa amb 10, 15 o més bancs en paral·lel.</li>
        <li><strong>Poder de negociació real.</strong> Un particular negocia la seva hipoteca amb el banc una vegada a la vida. Un broker negocia centenars d'hipoteques a l'any amb aquell mateix banc.</li>
        <li><strong>Presentació òptima de l'expedient.</strong> Saber com presentar cada perfil davant cada entitat és una habilitat que només s'adquireix amb experiència.</li>
        <li><strong>Sense cost fins a la signatura.</strong> Els brokers hipotecaris a Espanya cobren els seus honoraris en el moment de la signatura de la hipoteca, i només si l'operació es conclou amb èxit.</li>
      </ul>

      <h2>Com Comparar Hipoteques Correctament</h2>
      <ol>
        <li><strong>Usa la TAE, no el TIN.</strong> La TAE és el cost real anualitzat que inclou comissions i despeses.</li>
        <li><strong>Calcula el cost total del préstec.</strong> Suma totes les quotes durant el termini total més les despeses de constitució.</li>
        <li><strong>Simula escenaris d'Euríbor a l'alça per a les variables.</strong> Si estàs valorant una hipoteca variable, calcula com quedaria la teva quota si l'Euríbor pujés 1, 2 o 3 punts.</li>
        <li><strong>Valora el cost de les vinculacions.</strong> Demana al banc les condicions amb i sense cada producte vinculat.</li>
        <li><strong>Considera l'amortització anticipada.</strong> Les hipoteques variables són significativament més flexibles en aquest aspecte.</li>
        <li><strong>No decideixis en base al primer banc que et respon.</strong> Usa aquesta proposta inicial com a punt de partida per negociar amb altres entitats.</li>
      </ol>

      <p>Per aprofundir en la comprensió de l'índex que més impacta en les hipoteques variables, llegeix el nostre article <a href="euribor-que-es.html">què és l'Euríbor i com afecta la teva hipoteca</a>.</p>`,
      /* ── Article prose: Broker Madrid ───────── */
      'art.madrid.prose': `
  <h2>Per què necessites un broker hipotecari a Madrid?</h2>
  <p>L'oferta hipotecària a Madrid és àmplia, però això no significa que tots els productes siguin igualment beneficiosos per al teu perfil. Els bancs dissenyen les seves hipoteques per maximitzar els seus marges, no per adaptar-se a la teva situació particular. Un broker hipotecari a Madrid com NortFinance treballa exclusivament per a tu: analitza el teu perfil, accedeix a les ofertes de més de 20 entitats i negocia en el teu nom.</p>

  <h2>Perfils que més es beneficien de l'assessorament a Madrid</h2>
  <p>A Madrid atenem compradors de primer habitatge, autònoms amb declaracions irregulars, inversors que busquen segona residència o immoble d'inversió, i expatriats que volen comprar a Espanya. En tots els casos, la complexitat del procés i la quantitat de diners en joc justifiquen àmpliament comptar amb un expert independent.</p>

  <h2>Procés de compra d'habitatge a Madrid amb NortFinance</h2>
  <p>Treballem de manera 100% remota i presencial segons la teva preferència. No cal que siguis a Madrid per iniciar el procés. Des de la primera consulta gratuïta fins a la signatura a la notaria, t'acompanyem en cada pas: anàlisi de viabilitat, comparativa bancària, negociació de condicions i gestió documental completa.</p>

  <h2>Com treballa NortFinance a Madrid</h2>
  <p>El nostre procés és clar i sense sorpreses:</p>
  <ol>
    <li><strong>Primera trucada gratuïta</strong> — Entenem la teva situació i objectius. Sense compromís.</li>
    <li><strong>Anàlisi de viabilitat</strong> — Avaluem el teu perfil i les opcions reals disponibles per a tu.</li>
    <li><strong>Comparativa bancària</strong> — Consultem més de 20 entitats i presentem les millors ofertes.</li>
    <li><strong>Acompanyament fins a la signatura</strong> — Gestionem la documentació i et guiem fins al notari.</li>
  </ol>
`,

      /* ── Article prose: Broker Valencia ──────── */
      'art.valencia.prose': `
  <h2>El mercat hipotecari a València: el que has de saber</h2>
  <p>València ofereix un mercat hipotecari amb les seves pròpies particularitats: major presència de promotores d'obra nova, forta demanda de segona residència a la costa i un perfil de comprador molt divers. Navegar aquest entorn sense assessorament especialitzat pot portar-te a contractar condicions pitjors de les disponibles al mercat.</p>

  <h2>Què fa NortFinance pels compradors a València?</h2>
  <p>Analitzem la teva situació financera en profunditat, identifiquem les entitats que millor s'adapten al teu perfil i negociem els termes de la teva hipoteca. A València treballem tant amb bancs nacionals presents a tot Espanya com amb caixes i entitats regionals amb condicions especials per a compradors a la Comunitat Valenciana.</p>

  <h2>Obra nova i segona residència a València</h2>
  <p>Dos dels productes més demandats a València són la hipoteca per a obra nova i la hipoteca per a segona residència. Tots dos tenen particularitats que convé gestionar bé: les hipoteques d'obra nova requereixen coordinació amb les fases de la construcció, i les de segona residència solen finançar un percentatge menor del valor de l'immoble. T'ho expliquem tot des del principi.</p>

  <h2>Com treballa NortFinance a València</h2>
  <p>El nostre procés és clar i sense sorpreses:</p>
  <ol>
    <li><strong>Primera trucada gratuïta</strong> — Entenem la teva situació i objectius. Sense compromís.</li>
    <li><strong>Anàlisi de viabilitat</strong> — Avaluem el teu perfil i les opcions reals disponibles per a tu.</li>
    <li><strong>Comparativa bancària</strong> — Consultem més de 20 entitats i presentem les millors ofertes.</li>
    <li><strong>Acompanyament fins a la signatura</strong> — Gestionem la documentació i et guiem fins al notari.</li>
  </ol>
`,

      /* ── Article prose: Broker Sevilla ───────── */
      'art.sevilla.prose': `
  <h2>Per què un broker hipotecari a Sevilla marca la diferència</h2>
  <p>A Sevilla, com a la resta d'Espanya, els bancs presenten les seves hipoteques de manera atractiva en aparença però amb matisos que convé entendre bé: vinculacions, assegurances obligatòries, comissions i clàusules que afecten el cost real del préstec. NortFinance analitza el cost total de cada oferta i negocia per eliminar les condicions que no et beneficien.</p>

  <h2>Compradors especials: autònoms i funcionaris a Sevilla</h2>
  <p>Sevilla té una alta proporció de funcionaris i autònoms. Tots dos col·lectius tenen accés a condicions hipotecàries específiques que no sempre coneixen. Els funcionaris poden accedir a hipoteques amb diferencials més baixos i major finançament. Els autònoms necessiten una anàlisi més acurada de la seva capacitat d'endeutament. NortFinance coneix aquestes particularitats.</p>

  <h2>Gestió remota i presencial des de Barcelona</h2>
  <p>Encara que NortFinance té la seva seu a Barcelona, operem a tot el territori nacional. El procés és principalment digital: reunions per videotrucada, signatura digital de documents i coordinació amb notaries i registres. No necessites desplaçar-te per obtenir el millor assessorament hipotecari a Sevilla.</p>

  <h2>Com treballa NortFinance a Sevilla</h2>
  <p>El nostre procés és clar i sense sorpreses:</p>
  <ol>
    <li><strong>Primera trucada gratuïta</strong> — Entenem la teva situació i objectius. Sense compromís.</li>
    <li><strong>Anàlisi de viabilitat</strong> — Avaluem el teu perfil i les opcions reals disponibles per a tu.</li>
    <li><strong>Comparativa bancària</strong> — Consultem més de 20 entitats i presentem les millors ofertes.</li>
    <li><strong>Acompanyament fins a la signatura</strong> — Gestionem la documentació i et guiem fins al notari.</li>
  </ol>
`,

      /* ── Article prose: Broker Màlaga ────────── */
      'art.malaga.prose': `
  <h2>El mercat hipotecari a Màlaga i la Costa del Sol</h2>
  <p>Els preus a Màlaga capital i la Costa del Sol s'han incrementat notablement en els darrers anys, impulsats per la demanda internacional i l'auge del teletreball. Això fa que el finançament sigui més important que mai: petites diferències en el tipus d'interès o en les condicions del préstec es tradueixen en milers d'euros a l'any.</p>

  <h2>Hipoteques per a estrangers a Màlaga</h2>
  <p>Màlaga rep una proporció elevada de compradors internacionals: britànics, alemanys, escandinaus i llatinoamericans, entre d'altres. Les hipoteques per a no residents tenen condicions diferents —major entrada requerida, documentació addicional, possibles restriccions de finançament— i no tots els bancs les ofereixen en les mateixes condicions. NortFinance té experiència específica en aquest segment.</p>

  <h2>Inversió immobiliària a Màlaga amb finançament optimitzat</h2>
  <p>Molts compradors a Màlaga adquireixen immobles com a inversió, amb vistes a lloguer turístic o plusvàlua a llarg termini. En aquests casos, l'estructura del finançament és encara més rellevant: tipus d'interès, termini, amortització anticipada i condicions de vinculació afecten directament la rendibilitat de la inversió. T'ajudem a prendre la decisió financera correcta.</p>

  <h2>Com treballa NortFinance a Màlaga</h2>
  <p>El nostre procés és clar i sense sorpreses:</p>
  <ol>
    <li><strong>Primera trucada gratuïta</strong> — Entenem la teva situació i objectius. Sense compromís.</li>
    <li><strong>Anàlisi de viabilitat</strong> — Avaluem el teu perfil i les opcions reals disponibles per a tu.</li>
    <li><strong>Comparativa bancària</strong> — Consultem més de 20 entitats i presentem les millors ofertes.</li>
    <li><strong>Acompanyament fins a la signatura</strong> — Gestionem la documentació i et guiem fins al notari.</li>
  </ol>
`,

      /* ── Article prose: Hipoteca Estrangers ──── */
      'art.ext.prose': `
  <h2>Poden els estrangers demanar hipoteca a Espanya?</h2>
  <p>Sí. Els ciutadans estrangers —tant residents com no residents— poden sol·licitar hipoteques en bancs espanyols. La clau és disposar de NIE (Número d'Identificació d'Estranger), demostrar ingressos estables i complir amb els ràtios d'endeutament que exigeix cada entitat. Els no residents habitualment necessiten aportar una entrada major: entre el 30% i el 40% del valor de l'immoble, enfront del 20% habitual per a residents.</p>

  <h2>Documentació necessària per a hipoteca si ets estranger</h2>
  <p>La documentació varia segons el teu país d'origen i situació fiscal, però en general necessitaràs: NIE en vigor, passaport, 3 últimes nòmines o declaració de renda del país d'origen, extractes bancaris dels darrers 6 mesos, informe de vida laboral o equivalent, i documentació de l'immoble a comprar. Per a autònoms estrangers, es requereix documentació addicional de l'activitat.</p>

  <h2>Els millors bancs per a hipoteques de no residents a Espanya</h2>
  <p>No tots els bancs espanyols tenen la mateixa política amb clients no residents. Alguns apliquen condicions molt restrictives o directament no operen amb aquest perfil. NortFinance coneix quines entitats ofereixen els millors productes per a estrangers a Espanya, i negocia en el teu nom per aconseguir les condicions més competitives del mercat.</p>

  <h2>Com treballa NortFinance a Espanya</h2>
  <p>El nostre procés és clar i sense sorpreses:</p>
  <ol>
    <li><strong>Primera trucada gratuïta</strong> — Entenem la teva situació i objectius. Sense compromís.</li>
    <li><strong>Anàlisi de viabilitat</strong> — Avaluem el teu perfil i les opcions reals disponibles per a tu.</li>
    <li><strong>Comparativa bancària</strong> — Consultem més de 20 entitats i presentem les millors ofertes.</li>
    <li><strong>Acompanyament fins a la signatura</strong> — Gestionem la documentació i et guiem fins al notari.</li>
  </ol>
`,
    },

    /* ════════════════════════════════════════
       ENGLISH
    ════════════════════════════════════════ */
    en: {
      'nav.mortgages': 'Mortgages',
      'nav.services': 'Services',
      'nav.resources': 'Resources',
      'nav.contact': 'Contact',
      'nav.cases': 'Success Cases',
      'nav.cta': 'My Free Study',
      'nav.aria': 'Open menu',

      'hero.badge': 'Mortgage Advisory Firm',
      'hero.title': 'Mortgage, Investment<br />&amp; <span class="text-gold">Wealth Strategy</span>',
      'hero.subtitle': 'We manage your mortgage, optimise your investments and protect your wealth.<br class="desktop-break" />A family firm with real criteria and measurable results.',
      'hero.cta2': 'How we work →',
      'hero.trust1': 'No initial commitment',
      'hero.trust2': '100% Transparent',
      'hero.trust3': 'Response within 24h',

      'stats.mortgages': 'Managed mortgages',
      'stats.banks': 'Banking entities',
      'stats.transparent': 'Transparent',
      'stats.response': 'Guaranteed response',

      'why.tag': 'Our difference',
      'why.title': 'Why choose <span class="text-gold">NortFinance?</span>',
      'why.c1.title': 'Real closeness,<br /><span class="text-gold">not automated</span>',
      'why.c1.text': 'We work with you directly, person to person. No forms that no one reads, no bots that respond.',
      'why.c2.title': 'Strategy adapted<br /><span class="text-gold">to your situation</span>',
      'why.c2.text': 'Every client is unique. We analyse your profile in depth to find the solution aligned with your reality.',
      'why.c3.title': 'Transparency<br /><span class="text-gold">from the very start</span>',
      'why.c3.text': 'We tell you the truth about viability, options and real conditions from the start.',
      'why.c4.title': 'Support<br /><span class="text-gold">throughout the process</span>',
      'why.c4.text': 'We are by your side from the initial analysis to the notarial signing.',

      'firstcall.tag': 'First contact',
      'firstcall.title': "What you'll get on your<br /><span class=\"text-gold\">first call</span>",
      'firstcall.desc': 'An initial contact to understand your situation, resolve your doubts and define the best mortgage strategy for you.',
      'firstcall.tag1': '✦ Strategic advisory',
      'firstcall.tag2': '✦ Personalised process',
      'firstcall.tag3': '✦ No initial commitment',
      'firstcall.c1.title': 'Personalised Analysis',
      'firstcall.c1.text': 'We review your complete financial situation, income and goals to outline the most suitable strategy for your profile.',
      'firstcall.c2.title': 'Realistic Options',
      'firstcall.c2.text': 'We guide you on real viability, financing ranges and conditions according to your profile. No false promises or inflated expectations.',
      'firstcall.c3.title': 'Resolving Doubts',
      'firstcall.c3.text': "We explain the complete process clearly and in simple language. You'll leave with a clear idea of your next step.",

      'proceso.tag': 'Step by step',
      'proceso.title': 'This will be your <span class="text-gold">process</span>',
      'proceso.s1.title': 'First contact',
      'proceso.s1.text': 'We understand your situation and goals. No commitment of any kind.',
      'proceso.s2.title': 'Strategic analysis',
      'proceso.s2.text': 'We study your viability and define the real options available for your profile.',
      'proceso.s3.title': 'Search and negotiation',
      'proceso.s3.text': 'Based on your financial profile and needs, we go to the banks that we already know can be a fit.',
      'proceso.s4.title': 'Final support',
      'proceso.s4.text': 'We guide you to the final signing and the definitive resolution of the operation.',

      'testimonios.tag': 'Real clients',
      'testimonios.title': 'What our <span class="text-gold">clients</span> say',
      'testimonios.q1': '"From the very first day we felt completely welcomed. They explained every step patiently and were always available for any question. In the end we got conditions far better than we expected. We recommend them without hesitation."',
      'testimonios.q1.role': 'First home purchase · Barcelona',
      'testimonios.q2': '"I had been trying to get mortgage approval from banks for a while with no luck. NortFinance analysed my profile and within a few weeks I had several offers on the table. The result was incredible, I could not believe it."',
      'testimonios.q2.role': 'Self-employed · Madrid',
      'testimonios.q3': '"Throughout the whole process we felt we truly had someone on our side. Not only did they handle everything efficiently, they advised us with a warmth and professionalism we did not expect. Highly recommended."',
      'testimonios.q3.role': 'Second residence · Valencia',

      'faq.tag': 'Frequently asked questions',
      'faq.title': 'Everything you<br />need to <span class="text-gold">know</span>',
      'faq.desc': 'Have questions? Here we answer the most common questions from our clients before they start.',
      'faq.cta': 'Ask a question →',
      'faq.q1.q': 'What is the work process?',
      'faq.q1.a': 'We start with a first no-commitment call to understand your situation. We then do a strategic analysis of your profile, consult more than 20 banking entities to find the best conditions, and accompany you throughout the entire process until the notarial signing.',
      'faq.q2.q': 'When is the first payment made?',
      'faq.q2.a': 'A service acceptance contract is signed, where the payments to be made are clearly specified.',
      'faq.q3.q': 'What documentation will I need?',
      'faq.q3.a': 'The basic documentation includes: ID/NIE, last 3 payslips, last tax return, bank statements, debt receipts (if any), information about the property to be purchased (land registry note), preliminary contract (if it exists) and employment history. We will guide you every step of the way to make the process as straightforward as possible.',
      'faq.q4.q': 'Do you work each case in a personalised way?',
      'faq.q4.a': 'Absolutely. Every client has a unique financial situation, goals and circumstances. We never use generic templates; we analyse your case in depth to offer you the most suitable mortgage strategy for your specific reality.',
      'faq.q5.q': 'What sets NortFinance apart from a bank?',
      'faq.q5.a': 'A bank can only offer you its own products. NortFinance is an advisory firm that works exclusively for you: we consult more than 20 banks and negotiate on your behalf to obtain the best market conditions. Your interest is always our only priority.',
      'faq.q6.q': 'Can I get in touch during the process?',
      'faq.q6.a': 'Of course. We are available at all times to answer your questions, update the status of your operation and support you at every decision. We guarantee a response within 24 business hours.',

      'cta.tag': 'Start today',
      'cta.title': 'Make financial decisions<br />with total <span class="text-gold">clarity</span>',
      'cta.text': 'We accompany you throughout the process with a close, transparent approach<br class="desktop-break" />completely adapted to your situation.',
      'cta.btn2': 'Write to us',

      'hipo.tag': 'Mortgage advisory',
      'hipo.title': 'Your needs,<br />our <span class="text-gold">strategy.</span>',
      'hipo.subtitle': 'Every financial profile is unique. We design the mortgage strategy that fits your real situation, not a template.',
      'hipo.cta1': 'My Free Study',
      'hipo.cta2': 'See cases',
      'hipo.stat1': 'managed operations',
      'hipo.stat2': 'banking entities',
      'hipo.stat3': 'average saving per client',

      'pq.tag': 'Every situation has its strategy',
      'pq.title': 'We work with <span class="text-gold">all profiles</span>',
      'pq.c1.tag': 'Most common',
      'pq.c1.title': 'First home',
      'pq.c1.desc': 'The most important step in your life deserves the best strategy. We analyse your real capacity, find the optimal financing and guide you from the first "I want to buy" to the notarial signing. No surprises, total clarity.',
      'pq.c2.tag': 'Special profile',
      'pq.c2.title': 'Self-employed',
      'pq.c2.desc': "We know how to present your profile so banks see your real creditworthiness beyond the payslip. Proven experience with self-employed professionals from all sectors.",
      'pq.c3.tag': 'Better conditions',
      'pq.c3.title': 'Mortgage switch',
      'pq.c3.desc': 'If you have a mortgage and think you can get better conditions, you are right. We analyse whether a subrogation or novation suits you and manage the entire process.',
      'pq.c4.tag': 'Wealth',
      'pq.c4.title': 'Second residence',
      'pq.c4.desc': 'Financing a second home has different conditions to a primary residence. We know the particularities of each entity and find the most efficient proposal for your portfolio.',
      'pq.c5.tag': 'Return',
      'pq.c5.title': 'Investment',
      'pq.c5.desc': 'For buyers with a wealth vision. We structure the financing to maximise return and optimise leverage in every operation.',
      'pq.c6.tag': 'Up to 100%',
      'pq.c6.title': 'Young buyers',
      'pq.c6.desc': 'Specialised support for first-time buyers. We explore extended financing routes and available subsidies for young profiles with high potential.',
      'pq.c7.tag': 'Special profile',
      'pq.c7.title': 'Non-residents',
      'pq.c7.desc': 'We are aware of the complexity that getting a mortgage in Spain involves for non-residents. That is why we know exactly which banks to approach for you.',
      'pq.c8.tag': 'Own project',
      'pq.c8.title': 'Self-build',
      'pq.c8.desc': 'Specialised financing for self-build projects. We analyse the financial viability of the project, accompany you throughout the process and coordinate documentation, construction certifications and bank approval.',

      'qh.tag': 'Our method',
      'qh.title': 'What we <span class="text-gold">do</span><br />for you.',
      'qh.s1.title': 'We analyse your financial profile',
      'qh.s1.desc': 'We study in depth your economic situation, income, savings and long-term goals. Only with that complete picture do we define which mortgage makes real sense for you.',
      'qh.s2.title': 'We compare options',
      'qh.s2.desc': 'We consult more than 20 banking entities — including alternatives not found in public comparators — to build a real map of the best available conditions.',
      'qh.s3.title': 'We negotiate conditions',
      'qh.s3.desc': 'We present your profile in the strongest, most favourable way. We negotiate with you as the protagonist: interest rate, terms, bundled products and fees are all on the table.',
      'qh.s4.title': 'We support you until signing',
      'qh.s4.desc': 'We do not disappear once approval is obtained. We coordinate the valuation, review the final documentation and are by your side until the day of signing. Total closure of the operation.',

      'dif.tag': 'Our pillars',
      'dif.title': 'Why clients<br />choose <span class="text-gold">us.</span>',
      'dif.desc': 'Five pillars that define how we work and why our clients recommend us. These are not marketing values — they are commitments we fulfil operation after operation.',
      'dif.p1.title': 'Real closeness',
      'dif.p1.desc': 'We work one-to-one. A real person who knows your case, answers your calls and understands what you need. No automated processes, no generic responses.',
      'dif.p2.title': 'You are our client.',
      'dif.p2.desc': 'A bank works for its institution, we work for you.',
      'dif.p3.title': 'Personalised strategy',
      'dif.p3.desc': 'Every profile is different. We design the mortgage strategy that fits your specific reality, not a standard template.',
      'dif.p4.title': 'Total transparency',
      'dif.p4.desc': 'We tell you the truth from the very first moment: real viability, exact conditions and costs without hidden clauses. We never oversell or create false expectations.',
      'dif.p5.title': 'Proven experience',
      'dif.p5.desc': 'More than 200 operations managed successfully across very different profiles. We know what works and what does not, and that makes all the difference to the final result.',

      'hipo.cta.tag': 'Start now',
      'hipo.cta.title': "Ready to get<br />the best <span class=\"text-gold\">mortgage?</span>",
      'hipo.cta.text': "Tell us your situation and we'll help you find the mortgage that truly fits your profile.",

      'footer.desc': 'Premium financial advisory firm and mortgage solutions. Your mortgage, your investment and your wealth, managed with real criteria.',
      'footer.nav.heading': 'Navigation',
      'footer.services.heading': 'Services',
      'footer.contact.heading': 'Contact',
      'footer.nav.home': 'Home',
      'footer.nav.mortgages': 'Mortgages',
      'footer.nav.services': 'Services',
      'footer.nav.resources': 'Resources',
      'footer.nav.contact': 'Contact',
      'footer.nav.cases': 'Success Cases',
      'footer.nav.partners': 'Partners',
      'footer.s1': 'First Home Mortgages',
      'footer.s2': 'Real Estate Brokerage',
      'footer.s3': 'Gold Investment',
      'footer.s4': 'Private Investors Club',
      'footer.s5': 'Insurance Broker',
      'footer.sim': 'Mortgage simulator',
      'footer.estudio': 'Free study',
      'footer.hours': 'Mon–Fri · 9:00 – 19:00',
      'footer.location': 'Spain',
      'footer.cta': 'My Free Study',
      'footer.copy': '© 2026 NortFinance. All rights reserved.',
      'footer.privacy': 'Privacy policy',
      'footer.cookies': 'Cookies',
      'footer.legal': 'Legal notice',
      'footer.terms': 'General conditions',

      /* ── Collaborators section (index) ──────── */
      'collab.tag': 'Our collaborators',
      'collab.title': 'Companies that trust <span class="text-gold">us</span>',
      'collab.desc': 'We work hand in hand with real estate and construction companies to offer you a complete service — from financing to the keys.',
      'collab.btn': 'View collaborators →',

      /* ── Servicios page ─────────────────────── */
      'srv.hero.badge': 'Services · NortFinance',
      'srv.hero.title': 'Financial and<br /><span class="text-gold">Wealth</span><br />Premium Solutions.',
      'srv.hero.desc': 'We offer comprehensive, close and strategic advisory. We take care of the entire process to protect and grow your wealth.',
      'srv.arch.tag': 'Services architecture',
      'srv.arch.title': 'What we do <span class="text-gold">for you</span>',
      'srv.c1.tag': 'Financing',
      'srv.c1.title': 'Mortgage Types',
      'srv.c1.desc': 'We will offer you the mortgage that best fits your needs based on your age, income, financing requirements and maximum repayment you can handle. Financing from 100% to whatever you need.',
      'srv.c1.l1': 'Subrogations',
      'srv.c1.l2': 'Novations',
      'srv.c1.l3': 'Debt consolidation',
      'srv.c2.tag': 'Real Estate',
      'srv.c2.title': 'Real Estate Brokerage',
      'srv.c2.desc': 'I accompany you through the entire property buying or selling process, offering a comprehensive and personal service.',
      'srv.c2.l1': 'Property sales',
      'srv.c2.l2': 'Opportunity search',
      'srv.c2.l3': 'Property valuation',
      'srv.c2.l4': 'Marketing strategy',
      'srv.c2.l5': 'Document coordination',
      'srv.c3.tag': 'Investment',
      'srv.c3.title': 'Investment Advisory (Unit Linked)',
      'srv.c3.desc': 'I help you build a wealth strategy adapted to your goals and risk profile through investment solutions linked to life savings insurance.',
      'srv.c3.l1': 'Wealth planning',
      'srv.c3.l2': 'Tax optimisation',
      'srv.c3.l3': 'Long-term investment',
      'srv.c3.l4': 'Financial diversification',
      'srv.c4.tag': 'Safe haven asset',
      'srv.c4.title': 'Gold Investment',
      'srv.c4.desc': 'Advisory on physical gold investment as a safe haven asset and wealth diversification.',
      'srv.c4.l1': 'Investment gold',
      'srv.c4.l2': 'Certified bars',
      'srv.c4.l3': 'Wealth preservation',
      'srv.c4.l4': 'Safe purchase and storage',
      'srv.c5.tag': 'Protection',
      'srv.c5.title': 'Insurance Broker',
      'srv.c5.desc': 'As insurance agents, we seek solutions tailored to each client and situation.',
      'srv.c5.l1': 'Life insurance',
      'srv.c5.l2': 'Home insurance',
      'srv.c5.l3': 'Mortgage and non-payment protection',
      'srv.c6.tag': 'High impact',
      'srv.c6.title': 'Real Estate Investment',
      'srv.c6.desc': 'I analyse real estate opportunities to identify operations with return and appreciation potential. I help investors and buyers make decisions based on real financial criteria, studying the viability and potential of each asset.',
      'srv.c6.l1': 'Profitability analysis',
      'srv.c6.l2': 'Property appreciation study',
      'srv.c6.l3': 'Risk and viability assessment',
      'srv.c6.l4': 'Wealth investment strategies',
      'srv.c6.l5': 'Buy-to-let or resale investments',
      'srv.c6.quote': 'In addition, I am part of a network and private club of real estate investors specialised in buying, refurbishing and selling properties with approximate return targets of <strong>15% to 25%</strong>, depending on the operation and market conditions.',
      'srv.cta.tag': 'Shall we talk?',
      'srv.cta.title': "Let's design together your next<br /><span class=\"text-gold\">financial strategy</span>",
      'srv.cta.desc': 'The first step is free. Tell us your situation and we will suggest the best path.',
      'srv.cta.btn2': 'Write to us',

      /* ── Recursos page ──────────────────────── */
      'rec.hero.badge': 'Resources · NortFinance',
      'rec.hero.title': 'Financial Knowledge to<br /><span class="text-gold">Make Clear Decisions</span>',
      'rec.hero.desc': 'We add value before selling. Explore our guides, practical tips and interactive tools designed to give you total clarity on your mortgage strategy.',
      'rec.sim.eyebrow': 'Interactive Tool',
      'rec.sim.title': 'Simulate your Mortgage<br /><span class="text-gold">in Real Time</span>',
      'rec.sim.heading': 'Your operation parameters',
      'rec.sim.g1': 'The Property',
      'rec.sim.g2': 'Your Financing',
      'rec.sim.g3': 'Interest Rate',
      'rec.sim.precio': 'Property price',
      'rec.sim.ccaa': 'Autonomous Community',
      'rec.sim.estado': 'Property condition',
      'rec.sim.estado.used': 'Second hand',
      'rec.sim.estado.new': 'New build',
      'rec.sim.ahorros': 'Savings contributed',
      'rec.sim.plazo': 'Mortgage term',
      'rec.sim.modalidad': 'Mortgage type',
      'rec.sim.mod.fixed': 'Fixed',
      'rec.sim.mod.var': 'Variable',
      'rec.sim.tin': 'Interest rate',
      'rec.sim.res.eyebrow': 'Estimated Monthly Payment',
      'rec.sim.m1': 'Required financing',
      'rec.sim.m2': '% Financing',
      'rec.sim.m3': 'Applied TIN',
      'rec.sim.m4': 'Total interest',
      'rec.sim.bd1.title': 'Property cost',
      'rec.sim.bd1.r1': 'Property price',
      'rec.sim.bd1.r3': 'Notary, registry and management (~1%)',
      'rec.sim.bd1.r4': 'Property valuation (~€400)',
      'rec.sim.bd1.total': 'Total property cost',
      'rec.sim.bd2.title': 'Total financing',
      'rec.sim.bd2.r1': 'Savings contributed',
      'rec.sim.bd2.r2': 'Requested mortgage amount',
      'rec.sim.bd2.r3': 'Mortgage interest',
      'rec.sim.bd2.total': 'Total cost with mortgage',
      'rec.sim.cta': 'Validate Free Study with an Adviser',
      'rec.guides.eyebrow': 'Knowledge Base',
      'rec.guides.title': 'Mortgage Guides<br /><span class="text-gold">and Practical Tips</span>',
      'rec.g1.tag': 'Complete Guide',
      'rec.g1.title': 'Premium Mortgage Guide',
      'rec.g1.desc': 'Simple explanations about financing and how to prepare for the bank. Everything you need to know before starting the process.',
      'rec.g2.tag': 'Practical Tips',
      'rec.g2.title': 'Tips for Buyers',
      'rec.g2.desc': 'The common mistakes when choosing your first home and how to avoid them. Decisions that make a difference in the long run.',
      'rec.g3.tag': 'Self-employed',
      'rec.g3.title': 'Resources for the Self-employed',
      'rec.g3.desc': 'How to present your financial profile to ensure approval. Specific strategies for self-employed professionals.',
      'rec.g4.tag': 'Documentation',
      'rec.g4.title': 'Required Documentation',
      'rec.g4.desc': 'The definitive checklist with the documents you will need for the study. No surprises or delays in the approval process.',
      'rec.g5.tag': 'Comparisons',
      'rec.g5.title': 'Direct Comparisons',
      'rec.g5.desc': 'Fixed vs. Variable vs. Mixed mortgage: Which suits the current situation? Objective analysis to choose with real criteria.',
      'rec.g6.tag': 'FAQ',
      'rec.g6.title': 'Frequently Asked Questions',
      'rec.g6.desc': 'Answers to the key questions before taking the next step. Total clarity on our process and working methodology.',
      'rec.g.footer': 'Coming soon',
      'rec.cta.eyebrow': 'Take the Next Step',
      'rec.cta.title': 'Your financial strategy<br />deserves <span class="text-gold">absolute clarity</span>',
      'rec.cta.desc': "Let's talk about your case and use real criteria to find your viability.",
      'rec.cta.btn2': 'Write to us',

      /* ── Article pages — structural UI ────────── */
      /* guia-hipotecaria-completa */
      'art.guia.tag': 'Mortgage Guide · 2026',
      'art.guia.title': 'Complete 2026 Mortgage Guide:<br />Everything You Need to Know',
      'art.guia.meta': 'NortFinance · Financial Advisory · May 2026 · 12 min read',
      'art.guia.breadcrumb': 'Complete Mortgage Guide',
      'art.guia.cta.h2': 'Ready to Start Your Mortgage Process?',
      'art.guia.cta.p': 'We provide a personalised free study with no commitment. We analyse your profile and tell you exactly what mortgage you can get.',
      'art.guia.cta.btn': 'Request Free Study →',

      /* hipoteca-primera-vivienda */
      'art.pv.tag': 'First Home · 2026',
      'art.pv.title': 'How to Buy Your First Home<br />in Spain: Step-by-Step Guide',
      'art.pv.meta': 'NortFinance · Financial Advisory · May 2026 · 11 min read',
      'art.pv.breadcrumb': 'First Home',
      'art.pv.cta.h2': 'Ready to Buy Your First Home?',
      'art.pv.cta.p': 'We analyse your situation and advise you on real viability, savings needed and the best market options.',
      'art.pv.cta.btn': 'Request Free Study →',

      /* hipoteca-autonomo */
      'art.auto.tag': 'Self-employed Mortgage · 2026',
      'art.auto.title': 'How to Get a Mortgage<br />as Self-employed in Spain',
      'art.auto.meta': 'NortFinance · Financial Advisory · May 2026 · 10 min read',
      'art.auto.breadcrumb': 'Mortgage for Self-employed',
      'art.auto.cta.h2': 'Self-employed and Want a Mortgage?',
      'art.auto.cta.p': 'We know exactly how to present your profile so banks say yes. Request your free study.',
      'art.auto.cta.btn': 'Request Free Study →',

      /* documentacion-necesaria-hipoteca */
      'art.doc.tag': 'Documentation · 2026',
      'art.doc.title': 'Required Documentation<br />for a Mortgage in 2026',
      'art.doc.meta': 'NortFinance · Financial Advisory · May 2026 · 9 min read',
      'art.doc.breadcrumb': 'Mortgage Documentation',
      'art.doc.cta.h2': 'Got Everything Ready for the Bank?',
      'art.doc.cta.p': 'We help you prepare and organise all the documentation to maximise your chances of approval.',
      'art.doc.cta.btn': 'Request Free Study →',

      /* hipoteca-fija-variable-mixta */
      'art.tipos.tag': 'Mortgage Types · 2026',
      'art.tipos.title': 'Fixed, Variable or Mixed Mortgage:<br />Which to Choose in 2026?',
      'art.tipos.meta': 'NortFinance · Financial Advisory · May 2026 · 10 min read',
      'art.tipos.breadcrumb': 'Mortgage Types',
      'art.tipos.cta.h2': "Not Sure Which Mortgage to Choose?",
      'art.tipos.cta.p': 'We help you choose the mortgage type that best fits your profile and financial goals.',
      'art.tipos.cta.btn': 'Request Free Study →',

      /* preguntas-frecuentes-hipoteca */
      'art.faq.tag': 'Mortgage FAQ · 2026',
      'art.faq.title': 'Frequently Asked Questions about Mortgages:<br />Everything Answered',
      'art.faq.meta': 'NortFinance · Financial Advisory · May 2026 · 14 min read',
      'art.faq.breadcrumb': 'Mortgage FAQ',
      'art.faq.cta.h2': 'Have More Questions about Your Mortgage?',
      'art.faq.cta.p': 'Tell us your case and we will answer with real criteria and concrete solutions.',
      'art.faq.cta.btn': 'Request Free Study →',

      /* euribor-que-es */
      'art.euribor.tag': 'Euribor · 2026',
      'art.euribor.title': 'Euribor 2026: What It Is, How It Works<br />and How It Affects Your Mortgage',
      'art.euribor.meta': 'NortFinance · Financial Advisory · May 2026 · 10 min read',
      'art.euribor.breadcrumb': 'Euribor 2026',
      'art.euribor.cta.h2': 'Unsure Between Fixed or Variable Mortgage?',
      'art.euribor.cta.p': 'We analyse the current Euribor and your profile to recommend the best mortgage option.',
      'art.euribor.cta.btn': 'Request Free Study →',

      /* hipoteca-no-residente */
      'art.nores.tag': 'Non-residents · 2026',
      'art.nores.title': 'Mortgage for Non-residents in Spain:<br />Complete Guide 2026',
      'art.nores.meta': 'NortFinance · Financial Advisory · May 2026 · 10 min read',
      'art.nores.breadcrumb': 'Non-resident Mortgage',
      'art.nores.cta.h2': 'Looking for a Mortgage in Spain as a Non-resident?',
      'art.nores.cta.p': 'We know the banks that work with non-residents and how to present your application to get approval.',
      'art.nores.cta.btn': 'Request Free Study →',

      /* mejorar-perfil-hipotecario */
      'art.perfil.tag': 'Mortgage Profile · 2026',
      'art.perfil.title': 'How to Improve Your Mortgage Profile<br />so the Bank Says Yes',
      'art.perfil.meta': 'NortFinance · Financial Advisory · May 2026 · 11 min read',
      'art.perfil.breadcrumb': 'Improve Mortgage Profile',
      'art.perfil.cta.h2': 'Want to Improve Your Profile Before Applying?',
      'art.perfil.cta.p': 'We analyse your profile and give you a concrete action plan to maximise your chances.',
      'art.perfil.cta.btn': 'Request Free Study →',

      /* hipoteca-barcelona */
      'art.bcn.tag': 'Barcelona · 2026',
      'art.bcn.title': 'Mortgage in Barcelona 2026: Guide for<br />Buyers and the Role of the Broker',
      'art.bcn.meta': 'NortFinance · Financial Advisory · May 2026 · 11 min read',
      'art.bcn.breadcrumb': 'Barcelona Mortgage',
      'art.bcn.cta.h2': 'Buying in Barcelona and Need a Mortgage?',
      'art.bcn.cta.p': 'We are a mortgage broker specialised in the Barcelona market. We accompany you through the entire process.',
      'art.bcn.cta.btn': 'Request Free Study →',

      /* recursos page — new guide cards */
      'rec.g7.tag': 'Euribor',
      'rec.g7.title': 'Euribor 2026: Complete Guide',
      'rec.g7.desc': 'What Euribor is, how it has evolved and how it affects your variable mortgage. Everything you need to know to make informed decisions.',
      'rec.g8.tag': 'Non-residents',
      'rec.g8.title': 'Mortgage for Non-residents',
      'rec.g8.desc': 'Complete guide for foreigners who want to buy property in Spain: requirements, maximum financing, documentation and best banks.',
      'rec.g9.tag': 'Strategy',
      'rec.g9.title': 'Improve Your Mortgage Profile',
      'rec.g9.desc': 'How to improve your credit score, reduce debts and submit the best possible application so the bank approves your mortgage.',
      'rec.g10.tag': 'Barcelona',
      'rec.g10.title': 'Mortgage in Barcelona 2026',
      'rec.g10.desc': 'Barcelona real estate market, current prices, best neighbourhoods and how a local broker can make all the difference in your process.',
      'rec.g11.tag': 'Second Home',
      'rec.g11.title': 'Second Home Mortgage',
      'rec.g11.desc': 'Maximum financing of 70–75%, fiscal differences with primary residence and how to access the best conditions in a more demanding operation.',
      'rec.g12.tag': 'How It Works',
      'rec.g12.title': 'How a Broker Works',
      'rec.g12.desc': 'What a mortgage broker does step by step, when they charge (only at signing) and why they can get you better conditions than going directly to the bank.',
      'rec.g13.tag': 'Capacity',
      'rec.g13.title': 'How Much Mortgage Can I Get?',
      'rec.g13.desc': 'How banks calculate how much they lend you: the 35% rule, 80% valuation cap and real examples based on your salary and profile.',
      'rec.g14.tag': 'Costs',
      'rec.g14.title': 'Home Purchase Costs 2026',
      'rec.g14.desc': 'ITP, notary, registry, management fees and valuation: complete guide to all costs when buying property in Spain and how much you need saved.',
      'rec.g15.tag': 'Market',
      'rec.g15.title': 'Best Mortgages of 2026',
      'rec.g15.desc': 'How to find the best mortgage in 2026: what to compare, fixed vs variable vs mixed, and how a broker gets conditions banks won\'t offer directly.',
      'rec.g16.tag': 'Madrid',
      'rec.g16.title': 'Mortgage Broker in Madrid',
      'rec.g16.desc': 'How to get the best mortgage in Madrid. Market, profiles, process and why an independent broker gets better conditions than going directly to the bank.',
      'rec.g17.tag': 'Valencia',
      'rec.g17.title': 'Mortgage Broker in Valencia',
      'rec.g17.desc': 'Expert mortgage advisory in Valencia. New build, second residence and investors. Access to over 20 banks and support until signing.',
      'rec.g18.tag': 'Seville',
      'rec.g18.title': 'Mortgage Broker in Seville',
      'rec.g18.desc': 'Your mortgage in Seville with the best conditions. Self-employed, civil servants and general buyers. Digital process, no travel required.',
      'rec.g19.tag': 'Málaga',
      'rec.g19.title': 'Mortgage Broker in Málaga',
      'rec.g19.desc': 'Mortgages in Málaga and the Costa del Sol for residents and foreigners. Specialists in non-residents and international investors.',
      'rec.g20.tag': 'Non-residents',
      'rec.g20.title': 'Mortgage for Foreigners in Spain',
      'rec.g20.desc': 'Complete guide to getting a mortgage in Spain as a foreigner or non-resident. Requirements, documentation and how to get the best conditions in 2026.',
      'rec.read': 'Read guide',

      /* ── Article: Second Home ───────────────── */
      'art.seg.tag': 'Second Home · 2026',
      'art.seg.title': 'Mortgage for a Second Home:<br />Requirements and Differences from Primary Residence',
      'art.seg.meta': 'NortFinance · Financial Advisory · May 2026 · 10 min read',
      'art.seg.breadcrumb': 'Second Home Mortgage',
      'art.seg.cta.h2': 'Thinking About Buying a Second Home?',
      'art.seg.cta.p': 'We analyse your financial capacity, guide you on achievable financing percentages and find the bank offering the best conditions for your second property.',
      'art.seg.cta.btn': 'Request Free Study →',

      /* ── Article: Mortgage Broker ───────────── */
      'art.broker.tag': 'How It Works · 2026',
      'art.broker.title': 'How a Mortgage Broker Works:<br />What They Do, How Much They Charge and Why Use One',
      'art.broker.meta': 'NortFinance · Financial Advisory · May 2026 · 9 min read',
      'art.broker.breadcrumb': 'How a Mortgage Broker Works',
      'art.broker.cta.h2': 'Want to Know What Mortgage You Can Get?',
      'art.broker.cta.p': 'Free first meeting with no commitment. We analyse your profile, guide you and, if you decide to proceed, manage your mortgage from start to finish. No mortgage, no fees.',
      'art.broker.cta.btn': 'Request Free Study →',

      /* ── Contacto page ──────────────────────── */
      'cnt.hero.badge': 'Contact · NortFinance',
      'cnt.hero.title': "Let's talk about your<br /><span class=\"text-gold\">financial situation</span>",
      'cnt.hero.desc': 'Tell us your case and we will design a mortgage strategy tailored for you. No initial costs or commitments of any kind.',
      'cnt.trust1': '100% Free Study',
      'cnt.trust2': 'No Commitments',
      'cnt.trust3': 'Response within 24h',
      'cnt.trust4': 'Family and Personal Firm',
      'cnt.form.heading': 'Tell us your case<br /><span>and we give you clarity</span>',
      'cnt.form.name': 'Full name',
      'cnt.form.tel': 'Phone',
      'cnt.form.email': 'Email address',
      'cnt.form.situation': 'Current situation',
      'cnt.form.msg': 'Message or details of your case',
      'cnt.form.submit': 'Request My Free Study',
      'cnt.form.legal': 'By submitting, you accept our <a href="privacidad.html">privacy policy</a>. Your data will not be shared with third parties.',
      'cnt.info.heading': 'Direct Contact',
      'cnt.wa.title': 'Personal<br />WhatsApp Line',
      'cnt.wa.desc': 'Write to us directly without forms. We respond person to person, with the closeness of a family firm.',
      'cnt.wa.btn': 'Write on WhatsApp Directly',
      'cnt.info.l1': 'Official email',
      'cnt.info.l2': 'Personal service hours',
      'cnt.info.l3': 'Our commitment',
      'cnt.info.v2': 'Monday to Friday<br />9:00 to 19:00',
      'cnt.info.v3': 'As a family firm, we respond directly person to person within 24 hours.',

      /* ── Contact form select & placeholders ─── */
      'cnt.select.default': 'Select your situation',
      'cnt.select.opt1': 'I want to buy my first home',
      'cnt.select.opt2': "I'm self-employed",
      'cnt.select.opt3': 'I want to switch mortgages',
      'cnt.select.opt4': 'Investment or second home',
      'cnt.select.opt5': 'Other wealth management services',
      'cnt.form.name.ph': 'Your full name',
      'cnt.form.msg.ph': 'Briefly tell us your situation: property price you are looking for, approximate income, term… any detail helps us prepare your study.',

      /* ── Footer brand description ───────────── */
      'footer.desc': 'Financial advisory firm and premium mortgage solutions. Your mortgage, your investment and your assets, managed with real expertise.',

      /* ── Partners page ──────────────────────── */
      'partners.hero.tag': 'Collaborators',
      'partners.hero.title': 'Companies that share<br />our <span class="text-gold">criteria</span>',
      'partners.hero.sub': 'NortFinance works with a selected network of professionals and companies that offer complementary services with the same level of excellence and honesty we apply to mortgage advisory.',
      'partners.grid.tag': 'Our network',
      'partners.grid.title': 'Current <span class="text-gold">partners</span>',
      'partners.card.cat': 'Construction',
      'partners.card.name': 'Construction Company',
      'partners.card.desc': 'Specialists in residential construction and renovation. Quality projects with decades of sector experience.',
      'partners.card.soon': 'Coming soon →',

      /* ── Suite Maison ── */
      'partners.sm.cat': 'Sustainable Construction',
      'partners.sm.name': 'Suite Maison',
      'partners.sm.desc': 'Specialists in sustainable and energy-efficient home construction. Turnkey projects with a fixed price, personalised design and Category A energy certification.',
      'partners.sm.link': 'Visit website →',
      'partners.net.note': '✦   Network under construction — new partners coming soon',
      'partners.cta.tag': 'Collaborate with us',
      'partners.cta.title': 'Want to become<br />a partner of <span class="text-gold">NortFinance?</span>',
      'partners.cta.desc1': 'If your company offers services complementary to mortgage or wealth advisory, and shares our philosophy of honest, client-focused work, we would love to get to know you.',
      'partners.cta.desc2': 'We work with estate agents, developers, builders, administration firms, insurance brokers and any professional who wants to offer more value to their clients.',
      'partners.form.nombre': 'Name',
      'partners.form.nombre.ph': 'Your name',
      'partners.form.empresa': 'Company',
      'partners.form.empresa.ph': 'Your company name',
      'partners.form.email': 'Email',
      'partners.form.email.ph': 'you@company.com',
      'partners.form.web': 'Website',
      'partners.form.web.ph': 'https://yourcompany.com',
      'partners.form.tel': 'Phone',
      'partners.form.tel.ph': '+34 600 000 000',
      'partners.form.msg': 'Tell us about your company',
      'partners.form.msg.ph': 'What do you do? Why do you think we would be a good match?',
      'partners.form.privacy': 'I have read and accept the <a href="privacidad.html">Privacy Policy</a> of NortFinance.',
      'partners.form.submit': 'Send request →',
      'partners.footer.cta': 'Become a partner →',

      /* ── Casos de éxito page ─────────────────── */
      'ce.hero.badge': 'Real results · Real clients',
      'ce.hero.title': "Don't just take our word for it.<br><em>We'll show you.</em>",
      'ce.hero.sub': 'Every case documented here is a real client who came with a specific situation — and left with the best conditions the market could offer.',
      'ce.hero.t1': 'Anonymised real data',
      'ce.hero.t2': 'Verifiable savings',
      'ce.hero.t3': 'Transparent process',
      'ce.hero.t4': '+20 banks compared',
      'ce.stats.l1': 'Mortgages handled',
      'ce.stats.l2': 'Total saved',
      'ce.stats.l3': 'Approval rate',
      'ce.stats.l4': 'Guaranteed attention',
      'ce.cases.tag': 'Documented cases',
      'ce.cases.title': 'What we achieve for<br>our clients',
      'ce.cases.sub': 'Three different situations, one consistent result: the best possible conditions.',
      'ce.cta.title': 'Want to be the next<br><em>success case</em>?',
      'ce.cta.sub': 'The study is free, no commitment and no small print. In 24–48h we tell you exactly what we can achieve for your profile.',
      'ce.cta.btn1': 'My Free Study',
      'ce.cta.btn2': 'Simulate my mortgage →',
      /* ── WhatsApp widget ───────────────────── */
      'wa.label': 'Write to us',
      'wa.sub': 'Immediate response',

      /* ── Recursos: read article CTA ────────── */
      'art.read': 'Read article →',
      'art.also': 'You may also like',
      'art.more': 'More resources',

      /* ── Article: How Much Can I Borrow ─────── */
      'art.cuanto.tag': 'Borrowing Capacity · 2026',
      'art.cuanto.title': 'How Much Can I Borrow?<br />Calculation and Requirements 2026',
      'art.cuanto.meta': 'NortFinance · Financial Advisory · May 2026 · 11 min read',
      'art.cuanto.breadcrumb': 'How Much Can I Borrow?',
      'art.cuanto.cta.h2': 'Want to Know How Much You Can Borrow?',
      'art.cuanto.cta.p': 'We analyse your profile and tell you exactly what financing you can achieve.',
      'art.cuanto.cta.btn': 'Request Free Study →',

      /* ── Article: Buying Costs ───────────────── */
      'art.gastos.tag': 'Costs and Taxation · 2026',
      'art.gastos.title': 'Costs of Buying a Property<br />in Spain 2026: Complete Guide',
      'art.gastos.meta': 'NortFinance · Financial Advisory · May 2026 · 12 min read',
      'art.gastos.breadcrumb': 'Buying Costs',
      'art.gastos.cta.h2': 'Want to Calculate the Total Cost of Your Purchase?',
      'art.gastos.cta.p': 'We help you plan all expenses and taxes so there are no surprises.',
      'art.gastos.cta.btn': 'Request Free Study →',

      /* ── Article: Best Mortgages 2026 ────────── */
      'art.mejores.tag': 'Mortgage Market · 2026',
      'art.mejores.title': 'Best Mortgages of 2026:<br />How to Find the Ideal Deal',
      'art.mejores.meta': 'NortFinance · Financial Advisory · May 2026 · 13 min read',
      'art.mejores.breadcrumb': 'Best Mortgages 2026',
      'art.mejores.cta.h2': 'Looking for the Best Mortgage for Your Profile?',
      'art.mejores.cta.p': 'We access over 20 lenders and negotiate to secure the most competitive conditions on the market.',
      'art.mejores.cta.btn': 'Request Free Study →',

      /* ── Article: Broker Madrid ──────────────── */
      'art.madrid.breadcrumb': 'Mortgage Broker Madrid',
      'art.madrid.tag': 'Mortgage Advisory · 2026',
      'art.madrid.title': 'Mortgage Broker in Madrid:<br />How to Get the Best Mortgage',
      'art.madrid.meta': 'NortFinance · Financial Advisory · June 2026 · 5 min read',
      'art.madrid.cta.h2': 'Want to know how much you can borrow and on what terms?',
      'art.madrid.cta.p': "We'll provide a free analysis of your profile in less than 24 hours.",
      'art.madrid.cta.btn': 'My Free Study →',

      /* ── Article: Broker Valencia ────────────── */
      'art.valencia.breadcrumb': 'Mortgage Broker Valencia',
      'art.valencia.tag': 'Mortgage Advisory · 2026',
      'art.valencia.title': 'Mortgage Broker in Valencia:<br />Expert Mortgage Advisory',
      'art.valencia.meta': 'NortFinance · Financial Advisory · June 2026 · 5 min read',
      'art.valencia.cta.h2': 'Want to know how much you can borrow and on what terms?',
      'art.valencia.cta.p': "We'll provide a free analysis of your profile in less than 24 hours.",
      'art.valencia.cta.btn': 'My Free Study →',

      /* ── Article: Broker Seville ─────────────── */
      'art.sevilla.breadcrumb': 'Mortgage Broker Seville',
      'art.sevilla.tag': 'Mortgage Advisory · 2026',
      'art.sevilla.title': 'Mortgage Broker in Seville:<br />Your Mortgage on the Best Terms',
      'art.sevilla.meta': 'NortFinance · Financial Advisory · June 2026 · 5 min read',
      'art.sevilla.cta.h2': 'Want to know how much you can borrow and on what terms?',
      'art.sevilla.cta.p': "We'll provide a free analysis of your profile in less than 24 hours.",
      'art.sevilla.cta.btn': 'My Free Study →',

      /* ── Article: Broker Málaga ──────────────── */
      'art.malaga.breadcrumb': 'Mortgage Broker Málaga',
      'art.malaga.tag': 'Mortgage Advisory · 2026',
      'art.malaga.title': 'Mortgage Broker in Málaga:<br />Mortgages for Residents and Non-Residents',
      'art.malaga.meta': 'NortFinance · Financial Advisory · June 2026 · 5 min read',
      'art.malaga.cta.h2': 'Want to know how much you can borrow and on what terms?',
      'art.malaga.cta.p': "We'll provide a free analysis of your profile in less than 24 hours.",
      'art.malaga.cta.btn': 'My Free Study →',

      /* ── Article: Mortgage for Foreigners ───── */
      'art.ext.breadcrumb': 'Mortgage for Foreigners in Spain',
      'art.ext.tag': 'Mortgage Advisory · 2026',
      'art.ext.title': 'Mortgage for Foreigners in Spain:<br />Complete Guide 2026',
      'art.ext.meta': 'NortFinance · Financial Advisory · June 2026 · 5 min read',
      'art.ext.cta.h2': 'Want to know how much you can borrow and on what terms?',
      'art.ext.cta.p': "We'll provide a free analysis of your profile in less than 24 hours.",
      'art.ext.cta.btn': 'My Free Study →',
    'art.guia.prose': `<p>Getting a mortgage in Spain can seem like a labyrinthine process: paperwork, negotiations with banks, binding offer, notary… But with the right information and proper guidance, the path becomes far simpler. In this complete mortgage guide for 2026 we explain the entire process, from the moment you decide to buy to the moment you sign before the notary.</p>

      <h2>What is a Mortgage and How Does it Work?</h2>
      <p>A mortgage is a long-term loan in which the property you acquire acts as collateral for repayment. Unlike other types of credit, the bank can enforce the guarantee (repossess the property) if you stop making payments. In Spain, mortgages typically run for 15 to 30 years, although some products extend to 40 years for first homes.</p>
      <p>The true cost of a mortgage is not determined solely by the nominal interest rate but by the <strong>APR (Annual Percentage Rate)</strong>, which incorporates fees, linked insurance products, and other associated costs. Always compare mortgages using the APR, not the nominal rate.</p>

      <h2>Steps to Apply for a Mortgage in Spain</h2>

      <h3>1. Assess your financial situation</h3>
      <p>Before visiting a bank, analyse your actual situation. The general rule is that the monthly mortgage payment should not exceed <strong>35% of your net income</strong>. If you have other debts (car loan, personal loans), your debt-to-income ratio rises and banks will penalise this.</p>

      <h3>2. Calculate how much money you need to save</h3>
      <p>Spanish banks finance a maximum of <strong>80% of the surveyed value</strong> of the property (or the purchase price, whichever is lower). This means you need at least 20% of the price plus an additional 10–12% to cover costs: property transfer tax (ITP) or VAT on new builds, notary fees, land registry, administrative fees, and survey.</p>

      <h3>3. Gather the required documentation</h3>
      <p>Banks will require your ID or NIE, your last three payslips, the last two years' income tax returns, employment history, bank statements for the past six months, and the property's land registry extract. The more organised and complete your documentation, the faster the process will be. See our <a href="documentacion-necesaria-hipoteca.html">mortgage documentation guide</a> to ensure nothing is missed.</p>

      <h3>4. Request offers from multiple banks</h3>
      <p>A common mistake is going only to the bank where your salary is paid. Each lender has its own risk policies, and the difference between the most expensive and cheapest offer can amount to tens of thousands of euros over the life of the loan. Always negotiate with at least three or four banks simultaneously.</p>

      <h3>5. Analyse the FEIN and FIAE</h3>
      <p>Once the bank approves your application, it is required to give you the <strong>FEIN (European Standardised Information Sheet)</strong>, which is the binding pre-contractual document setting out all loan conditions. You will also receive the <strong>FIAE (Standardised Warning Sheet)</strong>, which flags clauses with potential financial impact. You have a minimum of 10 calendar days to study these before signing.</p>

      <h3>6. The visit to the notary before signing</h3>
      <p>The 2019 Real Estate Credit Contracts Act requires that, on at least the business day before signing, you visit the notary without the bank present so that the notary can verify you have read and understood the FEIN and administer a comprehension test. This is a legal protection for the buyer.</p>

      <h3>7. Sign before the notary</h3>
      <p>The final signing takes place before a notary with the bank, seller, and buyer present. At that point the funds are transferred and the property changes hands. From that moment, the mortgage begins.</p>

      <h2>Types of Mortgage in Spain in 2026</h2>
      <p>There are three main types, and the right choice depends on your profile and your expectations about interest rate movements:</p>
      <ul>
        <li><strong>Fixed-rate mortgage:</strong> the interest rate does not change throughout the life of the loan. Stable, predictable payments.</li>
        <li><strong>Variable-rate mortgage:</strong> the rate is reviewed periodically (usually annually) based on the Euribor. It can go up or down.</li>
        <li><strong>Mixed mortgage:</strong> combines an initial fixed-rate period (typically 5–10 years) with the remainder at a variable rate.</li>
      </ul>
      <p>For a deeper dive into the differences, read our article <a href="hipoteca-fija-variable-mixta.html">Fixed, Variable or Mixed Mortgage: Which to Choose in 2026?</a></p>

      <h2>Why Use a Mortgage Broker in Spain</h2>
      <p>A mortgage broker acts as an intermediary between you and the banks. They don't work for any lender: they work for you. Their role is to present your file optimally to multiple banks, negotiate conditions on your behalf, and guide you through the entire process.</p>

      <h3>Concrete advantages of using a broker</h3>
      <ul>
        <li>Access to conditions not offered to walk-in customers at branch level.</li>
        <li>Time saving: instead of going bank by bank, the broker does it for you.</li>
        <li>Objective analysis: the broker tells you which mortgage suits you, not which gives them the best commission.</li>
        <li>Professional presentation of your file, reducing the risk of rejection.</li>
        <li>Accompaniment through to notarial signing, including coordination with the surveyor, administrative agency, and notary.</li>
      </ul>
      <p>At <a href="../hipotecas.html">NortFinance</a> we offer this service end to end. We analyse your situation, present your file to the most suitable lenders, and negotiate to achieve the best possible conditions for you.</p>

      <h2>How to Negotiate with Banks: Tactics That Work</h2>
      <p>Banks don't lead with their best conditions. Everything is negotiable. These are the most effective levers:</p>
      <ul>
        <li><strong>Demonstrated savings:</strong> the larger the deposit relative to the property value, the lower the risk for the bank and the better the conditions you'll receive.</li>
        <li><strong>Employment stability:</strong> a permanent contract with over two years' seniority is the profile banks like most.</li>
        <li><strong>Competition between lenders:</strong> if you have formal offers from several banks on the table, use them as leverage. Banks improve their terms when they know they face real competition.</li>
        <li><strong>Selective tie-ins:</strong> some banks offer rate reductions in exchange for direct debiting your salary, taking out their insurance products, or opening a pension plan. Always calculate whether the interest saving outweighs the cost of the linked products.</li>
      </ul>

      <h2>The FEIN: What It Is and Why It Matters</h2>
      <p>The European Standardised Information Sheet (FEIN) is the pre-contractual document the bank must provide when it approves your mortgage. It has a standardised format across the European Union and sets out all loan conditions in full: amount, term, interest rate, APR, monthly payment, included and excluded costs, early repayment conditions, and possible penalties.</p>
      <p>The FEIN is <strong>binding on the bank for at least 10 calendar days</strong>. During that period the bank cannot change the offered conditions. It is your legal window to compare, consult a broker or solicitor, and make an informed decision without pressure.</p>
      <p>Never sign without having read the FEIN carefully. If you have questions about any clause, ask us at <a href="../contacto.html">NortFinance</a> before committing.</p>

      <h2>Mortgage-Related Costs You Should Know About</h2>
      <p>Since the 2019 Real Estate Credit Contracts Act, the allocation of costs changed significantly. Currently:</p>
      <ul>
        <li>The bank pays: notary fees for the mortgage deed, administrative agency, land registry, and Stamp Duty (AJD).</li>
        <li>The buyer pays: property survey (between €300 and €600 depending on the lender) and notary fees for the purchase deed.</li>
      </ul>
      <p>The buyer also bears the ITP on second-hand property (between 6% and 10% of the price depending on the region) or 10% VAT on new builds. These costs are non-negotiable and must be covered by your savings.</p>

      <h2>Conclusion: Information Is Your Best Tool</h2>
      <p>The Spanish mortgage market is complex but not inaccessible. Understanding the process, knowing your rights as a consumer, and working with specialist professionals makes the difference between getting the mortgage you deserve and accepting terms below what you're entitled to.</p>
      <p>At <a href="../hipotecas.html">NortFinance</a> we have spent years helping families and individuals obtain mortgage financing on the best possible terms. If you have questions about your specific case, request your free, no-obligation study.</p>`,

    'art.pv.prose': `<p>Buying your first home is probably the most important financial decision of your life. The process requires planning, patience, and a clear understanding of the rules. In this guide we cover everything you need to know: how much money you really need to save, what mistakes most first-time buyers make, what support exists in 2026, and how to prepare so that banks say yes.</p>

      <h2>How Much Do I Need to Save to Buy My First Home?</h2>
      <p>This is the question we are asked most often, and the honest answer is: <strong>more than most people expect</strong>. The correct calculation is as follows:</p>

      <h3>The 20% deposit</h3>
      <p>Banks finance a maximum of 80% of the surveyed value or the purchase price (whichever is lower). This means you must contribute at least <strong>20% of the property price</strong> from your own funds. If the property costs €250,000, you need €50,000 for the deposit alone.</p>

      <h3>The 10–12% for costs</h3>
      <p>On top of the deposit, you must add the purchase costs, which across most of Spain range between 10% and 12% of the purchase price. These include:</p>
      <ul>
        <li><strong>Property Transfer Tax (ITP):</strong> for second-hand homes, between 6% and 10% depending on the region.</li>
        <li><strong>10% VAT:</strong> for new builds (plus 1.5% Stamp Duty in most regions).</li>
        <li><strong>Notary fees for purchase deed:</strong> approximately €600–€1,200.</li>
        <li><strong>Land registry:</strong> approximately €400–€900.</li>
        <li><strong>Property survey:</strong> €300–€600 (paid by the buyer).</li>
        <li><strong>Administrative agency:</strong> €300–€600.</li>
      </ul>

      <div class="info-box">
        <p><strong>Real example:</strong> for a property costing €200,000 in Catalonia you would need: €40,000 deposit + €22,000 costs (10% ITP + remaining costs) = <strong>€62,000</strong> saved before starting the process.</p>
      </div>

      <h2>The 7 Most Common Mistakes When Buying Your First Home</h2>

      <h3>Mistake 1: Going to the bank before you are ready</h3>
      <p>Many buyers approach the bank before their file is complete or even before they have chosen a property. This triggers unnecessary searches in CIRBE (the Bank of Spain's credit risk database) and, in some cases, can harm your profile if there are multiple enquiries in a short period.</p>

      <h3>Mistake 2: Looking only at the monthly payment</h3>
      <p>Focusing solely on whether you can "afford the monthly payment" without considering associated costs, community fees, council tax, maintenance, or potential periods of unemployment is a frequent error. The 35% debt-to-income rule exists for good reason: it is the buffer that lets you live without financial suffocation.</p>

      <h3>Mistake 3: Not comparing offers from different banks</h3>
      <p>The bank where your salary is paid is not necessarily the one offering the best conditions. Over a 25-year mortgage, a difference of 0.3 percentage points in the interest rate can mean more than €15,000 in total difference. Always compare with the help of a broker like <a href="../hipotecas.html">NortFinance</a>.</p>

      <h3>Mistake 4: Accepting tied products without negotiating</h3>
      <p>Banks typically offer rate reductions in exchange for direct debiting your salary, taking out their life insurance, home insurance, or pension plan. Not everything the bank offers is bad, but you must calculate whether the annual cost of those products is less than the interest saving you receive in return.</p>

      <h3>Mistake 5: Signing before reviewing the FEIN</h3>
      <p>The European Standardised Information Sheet is the legal document containing all loan conditions. Never sign without having read it in detail. You have at least 10 days to study it and consult whoever you need.</p>

      <h3>Mistake 6: Not checking the property's land registry extract</h3>
      <p>The land registry extract (nota simple) is a key document: it shows who the actual owner is, whether there are any outstanding charges (mortgages, attachments, easements), and the registered description of the property. Never buy without verifying it.</p>

      <h3>Mistake 7: Underestimating the time the process takes</h3>
      <p>From finding the property to signing before the notary can easily take 2 to 4 months. If you have a lease expiring or a planned move, factor in these timescales.</p>

      <h2>How to Prepare Your Banking Profile</h2>
      <p>Banks assess your application according to several risk criteria. These are the factors that carry the most weight in their decision:</p>
      <ul>
        <li><strong>Employment stability:</strong> a permanent contract with more than two years' seniority is the ideal profile. If you have been less than a year with your current employer, wait or find a co-borrower with a stronger profile.</li>
        <li><strong>Debt-to-income ratio:</strong> the total of your monthly debts (including the new mortgage) must not exceed 35–40% of your net income.</li>
        <li><strong>Payment history:</strong> if you have had unpaid debts registered in credit reference files (ASNEF, RAI), resolve them before applying for the mortgage.</li>
        <li><strong>Demonstrated savings:</strong> banks value it highly when the savings you are contributing have been in your account for at least six months. Last-minute savings transfers raise suspicion.</li>
        <li><strong>Seniority with the bank:</strong> having a previous customer relationship can help, though it does not replace the need to compare with other lenders.</li>
      </ul>

      <h2>Support for Young Buyers in Spain in 2026</h2>
      <p>In 2026 several support schemes exist to facilitate access to housing for young people and families:</p>

      <h3>ICO guarantee for first-time buyers</h3>
      <p>The Spanish Government, through the ICO (Official Credit Institute), offers a 20% guarantee scheme for buyers under 35 and families with dependent children purchasing their first home. This allows access to 100% financing without needing the 20% deposit, though costs still need to be covered.</p>

      <h3>Reduced ITP on primary residences</h3>
      <p>Many regions offer reduced ITP rates for first-home buyers, young people, large families, or people with disabilities. Before calculating your costs, check which reliefs apply in your region.</p>

      <h3>Regional income tax relief for home purchase</h3>
      <p>Some regions maintain income tax deductions for the acquisition of a first primary residence. The national deduction was abolished in 2013, but the regional deduction varies by territory.</p>

      <h2>The Role of a Mortgage Broker in Your First Purchase</h2>
      <p>For a first-time buyer, the mortgage process can feel overwhelming. A specialist mortgage broker like <a href="../hipotecas.html">NortFinance</a> acts as your guide and negotiator throughout:</p>
      <ul>
        <li>Helps you understand what mortgage you can obtain before committing to buying a property.</li>
        <li>Prepares and submits your file optimally to multiple banks simultaneously.</li>
        <li>Negotiates on your behalf to achieve the best possible conditions.</li>
        <li>Accompanies you through the FEIN review and the pre-signing notary visit.</li>
        <li>Coordinates all parties in the process: surveyor, administrative agency, notary, and bank.</li>
      </ul>
      <p>The mortgage broker's fee is only paid if the transaction successfully completes. In many cases, the savings achieved on loan conditions significantly outweigh the broker's fee.</p>

      <h2>When Is the Right Time to Buy?</h2>
      <p>This is a trick question. There is no objectively perfect time. What does exist is the right time for you: when you have the necessary savings, sufficient employment stability, and the certainty that you will remain in that city for at least five to seven years. Buying for less time is generally not profitable once entry and exit costs of the property market are factored in.</p>
      <p>If you are unsure whether you are ready to buy, request a <a href="../contacto.html">free personalised analysis</a> and we will help you assess your situation with no commitment.</p>`,

    'art.auto.prose': `<p>Being self-employed in Spain does not mean you cannot access a mortgage. But it does mean the process is different, banks will require more documentation, and you will need to present your case more strategically. In this guide we explain why banks are more cautious with self-employed applicants, what documentation you need, how to present your income correctly, and why a specialist mortgage broker can make a decisive difference.</p>

      <h2>Why It Is Harder to Get a Mortgage as a Self-Employed Person</h2>
      <p>Banks fundamentally value the stability and predictability of future income. An employee on a permanent contract offers certainty: their employer will pay the salary month after month. A self-employed person, by contrast, has income that can vary with business activity, seasonal factors, or the general economic climate.</p>
      <p>This perception of greater risk translates into stricter criteria: banks typically require longer time in business, more documented income history, better savings ratios, and occasionally apply slightly higher interest rates or make the offer conditional on greater product tie-ins.</p>
      <p>However, this does not mean it is impossible. Thousands of self-employed people obtain mortgages each year in Spain on excellent terms. The key is preparing the file well and approaching the right banks.</p>

      <h2>What Documentation Banks Require from Self-Employed Applicants</h2>
      <p>The standard documentation for a self-employed person is significantly more extensive than for an employee. These are the documents any lender will normally require:</p>

      <h3>Personal identification</h3>
      <ul>
        <li>Valid national ID (DNI) or foreigner's ID number (NIE).</li>
        <li>Up-to-date employment history (showing time registered as self-employed).</li>
        <li>Certificate of being up to date with Social Security contributions.</li>
        <li>Certificate of being up to date with the Tax Agency (AEAT).</li>
      </ul>

      <h3>Income documentation</h3>
      <ul>
        <li><strong>Income tax returns:</strong> for the last 2–3 complete tax years (Form 100 or 130 depending on the regime).</li>
        <li><strong>Quarterly VAT returns:</strong> the last 4–8 quarters (Forms 303 and 390).</li>
        <li><strong>Forms 130 or 131:</strong> quarterly instalment payments for the last four quarters.</li>
        <li><strong>Bank statements:</strong> 6–12 months' statements for the account linked to the business.</li>
        <li><strong>Accounts:</strong> some banks require balance sheets and income statements if you are self-employed with a company or complex activity.</li>
      </ul>

      <h3>Property documentation</h3>
      <ul>
        <li>Land registry extract (nota simple) for the property to be purchased.</li>
        <li>Reservation contract or preliminary purchase agreement (if already signed).</li>
      </ul>

      <p>For a complete documentation list, see our <a href="documentacion-necesaria-hipoteca.html">mortgage documentation guide</a>.</p>

      <h2>How to Present Your Income Optimally</h2>
      <p>This is the most critical point for self-employed applicants. Banks analyse the net income declared in the tax return, not gross turnover. If you are self-employed and declare low income to minimise tax, the bank will also see low income and grant you less financing or decline the application.</p>

      <h3>Use the actual net profit</h3>
      <p>The bank will use your net business profit as a reference — declared income minus allowable expenses. If over the last two or three years you have declared consistent and growing net profits, your profile is far stronger.</p>

      <h3>Seniority matters a great deal</h3>
      <p>Most banks require a minimum of two years as a self-employed person. Some are more flexible and accept one year if income is solid, but in general, the longer your self-employment track record, the better. If you have been registered for less than a year, wait until you have completed at least two full tax years before applying for a mortgage.</p>

      <h3>Show a positive trend</h3>
      <p>If your income has been rising year on year, this gives the bank an image of a growing business. If there is a particularly poor year, be prepared to explain it (sector downturn, exceptional investment, pandemic, etc.).</p>

      <div class="info-box">
        <p><strong>Key tip:</strong> if you are planning to apply for a mortgage in the future, coordinate with your tax adviser to optimise your income declarations well in advance. Paying slightly more tax for one or two years can be the most profitable investment you make if it enables you to access a mortgage on good terms.</p>
      </div>

      <h2>Ways to Improve Your Banking Profile as a Self-Employed Person</h2>

      <h3>Increase the deposit percentage</h3>
      <p>The larger the deposit you provide (above the standard 20% minimum), the lower the risk the bank bears and the more likely it is to approve the application. If you can contribute 30% or 35% of the property value, you will significantly improve your chances.</p>

      <h3>Demonstrate a savings track record</h3>
      <p>The funds you provide as a deposit must have been in your bank account for at least six months. Banks verify this. If they come from a sale, inheritance, or any other extraordinary source, you will need to document it properly.</p>

      <h3>Clear existing debts</h3>
      <p>Personal loans, credit card balances, car finance — everything that reduces your available borrowing capacity damages your application. If you can clear minor debts before applying for the mortgage, do so.</p>

      <h3>Stay clear of credit reference files</h3>
      <p>Check whether you appear in ASNEF or other credit reference databases before starting the process. A forgotten unpaid phone bill can completely block a mortgage application.</p>

      <h3>Consider a co-borrower with employed income</h3>
      <p>If you have a partner or family member with stable employed income, including them as a co-borrower can significantly strengthen the application. The bank adds the income of both parties when assessing overall solvency.</p>

      <h2>Which Banks Are Most Favourable for Self-Employed Applicants</h2>
      <p>Not all banks assess self-employed applicants in the same way. Some lenders have specific mortgage products for self-employed people or more flexible risk criteria for this group. However, specific conditions (interest rate, term, tie-ins) change constantly and depend on your particular profile.</p>
      <p>This is why the mortgage broker's role is especially valuable for self-employed applicants: the broker knows which bank is most receptive at any given moment and how to present your file to maximise the chances of approval.</p>

      <h2>Why a Mortgage Broker Is Especially Helpful for Self-Employed Applicants</h2>
      <p>For a self-employed person, the benefits of working with a broker like <a href="../hipotecas.html">NortFinance</a> are particularly significant:</p>
      <ul>
        <li><strong>Lender selection:</strong> the broker knows which banks are more receptive to self-employed applicants at any given time. You don't waste time with banks that will reject you outright.</li>
        <li><strong>Strategic presentation:</strong> an experienced broker knows how to present the income of a self-employed person in the most favourable light, highlighting consistency and positive trend.</li>
        <li><strong>Real negotiation:</strong> the broker has access to negotiating conditions that are not available through standard branch channels.</li>
        <li><strong>Time saving:</strong> instead of going bank by bank with your documentation and explaining your situation from scratch each time, the broker manages the entire process simultaneously.</li>
        <li><strong>Legal guidance:</strong> helps you understand the FEIN, the mortgage conditions, and any clause that requires special attention.</li>
      </ul>

      <h2>A Mortgage for the Self-Employed Is Possible: Conclusion</h2>
      <p>Being self-employed is not an insurmountable obstacle to obtaining mortgage financing. It is a factor that demands greater preparation and strategy. With the right documentation, a sound financial profile, and the support of specialist professionals, the chances of success are high.</p>
      <p>If you are self-employed and thinking of buying a property, start by requesting a <a href="../contacto.html">free viability analysis</a> with our team. At NortFinance we have specific experience managing mortgage applications for self-employed workers and we know the most effective routes for each profile.</p>`,

    'art.doc.prose': `<p>One of the most frequent reasons a mortgage application is delayed or complicated is incomplete or poorly prepared documentation. Banks need to verify your identity, your financial solvency, and the characteristics of the property you wish to buy. In this guide you will find the complete list of documents banks will request, covering the differences between employees and self-employed applicants, plus practical tips to have everything ready in the shortest possible time.</p>

      <h2>Personal Identification</h2>
      <p>All parties to the transaction (including guarantors, if any) must present basic identification:</p>
      <ul class="checklist">
        <li><strong>Valid national ID (DNI) or foreigner's ID (NIE)</strong> — copy of both sides. If your ID has expired, renew it before starting the process.</li>
        <li><strong>Family record book</strong> — if you are married or have dependent children, this may be needed to assess family financial obligations.</li>
        <li><strong>Marriage or civil partnership certificate</strong> — if the mortgage is in the names of two people in a relationship.</li>
        <li><strong>Prenuptial or matrimonial property agreement</strong> — if one exists, the bank needs to know the matrimonial property regime to determine each party's liability.</li>
      </ul>

      <h2>Employment and Income Documentation: Employees</h2>
      <p>For employed applicants, the bank is looking to confirm stability and income level. The standard documents are:</p>
      <ul class="checklist">
        <li><strong>Last 3 payslips</strong> — or 6 if the salary includes variable components (commissions, pro-rated bonuses).</li>
        <li><strong>Employment contract</strong> — particularly important for verifying whether it is permanent, temporary, or part-time.</li>
        <li><strong>Up-to-date employment history</strong> — obtainable free of charge from the Social Security electronic office. Shows your contributions history and seniority with your current employer.</li>
        <li><strong>Last 2 income tax returns (IRPF)</strong> — complete tax years, with acknowledgement of electronic submission.</li>
        <li><strong>Employment income certificate</strong> — some banks request this as a supplement to payslips to verify total annual remuneration.</li>
      </ul>

      <h2>Employment and Income Documentation: Self-Employed</h2>
      <p>For self-employed applicants, the income documentation is more extensive. See our specific guide on <a href="hipoteca-autonomo.html">mortgages for self-employed people</a> for further detail. In summary, you will need:</p>
      <ul class="checklist">
        <li><strong>Last 2–3 complete income tax returns</strong> — Forms 100 (direct assessment) or 131 (module assessment).</li>
        <li><strong>Quarterly VAT returns</strong> — Forms 303 for the last 4–8 quarters and the annual Form 390.</li>
        <li><strong>Forms 130 for quarterly instalments</strong> — for the last 4 quarters.</li>
        <li><strong>Up-to-date employment history</strong> — confirming seniority as a self-employed person registered with the RETA (self-employed social security scheme).</li>
        <li><strong>Tax clearance certificate from the AEAT</strong> — confirming no outstanding debts with the Tax Agency.</li>
        <li><strong>Social Security clearance certificate</strong> — no outstanding RETA contributions.</li>
        <li><strong>Bank statements for 6–12 months</strong> — for the account linked to the business activity.</li>
      </ul>

      <h2>Banking and Asset Documentation</h2>
      <p>The bank wants to understand your overall financial situation, not just your income:</p>
      <ul class="checklist">
        <li><strong>Bank statements for the last 6 months</strong> — for all your accounts. The bank verifies income, recurring outgoings, and the origin of savings.</li>
        <li><strong>Proof of the deposit funds</strong> — if the money for the deposit comes from a gift, inheritance, or sale of another asset, you must document it.</li>
        <li><strong>Declaration of other assets</strong> — properties, vehicles, investments. Demonstrating additional assets strengthens your applicant profile.</li>
        <li><strong>Existing loan agreements</strong> — contracts for any personal loan, car finance, etc. currently outstanding. The bank verifies these via CIRBE.</li>
      </ul>

      <h2>Documentation for the Property</h2>
      <p>In addition to confirming your solvency, the bank needs to understand the asset that will serve as loan collateral:</p>
      <ul class="checklist">
        <li><strong>Land registry extract (nota simple)</strong> — identifies the current owner, describes the property, and shows whether there are any charges (mortgages, attachments, etc.). Obtainable from the Land Registry or online.</li>
        <li><strong>Reservation contract or preliminary purchase agreement</strong> — if already signed with the seller. Includes the agreed price, planned completion date, and transaction conditions.</li>
        <li><strong>Last council tax (IBI) receipt</strong> — confirms the local tax is up to date and provides the property's cadastral details.</li>
        <li><strong>Owners' association certificate</strong> — confirming no outstanding community fees are owed by the seller.</li>
        <li><strong>Plans and specification of finishes</strong> — for new-build properties, the developer must provide these.</li>
        <li><strong>First occupation licence or habitability certificate</strong> — required to confirm the property may legally be occupied.</li>
      </ul>

      <h2>Comparison Table: Documents by Profile</h2>
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>Employee</th>
            <th>Self-Employed</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Valid ID / NIE</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Employment history</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Last 3–6 payslips</td><td>Yes</td><td>No</td></tr>
          <tr><td>Employment contract</td><td>Yes</td><td>No</td></tr>
          <tr><td>Income tax returns (last 2–3 years)</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Quarterly VAT returns</td><td>No</td><td>Yes</td></tr>
          <tr><td>Forms 130 / 131</td><td>No</td><td>Yes</td></tr>
          <tr><td>Tax clearance certificate</td><td>Not usually</td><td>Yes</td></tr>
          <tr><td>Social Security clearance</td><td>Not usually</td><td>Yes</td></tr>
          <tr><td>Bank statements 6–12 months</td><td>Yes</td><td>Yes (more)</td></tr>
          <tr><td>Land registry extract</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Reservation contract</td><td>If available</td><td>If available</td></tr>
        </tbody>
      </table>

      <h2>Tips for Getting Documentation Ready Quickly</h2>

      <h3>Start with the documents that take the longest</h3>
      <p>Some documents require time or prior steps. The land registry extract can take from 24 hours to several days depending on the method. The tax clearance certificate is available instantly from the AEAT electronic office, but requires a digital certificate or Cl@ve. The employment history is immediate online but requires identification. Identify which will take you the most time and start with those.</p>

      <h3>Organise everything in a digital folder</h3>
      <p>Banks and brokers increasingly work with digital files. Scan all documents to PDF, name them clearly (e.g. "TaxReturn_2024.pdf"), and save them in an organised folder. This greatly speeds up the process when they need to be sent to multiple lenders.</p>

      <h3>Check expiry dates</h3>
      <p>Some documents have an effective validity period for banks, even if not formally expired. Bank statements are typically requested for the last 3–6 months; employment history should not be more than 30 days old; the land registry extract, not more than 3 months. When gathering documentation, make sure everything is current.</p>

      <h3>Don't proceed without having everything ready</h3>
      <p>Submitting an incomplete file forces the bank to request additional documents later, extending the process by weeks. It is far more efficient to prepare everything before making the first formal enquiry. A broker like <a href="../hipotecas.html">NortFinance</a> tells you exactly what you need and helps you organise the file before presenting it to lenders.</p>

      <h2>The Survey: A Document Commissioned by the Bank</h2>
      <p>The official property survey is commissioned by the bank once the transaction has been provisionally approved. However, it is the buyer who pays for it (between €300 and €600). The survey is conducted by a surveying firm accredited by the Bank of Spain and establishes the market value of the property, which the bank uses to calculate the financing percentage.</p>
      <p>If the surveyed value is lower than the agreed purchase price, the bank will only finance 80% of the surveyed value, not the purchase price. This may force you to contribute a larger deposit than planned. This is why it is important not to commit to a purchase price significantly above market value.</p>

      <h2>Next Step: Start the Process with Confidence</h2>
      <p>Having your documentation ready is the first step of a process that, when well managed, takes between 6 and 10 weeks from application to notarial signing. At <a href="../contacto.html">NortFinance</a> we review your documentation free of charge before presenting it to banks, to ensure it is complete and presented in the best possible way.</p>`,

    'art.tipos.prose': `<p>The choice between a fixed, variable, or mixed mortgage is one of the most important decisions you will make during the mortgage process. There is no universal answer: the best option depends on your profile, your appetite for risk, the term you are considering, and market conditions at the time of signing. In this guide we clearly explain the differences, the advantages and disadvantages of each type, the current Euribor context, and a recommendation by profile.</p>

      <h2>The Fixed-Rate Mortgage</h2>
      <p>With a fixed-rate mortgage, the interest rate the bank charges does not change throughout the life of the loan. You sign today at 3% (for example) and pay at 3% until the final instalment, regardless of what the Euribor or ECB rates do.</p>
      <p>This results in a completely predictable monthly payment for decades. For many buyers, that stability is enormously valuable, especially when they are stretched to their maximum borrowing capacity.</p>

      <div class="pros-cons">
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--pro">Advantages</p>
          <ul>
            <li>Stable, unchanging monthly payment</li>
            <li>Full protection against rate rises</li>
            <li>Long-term financial planning</li>
            <li>Peace of mind</li>
          </ul>
        </div>
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--con">Disadvantages</p>
          <ul>
            <li>Initial rate generally higher than variable</li>
            <li>You don't benefit if rates fall sharply</li>
            <li>Higher early repayment charges</li>
          </ul>
        </div>
      </div>

      <h3>When does a fixed-rate mortgage make sense?</h3>
      <p>Fixed rates make particular sense when interest rates are low (or at the end of a falling cycle), when the loan term is long (20 years or more), when you have little tolerance for financial uncertainty, or when your monthly financial margin is tight and you cannot absorb payment increases.</p>

      <h2>The Variable-Rate Mortgage</h2>
      <p>With a variable-rate mortgage, the interest rate is reviewed periodically (generally once a year) based on the Euribor plus a fixed margin negotiated with the bank. If the Euribor falls, your payment falls. If the Euribor rises, your payment rises.</p>
      <p>The 12-month Euribor is the most commonly used reference rate in Spain. When variable mortgages became popular in the 2000s and 2010s, the Euribor was at historic lows; the rises of 2022–2023 (which pushed the Euribor above 4%) revealed the real risk of this product for those who had not anticipated it.</p>

      <div class="pros-cons">
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--pro">Advantages</p>
          <ul>
            <li>Lower initial rate than fixed</li>
            <li>You benefit if the Euribor falls</li>
            <li>Lower early repayment charges</li>
            <li>Can be a better option over shorter terms</li>
          </ul>
        </div>
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--con">Disadvantages</p>
          <ul>
            <li>Uncertainty about future payments</li>
            <li>Risk of significant Euribor rises</li>
            <li>Makes long-term planning harder</li>
          </ul>
        </div>
      </div>

      <h3>When does a variable-rate mortgage make sense?</h3>
      <p>Variable rates may suit you when the loan term is relatively short (under 15 years), when you have the financial capacity to absorb potential payment increases, when the Euribor is at historically high levels and is expected to fall, or when you plan to make significant early repayments.</p>

      <h2>The Mixed Mortgage</h2>
      <p>The mixed mortgage combines both types: during an initial period (typically 5 to 15 years) the rate is fixed, and thereafter it becomes variable (Euribor plus margin). It is a product that tries to offer the best of both worlds: initial certainty and the possibility of benefiting from lower rates over the longer term.</p>

      <div class="pros-cons">
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--pro">Advantages</p>
          <ul>
            <li>Fixed, predictable payment in the first years</li>
            <li>Initial fixed rate lower than a 100% fixed mortgage</li>
            <li>Option to refinance before the variable phase begins</li>
            <li>Balance between security and flexibility</li>
          </ul>
        </div>
        <div class="pros-cons__col">
          <p class="pros-cons__title pros-cons__title--con">Disadvantages</p>
          <ul>
            <li>Uncertainty in the variable phase</li>
            <li>More complex to compare with other mortgages</li>
            <li>May not be the cheapest long-term option if rates rise</li>
          </ul>
        </div>
      </div>

      <h3>When does a mixed mortgage make sense?</h3>
      <p>The mixed mortgage is particularly attractive when the initial fixed rate is significantly lower than a pure fixed product, when you plan to make accelerated capital repayments during the fixed period (thereby reducing risk in the subsequent variable phase), or when you want protection during the years of greatest family and financial pressure (the early years of the mortgage) but are optimistic about long-term rate movements.</p>

      <h2>The Euribor Situation in 2026</h2>
      <p>Following the ECB's rate-hiking cycle of 2022–2023, which pushed the 12-month Euribor to a peak above 4.2%, interest rates have moderated. In 2024 the ECB began a rate-cutting cycle, and in 2025–2026 the Euribor is at more moderate levels, with prospects of further stabilisation.</p>
      <p>This context has made variable-rate mortgages attractive again for certain profiles, though fixed rates have also adjusted downward. The key remains to analyse your specific situation, not just the market moment.</p>

      <h2>Comparison Table: Fixed vs. Variable vs. Mixed</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Fixed</th>
            <th>Variable</th>
            <th>Mixed</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Monthly payment</td><td>Always stable</td><td>Changes annually</td><td>Stable in early years</td></tr>
          <tr><td>Initial rate</td><td>Higher</td><td>Lower</td><td>Intermediate</td></tr>
          <tr><td>Risk of rises</td><td>None</td><td>High</td><td>Low initially, high later</td></tr>
          <tr><td>Benefit if rates fall</td><td>No</td><td>Yes</td><td>Only in variable phase</td></tr>
          <tr><td>Early repayment charge</td><td>Higher (up to 2%)</td><td>Lower (0.15–0.25%)</td><td>Varies by phase</td></tr>
          <tr><td>Ideal profile</td><td>Risk-averse, long terms</td><td>Risk-tolerant, short terms</td><td>Balance of risk and security</td></tr>
        </tbody>
      </table>

      <h2>Recommendation by Profile in 2026</h2>

      <h3>Conservative profile or tight budget</h3>
      <p>If your payment cannot rise significantly without straining your household finances, the <strong>fixed-rate mortgage</strong> is your option. The security it provides has a cost (higher initial rate), but it is insurance against adverse scenarios you cannot afford.</p>

      <h3>Profile with financial margin and short-to-medium term</h3>
      <p>If you can absorb moderate payment increases (say, €200–€300/month), your term is 15 years or fewer, and the offered margin is competitive, the <strong>variable-rate mortgage</strong> may prove cheaper over the long term in a stabilised or falling rate environment.</p>

      <h3>Profile seeking balance</h3>
      <p>If you want certainty in the first years (when the mortgage weighs heaviest on the family budget) but are willing to take on variable risk in the second half, a <strong>mixed mortgage</strong> with a 10-year fixed period can be a balanced solution, especially if you plan to repay capital in the early years.</p>

      <h2>The Right Decision Depends on Your Specific Case</h2>
      <p>Generalisations have their limits. The mortgage that suits your neighbour may not suit you. Variables such as the loan amount, the term, the level of savings you can sustain over the life of the loan, your projected employment stability, and your future life plans are all determinants.</p>
      <p>At <a href="../hipotecas.html">NortFinance</a> we carry out a personalised analysis of your case and present real comparison scenarios with the best available market offers for all three mortgage types. This way you can make an informed decision, not one based on trends or the recommendation of the bank where your salary is paid.</p>
      <p>If you still have questions, consult our <a href="preguntas-frecuentes-hipoteca.html">FAQ guide on mortgages</a> or contact our team directly.</p>`,


    'art.faq.prose': `<p>Here we gather the questions our clients ask most often before, during, and after the mortgage process. Straightforward answers, no filler, based on the real experience of hundreds of transactions managed in Spain.</p>

      <h2>Process and Timescales</h2>

      <div class="faq-item">
        <p class="faq-question">How long does a mortgage approval take?</p>
        <p class="faq-answer">From the time you submit complete documentation to receiving a formal response from the bank, the usual timeframe is <strong>2 to 4 weeks</strong>. However, the complete process — from the first consultation to signing before the notary — typically takes between 6 and 10 weeks, depending on the bank's speed, the complexity of the transaction, and survey and notary timescales. With a broker managing the process in parallel with several banks, timescales are optimised considerably.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">What documentation do I need to apply for a mortgage?</p>
        <p class="faq-answer">The basic documents are: valid national ID or NIE, employment history, last 3–6 payslips (or tax returns and tax forms if self-employed), the last two income tax returns, bank statements for the past 6 months, and the property's land registry extract. See our <a href="documentacion-necesaria-hipoteca.html">complete documentation guide</a> for a full list covering the differences between employees and self-employed applicants.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">What does it mean when they ask for the FEIN?</p>
        <p class="faq-answer">The <strong>FEIN (European Standardised Information Sheet)</strong> is the standardised pre-contractual document the bank must give you when it approves your mortgage application. It contains all loan conditions in a uniform format across the EU: amount, term, interest rate, APR, monthly payment, costs, and possible penalties. It is binding on the bank for at least 10 calendar days, during which you can study it and compare without pressure.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">What is the purpose of the notary visit before signing?</p>
        <p class="faq-answer">The 2019 Real Estate Credit Contracts Act requires that, on at least the business day before signing the mortgage, you attend the notary <strong>alone, without the bank</strong>. The purpose is for the notary to verify that you have received and understood the FEIN and the loan conditions, and to administer an oral comprehension test. It is a legal protection for the consumer. Without this prior visit, there can be no signing.</p>
      </div>

      <h2>Key Financial Concepts</h2>

      <div class="faq-item">
        <p class="faq-question">What is the difference between the nominal rate and the APR?</p>
        <p class="faq-answer">The <strong>nominal interest rate (TIN)</strong> is the pure interest rate on the loan, excluding additional costs. The <strong>APR (Annual Percentage Rate / TAE)</strong> incorporates all costs associated with the loan: arrangement fees, compulsory linked insurance, management charges, and payment frequency. The APR is the true indicator of credit cost and is always the figure you should use when comparing mortgages. A mortgage with a lower nominal rate may have a higher APR if it comes with many tied products.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">What is the Euribor and how does it affect my variable-rate mortgage?</p>
        <p class="faq-answer">The <strong>Euribor</strong> (Euro Interbank Offered Rate) is the interest rate at which European banks lend money to each other. The 12-month Euribor is the most commonly used reference index for variable-rate mortgages in Spain. Your payment is calculated as the Euribor plus the margin you negotiated with the bank. When the ECB raises rates, the Euribor rises and your payment increases; when the ECB cuts rates, the Euribor falls and your payment decreases. The review is usually carried out every 12 months.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">How much money do I need saved before applying for a mortgage?</p>
        <p class="faq-answer">As a general rule, you need at least <strong>30–32% of the purchase price</strong>: 20% as a deposit (banks finance a maximum of 80%) plus 10–12% for purchase costs (ITP or VAT, notary fees, land registry, survey, and administrative agency). That means for a €200,000 property you should have between €58,000 and €64,000 available. Read our guide on <a href="hipoteca-primera-vivienda.html">first-time buying</a> for more detail.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">What is the mortgage affordability ratio?</p>
        <p class="faq-answer">The affordability ratio is the percentage of your monthly net income you will allocate to mortgage payments. Banks set a maximum of between <strong>35% and 40%</strong> of the net income of the applicant (or the household if it is a joint mortgage). If you earn €2,500 net per month, the maximum payment the bank will consider affordable will be around €875–€1,000. This ratio includes all existing debts, not just the mortgage.</p>
      </div>

      <h2>Negotiation and Conditions</h2>

      <div class="faq-item">
        <p class="faq-question">Can I negotiate the interest rate with the bank?</p>
        <p class="faq-answer">Yes, and it is <strong>essential to do so</strong>. Banks don't lead with their best conditions. The factors that most influence negotiation are: the applicant's profile (employment stability, income level, deposit contributed), the financing percentage requested, and competition from other lenders. Having formal offers from several banks on the table is the most effective negotiating lever. A mortgage broker does this work on your behalf professionally.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Are tied products (insurance, salary direct debit) compulsory?</p>
        <p class="faq-answer">They are not legally compulsory, but banks use them to offer a lower interest rate. In other words, they offer a reduced rate in exchange for direct debiting your salary, taking out their life or home insurance, or opening a pension plan. You are entitled to decline them, but the rate will then rise according to the discount each product provides. The key is to calculate whether the annual cost of the tied products is less than the saving achieved by the rate reduction.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">How much does it cost to repay a mortgage early?</p>
        <p class="faq-answer">It depends on the mortgage type. For <strong>variable-rate</strong> mortgages, the maximum early repayment charge is 0.25% of the capital repaid during the first 3 years, and 0.15% up to the fifth year (free thereafter). For <strong>fixed-rate</strong> mortgages, the maximum is 2% during the first 10 years and 1.5% from the tenth year. Many lenders offer more favourable conditions during negotiation. Early repayment can represent significant interest savings, especially if made in the early years of the loan.</p>
      </div>

      <h2>Rejections and Problems</h2>

      <div class="faq-item">
        <p class="faq-question">What happens if the bank rejects my mortgage application?</p>
        <p class="faq-answer">A rejection from one bank does not mean you cannot get a mortgage. Each lender has its own risk criteria, and what one turns down another may approve. The first step is to understand why it was rejected: insufficient income, excessive debt ratio, adverse credit history, property in a risk area? Once the cause is identified, you can work on improving your profile or finding lenders better suited to your specific case. A mortgage broker is especially valuable in these situations, as they know which bank best fits each profile.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Can I apply for a mortgage if I am on a credit reference file or have debts?</p>
        <p class="faq-answer">Being listed on a credit reference file (ASNEF, RAI) is practically incompatible with obtaining a mortgage from a mainstream bank. Most lenders check these files during risk analysis and will automatically decline if you appear on them. The most advisable course is to <strong>resolve any outstanding debt</strong> before starting the mortgage process and to wait until you are removed from the file (which can take a few months after settlement). With active debts but no adverse credit file listing, the bank will include them in the debt ratio and reduce the amount it can lend you.</p>
      </div>

      <h2>The Mortgage Broker</h2>

      <div class="faq-item">
        <p class="faq-question">How much does a mortgage broker charge in Spain?</p>
        <p class="faq-answer">A mortgage broker's fee in Spain typically falls between <strong>0.5% and 1.5% of the loan amount</strong>, and is generally only payable if the transaction successfully completes. In other words, if you don't get the mortgage, you don't pay. Some lenders also pay the broker a commission on the transaction, which can reduce or eliminate the cost to the client. At <a href="../hipotecas.html">NortFinance</a>, the initial assessment is always free and without obligation.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">What real advantage does a broker have over going to the bank directly?</p>
        <p class="faq-answer">The specific advantages are: access to conditions not available at branch level, professional presentation of the file, simultaneous negotiation with multiple banks, time saving and management of all the paperwork, and accompaniment through to notarial signing. In many cases, the improved conditions achieved (lower interest rate, no fees, better bonuses) significantly outweigh the broker's cost. It is especially valuable for complex profiles such as <a href="hipoteca-autonomo.html">self-employed applicants</a> or buyers with limited employment seniority.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Do I have to take the mortgage with the bank the broker proposes?</p>
        <p class="faq-answer">No. The broker presents the best offers obtained for your case, but the final decision is always yours. The broker works for you, not for the bank. If the offer obtained does not suit you, you are not obliged to accept it or to pay anything. The relationship works precisely like this: free study, search for the best conditions, you decide. If you sign, the broker is paid. If not, they are not.</p>
      </div>

      <div class="faq-item">
        <p class="faq-question">Can I move my existing mortgage to better terms?</p>
        <p class="faq-answer">Yes. There are two main mechanisms: <strong>novation</strong> (negotiating directly with your current bank to modify the conditions) and <strong>subrogation</strong> (transferring the mortgage to another bank offering better conditions). Both carry costs, but if the interest rate difference is significant, the long-term saving can be very substantial. A broker can also manage this process. <a href="../contacto.html">Contact us</a> if you think you may be paying more than you should.</p>
      </div>`,

    'art.euribor.prose': `<p>The Euribor is probably the financial indicator that most affects household finances in Spain. Millions of Spanish mortgages have their monthly payment directly tied to this index, which can rise or fall each year. Understanding what the Euribor is, why it fluctuates, and how it affects your mortgage is essential for making smart mortgage decisions in 2026.</p>

      <h2>What Is the Euribor and How Is It Calculated?</h2>
      <p>The <strong>Euribor</strong> (Euro Interbank Offered Rate) is the interest rate at which the main European banks lend money to each other at short notice. It is not a rate set by the European Central Bank (ECB), but the result of a daily average calculated from estimates submitted by the leading financial institutions in the eurozone.</p>
      <p>Euribor exists at different maturities (one week, one month, three months, six months, twelve months), but the one used as a reference for most variable-rate mortgages in Spain is the <strong>12-month Euribor</strong>. It is published every business day by the European Money Markets Institute (EMMI) and reflects the cost of money in the European interbank market.</p>

      <div class="info-box">
        <p><strong>Key fact:</strong> the Euribor is not set directly by the ECB, but ECB monetary policy is the main driver of its level. When the ECB raises rates to curb inflation, the Euribor rises. When it cuts rates to stimulate the economy, the Euribor tends to fall.</p>
      </div>

      <h2>History of the Euribor: From Historic Lows to the Rate-Hiking Cycle</h2>
      <p>To understand the current Euribor it is essential to know its recent history. These are the most relevant milestones:</p>
      <ul>
        <li><strong>2009–2015:</strong> following the global financial crisis, the ECB began an ultra-low rate policy. The Euribor entered a prolonged decline.</li>
        <li><strong>2016:</strong> the 12-month Euribor turned negative for the first time in history, reaching lows of -0.5% in 2021. Those with variable mortgages enjoyed exceptionally low payments.</li>
        <li><strong>2022:</strong> runaway inflation in Europe forced the ECB to begin the most aggressive rate-hiking cycle in its history. The Euribor went from -0.5% in January 2022 to above 4% in 2023, sending the payments of millions of mortgage holders sharply higher.</li>
        <li><strong>2024–2025:</strong> with inflation under control, the ECB resumed rate cuts. The Euribor began a gradual decline.</li>
        <li><strong>2026:</strong> the Euribor is at moderate levels, around 2.5–3%, with prospects for stabilisation or slight further decline according to forecasts from leading economic organisations.</li>
      </ul>

      <h2>How the Euribor Affects Your Variable-Rate Mortgage</h2>
      <p>If you have a <strong>variable-rate mortgage</strong>, your interest rate is calculated by adding the Euribor to the fixed margin you agreed with the bank when signing. For example, if your mortgage is "Euribor + 0.75%", and the Euribor at the time of the annual review stands at 2.5%, your applied interest rate will be 3.25%.</p>
      <p>That rate is applied to the outstanding capital to calculate the new monthly payment. A rise in the Euribor translates directly into a higher payment. A fall produces a lower payment.</p>

      <h3>Practical example of an annual review</h3>
      <p>Consider a mortgage of €200,000 over 25 years at Euribor + 0.75%:</p>
      <table>
        <thead><tr><th>Euribor</th><th>Applied rate</th><th>Approx. monthly payment</th></tr></thead>
        <tbody>
          <tr><td>-0.50% (2021)</td><td>0.25%</td><td>~€797</td></tr>
          <tr><td>4.00% (2023)</td><td>4.75%</td><td>~€1,130</td></tr>
          <tr><td>2.50% (2026)</td><td>3.25%</td><td>~€974</td></tr>
        </tbody>
      </table>
      <p>As you can see, the difference between the historic low and the 2023 peak represented over €330 per month for this profile, meaning almost €4,000 more per year. This illustrates the real risk of a variable-rate mortgage.</p>

      <h2>The Euribor in 2026: Current Situation and Outlook</h2>
      <p>In 2026, the 12-month Euribor is in a stabilisation phase following the 2022–2023 hiking cycle and the cuts begun in 2024. The forecasts of leading analysts point to a Euribor that will remain in the 2%–3% range during 2026, with the possibility of further declines if the ECB continues to ease monetary policy.</p>
      <p>For those whose variable mortgage is reviewed in 2026, this means an improvement relative to the 2023 peaks, though well above the -0.5% lows. The environment is significantly more favourable than two years ago, but it remains relevant to assess whether a fixed or variable rate is the better option.</p>

      <h2>Fixed vs. Variable Mortgage: What Makes Sense in 2026 Given the Euribor?</h2>
      <p>This is the key question many of our clients ask. There is no single answer, as it depends on your profile and circumstances, but these are the key points to consider:</p>

      <h3>Arguments in favour of a fixed rate in 2026</h3>
      <ul>
        <li>Absolute certainty about the payment for the entire life of the loan.</li>
        <li>Current fixed rates, while higher than in 2020–2021, remain historically reasonable (around 2.8–3.5% for good profiles).</li>
        <li>If the Euribor rises again in the future (due to new inflation or other factors), a fixed rate protects you completely.</li>
        <li>Recommended if you have low risk tolerance or if the payment represents a high percentage of your income.</li>
      </ul>

      <h3>Arguments in favour of a variable rate in 2026</h3>
      <ul>
        <li>If the Euribor continues to fall, your payment will decrease automatically.</li>
        <li>The margins banks offer on variable products (Euribor + 0.5%/0.75%) can be competitive if the Euribor stays below 2%.</li>
        <li>Suitable if you plan to make significant early repayments over the next few years.</li>
      </ul>

      <h3>The mixed option as a middle ground</h3>
      <p>A <strong>mixed mortgage</strong> offers an initial fixed-rate period (typically 5–10 years) followed by a variable phase referenced to the Euribor. It is an interesting option if you believe the Euribor will fall in the medium term but want stability in the first years. To learn more, see our guide <a href="hipoteca-fija-variable-mixta.html">Fixed, Variable or Mixed Mortgage: Which to Choose in 2026?</a></p>

      <h2>Practical Tips for Variable-Rate Mortgage Holders</h2>
      <p>If you already have a variable-rate mortgage and the Euribor concerns you, these are the levers you can activate:</p>
      <ul>
        <li><strong>Lender subrogation:</strong> transfer your mortgage to another bank offering better conditions or switch to a fixed rate.</li>
        <li><strong>Novation:</strong> negotiate directly with your current bank to modify the loan conditions.</li>
        <li><strong>Partial early repayment:</strong> if you have savings, reducing the outstanding capital lessens the impact of Euribor rises on your payment.</li>
      </ul>
      <p>At <a href="../hipotecas.html">NortFinance</a> we analyse your current situation and advise whether it makes sense to renegotiate your existing mortgage or whether market conditions justify a subrogation. The consultation is free and without obligation.</p>

      <h2>Conclusion: The Euribor Is a Variable, Not a Fate</h2>
      <p>The Euribor is not under your control, but you can design a mortgage strategy that minimises your exposure to its volatility. Choosing wisely between fixed, variable, and mixed products, negotiating a low margin if you opt for variable, and maintaining a financial buffer are the keys to making sure the Euribor doesn't keep you awake at night.</p>
      <p>If you have questions about how the Euribor affects your specific case or are considering changing your current mortgage, <a href="../contacto.html">contact us</a> for a free personalised analysis.</p>`,

    'art.nores.prose': `<p>Spain is one of the most popular destinations for property purchases by foreign nationals and Spanish citizens resident abroad. However, obtaining a mortgage as a non-resident in Spain is a more complex process than for a resident: conditions differ, documentation requirements are more extensive, and not all banks work with this profile. In this guide we explain everything you need to know to secure mortgage financing in Spain without being a resident.</p>

      <h2>Who Is Considered a Non-Resident for Mortgage Purposes?</h2>
      <p>For banking and tax purposes in Spain, a <strong>non-resident</strong> is any individual who does not spend more than 183 days per year in Spanish territory and who is therefore not required to file income tax (IRPF) in Spain. This includes both foreign nationals with or without a NIE, and Spanish citizens habitually resident abroad.</p>
      <p>For the bank, the key criterion is not nationality but <strong>tax residency</strong>: where you are taxed and where you earn your income. A German citizen who has been living and working in Barcelona for ten years is taxed in Spain as a resident. A Spanish citizen working in London is taxed in the UK and would be treated as a non-resident for mortgage purposes.</p>

      <h2>Key Differences Between Resident and Non-Resident Mortgages</h2>
      <p>The main differences a non-resident will encounter when applying for a mortgage in Spain are as follows:</p>

      <h3>Maximum financing percentage: 60–70%</h3>
      <p>While a resident can obtain financing of up to <strong>80% of the surveyed value</strong>, a non-resident typically receives a maximum of <strong>60–70%</strong>. This means the non-resident buyer will need savings of around 30–40% of the purchase price, plus purchase costs (between 8% and 12% depending on the region).</p>

      <div class="info-box">
        <p><strong>Example:</strong> for a property costing €400,000, a non-resident who secures 70% financing will need €120,000 as a deposit plus approximately €40,000–€48,000 in costs. In total, between €160,000 and €168,000 of their own funds.</p>
      </div>

      <h3>Interest rates and conditions</h3>
      <p>Banks apply somewhat more conservative conditions to non-residents, partly because the risk of default is more difficult to manage when the borrower is abroad and legal proceedings in the event of non-payment are more complex. However, with a strong financial profile and a well-prepared file, it is possible to obtain very competitive conditions.</p>

      <h3>Maximum loan term</h3>
      <p>The usual maximum term for non-residents is 20–25 years, compared with 30–35 years available for residents. This increases the monthly payment relative to what a resident with the same loan amount would pay.</p>

      <h2>Documentation Required for Non-Residents</h2>
      <p>The documentation banks require for a non-resident mortgage is more extensive than for a resident, and part of it may need to be translated and apostilled:</p>

      <h3>Personal documentation</h3>
      <ul>
        <li>Valid passport (or national ID for EU citizens).</li>
        <li>NIE (Número de Identificación de Extranjero), mandatory for any property transaction in Spain.</li>
        <li>Tax residency certificate from the country where you are taxed.</li>
      </ul>

      <h3>Income documentation (evidenced in the country of residence)</h3>
      <ul>
        <li>Last 3–6 payslips or equivalent in the country of employment, with a certified translation into Spanish if the bank requires it.</li>
        <li>Tax return for the last financial year in the country of fiscal residence.</li>
        <li>Employment contract or evidence of professional activity.</li>
        <li>Bank statements for the last 6 months for the main account.</li>
      </ul>

      <h3>Property documentation</h3>
      <ul>
        <li>Land registry extract (nota simple).</li>
        <li>Reservation contract or deposit payment (if one exists).</li>
      </ul>

      <h2>Taxes and Fiscal Obligations for Non-Residents in Spain</h2>
      <p>Being a non-resident property owner in Spain involves specific fiscal obligations worth knowing before you buy:</p>
      <ul>
        <li><strong>ITP or VAT:</strong> on purchase, the same taxes apply as for residents: ITP (6–10% depending on region) for second-hand properties or 10% VAT for new builds.</li>
        <li><strong>IRNR (Non-Residents Income Tax):</strong> even if the property is not rented out, the Spanish Tax Agency imputes a notional income and requires the payment of an annual tax (generally 1.1% or 2% of the cadastral value multiplied by the applicable tax rate).</li>
        <li><strong>Wealth Tax:</strong> if the value of assets in Spain exceeds €700,000 (or less in some regions), the non-resident may be subject to this tax.</li>
        <li><strong>Capital gains withholding:</strong> on the future sale of the property, a 3% withholding is applied on the sale price, which the buyer remits directly to the Tax Agency as an advance against the potential gain of the non-resident seller.</li>
      </ul>
      <p>We recommend consulting a tax adviser before completing the transaction to optimise the tax structure from the outset.</p>

      <h2>Best Banks for Non-Resident Mortgages in Spain</h2>
      <p>Not all banks have a specific product for non-residents. Some of the main lenders that typically work with this profile are those with an international presence or that have developed specialist departments for foreign clients. The key is not to go to the bank with the most advertising, but to the one with genuine experience and appetite for this type of transaction.</p>
      <p>At <a href="../hipotecas.html">NortFinance</a> we know which lenders have the best programmes for non-residents at any given point in the market and how to present each file in the most favourable way. Not all banks are equally receptive, and the intermediary's experience makes a decisive difference to the outcome.</p>

      <h2>How a Mortgage Broker Helps the Non-Resident</h2>
      <p>For a non-resident, the value of a mortgage broker like NortFinance is especially high for several reasons:</p>
      <ul>
        <li><strong>Local market knowledge:</strong> we know which banks work well with non-residents and the real conditions under which they approve these transactions.</li>
        <li><strong>Remote process management:</strong> we coordinate all documentation and the process without the buyer having to make unnecessary trips to Spain.</li>
        <li><strong>Optimal file presentation:</strong> we know how to present income in a foreign currency, how to validate payslips from other countries, and how to anticipate the objections banks will raise.</li>
        <li><strong>Negotiation of conditions:</strong> we achieve margins and terms that a client arriving alone at a bank rarely obtains.</li>
        <li><strong>Coordination with notary and registry:</strong> we accompany through to signing, including managing a notarial power of attorney if you cannot be present in Spain on the day of signing.</li>
      </ul>
      <p>Also see our <a href="documentacion-necesaria-hipoteca.html">mortgage documentation guide</a> for a full picture of the process.</p>

      <h2>Conclusion: It Is Possible, but Requires Preparation</h2>
      <p>Obtaining a mortgage in Spain as a non-resident is perfectly achievable. The process is more complex than for a resident, requires greater savings in advance, and demands a more carefully prepared file. With the right guidance and the right banks, the process can be completed in timescales similar to those for a resident.</p>
      <p>If you are thinking of buying a property in Spain from abroad, <a href="../contacto.html">contact NortFinance</a> for a free initial consultation. We analyse your situation, explain the real conditions you can achieve, and manage the entire process.</p>`,

    'art.perfil.prose': `<p>When a bank analyses a mortgage application, what it is assessing is the risk of the client not paying. Each bank has its own scoring models, but all share the same analytical pillars: solvency, stability, credit history, and capital. Understanding what the bank looks at and how you can improve each of those pillars is the difference between receiving a "yes" and "we're sorry, but at this time we are unable to help you".</p>

      <h2>The Five Pillars Banks Assess</h2>
      <p>Before discussing how to improve your profile, it is important to understand what factors a bank actually weighs when studying your mortgage file:</p>
      <ol>
        <li><strong>Income and employment stability:</strong> how much you earn and how secure it is that you will continue to earn it.</li>
        <li><strong>Debt-to-income ratio:</strong> what percentage of your income will go towards paying debts (including the new mortgage).</li>
        <li><strong>Credit history:</strong> whether you have made payments punctually in the past.</li>
        <li><strong>Savings and assets:</strong> how much capital you are contributing and what financial buffer you will have after the purchase.</li>
        <li><strong>The property:</strong> its surveyed value, liquidity, and characteristics.</li>
      </ol>

      <h2>How to Improve Your Credit History</h2>
      <p>Credit history is the first filter banks apply. They consult databases such as CIRBE (the Bank of Spain's Credit Risk Register), adverse credit files such as ASNEF or RAI, and their own internal history if you are already a customer.</p>

      <h3>If you appear on a credit reference file</h3>
      <p>If you have an unpaid debt registered in ASNEF or RAI, obtaining a mortgage from the vast majority of mainstream banks is practically impossible. The solution is:</p>
      <ul>
        <li>Pay the debt and request removal from the file (the creditor is obliged to notify the file within a maximum of ten business days of payment).</li>
        <li>If the debt is statute-barred or the data is incorrect, you can apply for removal directly from the file.</li>
      </ul>
      <p>Waiting for the debt to disappear through limitation (which takes several years) is not a reasonable strategy if your goal is to obtain a mortgage in the short to medium term.</p>

      <h3>If you have returned direct debits or isolated incidents</h3>
      <p>Minor incidents such as returned direct debits, occasional late payments, or credit cards with an outstanding balance affect the bank's internal scoring. To improve this situation:</p>
      <ul>
        <li>Regularise all outstanding payments at least 6 months before the mortgage application.</li>
        <li>Cancel credit cards you don't use: even without a balance, the bank treats them as potential risk.</li>
        <li>Avoid applying for new loans or financing in the months before applying for the mortgage, as each credit bureau enquiry can damage your score.</li>
      </ul>

      <h2>Reducing the Debt-to-Income Ratio</h2>
      <p>The <strong>debt-to-income ratio</strong> is the percentage of your monthly net income you allocate to debt repayments. The general bank criterion is that this ratio should not exceed 35–40%, including the future mortgage payment.</p>
      <p>For example, if you earn €3,000 net per month and have a car loan with a €400 payment, the bank considers you have only €650–€800 available for the mortgage (35% of €3,000 = €1,050, minus the €400 = €650). If the mortgage payment you need exceeds that figure, the bank will likely decline the application.</p>

      <h3>Strategies for reducing the ratio</h3>
      <ul>
        <li><strong>Clear personal or car loans</strong> before applying for the mortgage. If you have sufficient savings, it can sometimes be worth paying off early even if there is a cancellation charge.</li>
        <li><strong>Reduce credit card balances</strong>: the bank takes into account the available limit, not just the amount used.</li>
        <li><strong>Delay the purchase</strong> if you are just months away from finishing repayment of a significant loan.</li>
      </ul>

      <h2>Employment Stability: The Factor That Carries the Most Weight</h2>
      <p>For the bank, employment stability is the guarantee that the income shown in today's payslips will still exist tomorrow. The ideal profile is an employee with a <strong>permanent contract and more than two years' seniority</strong> with the same employer.</p>

      <h3>If you have a temporary contract</h3>
      <p>This is not an insurmountable obstacle, but the bank will be more conservative. You can improve your position by:</p>
      <ul>
        <li>Demonstrating sector continuity even if you have changed employer.</li>
        <li>Submitting a complete employment history showing solid experience and few gaps.</li>
        <li>If you are in the process of moving to a permanent contract, waiting for that moment can make a real difference.</li>
      </ul>

      <h3>If you are self-employed</h3>
      <p>Mortgages for self-employed applicants require specific file preparation. See our dedicated guide: <a href="hipoteca-autonomo.html">How to Get a Mortgage as a Self-Employed Person in Spain</a>.</p>

      <h2>Increasing Savings: Larger Deposit, Better Conditions</h2>
      <p>The deposit percentage is one of the factors that most influences the bank's response and the conditions it offers. It is not just about meeting the 20% minimum; the larger the deposit, the lower the bank's risk and the better the conditions you will receive.</p>

      <h3>The post-purchase buffer is equally important</h3>
      <p>Banks value it highly when, after completing the purchase and paying all costs, the applicant maintains a savings buffer of at least 3–6 months' mortgage payments. A client who arrives at signing with nothing to spare generates more uncertainty than one who maintains reserves. Plan ahead to have that buffer available.</p>

      <h2>How a Broker Presents Your Profile Optimally</h2>
      <p>Even with a solid profile, the way the file is presented makes real differences to the outcome. An experienced mortgage broker knows:</p>
      <ul>
        <li><strong>Which banks to approach for each profile:</strong> not all banks have the same appetite for the same type of client. Some favour profiles with high salaries but few savings; others reward the capital contributed. The broker knows each lender's risk policies.</li>
        <li><strong>How to structure documentation:</strong> the order, clarity, and completeness of the file influence the speed and direction of the bank's response.</li>
        <li><strong>How to anticipate objections:</strong> if there is a weak point in the profile (employment seniority, variable income, outstanding debt), the broker addresses it proactively with supporting arguments and documentation rather than leaving the bank's risk analyst to interpret it at their discretion.</li>
        <li><strong>When to wait and when to act:</strong> sometimes the right strategy is to wait 3–6 months to improve a specific aspect of the profile before applying. The broker honestly tells you whether it is worth waiting or whether you can already obtain a reasonable mortgage in current conditions.</li>
      </ul>
      <p>At <a href="../hipotecas.html">NortFinance</a> that is precisely what we do. Before approaching banks, we analyse your profile in detail, identify your strengths and areas for improvement, and define the most effective strategy for your specific situation. Request your free study from <a href="../contacto.html">our contact page</a>.</p>

      <h2>Summary: The Action Plan to Improve Your Profile</h2>
      <p>If your goal is to obtain a mortgage in the next 6–12 months, this is the action plan ordered by impact:</p>
      <ol>
        <li>Check your status in CIRBE and adverse credit files. Cancel any registered debts.</li>
        <li>Reduce or eliminate personal loans, car finance, and credit card balances.</li>
        <li>Maximise your monthly savings and protect the post-purchase buffer.</li>
        <li>Avoid unnecessary job changes in the months before the application.</li>
        <li>Talk to a broker before approaching any bank to understand your real viability and the most appropriate strategy.</li>
      </ol>
      <p>Also see our <a href="documentacion-necesaria-hipoteca.html">complete mortgage documentation guide</a> to make sure you have everything ready when the time comes.</p>`,

    'art.bcn.prose': `<p>Barcelona is one of the most dynamic and competitive property markets in Spain. House prices in the Catalan capital rank among the highest in the country, supply is limited, and demand — both domestic and international — is consistently high. Buying a property in Barcelona requires solid financial preparation and, in most cases, the support of a mortgage broker with in-depth knowledge of the local market.</p>

      <h2>The Barcelona Property Market in 2026</h2>
      <p>The Barcelona housing market has for years been characterised by structurally limited supply and sustained demand. In 2026, the average price per square metre in the city of Barcelona stands at around <strong>€4,800–€5,200/m²</strong>, with very significant variation across districts.</p>

      <h3>Prices by area in 2026</h3>
      <table>
        <thead><tr><th>Area</th><th>Average price €/m²</th><th>Profile</th></tr></thead>
        <tbody>
          <tr><td>Sarrià-Sant Gervasi / Les Corts</td><td>6,500–8,500</td><td>Premium / families</td></tr>
          <tr><td>Eixample</td><td>5,500–7,000</td><td>Central, high demand</td></tr>
          <tr><td>Gràcia</td><td>4,800–6,200</td><td>Bohemian, very sought-after</td></tr>
          <tr><td>Sant Martí / Poblenou</td><td>4,500–5,800</td><td>Tech hub, growing</td></tr>
          <tr><td>Nou Barris / Sant Andreu</td><td>2,800–3,800</td><td>Accessible, appreciating</td></tr>
        </tbody>
      </table>

      <div class="info-box">
        <p><strong>To put it in perspective:</strong> an 80 m² flat in the Eixample can cost between €440,000 and €560,000. With 80% financing, you need around €100,000 as a deposit plus between €55,000 and €70,000 in costs. A total of between €155,000 and €170,000 of your own funds. Financial planning is not optional.</p>
      </div>

      <h2>Factors That Make the Barcelona Market Distinctive</h2>
      <p>The Barcelona property market has certain characteristics that set it apart from the rest of Spain:</p>

      <h3>Price pressure and limited supply</h3>
      <p>Barcelona has for years had housing demand far exceeding the supply of new builds. Planning restrictions, the difficulty of obtaining new licences in certain districts, and the pressure from the tourism and short-let market have created a market where properties sell quickly. In the most sought-after areas, the best opportunities are closed within days.</p>

      <h3>Significant international demand</h3>
      <p>Barcelona attracts buyers from across Europe, Latin America, and the Middle East, both for primary residence and as a second home or investment. This raises buyer pressure and competition at the higher price ranges. For domestic buyers, this sometimes means competing with purchasers paying cash or with pre-approved financing.</p>

      <h3>Rent regulation and its effect on purchase prices</h3>
      <p>Rent regulation policies in Barcelona have had a complex effect on the market: in some cases they have discouraged landlords from putting properties on the rental market, further compressing the rental supply and pushing more people towards buying. Owner-occupation remains the priority option for many families living in the city.</p>

      <h2>How Mortgages Work in Barcelona: Specific Considerations</h2>
      <p>The mortgage process in Barcelona follows the same general rules as the rest of Spain, but there are specific aspects of the local market worth bearing in mind:</p>

      <h3>More complex surveys for the old housing stock</h3>
      <p>Barcelona has a very old housing stock, particularly in the Eixample (buildings from the 19th and early 20th century) and the historic neighbourhoods. Surveys of these properties can be more complex, with surveyed values that sometimes fall short of the market price. This can reduce the effective financing you receive from the bank.</p>

      <h3>ITP in Catalonia</h3>
      <p>Catalonia applies an <strong>ITP of 10%</strong> on second-hand properties (the highest in Spain alongside regions such as Galicia). For new builds, the standard 10% VAT applies plus 1.5% Stamp Duty (AJD). These costs must be covered by your savings before applying for the mortgage. Use our <a href="../recursos.html">mortgage simulator</a> to calculate the full costs of your transaction in Catalonia.</p>

      <h3>The speed of the market demands pre-approval</h3>
      <p>In the most sought-after neighbourhoods of Barcelona, waiting until you have an offer on a specific flat to then start the mortgage process is a strategic mistake. Sellers prefer buyers with confirmed financing, and the best properties don't wait. Working with a broker who can obtain bank pre-approval before the search begins puts you in a far stronger negotiating position.</p>

      <h2>Why Use a Mortgage Broker in Barcelona</h2>
      <p>In a market as competitive and as high-priced as Barcelona, the mortgage broker's role carries especially high value:</p>

      <h3>Access to the best market conditions</h3>
      <p>For mortgages at higher amounts (from €250,000–€300,000 upwards), the differences in the interest rate between the direct bank offer and what a broker can negotiate are particularly significant. A 0.3% difference on a €350,000 mortgage over 25 years means more than €15,000 in interest savings over the life of the loan.</p>

      <h3>Knowledge of the banks with the best presence in Catalonia</h3>
      <p>Not all banks have the same mortgage appetite in Barcelona. Some have more agile local teams, more favourable risk policies for the old Barcelona housing stock, or better products for specific profiles. A local broker knows these nuances and applies them directly to your file.</p>

      <h3>Managing the pre-approval process</h3>
      <p>At <a href="../hipotecas.html">NortFinance</a>, before our clients make a serious offer on a flat in Barcelona, we work to obtain a bank pre-approval letter that allows them to negotiate from a position of strength. This step is essential in today's Barcelona market.</p>

      <h3>Full accompaniment in a complex process</h3>
      <p>Buying a property in Barcelona involves coordinating with an estate agent, notary, land registry, administrative agency, surveyor, and bank. An experienced broker in the local market facilitates all of this coordination and reduces process timescales, which is especially valuable when there are signed reservation agreements and deadlines to meet.</p>

      <h2>Which Areas of Barcelona Are Worth Buying in 2026?</h2>
      <p>The answer depends on your budget, your objective (residence or investment), and your risk appetite. These are the trends in the Barcelona market in 2026:</p>
      <ul>
        <li><strong>Poblenou and Sant Martí:</strong> a neighbourhood in transformation with an upward trajectory, especially around the @22 district and the Vila Olímpica. Prices still below the Eixample with appreciation potential.</li>
        <li><strong>Gràcia and the Born:</strong> consistent demand, good liquidity for future sale, but high prices and little new supply.</li>
        <li><strong>L'Hospitalet de Llobregat and the metropolitan area:</strong> for buyers looking for more space on a contained budget. L'Hospitalet is virtually integrated with Barcelona urbanistically and its prices are significantly more accessible.</li>
        <li><strong>Badalona and Sant Adrià:</strong> valid options for families with good central connections and prices that allow a more accessible deposit.</li>
      </ul>
      <p>For a personalised analysis of your specific case in Barcelona, <a href="../contacto.html">contact NortFinance</a>. We know the market first-hand and can guide you on both property search and the most suitable mortgage strategy.</p>

      <h2>Summary: Keys to Buying a Property with a Mortgage in Barcelona</h2>
      <ol>
        <li>Prepare the necessary savings: between 30% and 35% of the purchase price (deposit plus costs with Catalonia's 10% ITP).</li>
        <li>Work with a broker to obtain bank pre-approval before making offers.</li>
        <li>Bear in mind the complexity of surveys on old-stock properties.</li>
        <li>Act quickly: in the most sought-after neighbourhoods, the best properties close fast.</li>
        <li>Consider the metropolitan area if the budget doesn't stretch to Barcelona city.</li>
      </ol>
      <p>Also see our <a href="guia-hipotecaria-completa.html">complete mortgage guide</a> to understand the entire process from the start.</p>`,

    'art.seg.prose': `<p>Buying a second property in Spain is a significant financial decision: it may be a holiday home, a city pied-à-terre, or an investment for rental income. Whatever the motivation, mortgage conditions for a second home differ markedly from those for a primary residence. Understanding these differences before starting the process will allow you to plan correctly and avoid surprises.</p>

      <h2>Why Is a Second-Home Mortgage Different?</h2>
      <p>The Spanish banking system treats financing for a primary residence and a second home differently. The reason is risk: faced with financial difficulty, a borrower will always prioritise payment of their main home mortgage over that of a second property. This perception of greater risk translates into more restrictive conditions across the board: financing percentage, interest rate, and documentation requirements.</p>

      <h2>Financing Percentage: The Key Differentiator</h2>
      <p>The most significant difference between the two types of mortgage is the <strong>maximum financing percentage</strong>. While for a primary residence banks typically finance up to <strong>80% of the surveyed value</strong> (and in certain special schemes up to 90–100% for young buyers), for a second home the usual limit is between <strong>60% and 75%</strong>.</p>
      <p>This has direct implications for your savings requirements. If you want to buy a second home valued at €300,000, you will need between €75,000 and €120,000 just as a deposit (25–40% of the price), plus an additional 10–12% to cover transaction costs.</p>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Primary Residence</th>
            <th>Second Home</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maximum financing</td>
            <td>Up to 80%</td>
            <td>60–75%</td>
          </tr>
          <tr>
            <td>Minimum deposit required</td>
            <td>20% + costs</td>
            <td>25–40% + costs</td>
          </tr>
          <tr>
            <td>Interest rate</td>
            <td>More competitive</td>
            <td>+0.1 to +0.5 points</td>
          </tr>
          <tr>
            <td>Maximum term</td>
            <td>Up to 40 years</td>
            <td>Usually 20–25 years</td>
          </tr>
        </tbody>
      </table>

      <h2>Interest Rate: Typical Premium for Second Homes</h2>
      <p>Banks apply an additional premium on the interest rate for second-home mortgages, generally between <strong>0.1 and 0.5 percentage points</strong> above what they would offer for a primary residence. In a context where fixed rates range between 3% and 3.8%, this premium can represent between €15,000 and €30,000 in additional total cost over the life of the loan.</p>
      <p>This is one of the reasons why having a mortgage broker is especially valuable for second-home transactions: the variation in conditions between lenders is greater, and some banks apply significantly better terms than others for this type of financing.</p>

      <h2>Requirements for a Second-Home Mortgage</h2>

      <h3>Demonstrable financial capacity</h3>
      <p>Banks will require that the new mortgage payment, combined with all your existing debts (including the mortgage on your primary residence if you have one), does not exceed <strong>35–40% of your monthly net income</strong>. If you already have a mortgage in progress, this threshold becomes more restrictive and many applicants fall outside the criteria of mainstream banks.</p>

      <h3>Evidenced savings and origin of capital</h3>
      <p>Given the larger deposit required, the bank will want to verify that you have the necessary funds and that their origin is legitimate. Bank statements for the past 6–12 months will be requested, and for higher-value transactions a declaration of the origin of funds may be required.</p>

      <h3>Stable employment profile</h3>
      <p>A permanent contract with over two years' seniority is the optimal profile. Self-employed applicants and those on temporary contracts will face stricter criteria, though financing is not impossible: the key is to present a particularly solid file. See our <a href="documentacion-necesaria-hipoteca.html">mortgage documentation guide</a> to be as well prepared as possible.</p>

      <h3>Absence of excessive financial commitments</h3>
      <p>The fewer active debts you have at the time of application, the greater your borrowing capacity in the bank's eyes. If you have car loans, credit card balances, or other financial commitments, it is advisable to reduce them before starting the application.</p>

      <h2>Taxation: Important Differences from a Primary Residence</h2>
      <p>A second home has less favourable tax treatment than a primary residence in several respects:</p>

      <h3>Property Transfer Tax (ITP)</h3>
      <p>On the purchase of a second-hand second home, ITP applies in the same way as for any other transaction. The rate varies by region, ranging from <strong>6% in Madrid to 10% in Catalonia or the Valencian Community</strong>. There are no specific reliefs for second homes, unlike what exists for primary residences in some regions.</p>

      <h3>Income tax: notional property income</h3>
      <p>If the second home is not rented out, the Tax Agency will impute a <strong>notional property income</strong> in your income tax return. The amount is 2% of the cadastral value (or 1.1% if the cadastral value has been revised in the past 10 years). This annual tax cost must be factored into any return-on-investment calculation if the purchase is viewed as an investment.</p>

      <h3>Home purchase deduction</h3>
      <p>The primary residence purchase deduction was abolished for most taxpayers in 2013. A second home never gives rise to a deduction under national income tax rules, regardless of when it was acquired.</p>

      <h2>Banks That Offer Good Terms on Second Homes</h2>
      <p>Not all banks have the same appetite for second-home financing. Some, particularly those positioned in the high-net-worth or coastal tourism market, offer especially competitive terms for this segment. Private banks and investment banking units are often more flexible than retail banking.</p>
      <p>At <a href="../hipotecas.html">NortFinance</a> we work with a broad panel of lenders and know which offer the best conditions for each profile. For second-home transactions, the choice of bank and the presentation of the file are decisive factors.</p>

      <h2>The Broker's Role in Second-Home Transactions</h2>
      <p>Second-home mortgages are transactions where the value of a mortgage broker is at its highest for several reasons:</p>
      <ul>
        <li>The variation in conditions between lenders is greater than for primary residences.</li>
        <li>File presentation is more critical: the bank analyses the applicant's overall financial profile in more detail.</li>
        <li>Some banks, without the intermediary of a broker, do not offer their second-home product at all or do so on much worse terms.</li>
        <li>For complex profiles (self-employed, non-residents, mixed income), the broker can access specialist lenders the client would not know about.</li>
      </ul>
      <p>You can learn more about the working process in our <a href="guia-hipotecaria-completa.html">complete mortgage guide</a>.</p>

      <h2>Second Home as an Investment?</h2>
      <p>If the motivation is to invest for rental income, the financial analysis changes. The mortgage payment must be compared with the expected rental income, after deducting management costs, maintenance, vacancies, and council tax. In tourist areas with high short-let demand, gross yields can exceed 6–8%, making the investment viable even at current rates. In areas with lower demand, the return may be insufficient to justify the financing cost.</p>
      <p>If you are considering an investment purchase and need guidance on financial viability, write to us at <a href="../contacto.html">NortFinance</a> for a preliminary assessment with no commitment.</p>`,


    'art.broker.prose': `<p>If you are looking for a mortgage, you have probably come across the term "mortgage broker". But what exactly do they do? How do they differ from going directly to a bank? When do they charge, and how much? In this article we answer all these questions with complete transparency, because we believe an informed client makes better decisions.</p>

      <h2>What Is a Mortgage Broker?</h2>
      <p>A mortgage broker — also known as a real estate credit intermediary — is a professional or firm that acts as an intermediary between a mortgage applicant and lending institutions. Unlike a bank employee, who can only offer products from their own institution, the broker works with a panel of banks and searches for the best option for each individual client.</p>
      <p>In Spain, mortgage brokers are regulated by <strong>Law 5/2019 on Real Estate Credit Contracts</strong> and must be registered with the Bank of Spain or the CNMV as real estate credit intermediaries. This legal framework ensures the broker acts with transparency and in the client's interest.</p>

      <h2>What a Mortgage Broker Does: Step by Step</h2>

      <h3>1. Initial analysis and viability assessment</h3>
      <p>The process begins with a meeting (in person or by video call) in which the broker analyses your complete financial situation: income, savings, debts, employment status, and the amount and type of property you want to purchase. With this information, they can tell you from the outset what your real viability is and what mortgage you can achieve.</p>
      <p>This preliminary analysis, which NortFinance offers free of charge, avoids wasting time applying for mortgages that banks will decline, and prevents you from being subject to CIRBE enquiries (the Bank of Spain's Credit Risk Register) that could harm your credit record.</p>

      <h3>2. File preparation and optimisation</h3>
      <p>Once viability is confirmed, the broker works with you to prepare the documentation in the most favourable way possible. This includes selecting which documents to present first, how to explain special circumstances (recent job change, variable income, rental income), and how to structure the transaction to maximise approval chances.</p>
      <p>Presenting the file is an art. The same financial profile, presented in two different ways, can generate radically different responses from banks. The broker's experience makes the difference here. See our <a href="guia-hipotecaria-completa.html">complete mortgage guide</a> to understand how the overall process works.</p>

      <h3>3. Simultaneous approach to multiple banks</h3>
      <p>The broker submits your file simultaneously to several banks on their panel. This has two major advantages over doing it yourself:</p>
      <ul>
        <li>Access to conditions banks reserve for the broker channel that are not available to walk-in customers.</li>
        <li>The process is faster: instead of going bank by bank over weeks, you receive several responses in a short period.</li>
        <li>Your file "moves" only once: you reduce CIRBE enquiries and present a more organised image to lenders.</li>
      </ul>

      <h3>4. Negotiation of conditions</h3>
      <p>When offers come in from banks, the broker doesn't accept the first one received. They actively negotiate the conditions: interest rate, fees, tied products, and specific clauses. Having established relationships with the commercial teams at each bank, the broker can secure improvements that a private client rarely achieves on their own.</p>
      <p>The concrete result of this negotiation can range from a reduction of 0.1 points in the interest rate (which over 25 years can represent more than €10,000 in savings) to the elimination of fees or improved early repayment terms.</p>

      <h3>5. Accompaniment through to signing</h3>
      <p>The broker's work doesn't end when the bank says yes. It extends through to the notarial signing, coordinating with the surveyor, the administrative agency, and the notary, reviewing the FEIN and FIAE, explaining each clause before you sign, and ensuring there are no last-minute surprises.</p>

      <h2>When Does the Broker Charge, and How Much?</h2>
      <p>This is the point that generates the most questions. The answer is clear: <strong>the mortgage broker only charges if the transaction completes successfully</strong>. In other words, their fee is paid at the moment of signing before the notary. There are no upfront payments, no fees if the mortgage is not approved.</p>
      <p>This remuneration model has a name in the industry: <strong>"no mortgage, no fee"</strong>. It completely aligns the broker's interests with the client's: the broker only earns if you get your mortgage.</p>
      <p>As for the amount, broker fees typically range between <strong>0.5% and 1% of the loan amount</strong>. At NortFinance we are transparent from the very first meeting: we tell you the exact amount before you decide to work with us, with no small print.</p>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>With a broker</th>
            <th>Directly with the bank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of lenders approached</td>
            <td>8–15 institutions</td>
            <td>1–3 institutions</td>
          </tr>
          <tr>
            <td>Management time</td>
            <td>Delegated to broker</td>
            <td>All on the client</td>
          </tr>
          <tr>
            <td>Access to broker-channel terms</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Professional negotiation</td>
            <td>Yes</td>
            <td>Limited</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>0.5–1% only if signed</td>
            <td>Free (but worse terms)</td>
          </tr>
        </tbody>
      </table>

      <h2>Is the Broker's Cost Worth It?</h2>
      <p>The right question is not how much the broker charges, but how much they save you. If the broker achieves a 0.2 percentage point improvement on a €250,000 mortgage over 25 years, the saving in interest exceeds <strong>€12,000</strong>. Against a fee of €2,000–€2,500, the return on investment is clear.</p>
      <p>But beyond the direct financial saving, the broker adds another value that is hard to quantify: the peace of mind of knowing your transaction is being managed by a professional who has completed hundreds of similar deals, who knows each bank's risk criteria, and who will defend your interests at every step.</p>

      <h2>How NortFinance Works: Our Process</h2>
      <p>At <a href="../hipotecas.html">NortFinance</a> we have refined our working process to combine maximum efficiency with the personal attention that a decision of this magnitude deserves. This is how we work:</p>
      <ol>
        <li><strong>Free first meeting:</strong> viability analysis with no commitment and no cost. If we don't see a viable transaction, we tell you honestly.</li>
        <li><strong>Study and preparation:</strong> we prepare your file with the right documents in the format each bank prefers.</li>
        <li><strong>Approach to the bank panel:</strong> we access our panel of financial institutions simultaneously.</li>
        <li><strong>Presentation of offers:</strong> you receive a comparative analysis of all offers received, with our reasoned recommendation.</li>
        <li><strong>Negotiation:</strong> we work to improve the best offer before presenting it to you as final.</li>
        <li><strong>Accompaniment through to signing:</strong> we coordinate every step and are available to resolve any queries.</li>
      </ol>
      <p>If you want to improve your profile before starting the process, see our guide on <a href="mejorar-perfil-hipotecario.html">how to improve your mortgage profile</a>. And when you are ready, you can <a href="../contacto.html">contact us directly</a> for the first meeting.</p>

      <h2>When Does a Broker Make the Most Sense?</h2>
      <p>Although a broker adds value in any transaction, there are situations where their role is especially relevant:</p>
      <ul>
        <li><strong>Complex profiles:</strong> self-employed individuals, workers with variable income, people with an imperfect credit history.</li>
        <li><strong>Second-home or investment transactions:</strong> where the variation in conditions between banks is greater.</li>
        <li><strong>Non-residents:</strong> a profile with very limited access to the conventional bank channel.</li>
        <li><strong>Larger loan amounts:</strong> the larger the mortgage, the greater the potential saving in absolute terms.</li>
        <li><strong>Limited time available:</strong> delegating bank management frees up valuable time.</li>
        <li><strong>First-time buyers:</strong> comprehensive advice avoids costly mistakes in an unfamiliar transaction.</li>
      </ul>`,

    'art.cuanto.prose': `<p>"How much will the bank lend me?" It is without doubt the first question every home buyer asks before beginning their search. And understandably so: knowing your real borrowing capacity determines the price range worth searching in, the savings you need, and whether it makes sense to apply for a mortgage alone or with a co-borrower. The answer, however, is not a fixed number: it depends on your salary, your existing debts, your contract type, and the percentage the bank is willing to finance against the surveyed value. In this article we break down the formula banks use, provide real examples, and give you the key steps to maximise your borrowing capacity before sitting down to negotiate.</p>

      <h2>The 35% Rule: The Bank's Debt Limit</h2>

      <p>Banks in Spain broadly apply a basic principle: <strong>the monthly mortgage payment must not exceed 35% of the net monthly income</strong> of the applicant or household. Some institutions are slightly more flexible — reaching 40% — when the profile is very creditworthy, but 35% remains the industry standard threshold.</p>

      <p>This limit is not arbitrary. The Bank of Spain and responsible lending regulations require institutions to assess repayment capacity not just today but under stress scenarios: a 3-point Euribor rise, a temporary income reduction, or an unexpected large expense. The margin below 35% is the buffer that ensures the loan is sustainable over the long term.</p>

      <h3>How the debt-to-income ratio is calculated</h3>

      <p>The formula is simple but there is an important detail: <strong>the bank adds all your existing debts</strong>, not just the mortgage you want to take out. If you already have a car loan with a payment of €250/month, that amount counts within the 35%. The calculation is:</p>

      <p><strong>Debt-to-income ratio = (Mortgage payment + all other debt payments) ÷ Net monthly income × 100</strong></p>

      <p>The table below shows the maximum monthly payment the bank permits and the approximate mortgage that corresponds to that payment, calculated at a fixed rate of 3.5% over 25 years, with no prior debts:</p>

      <table>
        <thead>
          <tr>
            <th>Net income/month</th>
            <th>Maximum payment (35%)</th>
            <th>Approx. loan amount (3.5% · 25 years)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>€1,500</td>
            <td>€525</td>
            <td>~€90,000</td>
          </tr>
          <tr>
            <td>€2,000</td>
            <td>€700</td>
            <td>~€121,000</td>
          </tr>
          <tr>
            <td>€2,500</td>
            <td>€875</td>
            <td>~€151,000</td>
          </tr>
          <tr>
            <td>€3,000</td>
            <td>€1,050</td>
            <td>~€181,000</td>
          </tr>
          <tr>
            <td>€4,000</td>
            <td>€1,400</td>
            <td>~€242,000</td>
          </tr>
        </tbody>
      </table>

      <p>Bear in mind that extending the term to 30 years increases the loan amount you can finance, though it raises the total interest cost. At 30 years and the same rate of 3.5%, the amounts above would increase by approximately 10–12%.</p>

      <h2>How Much the Bank Finances: The 80% of Surveyed Value Rule</h2>

      <p>Passing the debt test is not the only filter. The bank also limits the <strong>mortgage to 80% of the surveyed value</strong> of the property — or the purchase price if that is lower. This means that regardless of how much you can afford to pay each month, you will need to have saved at least 20% plus purchase costs.</p>

      <h3>The surveyed value vs. purchase price problem</h3>

      <p>In a rising market like the current one, the surveyed value does not always match the market price. If the official surveyor values the flat at €280,000 but the seller is asking €300,000, the bank will lend a maximum of €224,000 (80% of €280,000). The difference of €76,000 — the €20,000 gap between surveyed value and price plus the 20% deposit — will need to come from your own funds.</p>

      <p>This scenario is more common than it appears, particularly in major cities. This is why it is essential to obtain an indicative survey before signing the reservation deposit or preliminary contract, not afterwards.</p>

      <div class="info-box">
        <p><strong>Practical savings rule:</strong> to buy a property in Spain you need to have saved, as a minimum, <strong>20% of the purchase price as a deposit</strong> plus an additional <strong>10–15% to cover costs</strong> (taxes, notary fees, land registry, administrative agency, and survey). In total, plan to have between 30% and 35% of the property price before starting the process. See our <a href="gastos-compra-vivienda.html">complete guide to purchase costs</a> for a detailed breakdown.</p>
      </div>

      <h2>Factors That Increase or Reduce What You Can Borrow</h2>

      <p>The 35% rule and the 80% limit are the starting point, but the bank's risk analysis goes much further. These are the factors that most frequently affect — for better or worse — the final amount granted:</p>

      <h3>Number of borrowers</h3>

      <p>Applying for a mortgage with two borrowers is the most effective way to increase borrowing capacity. Banks add the income of both parties, which immediately raises the 35% ceiling. A couple with combined income of €4,500/month has significantly greater borrowing capacity than either person individually. If your individual profile is not sufficient for the property you want, adding a co-borrower — whether partner, family member, or joint owner — is the most direct lever available.</p>

      <h3>Type of employment contract</h3>

      <p>The bank does not value a permanent contract at a large company the same as a six-month temporary contract. The perceived stability of income is crucial. In general, the order of preference is: <strong>civil servant or permanent public employee &gt; permanent contract &gt; permanent seasonal contract &gt; temporary contract &gt; self-employed with stable income &gt; self-employed with variable income</strong>. Self-employed workers can access competitive mortgages, but need to demonstrate at least two or three years of consistent business performance. For more detail on this profile, see our article on <a href="hipoteca-autonomo.html">mortgages for self-employed applicants</a>.</p>

      <h3>Existing debts</h3>

      <p>Every active debt — personal loan, car finance, minimum credit card payment — reduces the margin available within the 35%. A car loan of €300/month for someone with a €2,500 net income does not eliminate the possibility of getting a mortgage, but it significantly reduces it: the mortgage payment ceiling drops from €875 to €575, implying a mortgage of around €100,000 rather than €151,000. Clearing existing debts before applying for a mortgage is, in many cases, the most financially profitable decision you can make.</p>

      <h3>Employment seniority</h3>

      <p>Banks value continuity in the same role or company. Someone on a permanent contract with three years' seniority offers much greater security than someone recently hired, even if both have the same salary. The probationary period is particularly problematic: many institutions require it to have been completed, or simply wait until the client has been with the employer for at least six months. If you are in the process of changing jobs, it may be worth waiting until your new position is consolidated before starting the mortgage process.</p>

      <h2>Practical Examples of Borrowing Capacity</h2>

      <p>Theory becomes clearer with concrete cases. Below are three common profiles and an estimate of what the bank could lend them, assuming a fixed-rate mortgage at 3.5% over 25 years with no additional guarantors:</p>

      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Net income</th>
            <th>Prior debts</th>
            <th>Max. payment</th>
            <th>Approx. mortgage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single · permanent contract</td>
            <td>€2,000/month</td>
            <td>None</td>
            <td>€700</td>
            <td>~€121,000</td>
          </tr>
          <tr>
            <td>Couple · two salaries</td>
            <td>€4,500/month</td>
            <td>Car loan €250/month</td>
            <td>€1,325</td>
            <td>~€229,000</td>
          </tr>
          <tr>
            <td>Self-employed · 3 years' activity</td>
            <td>€3,000/month (average)</td>
            <td>None</td>
            <td>€1,050</td>
            <td>~€181,000*</td>
          </tr>
        </tbody>
      </table>

      <p>*In the case of the self-employed applicant, the bank may apply a discount to the declared income or require greater product tie-ins. The actual amount will depend on the lender's criteria and file presentation.</p>

      <h2>How to Maximise What the Bank Will Lend You</h2>

      <p>Before approaching a bank, there are several concrete actions that can significantly improve your negotiating position and the capital you will be granted:</p>

      <ul>
        <li><strong>Clear consumer debts.</strong> Personal loans, credit card debts, or appliance finance reduce your available monthly payment. If you can pay them off with your savings before applying for the mortgage, your capacity increases proportionally.</li>
        <li><strong>Add a creditworthy co-borrower.</strong> Combined income is the most powerful multiplier. Even if the second borrower's income is modest, their addition can make the difference between approval and rejection.</li>
        <li><strong>Improve employment contract stability.</strong> If you have a permanent contract offer, wait until you have signed it and passed the probationary period before submitting the application. The cost of waiting a few months may be far less than that of accepting worse conditions.</li>
        <li><strong>Increase your upfront savings.</strong> If you can contribute more than 20% as a deposit — say 30% or 35% — the bank takes on less risk and typically offers better conditions and greater flexibility on the amount.</li>
        <li><strong>Submit the application with an organised file.</strong> A well-documented file — payslips, income tax returns, employment history, bank statements with no overdrafts — conveys solvency and reduces the risk analyst's doubts. Read our guide on <a href="documentacion-necesaria-hipoteca.html">mortgage documentation</a> to make sure nothing is missed.</li>
        <li><strong>Use a mortgage broker.</strong> An intermediary with access to multiple lenders can identify which bank has the most favourable risk criteria for your specific profile, and present your file optimally to each one.</li>
      </ul>

      <p>To explore this topic further, we recommend our article <a href="mejorar-perfil-hipotecario.html">how to improve your mortgage profile</a>, where you will find more detailed strategies to strengthen your application.</p>

      <h2>NortFinance's Simulator</h2>

      <p>If you want a quick, indicative estimate before meeting with us, on our <a href="../recursos.html">resources page</a> you will find a mortgage calculator that lets you enter your income, term, and interest rate to get an estimated monthly payment and the corresponding loan amount in seconds.</p>

      <p>Bear in mind that the simulator provides a mathematical reference, not a pre-approval. The bank's final decision depends on a complete risk analysis that includes variables no calculator can replicate: credit history, stability of the sector you work in, the institution's internal scoring, or the actual surveyed value of the specific property you want to buy. To obtain a personalised and binding assessment, the next step is to speak with an adviser.</p>

      <div class="info-box">
        <p><strong>Important:</strong> the amounts calculated in this article are indicative and based on market conditions prevailing in May 2026. Each bank applies its own risk criteria, and the actual result may differ depending on the applicant's complete profile and the institution chosen.</p>
      </div>`,

    'art.gastos.prose': `<p>Buying a property in Spain costs considerably more than the sale price shown in the listing. One of the most frequent surprises for first-time buyers is discovering — already after the reservation deposit has been signed — that they need far more money than they had budgeted. The golden rule we use at NortFinance is simple: <strong>add between 10% and 15% on top of the purchase price to cover costs and taxes alone</strong>. In some cases, when regional taxes are high, that percentage can exceed 15%. This guide breaks down every cost, item by item, so there are no surprises at the notary.</p>

      <h2>Taxes: The Largest Cost When Buying a Property</h2>

      <p>Taxes represent, by far, the largest additional outlay on top of the purchase price. The type of tax you will pay depends fundamentally on whether the property is a new build or second-hand, and — for second-hand — on the region where the property is located.</p>

      <h3>ITP for second-hand properties</h3>

      <p>When buying a second-hand home, you pay the <strong>Impuesto de Transmisiones Patrimoniales (ITP)</strong> — Property Transfer Tax — a tax devolved to the regions, which explains the wide geographical variation. Each region sets its own rates, with reliefs for specific groups such as young buyers, large families, and people with disabilities. Below are the general rates in force in 2026:</p>

      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>General ITP rate</th>
            <th>Notable reliefs</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Andalusia</td><td>7%</td><td>3.5% for young buyers and large families</td></tr>
          <tr><td>Aragon</td><td>8%</td><td>5% for under-35s (up to €100,000)</td></tr>
          <tr><td>Asturias</td><td>8%</td><td>3% for young buyers (primary residence)</td></tr>
          <tr><td>Balearic Islands</td><td>8% – 11%</td><td>Progressive scale by value</td></tr>
          <tr><td>Canary Islands</td><td>6.5%</td><td>Very competitive reduced rate</td></tr>
          <tr><td>Cantabria</td><td>10%</td><td>5% for under-30s</td></tr>
          <tr><td>Castilla-La Mancha</td><td>9%</td><td>6% for young buyers and large families</td></tr>
          <tr><td>Castilla y León</td><td>8%</td><td>4% for under-36s (up to €135,000)</td></tr>
          <tr><td>Catalonia</td><td>10%</td><td>5% for under-33s and people with disabilities</td></tr>
          <tr><td>Ceuta</td><td>6%</td><td>—</td></tr>
          <tr><td>Community of Madrid</td><td>6%</td><td>Single rate, no bands</td></tr>
          <tr><td>Valencian Community</td><td>10%</td><td>8% for under-35s (primary residence)</td></tr>
          <tr><td>Extremadura</td><td>8% – 11%</td><td>Progressive scale; 7% for young buyers</td></tr>
          <tr><td>Galicia</td><td>10%</td><td>3% for under-36s and large families</td></tr>
          <tr><td>La Rioja</td><td>7%</td><td>5% for young buyers and depopulated areas</td></tr>
          <tr><td>Melilla</td><td>6%</td><td>—</td></tr>
          <tr><td>Murcia</td><td>8%</td><td>3% for under-35s</td></tr>
          <tr><td>Navarre</td><td>6%</td><td>Own foral regime</td></tr>
          <tr><td>Basque Country</td><td>4%</td><td>Foral regime; very low rate</td></tr>
        </tbody>
      </table>

      <p>ITP is calculated on the purchase price or on the reference value set by the Tax Agency (whichever is higher). Since 2022, the Tax Agency applies the cadastral reference value as the minimum tax base, which in some transactions can mean paying ITP on an amount higher than the agreed price. It is essential to check this before signing.</p>

      <h3>VAT + Stamp Duty for new builds</h3>

      <p>When buying a new-build property directly from the developer, you do not pay ITP but rather <strong>VAT plus Stamp Duty (AJD)</strong>:</p>

      <ul>
        <li><strong>VAT:</strong> the standard rate is <strong>10%</strong> of the purchase price. For protected housing (VPO) the rate is reduced to 4%.</li>
        <li><strong>Stamp Duty (AJD):</strong> varies by region but generally falls between <strong>0.5% and 1.5%</strong> of the price written into the deed. In Catalonia, for example, it is 1.5%; in Madrid it is 0.75%.</li>
      </ul>

      <div class="info-box">
        <p><strong>Is new build or second-hand more expensive in tax terms?</strong> In most regions, second-hand properties carry a higher tax burden. In Catalonia, for example, a second-hand property is taxed at 10% ITP, while a new build pays 10% VAT plus 1.5% AJD (total: 11.5%). In Madrid the difference is more striking: second-hand attracts 6% ITP, while new build involves 10% VAT + 0.75% AJD (10.75%). The comparison changes dramatically in the Basque Country, where the 4% ITP makes second-hand properties always far cheaper in tax terms.</p>
      </div>

      <h2>Notary Fees</h2>

      <p>The notarial deed of sale before a notary is mandatory in order to register ownership in the Land Registry. Notary fees are regulated by the state through official tariffs, so there is no room to negotiate the price, though you can choose your notary.</p>

      <h3>Purchase deed vs. mortgage deed</h3>

      <p>There is a detail many buyers are unaware of: since the approval of <strong>Law 5/2019 on Real Estate Credit Contracts</strong>, the bank is required to bear the notary costs for the mortgage deed. The buyer only pays for the purchase deed and their copy. Notary fees for the purchase depend on the property price and the number of pages in the deed, but for typical transactions between €200,000 and €400,000 the costs range between <strong>€600 and €1,200</strong>. For higher-value transactions or those with more parties or charges, the amount may be somewhat higher.</p>

      <p>Additionally, the notary charges for any extra copies you request. Each simple copy carries a small cost, but if you need several certified copies (for the bank, registry, administrative agency, etc.) the total may increase by a further €100–€300.</p>

      <h2>Land Registry Fees</h2>

      <p>Once the purchase deed has been signed before the notary, the document must be registered with the Land Registry for the transfer to be enforceable against third parties. Registry tariffs are also regulated and are proportional to the purchase price. For transactions between €200,000 and €500,000, registry fees typically fall between <strong>€400 and €800</strong>.</p>

      <p>As with the notary, the registration of the mortgage deed has been at the bank's expense since 2019. The buyer only bears the cost of registering the purchase deed. This legislative change represented a significant saving for buyers, as previously buyers paid all the costs of creating the mortgage.</p>

      <h2>Administrative Agency</h2>

      <p>The administrative agency (gestoría) handles tax liquidation, submits the deed to the registry, and coordinates all documents between the various authorities. Their fees are not regulated, so there is more variability in price. The usual cost is between <strong>€300 and €600</strong>, though some agencies charge by the hour or per specific item.</p>

      <p>When a mortgage is formalised, the bank usually insists on its own administrative agency to handle the mortgage paperwork. The costs of that agency, since 2019, are borne by the bank. However, for the purchase side, the buyer is free to choose their own agency or the one the bank recommends. In any case, it is worth getting a written quote before commissioning the work.</p>

      <h2>Property Survey</h2>

      <p>If you are financing the purchase with a mortgage, the bank will require an <strong>official survey</strong> carried out by a valuation firm accredited by the Bank of Spain. The survey determines the value on which the bank will calculate the financing percentage (usually 80%). You cannot use the seller's survey or any informal valuation: it must be a survey commissioned either by yourself or by the bank, signed by an accredited surveyor.</p>

      <p>The cost of the survey depends on the property type and size, but for a standard residential property prices range between <strong>€300 and €600</strong>. Since the 2019 Real Estate Credit Act, the buyer has the right to submit their own survey to the bank, which can be advantageous if the surveyed value supports a higher level of financing.</p>

      <h2>Summary: How Much Money Do You Need in Savings?</h2>

      <p>Adding up all the above costs, the table below shows an estimate of the total savings needed for different purchase prices, taking into account both the 20% deposit and the costs. The examples compare Madrid (ITP 6%) and Catalonia (ITP 10%) as reference regions at opposite ends of the spectrum, for second-hand transactions:</p>

      <table>
        <thead>
          <tr>
            <th>Purchase price</th>
            <th>Deposit (20%)</th>
            <th>Costs Madrid (~8%)</th>
            <th>Costs Catalonia (~12%)</th>
            <th>Total Madrid</th>
            <th>Total Catalonia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>€200,000</td>
            <td>€40,000</td>
            <td>€16,000</td>
            <td>€24,000</td>
            <td><strong>€56,000</strong></td>
            <td><strong>€64,000</strong></td>
          </tr>
          <tr>
            <td>€300,000</td>
            <td>€60,000</td>
            <td>€24,000</td>
            <td>€36,000</td>
            <td><strong>€84,000</strong></td>
            <td><strong>€96,000</strong></td>
          </tr>
          <tr>
            <td>€400,000</td>
            <td>€80,000</td>
            <td>€32,000</td>
            <td>€48,000</td>
            <td><strong>€112,000</strong></td>
            <td><strong>€128,000</strong></td>
          </tr>
          <tr>
            <td>€500,000</td>
            <td>€100,000</td>
            <td>€40,000</td>
            <td>€60,000</td>
            <td><strong>€140,000</strong></td>
            <td><strong>€160,000</strong></td>
          </tr>
        </tbody>
      </table>

      <p>The cost percentages shown are estimates that include ITP, notary fees, land registry, administrative agency, and survey. For mortgage-financed transactions, the notary and land registry costs for the mortgage are paid by the bank. Actual costs will vary according to the exact price, the region, whether any tax relief applies, and whether the transaction is mortgage-financed or cash.</p>

      <div class="info-box">
        <p><strong>NortFinance's practical rule:</strong> budget for <strong>30–35% of the purchase price between deposit and costs</strong>. If you are buying in a region with high ITP (Catalonia, Valencian Community, Galicia) plan for 35%. If buying in Madrid, the Basque Country, or the Canary Islands, 28–30% may be sufficient. This rule is deliberately conservative: it is better to overestimate the savings needed than to fall short on the day of signing.</p>
      </div>

      <h2>How to Reduce Purchase Costs</h2>

      <p>Although many costs are fixed or regulated, there are several legitimate strategies for reducing the tax burden and optimising transaction costs:</p>

      <ul>
        <li><strong>Take advantage of regional reliefs.</strong> If you are under 35, have a large family, or a recognised disability, check whether your region offers a reduced ITP rate. In some cases the saving can amount to several thousand euros.</li>
        <li><strong>Verify the cadastral reference value before signing.</strong> If the reference value assigned by the Tax Agency is higher than the purchase price, it may be worth requesting an expert counter-valuation to challenge the tax base. A tax lawyer can advise you on this.</li>
        <li><strong>Negotiate the purchase price.</strong> Every euro you reduce from the purchase price also reduces the ITP base. In transactions where there is room to negotiate, achieving a 2–3% reduction means a direct tax saving proportional to the applicable rate.</li>
        <li><strong>Consider new builds if buying in high-ITP regions.</strong> In Catalonia or the Valencian Community, a new-build property may attract less tax in practice than a second-hand one if the price difference between the two is not very large.</li>
        <li><strong>Choose your administrative agency carefully.</strong> Unlike notary or registry fees, agency fees are negotiable. Request quotes from several and compare. The difference between agencies can be €200–€300.</li>
      </ul>

      <p>To plan your transaction with all the information you need, also consult our guide on <a href="cuanto-puedo-pedir-hipoteca.html">how much I can borrow</a> and the <a href="documentacion-necesaria-hipoteca.html">documentation required for the purchase</a>.</p>`,


    'art.mejores.prose': `<p>Every week thousands of people search online for "best mortgages 2026" hoping to find a definitive list naming the right bank. The reality is that such a list doesn't exist — or at least not in any universal sense. The best mortgage is not a static product that works equally for everyone: it is the one that best suits <strong>your specific profile</strong>, your risk appetite, your time horizon, and the conditions a particular bank is willing to offer you personally. This guide won't tell you which bank is "the best" — that changes every month and depends on your case — but it will give you all the tools to identify it and negotiate it.</p>

      <h2>The Mortgage Market Context in 2026</h2>

      <p>To understand which mortgages are competitive in 2026, it is essential to set the market context. The rate-hiking cycle the ECB began in 2022 is over: following the gradual cuts of 2024 and 2025, the 12-month Euribor — the reference index for most variable-rate mortgages in Spain — is at levels significantly lower than the late-2023 peaks. This has had a double effect: fixed rates have come down from the cycle's highs, and variable mortgages are no longer the punitively expensive option they were a year ago.</p>

      <p>The result is a more competitive mortgage market with a wider range of valid options than in recent years. The gap between fixed and variable has narrowed, which brings the strategic decision of which type to choose back onto the table.</p>

      <h3>Current fixed rates: 2.9% – 3.8% nominal</h3>

      <p>Fixed-rate mortgages in 2026 sit, for creditworthy profiles with high product tie-ins, in the range of <strong>2.9% to 3.3% nominal</strong>. For standard profiles or those with fewer tie-ins, rates move between <strong>3.3% and 3.8% nominal</strong>. Two years ago these same products exceeded 4%, so the current environment is notably more favourable for those who want the security of a fixed rate.</p>

      <h3>Current variable rates: Euribor + 0.5% – 1.2%</h3>

      <p>Variable-rate mortgages are structured as a spread over the 12-month Euribor. The best spreads in the 2026 market for prime profiles sit at around <strong>Euribor + 0.50%</strong>, while the market average is around <strong>Euribor + 0.80% – 1.00%</strong>. With the Euribor at moderate levels, the current payment on a variable mortgage is lower than on an equivalent fixed mortgage, but with the risk that rates rise again in the future.</p>

      <h3>Current mixed rates: first fixed phase 2.5% – 3.2%, then variable</h3>

      <p>Mixed mortgages have gained significant popularity in recent years and remain a highly relevant option in 2026. They offer a <strong>fixed rate for the first 5, 10, or 15 years</strong> — typically between 2.5% and 3.2% nominal — and then switch to variable with a generally competitive spread (Euribor + 0.60% – 0.90%). They are particularly attractive for buyers who plan to make accelerated capital repayments during the fixed phase, or who are willing to accept variability further down the line in exchange for a better initial rate than a pure fixed product.</p>

      <h2>Which Mortgage Is Best in 2026: Fixed, Variable, or Mixed?</h2>

      <p>The short answer is: it depends on your profile and your risk appetite. The full answer requires analysing several factors. The table below summarises the key characteristics of each type:</p>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Fixed mortgage</th>
            <th>Variable mortgage</th>
            <th>Mixed mortgage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Payment stability</td>
            <td>Total throughout the life</td>
            <td>Changes with Euribor annually</td>
            <td>Fixed in first phase, then variable</td>
          </tr>
          <tr>
            <td>Initial interest rate</td>
            <td>2.9% – 3.8% nominal</td>
            <td>Euribor + 0.5% – 1.2%</td>
            <td>2.5% – 3.2% nominal (fixed phase)</td>
          </tr>
          <tr>
            <td>Ideal for</td>
            <td>Risk-averse, long-term planning</td>
            <td>Expecting low rates, short term or early repayment</td>
            <td>Buyers with a 10–15 year horizon or planning to repay early</td>
          </tr>
          <tr>
            <td>Main risk</td>
            <td>Overpaying if rates fall sharply</td>
            <td>Euribor rise making payment more expensive</td>
            <td>Uncertainty after the fixed phase</td>
          </tr>
          <tr>
            <td>Early repayment charge</td>
            <td>Up to 2% (first 10 years) / 1.5% (remainder)</td>
            <td>Max 0.25% (5 years) / 0% after</td>
            <td>By phase; similar to fixed during fixed period</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box">
        <p><strong>The market moment favours the fixed rate.</strong> With the Euribor at moderate levels but no guarantee it will continue falling — or that it won't bounce back — the fixed rate offers a very attractive risk/reward equation in 2026. The monthly payment difference between fixed and variable has narrowed considerably, and the certainty of no surprises for 20–30 years has real value that doesn't appear in any calculator. For most primary-residence buyers, the fixed-rate mortgage remains the most prudent option in the current context. To explore this decision in depth, read our detailed analysis of <a href="hipoteca-fija-variable-mixta.html">fixed, variable or mixed mortgages</a>.</p>
      </div>

      <h2>The 5 Factors That Define a Good Mortgage</h2>

      <p>Comparing mortgages solely on the nominal interest rate is one of the most common and most costly mistakes buyers make. A mortgage with the lowest nominal rate on the market can end up being more expensive than another with a slightly higher nominal rate if it carries high fees or requires onerous product tie-ins. These are the five factors that determine the true quality of a mortgage offer:</p>

      <h3>1. The interest rate (nominal and APR)</h3>

      <p>The <strong>nominal rate (TIN)</strong> is the rate applied directly to the outstanding capital to calculate the payment. It is the figure banks advertise in their campaigns. However, the indicator that actually allows you to compare the total cost of a mortgage is the <strong>APR (TAE)</strong>, which incorporates the nominal rate plus all fees and costs expressed on an annualised basis. The Real Estate Credit Act requires banks always to disclose the APR, and it is the number you should always demand before any comparison.</p>

      <h3>2. Fees (arrangement fee, early repayment charge)</h3>

      <p>The most relevant fees are the <strong>arrangement fee</strong> — which many banks have eliminated to remain competitive — and the <strong>early repayment charge</strong>, levied if you repay the loan before term (whether in full or in part). Spanish regulations set maximum limits: for variable mortgages, maximum 0.25% in the first three years and 0% after; for fixed mortgages, maximum 2% in the first 10 years and 1.5% thereafter. Some banks offer lower early repayment rates than the legal maximum as a selling point. If you anticipate making early repayments or subrogating the mortgage in the future, this factor takes on special importance.</p>

      <h3>3. Tied products (life insurance, home insurance, credit card)</h3>

      <p>Banks offer their best interest rates subject to taking out additional products: life insurance with the group's insurer, home insurance, a credit card with a minimum annual spend, a pension plan, or salary direct debit. Each of these products carries a real cost — annual premiums, card fees, lower returns on the pension plan compared to market funds. The trick is to calculate how much each tie-in actually costs you and compare it with the interest saving you gain. In many cases, taking out insurance with independent providers and choosing the mortgage without bonuses turns out to be cheaper in total.</p>

      <h3>4. The repayment term</h3>

      <p>The term determines the balance between monthly payment and total cost. The longer the term, the lower the monthly payment but the higher the total interest cost. Most banks offer terms of up to 30 years, though some products extend to 35 or even 40 years for young profiles. A useful exercise is to calculate the total interest cost for two different terms: the difference is usually revealing. For example, for a €200,000 loan at 3.5%, the difference between a 20-year and a 30-year term is approximately €35,000 in total interest. Paying a slightly higher monthly payment for 20 years rather than 30 can be the most profitable investment you make.</p>

      <h3>5. Maximum financing (LTV)</h3>

      <p>The <strong>LTV (Loan to Value)</strong> is the percentage of the surveyed value the bank finances. The market standard is 80%, but some lenders offer up to 90% or even 100% for very creditworthy profiles or under agreements with developers. A higher LTV reduces the savings you need upfront, but implies more risk for the bank (and therefore generally worse conditions) and a larger debt burden for you from day one. If you can contribute more than 20%, doing so usually improves the rate you are offered.</p>

      <h2>The Best Banks for Mortgages in 2026</h2>

      <p>Rather than naming specific products — which change frequently — it is more useful to understand the categories of lenders and their positioning in the mortgage market:</p>

      <p><strong>Digital banks and mortgage neobanks.</strong> They have gained significant market share in recent years by offering very competitive interest rates and 100% online processes. Their advantages are price and speed. Their limitations: less flexibility for non-standard profiles (self-employed, non-residents, irregular income) and less room for negotiation once the automated system has issued a proposal. They work very well for creditworthy profiles with a fixed salary and straightforward documentation.</p>

      <p><strong>Large traditional banks.</strong> They have greater capacity to analyse complex cases and to offer personalised conditions to clients with whom they already have a relationship. Their published rates tend to be slightly less aggressive than those of digital lenders, but there is more genuine room for negotiation, especially when the client brings several banks into competition with each other. They are the usual option for self-employed applicants, non-residents, or profiles with diverse income streams.</p>

      <p><strong>Savings banks and credit cooperatives.</strong> With regional coverage, some offer very competitive conditions in their local markets, particularly for first homes in specific areas or for group members. Their digital presence is limited but the personalised service is usually notable.</p>

      <div class="info-box">
        <p><strong>The trap of mortgages with a seemingly very low rate.</strong> A nominal rate of 2.80% with no tie-ins can be exceptional. But if that same bank offers a 2.80% rate subject to taking out life insurance at €800/year, home insurance at €400/year, and a credit card with an annual fee of €120, the real cost rises considerably. Expressed as an APR, many "cheap" mortgages turn out to be more expensive than products with a slightly higher nominal rate but no tie-ins. Always demand the FEIN (European Standardised Information Sheet) and calculate the total cost with and without tie-ins before making any decision.</p>
      </div>

      <h2>Why a Mortgage Broker Achieves Better Conditions</h2>

      <p>This is perhaps the most important part of this article for anyone starting the mortgage search process. The difference between going directly to a bank and using a specialist broker is not cosmetic: it can mean differences of between 0.3 and 0.8 percentage points in the interest rate, which on a €250,000 mortgage over 25 years translates into <strong>between €12,000 and €30,000 less in total interest</strong>.</p>

      <p>Why does a broker achieve better conditions?</p>

      <ul>
        <li><strong>Simultaneous access to multiple lenders.</strong> A broker works with 10, 15 or more banks in parallel. You don't need to visit each branch, fill in each form, and wait weeks to compare. The broker does everything simultaneously and brings you the best proposals.</li>
        <li><strong>Real negotiating power.</strong> A private individual negotiates their mortgage with a bank once in a lifetime. A broker negotiates hundreds of mortgages a year with that same bank. The commercial relationship and the volume generate conditions the bank would not offer a private client.</li>
        <li><strong>Optimal file presentation.</strong> Knowing how to present each profile to each lender — which bank has the most favourable risk criteria for self-employed applicants, for non-residents, for profiles with family commitments — is a skill acquired only through experience. A poor file presented to the wrong bank can result in rejection even though the profile is perfectly financeable.</li>
        <li><strong>No cost until signing.</strong> Mortgage brokers in Spain charge their fee at the moment of signing the mortgage, and only if the transaction completes successfully. There is no cost for the analysis, comparison, or prior negotiation.</li>
      </ul>

      <p>To better understand how this process works, we recommend reading our article <a href="como-funciona-broker-hipotecario.html">how a mortgage broker works</a>.</p>

      <h2>How to Compare Mortgages Correctly</h2>

      <p>Before making any decision, these are the concrete steps for a rigorous comparison:</p>

      <ol>
        <li><strong>Use the APR, not the nominal rate.</strong> We've already explained this, but it bears repeating: the nominal rate is the interest rate; the APR is the true annualised cost that includes fees and charges. Only the APR enables you to compare products on a like-for-like basis.</li>
        <li><strong>Calculate the total cost of the loan.</strong> Add up all the payments over the full term plus the setup costs. This shows you how much you pay in total for the loan and lets you compare two mortgages with different terms in real terms, not just monthly.</li>
        <li><strong>Simulate rising Euribor scenarios for variable options.</strong> If you are considering a variable mortgage, calculate what your payment would be if the Euribor rose 1, 2, or 3 points above its current level. If that scenario creates financial stress, the variable mortgage is not for you.</li>
        <li><strong>Value the cost of tie-ins.</strong> Ask the bank for conditions with and without each tied product, calculate how much you save on the payment with each tie-in, and compare it with the real cost of the product. Sometimes contracting the tie-in makes sense; sometimes it doesn't.</li>
        <li><strong>Consider early repayment.</strong> If in the next 5–10 years you expect to receive an inheritance, a bonus, or have the capacity to repay capital, the early repayment cost is a relevant factor. Variable mortgages are significantly more flexible in this respect.</li>
        <li><strong>Don't decide based on the first bank that responds.</strong> The first bank to give you a pre-approval is not necessarily the best. Using that initial proposal as a starting point to negotiate with other lenders — or through a broker — is the right strategy.</li>
      </ol>

      <p>To deepen your understanding of the index that most affects variable mortgages, we recommend our article <a href="euribor-que-es.html">what is the Euribor and how does it affect your mortgage</a>. If you already have a mortgage and want to assess whether it makes sense to improve its conditions, read our <a href="guia-hipotecaria-completa.html">complete NortFinance mortgage guide</a>.</p>`,


    'art.madrid.prose': `
  <h2>Why do you need a mortgage broker in Madrid?</h2>
  <p>The mortgage market in Madrid is broad, but that doesn't mean every product is equally beneficial for your profile. Banks design their mortgages to maximise their margins, not to suit your particular circumstances. A mortgage broker in Madrid like NortFinance works exclusively for you: it analyses your profile, accesses offers from over 20 lenders, and negotiates on your behalf.</p>

  <h2>Profiles that benefit most from advisory services in Madrid</h2>
  <p>In Madrid we assist first-time buyers, self-employed individuals with irregular income declarations, investors seeking a second home or investment property, and expatriates looking to buy in Spain. In every case, the complexity of the process and the sums involved make it well worth working with an independent expert.</p>

  <h2>The home-buying process in Madrid with NortFinance</h2>
  <p>We work 100% remotely or in person, whichever you prefer. You don't need to be in Madrid to start the process. From the first free consultation through to signing at the notary, we accompany you at every step: viability analysis, bank comparison, negotiation of terms, and full document management.</p>

  <h2>How NortFinance works in Madrid</h2>
  <p>Our process is clear and straightforward:</p>
  <ol>
    <li><strong>Free initial call</strong> — We understand your situation and objectives. No commitment.</li>
    <li><strong>Viability analysis</strong> — We assess your profile and the real options available to you.</li>
    <li><strong>Bank comparison</strong> — We consult over 20 lenders and present the best offers.</li>
    <li><strong>Support through to signing</strong> — We manage your paperwork and guide you to the notary.</li>
  </ol>
`,

    'art.valencia.prose': `
  <h2>The mortgage market in Valencia: what you need to know</h2>
  <p>Valencia has a mortgage market with its own distinct characteristics: a stronger presence of new-build developers, high demand for second homes along the coast, and a very diverse buyer profile. Navigating this environment without specialist advice can lead you to sign up to worse conditions than those available in the market.</p>

  <h2>What does NortFinance do for buyers in Valencia?</h2>
  <p>We analyse your financial situation in depth, identify the lenders that best suit your profile, and negotiate the terms of your mortgage. In Valencia we work with both national banks operating across Spain and regional savings banks with special conditions for buyers in the Valencian Community.</p>

  <h2>New builds and second homes in Valencia</h2>
  <p>Two of the most sought-after products in Valencia are mortgages for new builds and mortgages for second homes. Both have specific features that need to be handled correctly: new-build mortgages require coordination with the stages of construction, and second-home mortgages typically finance a lower percentage of the property value. We explain everything from the outset.</p>

  <h2>How NortFinance works in Valencia</h2>
  <p>Our process is clear and straightforward:</p>
  <ol>
    <li><strong>Free initial call</strong> — We understand your situation and objectives. No commitment.</li>
    <li><strong>Viability analysis</strong> — We assess your profile and the real options available to you.</li>
    <li><strong>Bank comparison</strong> — We consult over 20 lenders and present the best offers.</li>
    <li><strong>Support through to signing</strong> — We manage your paperwork and guide you to the notary.</li>
  </ol>
`,

    'art.sevilla.prose': `
  <h2>Why a mortgage broker in Seville makes the difference</h2>
  <p>In Seville, as in the rest of Spain, banks present their mortgages in an appealing way but with nuances worth understanding: tie-in products, compulsory insurance, fees, and clauses that affect the true cost of the loan. NortFinance analyses the total cost of each offer and negotiates to remove conditions that don't work in your favour.</p>

  <h2>Special buyer profiles: self-employed and civil servants in Seville</h2>
  <p>Seville has a high proportion of civil servants and self-employed workers. Both groups have access to specific mortgage conditions they don't always know about. Civil servants can access mortgages with lower margins and higher loan-to-value ratios. Self-employed applicants require a more careful assessment of their borrowing capacity. NortFinance is well versed in these distinctions.</p>

  <h2>Remote and in-person management from Barcelona</h2>
  <p>Although NortFinance is headquartered in Barcelona, we operate across the whole of Spain. The process is primarily digital: video call meetings, digital document signing, and coordination with notaries and registries. You don't need to travel to receive the best mortgage advice for your purchase in Seville.</p>

  <h2>How NortFinance works in Seville</h2>
  <p>Our process is clear and straightforward:</p>
  <ol>
    <li><strong>Free initial call</strong> — We understand your situation and objectives. No commitment.</li>
    <li><strong>Viability analysis</strong> — We assess your profile and the real options available to you.</li>
    <li><strong>Bank comparison</strong> — We consult over 20 lenders and present the best offers.</li>
    <li><strong>Support through to signing</strong> — We manage your paperwork and guide you to the notary.</li>
  </ol>
`,

    'art.malaga.prose': `
  <h2>The mortgage market in Málaga and the Costa del Sol</h2>
  <p>Prices in Málaga city and along the Costa del Sol have risen sharply in recent years, driven by international demand and the growth of remote working. This makes financing more important than ever: small differences in the interest rate or loan conditions translate into thousands of euros per year.</p>

  <h2>Mortgages for foreign buyers in Málaga</h2>
  <p>Málaga attracts a high proportion of international buyers: British, German, Scandinavian, and Latin American, among others. Mortgages for non-residents come with different conditions — a larger deposit required, additional documentation, possible restrictions on financing — and not all banks offer them on the same terms. NortFinance has specific expertise in this segment.</p>

  <h2>Property investment in Málaga with optimised financing</h2>
  <p>Many buyers in Málaga purchase property as an investment, with a view to holiday lets or long-term capital growth. In these cases the structure of the financing is even more relevant: interest rate, term, early repayment conditions, and tie-in requirements all directly affect the return on investment. We help you make the right financial decision.</p>

  <h2>How NortFinance works in Málaga</h2>
  <p>Our process is clear and straightforward:</p>
  <ol>
    <li><strong>Free initial call</strong> — We understand your situation and objectives. No commitment.</li>
    <li><strong>Viability analysis</strong> — We assess your profile and the real options available to you.</li>
    <li><strong>Bank comparison</strong> — We consult over 20 lenders and present the best offers.</li>
    <li><strong>Support through to signing</strong> — We manage your paperwork and guide you to the notary.</li>
  </ol>
`,

    'art.ext.prose': `
  <h2>Can foreigners apply for a mortgage in Spain?</h2>
  <p>Yes. Foreign nationals — both residents and non-residents — can apply for mortgages with Spanish banks. The key is having a NIE (Número de Identificación de Extranjero, the foreign identity number), demonstrating stable income, and meeting each lender's debt-to-income requirements. Non-residents typically need to provide a larger deposit: between 30% and 40% of the property value, compared with the usual 20% for residents.</p>

  <h2>Documentation required for a mortgage as a foreign national</h2>
  <p>The documentation varies depending on your country of origin and tax status, but in general you will need: a valid NIE, passport, your last 3 payslips or home-country tax return, bank statements for the past 6 months, employment history or equivalent, and documentation for the property you intend to purchase. For self-employed foreign nationals, additional documentation of their business activity is required.</p>

  <h2>The best banks for non-resident mortgages in Spain</h2>
  <p>Not all Spanish banks have the same policy towards non-resident clients. Some apply very restrictive conditions or simply don't work with this profile at all. NortFinance knows which lenders offer the best products for foreign buyers in Spain, and negotiates on your behalf to secure the most competitive conditions in the market.</p>

  <h2>How NortFinance works in Spain</h2>
  <p>Our process is clear and straightforward:</p>
  <ol>
    <li><strong>Free initial call</strong> — We understand your situation and objectives. No commitment.</li>
    <li><strong>Viability analysis</strong> — We assess your profile and the real options available to you.</li>
    <li><strong>Bank comparison</strong> — We consult over 20 lenders and present the best offers.</li>
    <li><strong>Support through to signing</strong> — We manage your paperwork and guide you to the notary.</li>
  </ol>
`,





    }
  };

  /* ── Engine ─────────────────────────────────────────────────── */
  function applyTranslations(lang) {
    var t = T[lang] || T.es;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-html')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-placeholder')];
      if (v !== undefined) el.placeholder = v;
    });
    document.documentElement.lang = lang;
  }

  function updateSwitcher(lang) {
    var flagMap = { es: '🇪🇸', ca: '<img src="ca-flag.svg" style="width:1.3em;height:.9em;vertical-align:middle;border-radius:1px" alt="CA">', en: '🇬🇧' };
    var codeMap = { es: 'ES', ca: 'CA', en: 'EN' };
    var flagEl = document.getElementById('langCurrentFlag');
    var codeEl = document.getElementById('langCurrentCode');
    if (flagEl) flagEl.innerHTML = flagMap[lang] || flagMap.es;
    if (codeEl) codeEl.textContent = codeMap[lang] || codeMap.es;
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('lang-option--active', btn.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    try { localStorage.setItem('nf_lang', lang); } catch (e) {}
    applyTranslations(lang);
    updateSwitcher(lang);
    var dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('open');
    document.dispatchEvent(new CustomEvent('nf:langchange', { detail: { lang: lang } }));
  }

  function init() {
    var saved = 'es';
    try { saved = localStorage.getItem('nf_lang') || 'es'; } catch (e) {}

    var toggle = document.getElementById('langToggle');
    var dropdown = document.getElementById('langDropdown');

    if (toggle && dropdown) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('open');
        toggle.setAttribute('aria-expanded', dropdown.classList.contains('open'));
      });
      document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });

    if (saved !== 'es') applyTranslations(saved);
    updateSwitcher(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-sync language when browser restores page from bfcache (back/forward navigation)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      var saved = 'es';
      try { saved = localStorage.getItem('nf_lang') || 'es'; } catch (err) {}
      applyTranslations(saved);
      updateSwitcher(saved);
    }
  });
})();
