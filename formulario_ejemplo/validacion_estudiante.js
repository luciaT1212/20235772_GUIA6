const carnet = document.getElementById("carnet");
const nombreCompleto = document.getElementById("nombreCompleto");
const dui = document.getElementById("dui");
const nit = document.getElementById("nit");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");

const carnetError = document.getElementById("carnetError");
const nombreCompletoError = document.getElementById("nombreCompletoError");
const duiError = document.getElementById("duiError");
const nitError = document.getElementById("nitError");
const fechaNacimientoError = document.getElementById("fechaNacimientoError");
const correoError = document.getElementById("correoError");
const edadError = document.getElementById("edadError");

const regexCarnet = /^[A-Z]{2}\d{3}$/;
const regexNombreCompleto = /^[A-Za-z\s]+$/;
const regexDUI = /^\d{8}-\d{1}$/;
const regexNIT = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
const regexFechaNacimiento = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexEdad = /^\d+$/;

function validarFormulario() {
    let isValid = true;

    if (!regexCarnet.test(carnet.value)) {
        carnetError.textContent = "Carnet inválido (Ejemplo: AB001)";
        isValid = false;
    } else {
        carnetError.textContent = "";
    }

    if (!regexNombreCompleto.test(nombreCompleto.value)) {
        nombreCompletoError.textContent = "Nombre completo inválido (solo letras y espacios)";
        isValid = false;
    } else {
        nombreCompletoError.textContent = "";
    }

    if (!regexDUI.test(dui.value)) {
        duiError.textContent = "DUI inválido (Ejemplo: 12345678-9)";
        isValid = false;
    } else {
        duiError.textContent = "";
    }

    if (!regexNIT.test(nit.value)) {
        nitError.textContent = "NIT inválido (Ejemplo: 1234-567890-123-1)";
        isValid = false;
    } else {
        nitError.textContent = "";
    }

    if (!regexFechaNacimiento.test(fechaNacimiento.value)) {
        fechaNacimientoError.textContent = "Fecha inválida (Formato: dd/mm/yyyy)";
        isValid = false;
    } else {
        fechaNacimientoError.textContent = "";
    }

    if (!regexCorreo.test(correo.value)) {
        correoError.textContent = "Correo electrónico inválido";
        isValid = false;
    } else {
        correoError.textContent = "";
    }

    if (!regexEdad.test(edad.value)) {
        edadError.textContent = "Edad inválida (solo números)";
        isValid = false;
    } else {
        edadError.textContent = "";
    }

    if (isValid) {
        alert("Formulario enviado correctamente");
    }
}