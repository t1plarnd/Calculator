# React + TypeScript Calculator

A modern, modular web calculator migrated from Vanilla JS to a component-based architecture using React 18, TypeScript, and Vite.

## Features
* **Expression Parser:** Handles complex mathematical strings with proper Order of Operations (PEMDAS).
* **Component-Based UI:** Built with reusable React components (`Button`, `Display`, `ResultDis`).
* **Strict Type Safety:** Fully typed with TypeScript to ensure robust data handling.
* **Modular Math Logic:** Isolated logic for each operation (`Add`, `Sub`, `Mult`, `Div`) in the `logic/` directory.
* **Reactive State:** Real-time UI updates using React's `useState` hook.
* **Modern CSS:** Responsive layout powered by CSS Grid and Flexbox.

## Project Structure
```text
/src
├── components/      # UI Components (Button, Display, ResultDis)
├── logic/           # Pure math functions (Add, Sub, Mult, Div)
├── App.tsx          # Main application logic and Parser
├── main.tsx         # Application entry point
├── style.css        # Global styles and layout
└── global.d.ts      # TypeScript declarations