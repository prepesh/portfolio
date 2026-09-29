# Prepesh Tuladhar — Portfolio

Personal portfolio for Prepesh Tuladhar, Product Designer.
A static site: plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Structure

```
prepesh-portfolio/
├── index.html            Page markup: nav, hero, work, about, capabilities, experience, contact, case-study overlay
├── assets/
│   ├── css/style.css     All styles: design tokens (light + dark), layout, components, responsive rules
│   └── js/main.js        Project and experience content, rendering, interactions, case-study overlay
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.

The site is then published at `https://<username>.github.io/<repository>/`.

## Editing content

All project and experience content is in `assets/js/main.js`:

- `projects`: each project's table row and full case study (overview, challenge, constraints, approach, key decisions, outcome, reflection).
- `experience`: the Experience section entries.
- `plates`: the placeholder project visuals, drawn as inline SVG.
- `thumb` and `gallery` (optional, per project): real screens shown in the list thumbnail and in the case study's "The design" section, loaded from `assets/img/<project id>/<name>.webp`. Selecting a screen opens it larger. HIMĀL and Ridemio use these; `sizes` sets the pixel size of any screen that is not 600×1298.

Colours, type and spacing are set as CSS variables at the top of `assets/css/style.css` (`:root` for light mode, `[data-theme="dark"]` for dark mode).

## Before going live

- **Project visuals:** these are placeholder drawings. To use real screens, return an `<img src="…" alt="…" loading="lazy">` from the matching function in `plates` in `main.js`.
- **Case studies:** check the "Key decisions" in each case study and confirm or correct them so they match the work you actually did.
- **Missing details:** Ridemio and NexTeno have no company or year set. Fill in `company` and `year` in `projects` if you want them shown.

## Resume popup

The "Resume" link in Contact opens the resume in a popup on the page. Set its `href` in `index.html` to the Google Drive share link (for example `https://drive.google.com/file/d/…/view`), and share the file in Drive as **Anyone with the link → Viewer**, or visitors will see a Google sign-in screen instead of the resume. Until a link is set, the popup shows a short message asking visitors to email.

## Notes

- Fonts (Schibsted Grotesk and Newsreader) load from Google Fonts.
- The page respects `prefers-reduced-motion` and `prefers-color-scheme`.
- Case studies can be linked to directly with `#ridemio`, `#nexteno`, `#khalti` and `#himal`.
