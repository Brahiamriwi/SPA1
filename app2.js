import { routes } from "./js/routes.js";

const div = document.getElementById("app");

// ⬇️ cualquier <a data-link> añadida al menú ya funciona sin tocar JS
document.querySelectorAll("[data-link]").forEach(a => {
  a.addEventListener("click", async e => {
    e.preventDefault();
    const path = a.getAttribute("href");

    if (Array.isArray(routes[path])) {
      render(routes[path][0]());
      routes[path][1] && routes[path][1]();           // script opcional
    } else {
      render(routes[path] ? routes[path]() : "<h1 class='text-light'>404</h1>");
    }

    window.location.hash = path;
  });
});

function render(html) { div.innerHTML = html; }

/* Mantengo tu manejo de hash directo (F5 / copiar‑pegar URL) */
window.addEventListener("hashchange", () => {
  const path = window.location.hash || "#/home";
  render(Array.isArray(routes[path]) ? routes[path][0]() : routes[path]?.() || "<h1 class='text-light'>404</h1>");
  Array.isArray(routes[path]) && routes[path][1]();
});

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.hash || "#/home";
  render(Array.isArray(routes[path]) ? routes[path][0]() : routes[path]?.() || "<h1 class='text-light'>404</h1>");
  Array.isArray(routes[path]) && routes[path][1]();
});
