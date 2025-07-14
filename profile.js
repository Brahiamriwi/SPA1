/* /js/profile.js */
export function viewProfile() {
  const email = sessionStorage.getItem("userEmail") || "Not logged";
  return `
  <section class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow-sm p-4">
        <h2 class="fw-bold mb-3 text-center">Profile</h2>
        <p><strong>Email:</strong> ${email}</p>
        <button id="btnLogout" class="btn btn-outline-danger w-100 mt-3">
          Logout
        </button>
      </div>
    </div>
  </section>`;
}
export function scriptProfile() {
  document.getElementById("btnLogout").addEventListener("click", () => {
    sessionStorage.clear();
    window.location.hash = "#/login";
  });
}

