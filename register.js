import { url } from "./config.js";

/* Vista */
export function viewRegister() {
  return `
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card shadow-sm border-0 rounded-4 p-4">
        <h2 class="fw-bold mb-3 text-center">Create Account</h2>

        <form id="registerForm" novalidate>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input id="regName" class="form-control" placeholder="Your name" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input id="regEmail" type="email" class="form-control" placeholder="you@example.com" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input id="regPass" type="password" class="form-control" placeholder="Create a password" required />
          </div>

          <button class="btn btn-primary w-100" type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>`;
}

export function scriptRegister() {
  document.getElementById("registerForm").addEventListener("submit", async e => {
    e.preventDefault();
    const newUser = {
      name: document.getElementById("regName").value,
      email: document.getElementById("regEmail").value,
      password: document.getElementById("regPass").value
    };
    await fetch(url + "/users", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(newUser) });
    window.location.hash = "#/login";
  });
}
