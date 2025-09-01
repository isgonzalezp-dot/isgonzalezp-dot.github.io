// === LOGIN ===
const form = document.querySelector("#form-login");
const emailInput = document.querySelector("#correo-login");
const passInput = document.querySelector("#pass-login");
const alertBox = document.querySelector("#login-alert");

// regex para validar correo DUOC
const reDuoc = /^[A-Za-z0-9._%+-]+@duoc\.cl$/i;

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    // Validación correo
    if (!reDuoc.test(emailInput.value.trim())) {
      showError(emailInput, "Debe ser un correo válido @duoc.cl");
      ok = false;
    } else {
      showError(emailInput, "");
    }

    // Validación contraseña
    if (!passInput.value.trim()) {
      showError(passInput, "Ingresa tu contraseña");
      ok = false;
    } else {
      showError(passInput, "");
    }

    if (ok) {
      showAlert("Inicio de sesión correcto ✅", true);
      // ✅ Redirige a la página de registro de mascotas
      setTimeout(() => {
        window.location.href = "registro-mascota.html";
      }, 800);
    } else {
      showAlert("Corrige los errores antes de continuar.", false);
    }
  });
}

function showError(input, msg) {
  const small = input.closest(".field")?.querySelector(".error");
  if (small) small.textContent = msg;
}

function showAlert(msg, ok) {
  if (!alertBox) return;
  alertBox.className = "alert " + (ok ? "ok" : "err");
  alertBox.textContent = msg;
}

// === REGISTRO DE MASCOTAS ===
document.addEventListener("DOMContentLoaded", () => {
  const addMascotaBtn = document.getElementById("addMascota");
  if (addMascotaBtn) {
    addMascotaBtn.addEventListener("click", () => {
      const container = document.getElementById("mascotasContainer");

      const div = document.createElement("div");
      div.classList.add("mascota");
      div.innerHTML = `
        <label>Tipo de mascota</label>
        <select class="tipoMascota" required>
          <option value="">Seleccione...</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Ave">Ave</option>
          <option value="Otro">Otro</option>
        </select>
        <label>Nombre de mascota</label>
        <input type="text" class="nombreMascota" maxlength="50" required>
        <button type="button" class="btn-ghost removeMascota">Eliminar</button>
      `;
      container.appendChild(div);

      // botón eliminar
      div.querySelector(".removeMascota").addEventListener("click", () => {
        div.remove();
      });
    });
  }
});
