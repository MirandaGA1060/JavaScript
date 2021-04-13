let btnCosto = document.getElementById("btnCostoDescuento");
btnCosto.addEventListener("click", evaluarCosto);

function evaluarCosto(){
    let inpCosto = Number(document.getElementById("inpCosto").value);
    let alertResult = document.getElementById("alertResult");

    if (inpCosto > 3600){
        let total = inpCosto*0.84;
        let descuento = inpCosto*0.16;
        alertResult.innerHTML= `Tras aplicar el descuento de $${descuento} el costo del traje es $${total}`;
    }
    else {
        let total = inpCosto*0.93;
        let descuento = inpCosto*0.07;
        alertResult.innerHTML= `Tras aplicar el descuento de $${descuento} el costo del traje es $${total}`;
    }
}
    