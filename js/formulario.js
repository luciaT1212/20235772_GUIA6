const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const inputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");

const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAddPais");

const notificacion = document.getElementById("idNotificacion");
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

const idModal = document.getElementById("idModal");

let arrayPaciente = [];

const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";
    inputNombre.focus();
};

const addPaciente = () => {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo = inputRdMasculino.checked ? "Hombre" : inputRdFemenino.checked ? "Mujer" : "";
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if (nombre && apellido && fechaNacimiento && sexo && pais != 0 && direccion) {
        arrayPaciente.push({ nombre, apellido, fechaNacimiento, sexo, labelPais, direccion });
        mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        toast.show();
        limpiarForm();
        imprimirPacientes();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

function imprimirFilas() {
    let $fila = "";
    arrayPaciente.forEach((element, index) => {
        $fila += `<tr>
                    <td scope="row" class="text-center fw-bold">${index + 1}</td>
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.fechaNacimiento}</td>
                    <td>${element.sexo}</td>
                    <td>${element.labelPais}</td>
                    <td>${element.direccion}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick="editarPaciente(${index})">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button type="button" class="btn btn-danger" onclick="eliminarPaciente(${index})">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </td>
                </tr>`;
    });
    return $fila;
}

const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">
                        <tr>
                            <th scope="col" class="text-center" style="width:5%">#</th>
                            <th scope="col" class="text-center" style="width:15%">Nombre</th>
                            <th scope="col" class="text-center" style="width:15%">Apellido</th>
                            <th scope="col" class="text-center" style="width:10%">Fecha nacimiento</th>
                            <th scope="col" class="text-center" style="width:10%">Sexo</th>
                            <th scope="col" class="text-center" style="width:15%">País</th>
                            <th scope="col" class="text-center" style="width:25%">Dirección</th>
                            <th scope="col" class="text-center" style="width:10%">Opciones</th>
                        </tr>
                        ${imprimirFilas()}
                    </table>
                  </div>`;
    document.getElementById("idTablaPacientes").innerHTML = $table;
};

function editarPaciente(index) {
    const paciente = arrayPaciente[index];
    inputNombre.value = paciente.nombre;
    inputApellido.value = paciente.apellido;
    inputFechaNacimiento.value = paciente.fechaNacimiento;
    inputRdMasculino.checked = paciente.sexo === "Hombre";
    inputRdFemenino.checked = paciente.sexo === "Mujer";
    cmbPais.value = [...cmbPais.options].findIndex(option => option.text === paciente.labelPais);
    inputDireccion.value = paciente.direccion;

    eliminarPaciente(index);
}

function eliminarPaciente(index) {
    arrayPaciente.splice(index, 1);
    imprimirPacientes();
}

const addPais = () => {
    let paisNew = inputNombrePais.value;
    if (paisNew) {
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = cmbPais.children.length + 1;
        cmbPais.appendChild(option);
        mensaje.innerHTML = "País agregado correctamente";
        toast.show();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

buttonLimpiarPaciente.onclick = () => limpiarForm();
buttonAgregarPaciente.onclick = () => addPaciente();
buttonMostrarPaciente.onclick = () => imprimirPacientes();
buttonAgregarPais.onclick = () => addPais();

idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

limpiarForm();