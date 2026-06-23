/* ============================================================
   Por el Poder del Espíritu Santo — interacciones de la landing
   Fuente única de datos + render + microinteracciones.
   ============================================================ */

const data = {
  speakers: [
    {
      name: "Cristian Palomares",
      image: "cristian-palomares.jpg",
      focus: "Pastoral y consejería bíblica",
      bio: "Pastor con veinte años de trayectoria. Preside ABRA e integra el consejo de Ante Su Palabra. Bachiller en Teología por el SBF y cursa una Maestría en Estudios Teológicos."
    },
    {
      name: "Greg Travis",
      image: "greg-travis.jpeg",
      focus: "Plantación y salud de iglesias",
      bio: "Miembro del concilio de Coalición por el Evangelio. Misionero de SERVE y pastor de la Iglesia Bíblica Reformada de Denton, Texas. Ayuda a pastores e iglesias a ser más saludables."
    },
    {
      name: "Dardo Leandi",
      image: "dardo-leandi.webp",
      focus: "Iglesia local y sana doctrina",
      bio: "Pastor de la Iglesia Bautista Misionera de la C.A.B.A. y miembro del consejo de Ante Su Palabra. Sirve en la promoción de la sana doctrina y la edificación de iglesias locales."
    },
    {
      name: "Samuel E. Masters",
      image: "samuel-masters.jpeg",
      focus: "Formación teológica",
      bio: "Pastor fundador de la Iglesia Bíblica Bautista Crecer, presidente de The Crecer Foundation y rector del Seminario Bíblico William Carey. Vive en Argentina hace más de tres décadas."
    },
    {
      name: "Ricardo Daglio",
      image: "ricardo-daglio.jpeg",
      focus: "Revitalización y plantación",
      bio: "Pastor con amplia trayectoria en Uruguay y Argentina. Sirve en la Iglesia Bíblica Villa Regina y en la plantación de una nueva iglesia en General Roca. Integra la junta de Ante Su Palabra."
    },
    {
      name: "Osvaldo Fuentes",
      image: "osvaldo-fuentes.webp",
      focus: "Entrenamiento bíblico",
      bio: "Oriundo de Chile, sirve en la Iglesia Bíblica Berea de North Hollywood, California, y se entrena en The Master's Seminary, donde acompaña los programas en español."
    }
  ],

  schedule: [
    {
      day: "Viernes",
      date: "11 de septiembre",
      items: [
        { time: "17:00", type: "Recepción", rest: true },
        {
          time: "18:00",
          type: "Bienvenida · Alabanza · Plenaria 1",
          title: "El Espíritu Santo y las Escrituras",
          speaker: "Pr. Ricardo Daglio",
          notes: "Bienvenida: Pr. Dardo Leandi · Alabanza: 3 canciones"
        },
        { time: "—", type: "Refrigerio y stands", rest: true },
        {
          time: "20:00",
          type: "Alabanza · Plenaria 2",
          title: "La espiritualidad bíblica",
          speaker: "Pr. Samuel E. Masters",
          notes: "Alabanza: 2 canciones"
        }
      ]
    },
    {
      day: "Sábado",
      date: "12 de septiembre",
      items: [
        {
          time: "09:00",
          type: "Alabanza · Plenaria 3",
          title: "Intelectualidad y el Espíritu",
          speaker: "Pr. Osvaldo Fuentes",
          notes: "Alabanza: 3 canciones"
        },
        {
          time: "11:00",
          type: "Alabanza · Plenaria 4",
          title: "El poder del Espíritu Santo en el evangelismo",
          speaker: "Pr. Dardo Leandi",
          notes: "Alabanza: 2 canciones"
        },
        { time: "—", type: "Almuerzo y stands", rest: true },
        {
          time: "14:30",
          type: "Alabanza · Plenaria 5",
          title: "El Espíritu en la vida y el ministerio pastoral",
          speaker: "Pr. Greg Travis",
          notes: "Alabanza: 2 canciones"
        },
        {
          time: "16:30",
          type: "Alabanza · Plenaria 6",
          title: "El modelo ministerial de Cristo para la iglesia",
          speaker: "Pr. Cristian Palomares",
          notes: "Alabanza: 3 canciones"
        },
        { time: "Cierre", type: "Tiempo de gratitud", rest: true }
      ]
    }
  ],

  specs: [
    { label: "Costo", value: "$40.000 ARS", note: "Incluye almuerzo" },
    { label: "Modalidad", value: "Presencial" },
    { label: "Audiencia", value: "Público general" },
    { label: "Cupos", value: "Limitados", note: "Inscribite con anticipación" },
    { label: "Contacto", value: '<a href="mailto:contacto@antesupalabra.com">contacto@antesupalabra.com</a>' }
  ],

  eventStart: "2026-09-11T17:00:00-03:00"
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
};
const pad = (n) => String(n).padStart(2, "0");

/* ---------- Render: oradores ---------- */
function renderSpeakers() {
  const root = document.querySelector("[data-speakers]");
  if (!root) return;
  data.speakers.forEach((s, i) => {
    const card = el("article", "speaker");
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="speaker-photo">
        <span class="speaker-num">${pad(i + 1)}</span>
        <img src="04_assets/speakers/${s.image}" alt="${s.name}" loading="lazy" decoding="async">
      </div>
      <div class="speaker-body">
        <h3>${s.name}</h3>
        <p class="speaker-focus">${s.focus}</p>
        <p class="speaker-bio">${s.bio}</p>
      </div>`;
    root.append(card);
  });
}

/* ---------- Render: cronograma ---------- */
function renderSchedule() {
  const root = document.querySelector("[data-schedule]");
  if (!root) return;
  data.schedule.forEach((block) => {
    const day = el("article", "day");
    const list = el("ol", "day-items");
    block.items.forEach((item) => {
      const li = el("li", `slot ${item.title ? "is-plenary" : "is-rest"}`);
      let detail = `<p class="slot-type">${item.type}</p>`;
      if (item.title) detail += `<p class="slot-title">${item.title}</p>`;
      if (item.speaker) detail += `<p class="slot-speaker">${item.speaker}</p>`;
      if (item.notes) detail += `<p class="slot-notes">${item.notes}</p>`;
      li.innerHTML = `<div class="slot-time">${item.time}</div><div class="slot-detail">${detail}</div>`;
      list.append(li);
    });
    day.innerHTML = `<header class="day-head"><span class="day-label">${block.day}</span><span class="day-date">${block.date}</span></header>`;
    day.append(list);
    root.append(day);
  });
}

/* ---------- Render: información práctica ---------- */
function renderSpecs() {
  const root = document.querySelector("[data-info]");
  if (!root) return;
  data.specs.forEach((s) => {
    const row = el("div", "spec");
    row.innerHTML = `<dt>${s.label}</dt><dd>${s.value}${s.note ? `<span>${s.note}</span>` : ""}</dd>`;
    root.append(row);
  });
}

/* ---------- Cuenta regresiva ---------- */
function initCountdown() {
  const root = document.querySelector("[data-countdown]");
  if (!root) return;
  const target = new Date(data.eventStart).getTime();
  const out = {
    days: root.querySelector('[data-cd="days"]'),
    hours: root.querySelector('[data-cd="hours"]'),
    minutes: root.querySelector('[data-cd="minutes"]'),
    seconds: root.querySelector('[data-cd="seconds"]')
  };

  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      root.querySelector(".countdown-label").textContent = "¡Ya comenzó!";
      Object.values(out).forEach((n) => (n.textContent = "00"));
      return false;
    }
    const s = Math.floor(diff / 1000);
    out.days.textContent = Math.floor(s / 86400);
    out.hours.textContent = pad(Math.floor((s % 86400) / 3600));
    out.minutes.textContent = pad(Math.floor((s % 3600) / 60));
    out.seconds.textContent = pad(s % 60);
    return true;
  };

  if (tick()) setInterval(tick, 1000);
}

/* ---------- Brasas (canvas) ---------- */
function initEmbers() {
  const canvas = document.querySelector("[data-embers]");
  if (!canvas || reduceMotion) return;
  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  let w, h, embers, raf, running = true;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.clientWidth;
    h = hero.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(64, Math.max(24, w / 26)));
    embers = Array.from({ length: count }, makeEmber);
  };

  function makeEmber() {
    return {
      x: w * (0.45 + Math.random() * 0.6),
      y: h + Math.random() * h,
      r: 0.6 + Math.random() * 2.2,
      vy: 0.2 + Math.random() * 0.9,
      drift: (Math.random() - 0.5) * 0.4,
      a: 0.15 + Math.random() * 0.5,
      tw: Math.random() * Math.PI * 2
    };
  }

  const draw = () => {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    for (const e of embers) {
      e.y -= e.vy;
      e.x += e.drift + Math.sin(e.y / 50) * 0.3;
      e.tw += 0.05;
      const flick = e.a * (0.6 + 0.4 * Math.sin(e.tw));
      if (e.y < -10) Object.assign(e, makeEmber(), { y: h + 10 });
      const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 4);
      g.addColorStop(0, `rgba(255, 196, 90, ${flick})`);
      g.addColorStop(0.4, `rgba(246, 168, 35, ${flick * 0.5})`);
      g.addColorStop(1, "rgba(246, 168, 35, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
    raf = requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) draw();
    else cancelAnimationFrame(raf);
  });
}

/* ---------- Revelado al hacer scroll ---------- */
function initReveal() {
  const items = [...document.querySelectorAll("[data-reveal]")];
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((n) => n.classList.add("is-visible"));
    return;
  }
  // pequeño escalonado para grupos hermanos del hero
  document.querySelectorAll(".hero-copy [data-reveal]").forEach((n, i) => {
    n.style.transitionDelay = `${i * 90}ms`;
  });
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
  items.forEach((n) => io.observe(n));

  // Red de seguridad: revela todo lo que ya está en el primer viewport.
  // Se re-ejecuta en load y al cargar las fuentes para evitar la carrera
  // entre el observer y el reflow tipográfico.
  const sweep = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    items.forEach((n) => {
      if (!n.classList.contains("is-visible") && n.getBoundingClientRect().top < vh * 0.95) {
        n.classList.add("is-visible");
        io.unobserve(n);
      }
    });
  };
  sweep();
  window.addEventListener("load", sweep);
  window.addEventListener("scroll", sweep, { passive: true, once: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(sweep);
}

/* ---------- Scroll spy ---------- */
function initScrollSpy() {
  const links = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const map = new Map();
  links.forEach((a) => {
    const sec = document.querySelector(a.getAttribute("href"));
    if (sec) map.set(sec, a);
  });
  if (!map.size || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("is-active"));
        map.get(entry.target)?.classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, sec) => io.observe(sec));
}

/* ---------- Header + barra de progreso ---------- */
function initScrollChrome() {
  const header = document.querySelector("[data-header]");
  const progress = document.querySelector("[data-progress]");
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    }
    ticking = false;
  };
  update();
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}

/* ---------- Menú móvil ---------- */
function initNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;
  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------- init ---------- */
renderSpeakers();
renderSchedule();
renderSpecs();
initCountdown();
initEmbers();
initReveal();
initScrollSpy();
initScrollChrome();
initNav();
