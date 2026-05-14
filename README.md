# Mohanraj Portfolio

A modern minimal developer portfolio built with React.js, Vite, and Tailwind CSS. It is frontend-only, beginner-friendly, responsive, and easy to customize.

## Features

- Single-page portfolio layout
- Navbar with active section highlighting
- Hero, About, Skills, Projects, Contact, and Footer sections
- Dark mode toggle
- Smooth scrolling
- Responsive design for mobile, tablet, and desktop
- Project cards with GitHub and live demo links
- Frontend-only contact form UI

## Tech Stack

- React.js
- Vite
- Tailwind CSS

## Folder Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    Skills.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customize

- Update personal links in `src/components/Hero.jsx` and `src/components/Contact.jsx`.
- Replace `public/Mohanraj_Resume.txt` with your final resume PDF.
- Replace `public/developer-illustration.svg` with a final generated image if desired.
- Edit project details in `src/components/Projects.jsx`.
- Edit skills in `src/components/Skills.jsx`.

## Deploy On Vercel

1. Push this project to GitHub.
2. Open Vercel and import the repository.
3. Keep the framework preset as `Vite`.
4. Use `npm run build` as the build command.
5. Use `dist` as the output directory.
6. Click Deploy.

## Deploy On Netlify

1. Push this project to GitHub.
2. Open Netlify and import the repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.
5. Click Deploy.
