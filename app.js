let fahrenheit;
let kelvin;

function convertidorCelsius(valor){
    fahrenheit = (valor * 9/5) + 32;
    kelvin = valor+ 273.15;
    return [fahrenheit,kelvin]
}

/// Escalabilidad de la funcion para que devuelva la conversion de fahrenheit a celsius y kelvin y de kelvin a celsius y fahrenheit
/* function convertidorFahrenheit(valor){

}
function convertidorKelvin(valor){

} */
function resultadoCelsius(conversion, valor) {
    conversion = String(conversion).toLowerCase();

    if(conversion == "celcius" && typeof valor == "number" ){
        return  convertidorCelsius(valor);
    }else if(typeof valor == "string"){
        console.log("Por favor ingrese un número");
    }

};


console.log(resultadoCelsius("celcius",32));


// dom

const modo = document.getElementById("modo");
const inputTemp = document.getElementById("input-temp")
const valFar = document.getElementById('fahrenheit-valor');
const valKel = document.getElementById('kelvin-valor');
const btnConvertir = document.getElementById('btn-convertir');

// NUEVO: alerta de error y unidad elegida
const alertaError = document.getElementById("alerta-error");
let unidadActual = null;

// NUEVO: todos los items del dropdown que tengan data-unidad
const itemsUnidad = document.querySelectorAll("[data-unidad]");


// CAMBIADO: ahora recibe el item clickeado, lee su dataset y guarda en localStorage
function aplicarModo(item){
    modo.textContent = item.textContent.trim();
    unidadActual = item.dataset.unidad;
    localStorage.setItem("unidad", unidadActual);
}

itemsUnidad.forEach(function(item){
    item.addEventListener("click", function(){
        aplicarModo(item);
    });
});

// NUEVO: al cargar la página, recuperar la unidad guardada
const unidadGuardada = localStorage.getItem("unidad");
if(unidadGuardada){
    const itemGuardado = document.querySelector('[data-unidad="' + unidadGuardada + '"]');
    if(itemGuardado){
        aplicarModo(itemGuardado);
    }
}

function resultado(){
    return inputTemp.value;
}

inputTemp.addEventListener('keydown',resultado)


// NUEVO: mostrar y ocultar el error
function mostrarError(mensaje){
    alertaError.textContent = mensaje;
    alertaError.classList.remove("d-none");
}

function ocultarError(){
    alertaError.classList.add("d-none");
    inputTemp.classList.remove("is-invalid");
}


function obtenerResultado(){
    ocultarError();

    // NUEVO: 1. ¿eligió la unidad?
    if(!unidadActual){
        mostrarError("Primero selecciona la unidad");
        return;
    }

    // NUEVO: 2. ¿escribió un número?
    const texto = resultado().trim();
    if(texto === "" || Number.isNaN(Number(texto))){
        mostrarError("Ingresa solo números");
        inputTemp.classList.add("is-invalid");
        return;
    }

    // CAMBIADO: en vez de "celcius" fijo, usa la unidad elegida
    const conversionArr = resultadoCelsius(unidadActual,Number(texto));

    valFar.textContent = conversionArr[0];
    valKel.textContent = conversionArr[1];
}


btnConvertir.addEventListener('click',obtenerResultado)