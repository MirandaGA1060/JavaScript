let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularArea)

function calcularArea(){
let altura = Number(document.getElementById("altura").value);
let base = Number(document.getElementById("base").value);

let resultado = (altura * base)/2;
let containerResultado = document.getElementById("resultado");
containerResultado.innerHTML=`<em> El área del triángulo es:<em> ${resultado}`;

}