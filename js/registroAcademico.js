document.addEventListener("DOMContentLoaded", function () {
    const containerEstudiantes = document.querySelector("#idContenedorEstudiantes");

    const btnAddEstudiante = document.querySelector("#btnAgregarEstudiante");
    const btnViewEstudiantes = document.querySelector("#btnMostrarEstudiantes");

    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiantes.addEventListener("click", viewEstudiantes);

    let arrayEstudiantes = new Array();

    // funciones
    function addEstudiantes() {
        const inputCarnet = document
            .querySelector("#InputCarnet")
            .value.toString()
            .toUpperCase();
        const inputNombre = document
            .querySelector("#InputNombre")
            .value.toString()
            .toUpperCase();
        const inputApellidos = document
            .querySelector("#InputApellidos")
            .value.toString()
            .toUpperCase();

        if (inputCarnet !== "" && inputNombre !== "" && inputApellidos !== "") {
            arrayEstudiantes.push(
                new Array(inputCarnet, inputNombre, inputApellidos)
            );
            alert("Se registró el nuevo estudiante");

            document.querySelector("#InputCarnet").value = "";
            document.querySelector("#InputNombre").value = "";
            document.querySelector("#InputApellidos").value = "";
            document.querySelector("#InputCarnet").focus();
        } else {
            alert("Faltan campos que completar");
        }
    }

    function viewEstudiantes() {
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0) {
            let carnet;
            let nombres;
            let apellidos;
            let table = "<table class='table table-light table-striped'>";
            table += "<thead>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";

            for (let i = 0; i < arrayEstudiantes.length; i++) {
                carnet = arrayEstudiantes[i][0];
                nombres = arrayEstudiantes[i][1];
                apellidos = arrayEstudiantes[i][2];

                table += "<tr>";
                table += `<td scope='row' style='font-weight: bold;'>${i + 1}</td>`;
                table += `<td>${carnet}</td>`;
                table += `<td>${nombres}</td>`;
                table += `<td>${apellidos}</td>`;
                table += "</tr>";
            }

            table += "</tbody>";
            table += "</table>";

            containerEstudiantes.innerHTML = table;
        } else {
            alert("No se han registrado estudiantes");
        }
    }
});