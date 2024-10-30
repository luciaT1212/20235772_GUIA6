const containerResultado = document.querySelector("#idContainerResultado");
const btnCalcular = document.querySelector("#idBtnCalcular");
btnCalcular.addEventListener("click", calcularTabla);

function calcularTabla() {
    const inputTabla = document.querySelector("#inputTabla").value;
    let contador = 1;

    if (inputTabla > 0) {
        let tabla = `<h2>Tabla de multiplicar del ${inputTabla}</h2>`;
        tabla += `<table class="table table-bordered table-striped text-center" style="width: 60%; margin: 0 auto;">`;
        tabla += `<thead class="table-light">
                    <tr>
                        <th>#</th>
                        <th>x</th>
                        <th>${inputTabla}</th>
                        <th>=</th>
                        <th>Resultado</th>
                    </tr>
                  </thead>`;
        tabla += `<tbody>`;

        do {
            let resultado = contador * inputTabla;
            tabla += `<tr>
                        <td>${contador}</td>
                        <td>x</td>
                        <td>${inputTabla}</td>
                        <td>=</td>
                        <td>${resultado}</td>
                      </tr>`;

            contador++;
        } while (contador <= 12);

        tabla += `</tbody></table>`;

        document.querySelector("#inputTabla").value = 1;
        document.querySelector("#inputTabla").focus();
        containerResultado.innerHTML = tabla;
    } else {
        alert("No se ha ingresado un número válido");
    }
}