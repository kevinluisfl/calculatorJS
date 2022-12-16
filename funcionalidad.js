var numeroA=null;
var numeroB=null;
var operacion="";
let n1 = document.querySelector('#numeroA');
let signo = document.querySelector('#signo');
let n2 = document.querySelector('#numeroB');
var ban = false;

var ansn = null;
var anss = null;
var resul = null;

function init(){
    ///display resultado
    let resultado = document.getElementById('resultado');

    /////botones de operaciones
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');
    let borrar = document.getElementById('borrar');

    /////botones numericos
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let punto = document.getElementById('punto');

    /////eventos botones nuemricos
    uno.onclick = function(e){
        nuevo();
        resultado.textContent += "1";
        if(!operacion){
            n1.textContent += "1";
        }else{
            n2.textContent += "1";
        }
    }
    dos.onclick = function(e){
        nuevo();
        resultado.textContent += "2";
        if(!operacion){
            n1.textContent += "2";
        }else{
            n2.textContent += "2";
        }
    }
    tres.onclick = function(e){
        nuevo();
        resultado.textContent += "3";
        if(!operacion){
            n1.textContent += "3";
        }else{
            n2.textContent += "3";
        }
    }
    cuatro.onclick = function(e){
        nuevo();
        resultado.textContent += "4";
        if(!operacion){
            n1.textContent += "4";
        }else{
            n2.textContent += "4";
        }
    }
    cinco.onclick = function(e){
        nuevo();
        resultado.textContent += "5";
        if(!operacion){
            n1.textContent += "5";
        }else{
            n2.textContent += "5";
        }
    }
    seis.onclick = function(e){
        nuevo();
        resultado.textContent += "6";
        if(!operacion){
            n1.textContent += "6";
        }else{
            n2.textContent += "6";
        }
    }
    siete.onclick = function(e){
        nuevo();
        resultado.textContent += "7";
        if(!operacion){
            n1.textContent += "7";
        }else{
            n2.textContent += "7";
        }
    }
    ocho.onclick = function(e){
        nuevo();
        resultado.textContent += "8";
        if(!operacion){
            n1.textContent += "8";
        }else{
            n2.textContent += "8";
        }
    }
    nueve.onclick = function(e){
        nuevo();
        resultado.textContent += "9";
        if(!operacion){
            n1.textContent += "9";
        }else{
            n2.textContent += "9";
        }
    }
    cero.onclick = function(e){
        nuevo();
        resultado.textContent += "0";
        if(!operacion){
            n1.textContent += "0";
        }else{
            n2.textContent += "0";
        }
    }
    punto.onclick = function(e){
        nuevo();
        resultado.textContent += ".";
        if(!operacion){
            n1.textContent += ".";
        }else{
            n2.textContent += ".";
        }
    }

    //////eventos botones funcionalidades
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        if(resultado.textContent==""){
            numeroA = 0;
        }else{
            numeroA = resultado.textContent;
        }
        n1.textContent = numeroA;
        operacion = "+";
        signo.textContent = operacion;
        limpiar();
    }
    resta.onclick = function(e){
        if(resultado.textContent==""){
            numeroA = 0;
        }else{
            numeroA = resultado.textContent;
        }
        n1.textContent = numeroA;
        operacion = "-";
        signo.textContent = operacion;
        limpiar();
    }
    multiplicacion.onclick = function(e){
        if(resultado.textContent==""){
            numeroA = 0;
        }else{
            numeroA = resultado.textContent;
        }
        n1.textContent = numeroA;
        operacion = "*";
        signo.textContent = operacion;
        limpiar();
    }
    division.onclick = function(e){
        if(resultado.textContent==""){
            numeroA = 0;
        }else{
            numeroA = resultado.textContent;
        }
        n1.textContent = numeroA;
        operacion = "/";
        signo.textContent = operacion;
        limpiar();
    }
    igual.onclick = function(e){
        if(resul!==null){
            numeroA = resul;
        }else{
            numeroB = resultado.textContent;
        }
        n1.textContent = numeroA;
        signo.textContent = operacion;
        n2.textContent = numeroB;
        resolver();
    }
    borrar.onclick = function(e){
        if(!ban){
            resultado.textContent = resultado.textContent.substring(0,resultado.textContent.length-1);
            if(!operacion){
                n1.textContent = resultado.textContent;
            }else{
                n2.textContent = resultado.textContent;
            }
        }else{
            resetear();
        }
    }
}

function nuevo(){
    if(ban){
        resultado.textContent ="";
        n1.textContent = "";
        signo.textContent = "";
        n2.textContent = "";
        ban=false;
    }
    ansn = null;
    anss = null;
    resul = null;
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    numeroA = null;
    numeroB = null;
    operacion = "";
    n1.textContent = "";
    n2.textContent = "";
    signo.textContent = "";
    ansn = null;
    anss = null;
    resul = null;
}

function resolver(){
    let res = 0;
    let number=0;
    switch(operacion){
        case "+":
            res = parseFloat(numeroA) + parseFloat(numeroB);
            break;
        case "-":
            res = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
            res = parseFloat(numeroA) * parseFloat(numeroB);
            break;
        case "/":
            res = parseFloat(numeroA) / parseFloat(numeroB);
            break;
    }
    resul = res;

    resultado.textContent = "";
    // numeroA = null;
    // numeroB = null;
    // operacion = "";
    number = new Intl.NumberFormat("en-US").format(res);
    resultado.textContent = number;
    ban = true;
}