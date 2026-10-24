# Nataliya-Danylyak
Website for Nataliya Danylyak, a Ukrainian lifestyle blogger who moved from Lviv to Chicago. She creates content about life in the USA, interesting places, family trips, events, and beauty. Brands can learn about her services and order advertising in stories, reels, and posts, or request reviews of places and events.

## The site

A static, single-page site with no build step. It works in English and Ukrainian (EN/UA switch in the header).

- `index.html` – page structure and English text
- `styles.css` – design and responsive layout
- `script.js` – contact settings, Ukrainian translations, mobile menu, brief form
- `images/` – put photos here

Open `index.html` in a browser to preview it. It can be hosted on any static host (GitHub Pages, Netlify, Vercel).

## Before publishing

1. **Contacts** – edit `CONFIG` at the top of `script.js` (email and Instagram link/handle). The current values are placeholders.
2. **Photo** – add a portrait at `images/hero.jpg` (portrait orientation, about 4:5). It replaces the gradient in the hero automatically.
3. **Texts** – English text is in `index.html`; Ukrainian translations are in the `UK` object in `script.js`, matched by the `data-i18n` keys.

The brief form opens the visitor's email app with a pre-filled message to the address in `CONFIG`. To receive submissions without email apps, connect a form service such as Formspree.
