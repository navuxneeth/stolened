# Stolened — Investigative Storytelling Site

Static website exposing how stolen cultural artifacts move from sacred spaces to global museum displays.

## Run locally

Use any static server from the repository root:

```bash
cd stolened
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Project structure

- `./index.html`
- `./styles.css`
- `./script.js`

## Extend

- Add more case records in the `cases` array in `script.js`
- Add timeline events in the `timelineEvents` array in `script.js`
- Tune colors/typography in `:root` CSS variables in `styles.css`
