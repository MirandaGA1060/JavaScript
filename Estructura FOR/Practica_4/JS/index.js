btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularAhorro);

function calcularAhorro(){
    let acumulador =0;
    let ahorro =0;
    let promedio =0;
    let continuar = true;

    const alertResult = document.getElementById("alertResult")
    let resultado =0;
    for(let x=1; x<=12; x++){
        let numero = Number(prompt(`Ingrese el numero ${x}`));
        resultado += numero;
    }

}