
let btnSuma = document.getElementById("btnSuma");
btnSuma.addEventListener("click", sumarDosNumeros)

function sumarDosNumeros(){
let numero1 = Number(document.getElementById("numero1").value);
let numero2 = Number(document.getElementById("numero2").value);

let resultado = numero1 + numero2;
let containerResultado = document.getElementById("containerResponse");
containerResultado.innerText=resultado;

}

let btnResta = document.getElementById("btnResta");
btnResta.addEventListener("click", restarDosNumeros)

function restarDosNumeros(){
let numero1 = Number(document.getElementById("numero1").value);
let numero2 = Number(document.getElementById("numero2").value);

let resultado = numero1 - numero2;
let containerResultado = document.getElementById("containerResponse");
containerResultado.innerText=resultado;

}

let btnMulti = document.getElementById("btnMulti");
btnMulti.addEventListener("click", multiDosNumeros)

function multiDosNumeros(){
let numero1 = Number(document.getElementById("numero1").value);
let numero2 = Number(document.getElementById("numero2").value);

let resultado = numero1 * numero2;
let containerResultado = document.getElementById("containerResponse");
containerResultado.innerText=resultado;

}

let btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener("click", divDosNumeros)

function divDosNumeros(){
let numero1 = Number(document.getElementById("numero1").value);
let numero2 = Number(document.getElementById("numero2").value);

let resultado = numero1 / numero2;
let containerResultado = document.getElementById("containerResponse");
containerResultado.innerText=resultado;

}