/* /js/notes.js */
import { url } from "./config.js";

/* ---------- Vista ---------- */
export function viewNotes() {
  return `
  <section class="row justify-content-center">
    <div class="col-lg-8">
      <h2 class="fw-bold mb-3">My Notes</h2>

      <form id="noteForm" class="input-group mb-4">
        <input id="noteText" class="form-control" placeholder="Write a note…" />
        <button class="btn btn-primary">Add</button>
      </form>

      <ul id="noteList" class="list-group"></ul>
    </div>
  </section>`;
}

/* ---------- Lógica ---------- */
export function scriptNotes() {
  const list = document.getElementById("noteList");
  const input = document.getElementById("noteText");

  async function loadNotes() {
    list.innerHTML = "";
    const res  = await fetch(url + "/notes");
    const data = await res.json();
    if (data.length === 0) {
      list.innerHTML = `<li class="list-group-item text-muted text-center">No notes yet</li>`;
    } else {
      data.forEach(n => {
        list.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="flex-grow-1">${n.text}</span>
          <button class="btn btn-sm btn-outline-danger" data-id="${n.id}">
            <i class="bi bi-trash"></i>
          </button>
        </li>`;
      });
    }
  }

  /* Añadir nota */
  document.getElementById("noteForm").addEventListener("submit", async e => {
    e.preventDefault();
    if (!input.value.trim()) return;
    await fetch(url + "/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input.value })
    });
    input.value = "";
    loadNotes();
  });

  /* Eliminar nota (delegación) */
  list.addEventListener("click", async e => {
    const id = e.target.closest("[data-id]")?.dataset.id;
    if (id) {
      await fetch(url + "/notes/" + id, { method: "DELETE" });
      loadNotes();
    }
  });

  loadNotes();
}
