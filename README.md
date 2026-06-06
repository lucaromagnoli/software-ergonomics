# Software Ergonomics

> Designing software that works with human cognition, not against it.

The website for **Software Ergonomics** — the idea that software should be designed
around human cognitive limits, especially during stress, urgency, fatigue, and high
cognitive load. It introduces the concept, the case for it, and a concrete proposal:
a system-wide **Not Now Mode**.

This is an open conversation, not a product, petition, or company.

## Stack

Content is written in Markdown (`src/*.md`) and rendered to static HTML with
[Eleventy](https://www.11ty.dev/). The output has no JavaScript, no trackers, no
cookies — the site tries to embody the principles it describes.

```
src/
├── _includes/base.njk   # shared layout (header, nav, footer)
├── index.md             # homepage
├── not-now-mode.md      # the Not Now Mode proposal
└── styles.css           # single stylesheet, light/dark via prefers-color-scheme
```

## Development

```sh
npm install
npm run serve   # local dev server with live reload
npm run build   # static output in _site/
```

## Contributing

The discussion is the point. Disagreement, extensions, evidence, and better
mechanisms are all welcome — open an issue or a pull request.

## License

[MIT](LICENSE)
