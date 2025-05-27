[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE) [![Build Status](https://github.com/joanmrtnz/chillspace/actions/workflows/ci.yml/badge.svg)](https://github.com/joanmrtnz/chillspace/actions)

## ![https://chillspace.app](./public/readme-images/logo.png)

Chillspace is a mood-based music discovery app built with Next.js and the Spotify Web API. Pick how you feel, and Chillspace will serve up carefully curated playlists, plus a curated shop of relaxation products and soothing animations.

---

## Contents

* [Live Demo](#live-demo)
* [Screenshots](#screenshots)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Commands / Scripts Summary](#commands--scripts-summary)
* [Quick Start](#quick-start)
* [Project Structure](#project-structure)
* [Data and Internationalization](#data-and-internationalization)
* [Spotify Integration](#spotify-integration)
* [Components Overview](#components-overview)
* [Contributing](#contributing)
* [License](#license)

---

## Live Demo

☕ [https://chillspace.app/](https://chillspace.app/)

---

## Screenshots

![Home Screen](./public/readme-images/home.png)
*Home screen.*

![Playlist Carousel](./public/readme-images/playlists.png)
*Carousel displaying playlists for the “Relaxed” mood.*

![Product Recommendations](./public/readme-images/products.png)
*Page showing recommended relaxation products.*

---

## Features

* **Mood selection** via icons (happy, relaxed, sad, etc.).
* **Playlist carousel**: browse Spotify playlists by mood, complete with images, titles, and genres.
* **Follow playlists**: button to add a playlist to your Spotify library.
* **External links**: open playlists on Spotify or YouTube.
* **Shop recommendations**: explore and purchase relaxation-themed products.
* **Internationalization**: English, Spanish, and Catalan support via `next-intl`.
* **Responsive design**: mobile-first layout with Tailwind/PostCSS.
* **Authentication**: OAuth2 flow for logging in with Spotify.

---

## Tech Stack

* **Next.js** 15 (app/ folder structure)
* **React** 19 + **TypeScript**
* **next-intl** for i18n
* **Headless UI** & **react-icons** for accessible components
* **Swiper** for the carousel
* **Spotify Web API** for fetching moods and playlists
* Ready for deployment on **Vercel**

---

## Commands / Scripts Summary

| Script          | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Run in development mode    |
| `npm run build` | Prepare production build   |
| `npm start`     | Start server in production |

---

## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/joanmrtnz/chillspace.git
   cd chillspace
   ```
2. **Install dependencies**

   ```bash
   npm install
   # or yarn
   ```
3. **Configure environment variables**
   Create a `.env` file in the root with your Spotify credentials:

   ```ini
   NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/api/callback
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   NODE_ENV=development
   ```
4. **Run in development**

   ```bash
   npm run dev
   # → http://localhost:3000
   ```
5. **Build for production**

   ```bash
   npm run build
   npm start
   ```

---

## Environment and Deployment

* **Vercel**: automatic deployments from GitHub.
* **Environment variables**: set them in the Vercel dashboard or your hosting provider.
* **Image assets**: located under `/public/images` and `/public/icons`.

---

## Project Structure

#### 1. High-level view

```bash
.
├── public/               ← static assets (logos, icons, images)
├── messages/             ← i18n translations (ca.json, en.json, es.json)
├── src/                  ← application source code
├── next.config.ts        ← Next.js configuration
├── postcss.config.mjs    ← Tailwind/PostCSS configuration
├── package.json          ← dependencies and scripts
├── README.md             ← this documentation
└── tsconfig.json         ← TypeScript configuration
```

#### 2. `src/` details

```bash
src/
├── actions/
│   └── set-locale.ts            ← handler for changing locale
├── app/
│   ├── layout.tsx               ← global layout (Header, Footer, i18n provider…)
│   ├── globals.css              ← global styles
│   ├── page.tsx                 ← `/` (home: mood selector)
│   ├── about/
│   │   └── page.tsx             ← `/about`
│   ├── spotify-login/
│   │   └── page.tsx             ← `/spotify-login`
│   ├── chillroom/
│   │   └── page.tsx             ← `/chillroom`
│   ├── playlists/
│   │   ├── page.tsx             ← `/playlists` (mood selector)
│   │   ├── loading.tsx          ← loading UI for playlists
│   │   └── [mood]/
│   │       ├── PlaylistsClient.tsx ← React client for fetch
│   │       └── page.tsx         ← `/playlists/[mood]`
│   └── products/
│       ├── ProductCard.tsx      ← product card component
│       └── page.tsx             ← `/products`
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LanguageSelect.tsx
│   ├── PlaylistCarousel.tsx
│   ├── PlaylistCard.tsx
│   ├── FollowPlaylistButton.tsx
│   ├── BackButton.tsx
│   └── ResultDialog.tsx
├── data/
│   ├── moods.json               ← mood definitions (id, icon, name, playlists array)
│   └── products.json            ← store products list (image path, Amazon link, price)
├── i18n/
│   └── request.ts               ← locale loader for next-intl
└── lib/
    ├── spotify/
    │   ├── auth.ts              ← Spotify OAuth helpers
    │   ├── moods.ts             ← read moods.json
    │   └── playlists.ts         ← Spotify Web API calls for playlists
    └── products/
        └── products.ts          ← read products.json
```

---

## Data and Internationalization

* **`src/data/moods.json`**
  Defines each mood (id, icon, name, array of playlists).
* **`src/data/products.json`**
  List of store products (image path, Amazon link, price).
* **`messages/[lang].json`**
  UI translations for English (`en.json`), Spanish (`es.json`), and Catalan (`ca.json`).

---

## Spotify Integration

1. **OAuth Authentication** (`src/lib/spotify/auth.ts`)

   * Generates the authorization URL for Spotify.
   * Processes the callback, exchanges the code for an access token, and stores it.

2. **Mood Metadata Management** (`src/lib/spotify/moods.ts`)

   * Reads `moods.json` to obtain playlist IDs and their metadata.

3. **Playlist Follow Logic**

   * **UI Client** (`components/FollowPlaylistButton.tsx`): Sends the request to the internal `/api/follow-playlist` endpoint.
   * **API Route** (`src/app/api/follow-playlist/route.ts`): Receives `playlistId` and user token, then calls `followPlaylistFlow(playlistId, token)`.
   * **Business Logic** (`src/lib/spotify/playlists.ts`): Implements `followPlaylistFlow(playlistId, token)`, which makes the call to Spotify to follow the playlist.

---

## Components Overview

* **`Header` / `Footer`**: navigation and language selector.
* **`LanguageSelect`**: dropdown for changing locales.
* **`PlaylistCarousel`**: slider using Swiper with playlist cards.
* **`PlaylistCard`**: displays image, title, genres, and action buttons.
* **`ResultDialog`**: modal for confirming follows or showing errors.

---

## Contributing

1. Fork the repository.
2. Create a branch for your feature.
3. Open a Pull Request — include tests for new functionality.

---

## License

MIT © [Joan Martínez](https://github.com/joanmrtnz)
