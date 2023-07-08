

let pais = document.getElementById("pais");
/* funciones para validar input*/
function validarTexto() {
    let span = document.getElementById("validpais");
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(pais.value)) {
        span.style = "display:block";
        span.innerText = "Por favor, introduce solo caracteres de texto.";
        span.className = "text-danger";
        pais.className = "form-control border-input-error";
        return false;
    }
    else {
        span.innerText = "";
        span.style = "display:none;";
        pais.className = "form-control border-input-ok";
        return true;
    }
}
pais.addEventListener('input', validarTexto);

let correo = document.getElementById("capital");
function validarCorreo() {
    let validCorreo = document.getElementById("validcapital");
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

let region = document.getElementById("region");
function validarregion() {
    let validregion = document.getElementById("validregion");
    var regex = /^[A-Za-z]+$/;
    if (!regex.test(region.value)) {
        validregion.style = "display:block";
        validregion.innerText = "Por favor, introduce solo caracteres de texto";
        validregion.className = "text-danger";

        region.className = "form-control border-input-error";
        return false;
    }
    else {
        validregion.style = "display:none";
        validregion.innerText = "";
        region.className = "form-control border-input-ok";
        return true;
    }
}
region.addEventListener("input", validarregion);

let continente = document.getElementById("continente");
function validarcontinente() {
    let validcontinente = document.getElementById("validcontinente");
    var regex = /^[A-Za-z]+$/;
    if (!regex.test(continente.value)) {
        validcontinente.style = "display:block";
        validcontinente.innerText = "Por favor, introduce solo caracteres de texto";
        validcontinente.className = "text-danger";

        continente.className = "form-control border-input-error";
        return false;
    }
    else {
        validcontinente.style = "display:none";
        validcontinente.innerText = "";
        continente.className = "form-control border-input-ok";
        return true;
    }
}
continente.addEventListener("input", validarcontinente);

let descripcion = document.getElementById("descripcion");


let array = []; //es un array o variable global

//forma 2
function getApi(){
    const url = "https://restcountries.com/v3.1/lang/spanish";
    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(data){
        array=[];
        data.forEach(ob=>{
            const data_api={
                pais:ob.name.common,
                capital:ob.capital[0],
                region:ob.region,
                continente:ob.continents[0]
            };
            array.push(data_api);
        });
        console.table(array);
        actualizarTablaHtml();
    })
    .catch(function(error){
        console.log(error);
    });
}


getApi();
function leerForms() {

    let valid0 = validarTexto();
    let valid1 = validarCorreo();
    let valid2 = validarregion();
    let valid3 = validarcontinente();

    if (valid0 && valid1 && valid2 && valid3 == true) {
        // crear un objeto en javascript
        let objeto = {
            "pais": pais.value,
            "capital": capital.value,
            "region": region.value,
            "continente": continente.value,
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
        //crear la columna pais
        let columnapais = document.createElement('td');
        columnapais.textContent = array[i].pais; //pasar el dato
        fila.appendChild(columnapais); // add columna a la fila

        //crear la columna capital
        let columnacapital = document.createElement('td');
        columnacapital.textContent = array[i].capital; //pasar el dato
        fila.appendChild(columnacapital); // add columna a la fila

        //crear la columna region
        let columnaregion = document.createElement('td');
        columnaregion.textContent = array[i].region; //pasar el dato
        fila.appendChild(columnaregion); // add columna a la fila

        //crear la columna continente
        let columnacontinen = document.createElement('td');
        columnacontinen.textContent = array[i].continente; //pasar el dato
        fila.appendChild(columnacontinen); // add columna a la fila

        let columnaOPciones = document.createElement('td');
        //crear boton eliminar
        let btneliminar = document.createElement('button');
        btneliminar.textContent = "Eliminar";
        btneliminar.className = "btn btn-danger me-2";
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