const APP_NAME = "Mi Sitio Web";
let vistas = parseInt(localStorage.getItem("vistas")) || 0;

const mostrarSaludo = () => {
  const hora = new Date().getHours();
  let saludo = "";
  if (hora < 12) {
    saludo = "¡Buenos días!";
  } else if (hora < 18) {
    saludo = "¡Buenas tardes!";
  } else {
    saludo = "¡Buenas noches!";
  }
  const divSaludo = document.getElementById("saludo");
  if (divSaludo) {
    divSaludo.textContent = saludo;
    divSaludo.style.fontWeight = "bold";
    divSaludo.style.marginBottom = "10px";
  }
};

const mensajeBienvenida = (nombre) => {
  return `¡Bienvenido/a ${nombre} a ${APP_NAME}!`;
};

const sumarVista = () => {
  vistas++;
  localStorage.setItem("vistas", vistas);
  const contador = document.getElementById("contador");
  if (contador) {
    contador.textContent = `Vistas: ${vistas}`;
  }
};

const cambiarColor = (color) => {
  document.body.style.backgroundColor = color;
};

const validarFormulario = (event) => {
  event.preventDefault();
  const email = document.querySelector('input[name="correo"]');
  const mensaje = document.querySelector('textarea[name="mensaje"]');
  const select = document.querySelector('select[name="tema"]');
  if (!email.value || !email.checkValidity()) {
    alert("Por favor ingrese un correo válido.");
    return;
  }
  if (!mensaje.value || mensaje.value.length < 10) {
    alert("El mensaje debe tener al menos 10 caracteres.");
    return;
  }
  if (select.value === "default") {
    alert("Por favor seleccione un tema válido.");
    return;
  }
  alert(mensajeBienvenida(document.querySelector('input[name="nombre"]').value));
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarSaludo();
  const contador = document.getElementById("contador");
  if (contador) {
    contador.textContent = `Vistas: ${vistas}`;
  }
  const botonVista = document.getElementById("sumar-vista");
  if (botonVista) {
    botonVista.addEventListener("click", sumarVista);
  }
  const btnRojo = document.getElementById("btn-rojo");
  const btnVerde = document.getElementById("btn-verde");
  const btnAzul = document.getElementById("btn-azul");
  if (btnRojo) btnRojo.addEventListener("click", () => cambiarColor("red"));
  if (btnVerde) btnVerde.addEventListener("click", () => cambiarColor("green"));
  if (btnAzul) btnAzul.addEventListener("click", () => cambiarColor("blue"));
  const formulario = document.querySelector("form");
  if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
  }
});
