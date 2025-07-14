/* /js/dashboard.js */
export function viewDashboard() {
  const email = sessionStorage.getItem("userEmail") || "Guest";

  return `
  <section class="text-center">
    <h1 class="fw-bold mb-3">Welcome, ${email.split("@")[0]}!</h1>
    <p class="text-muted mb-4">Choose where you want to go:</p>

    <div class="row g-3 justify-content-center">
      <div class="col-sm-6 col-lg-4">
        <a href="#/notes" data-link class="card-soft d-block p-4 text-decoration-none">
          <i class="bi bi-journal-text fs-1 mb-2 text-primary"></i>
          <h5 class="fw-semibold mb-1">My Notes</h5>
          <p class="text-muted small mb-0">Create, edit and delete notes.</p>
        </a>
      </div>
      <div class="col-sm-6 col-lg-4">
        <a href="#/users" data-link class="card-soft d-block p-4 text-decoration-none">
          <i class="bi bi-people fs-1 mb-2 text-success"></i>
          <h5 class="fw-semibold mb-1">Users</h5>
          <p class="text-muted small mb-0">Manage registered users.</p>
        </a>
      </div>
      <div class="col-sm-6 col-lg-4">
        <a href="#/history" data-link class="card-soft d-block p-4 text-decoration-none">
          <i class="bi bi-clock-history fs-1 mb-2 text-warning"></i>
          <h5 class="fw-semibold mb-1">History</h5>
          <p class="text-muted small mb-0">See your recent activity.</p>
        </a>
      </div>
    </div>
  </section>`;
}
