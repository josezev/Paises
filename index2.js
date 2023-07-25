let nombre = document.getElementById("nombre");
/* funciones para validar input*/
function validarTexto() {
    let span = document.getElementById("validnombre");
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(nombre.value)) {
        span.style = "display:block";
        span.innerText = "Por favor, introduce solo caracteres de texto.";
        span.className = "text-danger";
        nombre.className = "form-control border-input-error";
        return false;
    }
    else {
        span.innerText = "";
        span.style = "display:none;";
        nombre.className = "form-control border-input-ok";
        return true;
    }
}
nombre.addEventListener('input', validarTexto);

let correo = document.getElementById("apellido");
function validarCorreo() {
    let validCorreo = document.getElementById("validapellido");
    var regex = /^[A-Za-z]+$/;
    if (!regex.test(correo.value)) {
        validCorreo.style = "display:block";
        validCorreo.innerText = "Por favor, introduce solo caracteres de texto";
        validCorreo.className = "text-danger";

        correo.className = "form-control border-input-error";
        return false;
    }
    else {
        validCorreo.style = "display:none";
        validCorreo.innerText = "";
        correo.className = "form-control border-input-ok";
        return true;
    }
}
correo.addEventListener("input", validarCorreo);

let telefono = document.getElementById("telefono");
function validartelefono() {
    let validtelefono = document.getElementById("validtelefono");
    var regex = /^[A-Za-z]+$/;
    if (!regex.test(telefono.value)) {
        validtelefono.style = "display:block";
        validtelefono.innerText = "Por favor, introduce solo caracteres de texto";
        validtelefono.className = "text-danger";

        telefono.className = "form-control border-input-error";
        return false;
    }
    else {
        validtelefono.style = "display:none";
        validtelefono.innerText = "";
        telefono.className = "form-control border-input-ok";
        return true;
    }
}
telefono.addEventListener("input", validartelefono);

let array = []; //es un array o variable global


getApi();
function leerForms() {

    let valid0 = validarTexto();
    let valid1 = validarCorreo();
    let valid2 = validartelefono();

    if (valid0 && valid1 && valid2  == true) {
        // crear un objeto en javascript
        let objeto = {
            "nombre": nombre.value,
            "apellido": apellido.value,
            "telefono": telefono.value,
            "fecha": Date(),
            "estado": false

        };
        array.push(objeto); //agregar el objeto al array
        console.table(array); // mostrar la info del array en la console

        actualizarTablaHtml();
    }
}

function actualizarTablaHtml() {
    let datosBody = document.getElementById('datosBody');
    datosBody.innerHTML = "";
    //recorrer el array que tiene los datos
    for (let i = 0; i < array.length; i++) {

        //crear la fila
        let fila = document.createElement('tr');
        //crear la columna nombre
        let columnanombre = document.createElement('td');
        columnanombre.textContent = array[i].nombre; //pasar el dato
        fila.appendChild(columnanombre); // add columna a la fila

        //crear la columna apellido
        let columnaapellido = document.createElement('td');
        columnaapellido.textContent = array[i].apellido; //pasar el dato
        fila.appendChild(columnaapellido); // add columna a la fila

        //crear la columna telefono
        let columnatelefono = document.createElement('td');
        columnatelefono.textContent = array[i].telefono; //pasar el dato
        fila.appendChild(columnatelefono); // add columna a la fila

        let columnaOPciones = document.createElement('td');
        //crear boton eliminar
        let btneliminar = document.createElement('button');
        btneliminar.textContent = "";
        btneliminar.className = "btn-close";
        btneliminar.addEventListener('click', function () {
            eliminar(i);
        });
        columnaOPciones.appendChild(btneliminar);

        columnaOPciones.appendChild(btneliminar);

        fila.appendChild(columnaOPciones);


        datosBody.appendChild(fila);
    }

}
function eliminar(i) {
    array.splice(i, 1);
    actualizarTablaHtml();
}
function cambiaEstado(i){
    array[i].estado=!array[i].estado;
    actualizarTablaHtml();
}