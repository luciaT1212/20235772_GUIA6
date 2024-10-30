const containerEstudiantes = document.querySelector("#idContainerEstudiantes");
const btnPromedio = document.querySelector("#idBtnPromedio");
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
    let arrayEstudiante = new Array();
    let totalEstudiantes = document.querySelector("#inputNumeroEstudiantes").value;
    let contador = 1;

    while (contador <= totalEstudiantes) {
        let estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`);
        let calificacion;

        do {
            calificacion = prompt(`Ingrese la calificación del estudiante ${contador}`);
            convertir = parseFloat(calificacion);
        } while (isNaN(convertir) || convertir < 0 || convertir > 10);

        arrayEstudiante[contador - 1] = new Array(
            estudiante,
            parseFloat(calificacion).toFixed(2)
        );

        contador++;
    }

    let calificacionAlta = 0, promedio = 0, posicion = 0;
    let listado = `<h3>Listado de estudiantes registrados</h3><ol>`;

    for (let [indice, estudiante] of arrayEstudiante.entries()) {
        let nombre = estudiante[0];
        let nota = estudiante[1];
        listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`;

        if (nota > calificacionAlta) {
            calificacionAlta = nota;
            posicion = indice;
        }

        promedio += parseFloat(nota);
    }

    listado += `</ol>`;
    promedio = (promedio / arrayEstudiante.length).toFixed(2);
    listado += `<b>Promedio de calificaciones:</b> ${promedio}<br>`;
    listado += `<b>Estudiante con mejor calificación:</b> ${arrayEstudiante[posicion][0]}`;

    containerEstudiantes.innerHTML = listado;
}