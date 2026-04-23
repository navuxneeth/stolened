# Stolened — Investigative Storytelling Site

Static website exposing how stolen cultural artifacts move from sacred spaces to global museum displays.

## Run locally

Use any static server from the repository root:

```bash
cd /home/runner/work/stolened/stolened
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Project structure

- `/home/runner/work/stolened/stolened/index.html`
- `/home/runner/work/stolened/stolened/styles.css`
- `/home/runner/work/stolened/stolened/script.js`

## Extend

- Add more case records in the `cases` array in `script.js`
- Add timeline events in the `timelineEvents` array in `script.js`
- Tune colors/typography in `:root` CSS variables in `styles.css`
