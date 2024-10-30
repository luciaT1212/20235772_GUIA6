const campo = document.getElementById("idTxtNumero");
const boton = document.getElementById("idBtnCalcular");

const validarNumero = function (e) {
    let validar = /[0-9]{1,}/;
    let tecla = e.key;

    if (!validar.test(tecla)) e.preventDefault();
};

campo.addEventListener("keypress", validarNumero);

function calcularFactorial(numero) {
    return numero <= 1 ? 1 : numero * calcularFactorial(numero - 1);
}

const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero} es ${resultado}`;
};

function calcular() {
    let numero = document.getElementById("idTxtNumero").value;
    if (numero !== "") {
        numero = parseInt(numero);
        if (numero >= 0) {
            const resultado = calcularFactorial(numero);
            imprimir(numero, resultado);
        } else {
            alert("Debe ingresar un número válido");
        }
    } else {
        alert("Debe ingresar un número válido");
    }
}

boton.addEventListener("click", calcular);