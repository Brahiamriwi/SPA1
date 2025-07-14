/* /js/guardian.js */
export function isAuth() {
  /* Si guardas algo más robusto (token) cámbialo aquí */
  return !!sessionStorage.getItem("userEmail");
}

/* Redirige si no está logueado */
export function protectRoute(path) {
  const protectedPaths = ["#/dashboard", "#/notes", "#/users", "#/history", "#/profile"];
  if (protectedPaths.includes(path) && !isAuth()) {
    window.location.hash = "#/login";
    return false;            // no seguir con la ruta
  }
  return true;               // ok, puede seguir
}
