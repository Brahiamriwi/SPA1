/* /js/users.js */
import { url } from "./config.js";

/* ---------- Vista ---------- */
export function viewUsers() {
  return `
  <section class="row justify-content-center">
    <div class="col-lg-10">
      <h2 class="fw-bold mb-3">Users</h2>

      <div class="table-responsive">
        <table class="table align-middle text-center">
          <thead class="table-primary">
            <tr>
              <th>#</th><th>Name</th><th>Email</th><th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </section>`;
}

/* ---------- Lógica ---------- */
export async function scriptUsers() {
  const tbody = document.querySelector("tbody");

  async function loadUsers() {
    const res  = await fetch(url + "/users");
    const data = await res.json();
    tbody.innerHTML = data
      .map(
        u => `<tr>
          <td>${u.id}</td>
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td>
            <button class="btn btn-sm btn-outline-warning" disabled>Edit</button>
            <button class="btn btn-sm btn-outline-danger" data-id="${u.id}">
              Delete
            </button>
          </td>
        </tr>`
      )
      .join("");
  }

  /* Eliminar usuario (solo demostrativo) */
  tbody.addEventListener("click", async e => {
    const id = e.target.dataset.id;
    if (id) {
      await fetch(url + "/users/" + id, { method: "DELETE" });
      loadUsers();
    }
  });

  loadUsers();
}
