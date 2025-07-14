
# CrudNote

CrudNote es una aplicación web tipo SPA (Single Page Application) desarrollada con **JavaScript Vanilla** y **Bootstrap**, que permite a los usuarios registrarse, iniciar sesión, gestionar notas tipo CRUD, ver historial de actividades y administrar perfiles.

---

## 🧑‍💻 Equipo de desarrollo

- Brahiam Ruiz Alzate  
- (Tu equipo si aplica)  

---

## 📌 Descripción del proyecto

**CrudNote** es una aplicación colaborativa para tomar notas, enfocada en aprender la arquitectura SPA sin frameworks, con un sistema básico de autenticación, navegación dinámica con `hash`, y persistencia local de estado.

---

## 🚀 Funcionalidades implementadas

- 🔐 **Autenticación básica** con inicio y cierre de sesión
- 👥 **Registro de nuevos usuarios**
- 🏠 **Página de inicio (Home)** con presentación de la app
- 🗂️ **Dashboard** privado con acceso a funcionalidades principales
- 📝 **CRUD de notas**: Crear, leer, actualizar y eliminar notas
- 👤 **Perfil de usuario**
- 📜 **Historial de movimientos** (guardado en `sessionStorage`)
- 🎨 **Tema claro/oscuro** con botón de alternancia
- 🔄 **Protección de rutas**: solo usuarios autenticados acceden a secciones privadas
- 📁 **Gestión de usuarios (opcional)**

---

## 🛠️ Tecnologías utilizadas

- HTML5 + CSS3
- JavaScript Vanilla (ES6 Modules)
- Bootstrap 5
- JSON Server (para simular una base de datos REST)
- localStorage / sessionStorage

---

## 📁 Estructura del proyecto

```
crudnote/
├── index.html
├── styles.css
├── app.js
├── db.json
├── js/
│   ├── routes.js
│   ├── config.js
│   ├── guardian.js
│   ├── home.js
│   ├── login.js
│   ├── register.js
│   ├── dashboard.js
│   ├── notes.js
│   ├── history.js
│   ├── profile.js
│   ├── users.js
│   ├── terms.js
│   └── contact.js
```

---

## 🖥️ Cómo ejecutar el proyecto localmente

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/crudnote.git
cd crudnote
```

---

## 📦 Instalación de JSON Server

### Requisitos

- Tener instalado [Node.js](https://nodejs.org)

### 2. Instalar JSON Server

```bash
npm install -g json-server
```

### 3. Crear (o verificar) el archivo `db.json`

```json
{
  "users": [
    {
      "id": 1,
      "name": "brahiam",
      "email": "brahiam@gmail.com",
      "password": "123456"
    }
  ],
  "notes": []
}
```

Puedes modificar o agregar datos.

### 4. Ejecutar JSON Server

```bash
json-server --watch db.json --port 3000
```

Esto iniciará una API REST simulada en:
```
http://localhost:3000
```

---

## 🧪 Cómo probar la aplicación

1. Asegúrate de que **JSON Server esté corriendo**
2. Abre `index.html` con Live Server (Visual Studio Code) o en tu navegador.
3. Regístrate o inicia sesión con un usuario de `db.json`.
4. Explora el dashboard, crea notas, navega por el historial, cambia de tema, etc.

---

## 🧠 Cómo funciona el enrutamiento

La SPA usa navegación por `hash` (`#/ruta`) y detecta los cambios para cargar dinámicamente vistas en un solo `<div id="app">`, usando el archivo `routes.js` como mapa de rutas.

```js
export const routes = {
  "#/home": viewHome,
  "#/login": [viewLogin, scriptLogin],
  "#/register": [viewRegister, scriptRegister],
  "#/dashboard": [viewDashboard, scriptDashboard],
  "#/notes": [viewNotes, scriptNotes],
  "#/profile": viewProfile,
  "#/history": viewHistory,
  ...
}
```

---

## 🔒 Seguridad básica

- Las rutas protegidas (dashboard, notes, etc.) solo son accesibles si existe `sessionStorage.userEmail`.
- Si el usuario no está autenticado, es redirigido automáticamente al login.

---

## 🌓 Modo claro / oscuro

- Guarda la preferencia del usuario en `localStorage`.
- Aplica la clase `theme-dark` al `<body>` para activar estilos personalizados en CSS.

```css
body.theme-dark {
  background-color: #181a1b;
  color: #f8f9fa;
}
```

---

## 🗑️ Funcionalidades mejorables

- Validaciones más completas en login y register
- Recuperación de contraseña
- Subida de imágenes en perfil
- CRUD completo para notas con etiquetas o prioridad
- Persistencia del historial en JSON Server (actualmente solo en sessionStorage)

---

## 📄 Licencia

Este proyecto está creado con fines educativos. Puedes modificarlo y adaptarlo libremente.

---

## ✨ Autor

**Brahiam Ruiz Alzate**  
Desarrollador en formación • Medellín, Colombia

---
