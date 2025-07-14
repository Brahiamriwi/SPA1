import { url } from "./config.js";   



/* /js/login.js */
export function viewLogin() {
  return `
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card shadow-sm border-0 rounded-4 p-4">
        <h2 class="fw-bold mb-3 text-center">Sign In</h2>

        <form id="loginForm" class="needs-validation" novalidate>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              id="loginEmail"
              type="email"
              class="form-control"
              placeholder="Enter your username or email"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              id="loginPass"
              type="password"
              class="form-control"
              placeholder="Your password"
              required
            />
          </div>

          <button class="btn btn-primary w-100" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>`;
}

export function scriptLogin() {
  document.getElementById("loginForm").addEventListener("submit", async e => {
    e.preventDefault();

    const emailOrName = document.getElementById("loginEmail").value.trim();
    const pass        = document.getElementById("loginPass").value.trim();

    /* 1️⃣ Primero intenta por email */
    let res  = await fetch(`${url}/users?email=${emailOrName}`);
    let data = await res.json();

    /* 2️⃣ Si no existe, intenta por name */
    if (data.length === 0) {
      res  = await fetch(`${url}/users?name=${emailOrName}`);
      data = await res.json();
    }

    const user = data[0];

    if (!user || user.password !== pass) {
      alert("Email, usuario o contraseña incorrectos.");
      return;
    }

    /* Autenticado */
    sessionStorage.setItem("userEmail", user.email);
    window.location.hash = "#/dashboard";
  });
}
