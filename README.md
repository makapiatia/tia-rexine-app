# Tia Rexine — Portfolio

The personal site of Tia Rexine, a full stack software engineer in the Sonoran desert who designs and builds for the
web. It's a single, scrolling page: a sunset hero, a few cards about me, the sites I've built, a board of draggable
photo stickers, and a way to say hello.

**Live site:** [tiarexine.com](https://tiarexine.com)

---

## Original work, made by hand

- **Every photo on this site was taken by me.** That includes the mountain backdrop, the sunset skies the drifting
  clouds come from, my pottery, my lamp, my cats and the desert neighbors on the sticker board.
- **My name in the hero is my own hand lettering**, drawn with marker on paper, photographed, then traced and recolored
  to match the site (cream fill, dusk-plum outline, see-through counters).
- **Every logo was designed by me, without the use of AI.** That includes the T-rex badge used for the site icon, the
  Rexine Spa Care logo and the Free Space Therapy logo. Each one started as hand sketches and brainstorming and was
  then executed in Adobe Illustrator.
- **Built with help from Claude.** I used Claude, Anthropic's AI assistant, to help with many site details: code,
  animations, accessibility testing, layout and copy edits. The photos and logos are entirely my own.

The photos were prepared for the web without changing what's in them. Sticker cutouts were made with macOS's
built-in subject lifting, the cloud strips were recolored from my sunset shots, and every image was resized,
compressed and stripped of its metadata (including GPS location) before being added to the repo.

---

## Tech stack

| Package | Version | What it does here |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.4 | Framework: App Router, static rendering, image optimization, font loading and the metadata files (icons, link previews). |
| [React](https://react.dev) + React DOM | 19.3 | UI library. All interactive pieces are small client components. |
| [Motion](https://motion.dev) | 14 | Entrance animations, the letter-by-letter name, sticker physics and dragging (see [Motion](#motion)). |
| [Tailwind CSS](https://tailwindcss.com) | 4.3 | Styling. Almost every style is an inline utility class; `globals.css` holds the design tokens. |
| `@tailwindcss/turbopack` | 4.3 | Runs Tailwind inside Next's Turbopack bundler (configured in `next.config.ts`). |
| [classnames](https://github.com/JedWatson/classnames) | 2.5 | Groups long Tailwind class lists into readable lines and handles conditional classes. |
| [Lucide React](https://lucide.dev) | 1.74 | Line icons: sun, mail, palette, cat, store, arrows, heart, droplet, pause/play. |
| [Font Awesome Brands](https://fontawesome.com) | 7.3 | The LinkedIn and GitHub logos, rendered through a tiny `BrandIcon` component. |
| TypeScript | 5.9 | Types for every component and data file. |
| ESLint + `eslint-config-next` | 9 | Linting, including a **120-character line limit**. |

Built into Next.js and also used:

- **`next/font`** loads three typefaces with no layout shift: **Geist** (body text), **Caveat** (the handwritten
  notes) and **Diamond Grotesk** (headings and my name, self-hosted from `public/fonts`).
- **`next/image`** serves responsive, optimized images for the logos, the T-rex badge and the stickers.
- **Metadata files** in `src/app` (`icon.png`, `apple-icon.png`, `favicon.ico`, `opengraph-image.jpg`,
  `twitter-image.jpg` and their `.alt.txt` files) give the site its icons and its link preview, which is a capture
  of the real hero.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          Fonts, <html>, and site metadata (title, description, social cards)
│   ├── page.tsx            The page: sky layers, backdrop, and the five sections
│   ├── globals.css         Tailwind import, design tokens, a few utilities, and CSS-only effects
│   └── *.png / *.jpg       Icons and link-preview images
└── components/
    ├── Hero/               Hero, NameLettering, ContactLinks, TrexBadge
    ├── About/              About section, AboutCard, aboutData (all the card copy)
    ├── Work/               Work section, ProjectCard, projects (logos, tags, palettes, links)
    ├── Stickers/           Sticker board, stickerData, useFinePointer
    ├── SayHello/           Footer section and the MotionToggle (pause animations)
    └── shared/             GlassCard, SectionHeading, icons, motion presets, MotionProvider, styles
```

Copy and data live apart from layout, so text can be edited without touching markup: the About cards in
`aboutData.tsx`, the projects in `projects.ts`, and the stickers in `stickerData.ts`.

---

## Design system

`src/app/globals.css` defines everything the components share:

- **Colors:** `cream` (#fde7c2) for accents, `sand` (#f3f0e8) for text, `ink` and `night` for the dark background,
  and `coral` for focus rings.
- **Fonts:** `font-display` (Diamond Grotesk) and `font-script` (Caveat).
- **Hand lettering:** my name in the hero is `public/name-lettering.webp`, rendered by `Hero/NameLettering.tsx`.
- **Utilities:**
  - `glass`: the frosted, softly outlined cards.
  - `text-sunset`: the white-to-cream gradient on the section headings.
  - `dot-list`: the cream lists separated by dots (desert animals and tech tags), styled so they don't look clickable.
- **Breakpoints:**
  - `md:` (768px) for desktop.
  - `short:` for short laptop screens.
  - `fine:` for mouse users on wider screens.
  - `collage:` (900px) for the free-form sticker layout.

---

## The backdrop and sky

- **Mountain photo:** fixed behind the page and denoised so the sky stays smooth on high-resolution screens.
- **Drifting clouds:** two layers cut from my sunset photos and recolored violet and pink. They blend with the photo
  and drift sideways in a seamless loop: the back layer over about 4 minutes, the front one over about 2½, for a
  sense of depth. A soft mask keeps them in the sky so the mountains stay clear.
- **Shading:** a gentle overlay improves text contrast. It's baked into a PNG, one for desktop and one for mobile,
  instead of a CSS gradient, which avoids the faint grid pattern Chrome draws over large gradients.
- **Scroll darkening:** as you scroll, the background darkens slightly using CSS scroll-driven animation, so longer
  text stays readable.

---

## Motion

All motion is built with Motion. The shared presets live in `components/shared/motion.ts`.

- **Hero entrance:** the greeting and my hand-lettered name "write" themselves in (a left-to-right clip reveal), then
  the description and links rise in.
- **Section entrances:** each section rises into view once as you scroll. Cards spring in with a slight scale and
  blur, and the desert animals pop in one at a time.
- **Small living details** (CSS keyframes):
  - the slowly turning sun
  - the swaying saguaro
  - the bobbing T-rex badge
  - the beating heart after "even the tarantulas"
  - the nudging arrow under "a bit about me"
  - About-card icons that wiggle on hover
- **Hover:**
  - Cards show a warm glare that follows the cursor (a radial gradient positioned with CSS variables).
  - Project and Rexine logos grow slightly.
  - Link arrows nudge up and to the right.
- **Custom cursors:**
  - a soaring hawk everywhere
  - a diving hawk over links and buttons
  - a cream pointing hand over draggable stickers
- **Respectful by default:**
  - `MotionConfig reducedMotion="user"` and CSS media queries turn movement off for anyone with "reduce motion"
    enabled.
  - A **Pause animations** toggle in the footer stops all continuous motion and remembers the choice.

### Stickers

The "Things I love" board turns my photos into die-cut stickers with white borders and a soft drop shadow.

- **Entrance:** each sticker "slaps" onto the board with a springy rotate-and-scale.
- **Dragging:** with a mouse, every sticker can be **dragged anywhere on the page**. The one you grab comes to the
  front, the page auto-scrolls near the edges, and stickers can't be dragged off the site. Dragging is turned off on
  touch screens (detected by `useFinePointer`) so it never fights with scrolling.
- **Responsive layout:**
  - 900px and wider: a free-form collage positioned with CSS variables.
  - 768–899px: a tidy 4-column grid.
  - Phones: 2 columns.
- **Captions** are handwritten. A caption can carry a tiny icon (the droplet after "resident drooler"), and the lamp's
  caption is nudged to sit centered under its base.

---

## Accessibility

The site is built and tested to meet **WCAG 2.2 Level AA**.

**How it was tested**

- [axe-core](https://github.com/dequelabs/axe-core) against WCAG 2.0, 2.1 and 2.2 A/AA plus best practices, at
  desktop, tablet and mobile widths: **zero violations**.
- **Text contrast** measured against the actual pixels behind each text style (the sky and the cards), at three
  screen sizes: all 23 text styles pass.
- **Keyboard:** a full walk of all 14 interactive elements, plus checks for zoom, reflow, text spacing and target
  size.

**What's in place, and the problems it solves**

- **Readable text over a bright sunset.**
  - **Problem:** light text over a golden sky failed contrast.
  - **Solution:** the hero sits low over the darker mountain haze instead of the bright middle of the sky, and the
    mobile overlay is subtly deeper behind the text. No band, box or blur covers the sky.
  - **Result:** the hero reaches 4.1–8.1:1, depending on the element and screen size.
- **Screen readers:**
  - One `h1` and a clean `h2`/`h3` outline, a `main` landmark, a labeled `footer`, and every section labeled by
    its heading.
  - My name is hand-lettered artwork, so the `h1` carries the text "Tia Rexine" for screen readers and search engines.
    The image itself is marked decorative. As a logotype, it's exempt from the images-of-text rule.
  - Decorative icons and images are hidden. Every meaningful image has alt text, including the link preview.
  - Links that open a new tab say so, for example "LinkedIn (opens in a new tab)".
  - Color swatches have text names, so they aren't communicated by color alone.
- **Keyboard:** every link and button is reachable in a logical order, with a clearly visible coral focus ring (at
  least 3:1 against its background) and no keyboard traps. "a bit about me" scrolls to the About section without
  changing the URL.
- **Touch targets:** all controls are at least 24×24px.
- **Zoom and reflow:** no sideways scrolling or clipped text at 320px wide, in phone landscape, at 200% zoom, or
  with increased letter, word and line spacing.
- **Motion (WCAG 2.2.2):** continuous animation can be paused on the page, "reduce motion" is respected, and nothing
  flashes.
- **Dragging (WCAG 2.5.7):** dragging stickers is purely optional. Every image and caption is fully available
  without it.

---

## Privacy

The original photos live in a git-ignored `photo-originals/` folder and are never committed or deployed. Only
processed copies are published: resized, compressed, and with all metadata (including GPS location) removed.

---

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint, including the 120-character line limit
```

Notes:

- **Turbopack cache:** `next.config.ts` turns off Turbopack's persistent filesystem cache. With the Tailwind loader
  it sometimes served stale CSS after edits. The site is small enough that the cache isn't needed.
- **Tailwind class names:** classes use Tailwind's canonical forms (for example `size-4.5` rather than
  `size-[18px]`), so the Tailwind IntelliSense extension shows no `suggestCanonicalClasses` warnings.

## Deploy

The site deploys to [Vercel](https://vercel.com) with the default Next.js settings, at the
[tiarexine.com](https://tiarexine.com) domain.

## Projects featured

- [Rexine Spa Care](https://www.rexinespacare.com/) ([source](https://github.com/makapiatia/rexine-spa-care))
- [Free Space Therapy](https://www.freespace-therapy.com/) ([source](https://github.com/makapiatia/freespace-therapy))
