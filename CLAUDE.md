# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production → dist/
npm run preview  # Preview production build locally
```

No test suite is configured.

## Architecture

React SPA (Vite + plain JavaScript) for generating printable Peruvian restaurant menus for "Carito Ardiles".

**State lives in `App.jsx`:**
- `dishes` — full dish list (initial + user-added)
- `activeIds` — set of selected dish IDs
- `menuLayout` — `"paired"` (two columns) or `"list"` (single column)
- `isDarkMode` — persisted in localStorage
- `activeTab` — mobile tab navigation (`"selection"` | `"preview"`)

**Two main panels:**
- `SelectionPanel/` — left sidebar; user toggles dishes and adds temporary custom dishes
- `MenuPreview/` — right side; renders only active dishes in chosen layout, plus export controls

**Data:** `src/data/initialDishes.js` defines all 44 dishes across 4 categories (Fondos, Entradas, A la Carta, Bebidas). Dishes with `regular: true` are pre-selected by default.

**Export:** Print uses `styles/print.css` media queries. PNG export uses `html2canvas`.

**Styling:** Modular CSS files imported in `App.css` — `selection.css`, `menu.css`, `print.css`, `dark-mode.css`.

## Key Conventions

- All text in the UI is Spanish; code (variables, functions, comments) is in English.
- `MenuSection` receives a `layout` prop (`"paired"` | `"list"`) that controls column rendering.
- Temporary dishes added via `AddDishForm` live only in component state — they reset on page reload.
- Dark mode class is toggled on `document.body` and persisted via `localStorage`.
