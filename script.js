// Site settings — replace with real contact details before publishing.
const CONFIG = {
  email: "hello@nataliyadanylyak.com",
  instagram: "https://www.instagram.com/nataliya.danylyak/",
  instagramHandle: "@nataliya.danylyak",
};

// Ukrainian translations. English text lives in index.html and is restored from there.
const UK = {
  "skip": "Перейти до змісту",
  "nav.about": "Про мене",
  "nav.content": "Контент",
  "nav.services": "Для брендів",
  "nav.process": "Як працюємо",
  "nav.contact": "Співпраця",

  "hero.route": "Львів",
  "hero.route2": "Чикаго",
  "hero.title": "Життя в Америці очима українки",
  "hero.lead": "Я Наталія — лайфстайл-блогерка. Розповідаю про повсякденне життя в США, цікаві місця, сімейні подорожі, події та б’юті. Чесні історії для моєї аудиторії й продумані інтеграції для брендів.",
  "hero.cta1": "Замовити рекламу",
  "hero.cta2": "Мій контент",
  "hero.badge1": "Чикаго, Іллінойс",
  "hero.badge2": "Двомовний контент",
  "tag.usa": "Життя в США",
  "tag.places": "Цікаві місця",
  "tag.family": "Сімейні подорожі",
  "tag.events": "Події",
  "tag.beauty": "Б’юті",

  "about.eyebrow": "Про мене",
  "about.title": "Від бруківки Львова до хмарочосів Чикаго",
  "about.p1": "Я виросла у Львові — місті кави, старих вуличок і теплих традицій. Переїзд із сім’єю до Чикаго відкрив новий розділ життя, і я почала ним ділитися: перші враження, кумедні відмінності, щоденні відкриття.",
  "about.p2": "Сьогодні мій блог — це і путівник, і щоденник. Я показую, яким насправді є життя в США, знаходжу місця для ваших вихідних, беру вас у сімейні подорожі, відвідую події та ділюся б’юті-знахідками, які справді працюють.",
  "about.p3": "Моя аудиторія довіряє мені, бо я рекомендую лише те, що спробувала сама. Саме це я пропоную брендам: щирий голос і контент, який хочеться дивитися.",
  "facts.1t": "Українська спільнота",
  "facts.1d": "у США та вдома",
  "facts.2t": "Чикаго та Середній Захід",
  "facts.2d": "локальні місця й події",
  "facts.3t": "Для всієї сім’ї",
  "facts.3d": "подорожі, діти, вихідні",

  "content.eyebrow": "Що я створюю",
  "content.title": "П’ять тем, які любить моя аудиторія",
  "p1.t": "Життя в США",
  "p1.d": "Ціни, продукти, школи, медицина, свята та маленькі культурні сюрпризи нового старту в Америці.",
  "p2.t": "Цікаві місця",
  "p2.d": "Кав’ярні, ресторани, парки, музеї та приховані куточки Чикаго й не тільки — чесні враження без фільтрів.",
  "p3.t": "Сімейні подорожі",
  "p3.d": "Автоподорожі, поїздки на вихідні та відпустки з сім’єю: маршрути, бюджети, готелі й поради, що економлять час.",
  "p4.t": "Події",
  "p4.d": "Фестивалі, концерти, відкриття та зустрічі громади — що відбувається і чи варто туди йти.",
  "p5.t": "Б’юті",
  "p5.d": "Догляд, макіяж, салони та ритуали турботи про себе — спершу тестую на собі, а потім рекомендую.",

  "services.eyebrow": "Для брендів",
  "services.title": "Формати співпраці",
  "services.lead": "Кожну інтеграцію я створюю у власному стилі, щоб вона природно сприймалася аудиторією. Формати можна поєднувати в пакет.",
  "s1.t": "Сторіс",
  "s1.d": "Серія сторіс із посиланням або промокодом. Ідеально для запусків, акцій і швидкого охоплення.",
  "s1.l1": "3–5 кадрів у серії",
  "s1.l2": "Стікер-посилання / промокод",
  "s1.l3": "Статистика охоплень і переходів",
  "s2.t": "Рілс",
  "s2.d": "Коротке вертикальне відео з історією, а не просто реклама. Залишається у стрічці й продовжує набирати перегляди.",
  "s2.l1": "Ідея, зйомка, монтаж",
  "s2.l2": "Погодження перед публікацією",
  "s2.l3": "Можливість колаборації з брендом",
  "s3.t": "Пости",
  "s3.d": "Фотопост або карусель із детальним описом. Чудово для продуктів, які варто роздивитися ближче.",
  "s3.l1": "Одне фото або карусель",
  "s3.l2": "Продуманий текст і теги",
  "s3.l3": "Залишається в профілі",
  "s4.t": "Огляди місць і подій",
  "s4.d": "Я відвідую ваш ресторан, салон, локацію, готель чи подію та ділюся чесним детальним оглядом з аудиторією.",
  "s4.l1": "Візит + сторіс у реальному часі",
  "s4.l2": "Рілс або пост після візиту",
  "s4.l3": "Чикаго та подорожі",
  "services.note": "Вартість залежить від формату, кількості публікацій і прав на використання. Надішліть короткий бриф — і я відповім персональною пропозицією.",
  "services.cta": "Дізнатися вартість",

  "why.title": "Чому бренди обирають мене",
  "w1.t": "Довіра",
  "w1.d": "Рекламую лише те, що спробувала сама, тому рекомендації працюють.",
  "w2.t": "Дві аудиторії",
  "w2.d": "Україномовні в США та всі, кому цікаве американське життя.",
  "w3.t": "Нативні інтеграції",
  "w3.d": "Реклама, що виглядає як мій звичайний контент, а не як банер.",
  "w4.t": "Надійність",
  "w4.d": "Чіткі терміни, погодження та звіт після публікації.",

  "process.eyebrow": "Як працюємо",
  "process.title": "Від брифу до результату — чотири кроки",
  "st1.t": "Бриф",
  "st1.d": "Розкажіть про бренд, мету та формат, який вас цікавить.",
  "st2.t": "Пропозиція",
  "st2.d": "Пропоную ідею, терміни та ціну. Узгоджуємо деталі.",
  "st3.t": "Контент",
  "st3.d": "Створюю контент і надсилаю вам на погодження.",
  "st4.t": "Звіт",
  "st4.d": "Після публікації ви отримуєте статистику: охоплення, перегляди, переходи.",

  "faq.title": "Варто знати",
  "q1.q": "Якою мовою контент?",
  "q1.a": "Переважно українською, англійською — за запитом. Підкажіть, що підходить вашій аудиторії.",
  "q2.q": "Чи робите огляди за межами Чикаго?",
  "q2.a": "Так. Я регулярно подорожую з сім’єю та відкрита до поїздок для співпраці — витрати на дорогу обговорюємо окремо.",
  "q3.q": "Чи можна побачити контент до публікації?",
  "q3.a": "Звісно. Кожна інтеграція надсилається на погодження, одне коло правок включене.",
  "q4.q": "Чи працюєте за бартером?",
  "q4.a": "Іноді — для місць і продуктів, які справді пасують моєму блогу. Напишіть, і ми обговоримо.",

  "contact.eyebrow": "Співпраця",
  "contact.title": "Створімо те, що полюбить ваша аудиторія",
  "contact.lead": "Заповніть форму, і я відповім протягом 1–2 робочих днів. Або напишіть напряму:",
  "f.name": "Ваше ім’я",
  "f.brand": "Бренд / компанія",
  "f.email": "Email",
  "f.formats": "Що вас цікавить?",
  "f.review": "Огляд місця / події",
  "f.msg": "Розкажіть про ваш проєкт",
  "f.submit": "Надіслати запит",

  "footer.tag": "Лайфстайл-блогерка, Чикаго",
  "footer.top": "Нагору ↑",
};

const MESSAGES = {
  en: {
    required: "Please fill in your name, a valid email and a short message.",
    opening: "Opening your email app… If nothing happens, write to me at ",
    subject: "Collaboration request",
  },
  uk: {
    required: "Будь ласка, вкажіть ім’я, коректний email і коротке повідомлення.",
    opening: "Відкриваю поштовий застосунок… Якщо нічого не сталося, напишіть мені на ",
    subject: "Запит на співпрацю",
  },
};

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } },
};

let currentLang = "en";
const i18nNodes = document.querySelectorAll("[data-i18n]");
i18nNodes.forEach((el) => { el.dataset.en = el.innerHTML; });

function setLang(lang) {
  currentLang = lang === "uk" ? "uk" : "en";
  document.documentElement.lang = currentLang;
  i18nNodes.forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = currentLang === "uk" && UK[key] ? UK[key] : el.dataset.en;
  });
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
  });
  storage.set("lang", currentLang);
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

const savedLang = storage.get("lang");
const browserUk = (navigator.language || "").toLowerCase().startsWith("uk");
setLang(savedLang || (browserUk ? "uk" : "en"));

// Contact links
document.querySelectorAll(".js-email").forEach((a) => {
  a.href = `mailto:${CONFIG.email}`;
  a.textContent = CONFIG.email;
});
document.querySelectorAll(".js-instagram").forEach((a) => {
  a.href = CONFIG.instagram;
  a.textContent = `Instagram ${CONFIG.instagramHandle}`;
});

// Hero photo: show it if images/hero.jpg exists, otherwise keep the gradient
const portrait = document.querySelector(".portrait");
if (portrait) {
  const img = new Image();
  img.onload = () => {
    portrait.style.setProperty("--photo", `url("${img.src}")`);
    portrait.classList.add("has-photo");
  };
  img.src = "images/hero.jpg";
}

// Mobile menu
const header = document.querySelector(".site-header");
const nav = document.getElementById("nav");
const toggle = document.querySelector(".menu-toggle");

function closeMenu() {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  ".section-head, .about-body, .pillar, .service, .services-note, .why-grid > div, .steps li, .faq-list, .brief"
);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealTargets.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

// Brief form → pre-filled email
const form = document.getElementById("brief");
const status = form.querySelector(".form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = MESSAGES[currentLang];
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.name.classList.toggle("invalid", !name);
  form.email.classList.toggle("invalid", !emailOk);
  form.message.classList.toggle("invalid", !message);

  if (!name || !emailOk || !message) {
    status.className = "form-status error";
    status.textContent = msg.required;
    return;
  }

  const brand = form.brand.value.trim();
  const formats = [...form.querySelectorAll('input[name="format"]:checked')].map((i) => i.value);
  const body = [
    `Name: ${name}`,
    brand ? `Brand: ${brand}` : null,
    `Email: ${email}`,
    formats.length ? `Formats: ${formats.join(", ")}` : null,
    "",
    message,
  ].filter((line) => line !== null).join("\n");

  const subject = `${msg.subject}${brand ? ` — ${brand}` : ""}`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  status.className = "form-status ok";
  status.textContent = msg.opening + CONFIG.email;
});

document.getElementById("year").textContent = new Date().getFullYear();
