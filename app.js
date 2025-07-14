/* ===== Imports ===== */
import { routes }         from "./js/routes.js";
import { protectRoute ,
         isAuth }         from "./js/guardian.js";

/* ===== Elementos globales ===== */
const div        = document.getElementById("app");
const themeBtn   = document.getElementById("themeBtn");
const btnLogout  = document.getElementById("btnLogout");
const privateLinksVisibleIn = ["#/dashboard", "#/notes", "#/users", "#/history", "#/profile"];


/* ===== Historial de movimientos ===== */
function track(path) {
  const moves = JSON.parse(sessionStorage.getItem("moves") || "[]");
  moves.push(`${new Date().toLocaleTimeString()} – Visita ${path}`);
  sessionStorage.setItem("moves", JSON.stringify(moves.slice(-20)));
}

/* ===== Mostrar / ocultar bloques de la navbar ===== */
function toggleNavbar(currentPath = "#/home") {
  const pub = document.getElementById("nav-public");
  const pri = document.getElementById("nav-private");
  const logged = isAuth();
  const showPrivate = logged && privateLinksVisibleIn.includes(currentPath);

  pub.classList.toggle("d-none",  logged && showPrivate);
  pri.classList.toggle("d-none", !showPrivate);
}


/* ===== Renderiza la ruta solicitada ===== */
function render(html) { div.innerHTML = html; }

function renderRoute(path) {
  /* 🔒 Guardia */
  if (!protectRoute(path)) return;  // redirige a #/login si no auth

  const route = routes[path];
  if (!route) {                     // 404 simple
    render("<h1 class='text-light'>404</h1>");
    return;
  }

  if (Array.isArray(route)) {       // [view, script]
    render(route[0]());
    route[1] && route[1]();
  } else {                          // solo view
    render(route());
  }

  track(path);                      // registra movimiento
  toggleNavbar();  
  
  toggleNavbar(path);   
}

/* ===== Listeners globales ===== */
document.querySelectorAll("[data-link]").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const path = a.getAttribute("href");
    window.location.hash = path;    // actualiza barra
    renderRoute(path);
  });
});

window.addEventListener("hashchange", () => {
  renderRoute(window.location.hash || "#/home");
});

/* ===== Logout ===== */
if (btnLogout) {
  btnLogout.addEventListener("click", () => {
    sessionStorage.clear();
    toggleNavbar();
    window.location.hash = "#/login";
  });
}

/* ===== Theme toggle ===== */
if (themeBtn) {
  const applyTheme = t => document.body.classList.toggle("theme-dark", t === "dark");
  applyTheme(localStorage.getItem("theme") || "light");  // al cargar
  themeBtn.addEventListener("click", () => {
    const next = document.body.classList.contains("theme-dark") ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

/* ===== Primera carga ===== */
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.hash || "#/home";  // ruta que se va a mostrar

  toggleNavbar(path);   // muestra la barra adecuada según esa ruta
  renderRoute(path);    // renderiza la vista inicial
});

