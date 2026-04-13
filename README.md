# Vanilla JS Web Calculator

A lightweight, smart web calculator built with pure HTML, CSS, and JavaScript. It features a custom mathematical expression parser and a clean modular architecture.

## Features
* **Hybrid Input:** Enter expressions via the on-screen UI buttons or type directly using your keyboard.
* **Custom String Parser:** Tokenizes input and respects mathematical Order of Operations (calculates `*` and `/` before `+` and `-`).
* **Modular Design:** Uses ES6 modules (`add.js`, `sub.js`, etc.) to keep the core logic separated and maintainable.
* **Safe Error Handling:** Gracefully handles division by zero by returning `NaN` instead of crashing the application.
* **Modern UI:** Interface built using CSS Grid.

## Project Structure
```text
/
├── index.html        # Main markup and UI layout
├── style.css         # CSS Grid styling
└── app/
    ├── app.js        # Main controller, DOM manipulation, and parsing logic
    └── packages/     # Isolated math operation modules
        ├── add.js
        ├── sub.js
        ├── mult.js
        └── div.js
