# Mohammad Safiullah — Portfolio Website

A single-page, dark-themed developer portfolio built with vanilla HTML, CSS, and JavaScript. It showcases skills, featured projects, and includes a working contact/hire flow via EmailJS.

**Live sections:** Hero (with background video) → About → Skills → Projects → Contact

---

## Features

- **Hero section** with an autoplaying background video, a play/pause toggle, and a resume download button
- **About section** with profile photo and animated tech tags (React, MongoDB, Node.js, PHP, MySQL)
- **Skills section** rendered dynamically from a JS data object, grouped into:
  - Programming Languages
  - Frontend
  - Backend
  - Databases
  - Tools
  - Computer Science
  - Each skill shows a percentage progress bar
- **Projects section** rendered dynamically, with GitHub and Live Demo links per project
- **Contact form** and a separate **"Hire Me" modal form**, both wired to send messages via [EmailJS](https://www.emailjs.com/) (falls back to opening the user's mail client if EmailJS isn't configured)
- Fully responsive layout with mobile breakpoints
- Icons powered by [Lucide](https://lucide.dev/)

---

## Tech Stack

| Layer      | Technology |
|------------|------------|
| Structure  | HTML5 |
| Styling    | CSS3 (custom, no framework) |
| Behavior   | Vanilla JavaScript (DOM rendering, event handling) |
| Icons      | Lucide Icons (CDN) |
| Email      | EmailJS (CDN) |

---

## File Structure

```
├── index.html          # Main markup — hero, about, skills, projects, contact, hire modal
├── style.css            # All styling — dark theme, responsive layout, animations
├── script.js             # Skills/projects data + rendering, video controls, form handling
├── vdo.mp4               # Hero section background video
├── my pic.jpg             # Profile photo used in the About section
├── Md_Safiullah_Resume.pdf   # Downloadable resume (linked from the hero section)
└── README.md
```

> **Note:** `index.html` references the image as `./my pic.jpg` — keep the filename (including the space) exactly as-is, or update the `src` in `index.html` if you rename it.

---

## Getting Started

1. Clone or download this repository.
2. Make sure all files (`index.html`, `style.css`, `script.js`, `vdo.mp4`, `my pic.jpg`, resume PDF) are in the same folder.
3. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   npx serve .
   ```

---

## Configuration

### EmailJS setup (Contact form + Hire Me form)

Both forms use the same EmailJS service. To enable live email sending:

1. In `index.html`, replace the placeholder public key:
   ```js
   emailjs.init({
       publicKey: "YOUR_PUBLIC_KEY"
   });
   ```
2. In `script.js`, replace the service and template IDs:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   ```
3. Update the destination address if needed:
   ```js
   const CONTACT_EMAIL = 'safiullahakhter84@gmail.com';
   ```

If EmailJS isn't configured, both forms automatically fall back to opening the visitor's default mail client with a pre-filled message.

### Updating content

- **Skills:** edit the `skillsData` object in `script.js`
- **Projects:** edit the `projectsData` array in `script.js` (each entry supports `title`, `desc`, `tags`, `github`, and `live`)
- **Resume link:** replace `Md_Safiullah_Resume.pdf` and update the `href` in the hero section of `index.html`

---

## Known Issues / TODO

- `style.css` has a typo (`box-bezier` instead of `box-sizing`) in the reset block — harmless but worth fixing.
- The Lucide script tag in `index.html` is closed with `</div>` instead of `</script>` — fix for valid HTML.
- One project entry ("Blinkit Clone") has no `github`/`live` links yet since it's still in progress.
- EmailJS public key, service ID, and template ID are still placeholders and need to be filled in before the forms will send real emails.

---

## License

Personal portfolio — feel free to use the structure as a reference, but please don't reuse the personal content, photo, or resume as your own.
