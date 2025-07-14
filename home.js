/* /js/home.js */
export function viewHome() {
  return `
  <!-- HERO -->
  <section class="row align-items-center mb-5">
    <div class="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
      <h1 class="display-5 fw-bold">Collaborate on notes<br />with your team</h1>
      <p class="text-muted mb-4">
        CrudNote is a collaborative note‑taking app that lets you create,
        edit, and share notes with your team. Sign up today to get started.
      </p>
      <a href="#/login" class="btn btn-primary me-2" data-link>Sign In</a>
      <a href="#/register" class="btn btn-outline-secondary" data-link>Register</a>
    </div>

    <!-- Imagen hero (puedes cambiar la URL por la que prefieras) -->
    <div class="col-lg-6 order-1 order-lg-2">
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60"
        class="img-fluid rounded-4 shadow-sm"
        alt="Hero image"
      />
    </div>
  </section>

  <!-- QUÉ ES CRUDNOTE -->
  <section class="mb-5">
    <h2 class="fw-bold mb-3">What is CrudNote?</h2>
    <p class="text-muted">
      CrudNote is a collaborative note‑taking application that allows you to
      create, edit, and share notes with your team. Sign up today to get started.
    </p>

    <!-- Tarjetas de features -->
    <div class="row g-3 mt-4">
      <div class="col-md-4">
        <div class="p-4 card-soft h-100">
          <i class="bi bi-pencil-square fs-3 mb-2"></i>
          <h5 class="fw-semibold">Create</h5>
          <p class="text-muted mb-0">
            Create notes with rich text editing, images, and more.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 card-soft h-100">
          <i class="bi bi-people fs-3 mb-2"></i>
          <h5 class="fw-semibold">Collaborate</h5>
          <p class="text-muted mb-0">
            Collaborate with your team in real‑time.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 card-soft h-100">
          <i class="bi bi-share fs-3 mb-2"></i>
          <h5 class="fw-semibold">Share</h5>
          <p class="text-muted mb-0">
            Share your notes with your team or the world.
          </p>
        </div>
      </div>
    </div>
  </section>
  `;
}
