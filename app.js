
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
const modoCelsius = document.getElementById("modo-celsius");
const inputTemp = document.getElementById("input-temp")
const valFar = document.getElementById('fahrenheit-valor');
const valKel = document.getElementById('kelvin-valor');
const btnConvertir = document.getElementById('btn-convertir');


function aplicarModo(){
    modo.textContent = "Celsius";
}

modoCelsius.addEventListener("click",aplicarModo);

function resultado(){
    return inputTemp.value;
}

inputTemp.addEventListener('keydown',resultado)


function obtenerResultado(){
    const conversionArr = resultadoCelsius("celcius",Number(resultado()));

    valFar.textContent = conversionArr[0];
    valKel.textContent = conversionArr[1];
}


btnConvertir.addEventListener('click',obtenerResultado)
