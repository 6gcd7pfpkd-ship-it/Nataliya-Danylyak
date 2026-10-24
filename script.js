// Налаштування сайту. Як працює форма заявки:
// - formspree: ID форми з formspree.io (напр. "xyzabcd") — заявки приходитимуть на пошту без поштового застосунку;
// - email: адреса — форма відкриє поштовий застосунок з готовим листом, а на сайті з’явиться картка Email;
// - якщо обидва поля порожні — текст заявки копіюється, і відкривається Instagram Direct.
const CONFIG = {
  instagram: "natali_danylak",
  tiktok: "nataliya.dan",
  email: "",
  formspree: "",
};

const directUrl = `https://ig.me/m/${CONFIG.instagram}`;

// Контакти
if (CONFIG.email) {
  document.querySelectorAll(".js-email").forEach((a) => {
    a.href = `mailto:${CONFIG.email}`;
    a.hidden = false;
  });
  document.querySelectorAll(".js-email-text").forEach((el) => { el.textContent = CONFIG.email; });
}
if (CONFIG.email || CONFIG.formspree) {
  document.querySelectorAll(".js-hint-dm").forEach((el) => el.remove());
}

// Фото: покладіть assets/photo.jpg — інакше залишиться градієнт
const portrait = document.querySelector(".portrait");
if (portrait) {
  const img = new Image();
  img.onload = () => {
    portrait.style.setProperty("--photo", `url("${img.src}")`);
    portrait.classList.add("has-photo");
  };
  img.src = "assets/photo.jpg";
}

// Мобільне меню
const nav = document.getElementById("nav");
const toggle = document.querySelector(".menu-toggle");

function setMenu(open) {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Закрити меню" : "Відкрити меню");
}
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
document.addEventListener("click", (e) => {
  if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
});

// Поява під час прокрутки
const revealTargets = document.querySelectorAll(
  ".section-head, .about-body, .pillar, .service, .steps li, .services-note, .brief, .contact-card"
);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  revealTargets.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

// Форма заявки
const form = document.getElementById("brief");
const status = form.querySelector(".form-status");
const copyBox = form.querySelector(".form-copy");
const submitBtn = form.querySelector('button[type="submit"]');

function setStatus(type, text) {
  status.className = `form-status ${type}`;
  status.textContent = text;
}

function buildMessage(data) {
  return [
    "Вітаю, Наталіє! Заявка на рекламу з сайту.",
    "",
    `Ім’я: ${data.name}`,
    data.brand ? `Бренд / заклад: ${data.brand}` : null,
    `Контакт: ${data.contact}`,
    data.formats.length ? `Формат: ${data.formats.join(", ")}` : null,
    data.date ? `Дати: ${data.date}` : null,
    data.budget ? `Бюджет: ${data.budget}` : null,
    "",
    data.message,
  ].filter((line) => line !== null).join("\n");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = (name) => form.elements[name].value.trim();
  const data = {
    name: value("name"),
    brand: value("brand"),
    contact: value("contact"),
    date: value("date"),
    budget: value("budget"),
    message: value("message"),
    formats: [...form.querySelectorAll('input[name="format"]:checked')].map((i) => i.value),
  };

  const missing = ["name", "contact", "message"].filter((key) => !data[key]);
  ["name", "contact", "message"].forEach((key) => {
    form.elements[key].classList.toggle("invalid", missing.includes(key));
  });
  if (missing.length) {
    setStatus("error", "Будь ласка, заповніть ім’я, контакт і кілька слів про проєкт.");
    form.elements[missing[0]].focus();
    return;
  }

  const text = buildMessage(data);
  copyBox.hidden = true;

  if (CONFIG.formspree) {
    submitBtn.disabled = true;
    setStatus("", "Надсилаю…");
    try {
      const res = await fetch(`https://formspree.io/f/${CONFIG.formspree}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, formats: data.formats.join(", "), _subject: "Заявка на рекламу" }),
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setStatus("ok", "Дякую! Заявку надіслано — я відповім найближчим часом.");
    } catch {
      setStatus("error", `Не вдалося надіслати. Напишіть мені в Instagram: @${CONFIG.instagram}`);
    } finally {
      submitBtn.disabled = false;
    }
    return;
  }

  if (CONFIG.email) {
    const subject = `Заявка на рекламу${data.brand ? ` — ${data.brand}` : ""}`;
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    setStatus("ok", `Відкриваю пошту… Якщо нічого не сталося, напишіть на ${CONFIG.email}`);
    return;
  }

  // Instagram Direct: відкриваємо вкладку одразу (щоб браузер не заблокував), потім копіюємо текст
  window.open(directUrl, "_blank", "noopener");
  if (await copyText(text)) {
    setStatus("ok", "Текст заявки скопійовано! Вставте його в повідомлення в Instagram, яке щойно відкрилося.");
  } else {
    copyBox.value = text;
    copyBox.hidden = false;
    copyBox.select();
    setStatus("ok", "Скопіюйте текст нижче й надішліть його мені в Instagram Direct.");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
