const form = document.querySelector("#form-login");
const emailInput = document.querySelector("#correo-login");
const passInput = document.querySelector("#pass-login");
const alertBox = document.querySelector("#login-alert");

// regex para validar correo DUOC
const reDuoc = /^[A-Za-z0-9._%+-]+@duoc\.cl$/i;

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
    // Aquí podrías redirigir a otra página:
    // location.href = "registro-usuario.html";
  } else {
    showAlert("Corrige los errores antes de continuar.", false);
  }
});

function showError(input, msg) {
  const small = input.closest(".field").querySelector(".error");
  small.textContent = msg;
}

function showAlert(msg, ok) {
  alertBox.className = "alert " + (ok ? "ok" : "err");
  alertBox.textContent = msg;
}
