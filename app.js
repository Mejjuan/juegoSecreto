let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsario = parseInt(document.getElementById('valorUsario').value);
   
    console.log(intentos);
    if (numeroDeUsario === numeroSecreto){
        asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos=== 1)?'vez' : 'veces'}!`);
        document.getElementById(`reiniciar`).removeAttribute('disabled');
    }else{
        if (numeroDeUsario > numeroSecreto){
            asignarTextoElemento ('p', 'El numero secreto es menor.');
        }else{
            asignarTextoElemento ('p','El numero secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector(`#valorUsario`).value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p' , 'Ya se sortearon todos los numeros posibles.');
    }else{ 
    }   
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto ();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

    }
    }

function condicionesIniciales (){
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector(`#reiniciar`).setAttribute('disabled' , 'true');
}

condicionesIniciales();