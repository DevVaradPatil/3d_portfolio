# Varad | 3D Island Portfolio

An interactive 3D portfolio. Drag to spin a floating island in the sky, with a plane and a bird
flying around it. Each stop on the island opens a different part of the portfolio.

**Live:** [3d-portfolio-opal.vercel.app](https://3d-portfolio-opal.vercel.app)

## Highlights

- **Home:** a 3D island (React Three Fiber) you rotate by dragging or with the arrow keys. The
  current "stage" shows an info card linking to About, Projects or Contact.
- **About:** skills and a vertical work-experience timeline.
- **Projects:** project cards with links.
- **Contact:** an EmailJS contact form with an animated 3D fox that reacts while you type and send.
- **Sky, plane and bird** models with their own animations.

## Tech stack

React · Vite · Tailwind CSS · Three.js via React Three Fiber, Drei and React Spring · EmailJS ·
React Router

## Project structure

```
src/
  models/      Island, Sky, Plane, Bird, Fox (3D model components)
  pages/       Home, About, Projects, Contact
  components/  Navbar, HomeInfo, CTA, Alert, Loader
  constants/   skills, experience, projects, social links
```

## Getting started

```bash
npm install
npm run dev
```

The contact form needs EmailJS service, template and public-key values in `src/pages/Contact.jsx`
(or a `.env` file).
