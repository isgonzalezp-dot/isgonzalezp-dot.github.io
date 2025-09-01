    document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    // Validar nombre
    const nombre = document.getElementById("nombre").value.trim();
    if (!/^[a-zA-Z\s]{1,50}$/.test(nombre)) {
      document.getElementById("errorNombre").textContent = "El nombre debe tener solo letras y espacios (máx. 50).";
      valido = false;
    } else {
      document.getElementById("errorNombre").textContent = "";
    }

    // Validar correo
    const correo = document.getElementById("correo").value.trim();
    if (!/^[\w._%+-]+@duoc\.cl$/.test(correo)) {
      document.getElementById("errorCorreo").textContent = "Debe ser un correo válido @duoc.cl.";
      valido = false;
    } else {
      document.getElementById("errorCorreo").textContent = "";
    }

    // Validar contraseña
    const password = document.getElementById("password").value;
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
    if (!regexPass.test(password)) {
      document.getElementById("errorPassword").textContent =
        "La contraseña debe tener 8+ caracteres, mayúscula, minúscula, número y símbolo (@#$%).";
      valido = false;
    } else {
      document.getElementById("errorPassword").textContent = "";
    }

    // Confirmar contraseña
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      document.getElementById("errorConfirmPassword").textContent = "Las contraseñas no coinciden.";
      valido = false;
    } else {
      document.getElementById("errorConfirmPassword").textContent = "";
    }

    // Teléfono (opcional)
    const telefono = document.getElementById("telefono").value.trim();
    if (telefono && !/^\d{9}$/.test(telefono)) {
      document.getElementById("errorTelefono").textContent = "Debe ser un número válido de 9 dígitos.";
      valido = false;
    } else {
      document.getElementById("errorTelefono").textContent = "";
    }

    // Validar mascotas
    const tipos = document.querySelectorAll(".tipoMascota");
    const nombres = document.querySelectorAll(".nombreMascota");
    for (let i = 0; i < tipos.length; i++) {
      if (!tipos[i].value || !nombres[i].value.trim()) {
        alert("Cada mascota debe tener tipo y nombre (máx. 50 caracteres).");
        valido = false;
        break;
      }
    }

    if (valido) {
      alert("Registro exitoso 🎉");
      form.reset();
    }
  });

  // Añadir mascota
  document.getElementById("addMascota").addEventListener("click", () => {
    const container = document.getElementById("mascotasContainer");
    const div = document.createElement("div");
    div.classList.add("mascota");
    div.innerHTML = `
      <label>Tipo de mascota:
        <select class="tipoMascota" required>
          <option value="">Seleccione...</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Ave">Ave</option>
          <option value="Otro">Otro</option>
        </select>
      </label>
      <label>Nombre de mascota:
        <input type="text" class="nombreMascota" maxlength="50" required>
      </label>
    `;
    container.appendChild(div);
  });
});
