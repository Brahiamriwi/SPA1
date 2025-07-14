/* /js/history.js */
export function viewHistory() {
  const moves = JSON.parse(sessionStorage.getItem("moves") || "[]");

  return `
  <section class="row justify-content-center">
    <div class="col-lg-8">
      <h2 class="fw-bold mb-3">Activity History</h2>
      <ul class="list-group">
        ${moves
          .map(m => `<li class="list-group-item">${m}</li>`)
          .join("") || `<li class="list-group-item text-muted text-center">No activity yet</li>`}
      </ul>
    </div>
  </section>`;
}
export function scriptHistory() {}

