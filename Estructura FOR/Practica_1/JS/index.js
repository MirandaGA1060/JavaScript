btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSuma);

function calcularSuma(){
    const alertResult = document.getElementById("alertResult")
    let resultado =0;
    for(let x=1; x<=10; x++){
        let numero = Number(prompt(`Ingrese el numero ${x}`));
        resultado += numero;
    }
    alertResult.innerHTML=`La suma es igual a ${resultado}`
}