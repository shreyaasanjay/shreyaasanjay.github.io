# Build this portfolio while learning React

This repository is a deliberately small skeleton. The camera frame and section
switching work, but the real portfolio content is yours to build.

## Start the site

```powershell
npm run dev
```

Open the local address Vite prints. Leave that command running: whenever you
save a file, Vite refreshes the page for you.

## How the current React code flows

1. `src/main.jsx` places the React app inside the `#root` element in `index.html`.
2. `src/App.jsx` stores the selected section with `useState`.
3. `src/components/CameraShell.jsx` composes the camera UI.
4. `src/components/CameraControls.jsx` maps over the section data to make buttons.
5. Clicking a button calls the state setter passed down from `App`.
6. `src/components/Viewfinder.jsx` re-renders with the selected section.
7. `src/data/sections.js` keeps editable content separate from layout code.

This pattern is called **one-way data flow**: data travels down through props,
and user actions travel back up through callback functions.

## Suggested learning path

### 1. Change data and styles

- Put your name in `CameraShell.jsx` and `sections.js`.
- Pick colors by changing the CSS variables at the top of `src/index.css`.
- Add another entry to the `sections` array and see a new control appear.

### 2. Make real section components

Create a `src/sections` folder with files such as `Home.jsx`, `About.jsx`, and
`Projects.jsx`. In `Viewfinder.jsx`, render the right component based on the
current section. This teaches components, props, and conditional rendering.

### 3. Model your projects as data

Create `src/data/projects.js`, export an array of project objects, and use
`.map()` to render project cards. This is the same idea already used by the
camera controls.

### 4. Add interaction gradually

- Make the shutter button open your featured project.
- Add previous/next controls for projects.
- Add a dark mode using another `useState` value.
- Try viewfinder transitions after navigation works well.

### 5. Build before publishing

```powershell
npm run build
```

Vite creates a production-ready `dist` folder. GitHub Pages can publish that
folder through a GitHub Actions workflow when you are ready to deploy.

## A useful rule for this project

Make the plain version work first, then style it like a camera. That keeps every
React concept understandable and makes debugging much easier.
