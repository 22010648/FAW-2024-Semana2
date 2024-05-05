//variables globales

var nombres = [];
var numeros = [];


function init(){    

    document.getElementById("calcula_exponente").onclick = calculaExponente;
    document.getElementById("calcula_grados").onclick = convierteFarenheit;
    document.getElementById("agrega_nombres").onclick = agregarNombres;
    document.getElementById("filtrar_nombres").onclick = filtrarNombres;
    document.getElementById("calcula_edad").onclick = calcularEdad;
    document.getElementById("contar_palabras").onclick = contarPalabras;
    document.getElementById("agregar_numero").onclick = agregarNumeros;
    document.getElementById("mostrar_promedio").onclick = mostrarPromedio;
    document.getElementById("ver_color").onclick = mostrarColor;
    

}


function calculaExponente() {
    let base = parseInt(document.getElementById("valor1").value);
    let exponente = parseInt(document.getElementById("valor2").value);

    document.getElementById("divRespuesta").innerHTML = "" + base + " elevado a la " + exponente + " es igual a " +   Math.pow(base, exponente);
}

function convierteFarenheit() {
    let centigrados = parseInt(document.getElementById("grado").value);
    let farenheit = (centigrados * 9/5 ) + 32;

    document.getElementById("divRespuesta2").innerHTML = centigrados + " ºC equivalen a " + farenheit + " ºF";
}

function agregarNombres() {
    let nombre = document.getElementById("nombre").value;
    nombres.push(nombre);
    document.getElementById("nombre").value = "";
    document.getElementById("nombre").focus;
    document.getElementById("divRespuesta3").innerHTML = nombres ;    
}

function filtrarNombres() {
    let numeroLetras = parseInt(document.getElementById("numeroLetras").value);
    var nombresFiltrados = [];

    for(i = 0; i < nombres.length; i++){
        if(nombres[i].length == numeroLetras){
            nombresFiltrados.push(nombres[i]);
        }
    }

    document.getElementById("divRespuesta4").innerHTML = nombresFiltrados;    
}

function calcularEdad() {
    var fecha = new Date (document.getElementById("fecha").value);    
    var fechaHoy = new Date();
    fechaHoy.setHours(0);
    fechaHoy.setMinutes(0);
    fechaHoy.setSeconds(0);
    fechaHoy.setMilliseconds(0);

    let diferencia =  fechaHoy.getTime() - fecha.getTime();
    let anios = diferencia / (1000 * 3600 * 24 * 365.2422);    
    document.getElementById("divRespuesta5").innerHTML = "La persona tiene: " + Math.floor(anios) + " años. "  ;
}


function contarPalabras() {
    var hilera =  document.getElementById("hilera").value;    
    var palabras = hilera.split(' ');
    
    document.getElementById("divRespuesta6").innerHTML = "El texto ingresado tiene " + palabras.length + " palabras. "  ;
}

function agregarNumeros() {
    let numero = parseInt(document.getElementById("numero").value);
    numeros.push(numero);
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus;
    
    document.getElementById("divRespuesta7").innerHTML = numeros ;    
}

function mostrarPromedio() {
   let promedio = 0;

    for(i = 0; i < numeros.length; i++){
       promedio = (promedio + numeros[i]);       
    }

    promedio = (promedio / numeros.length );    
    document.getElementById("divRespuesta8").innerHTML = "El promedio de la lista es: " + promedio;    
}

function mostrarColor() {
    var color =  document.getElementById("color").value;           
     document.getElementById("divRespuesta9").style.background = color;
 }
 