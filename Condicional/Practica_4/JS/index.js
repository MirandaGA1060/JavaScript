let btnCosto = document.getElementById("btnCosto");
btnCosto.addEventListener("click", evaluarCosto);

function evaluarCosto(){
    let inpCompra = Number(document.getElementById("inpCompra").value);
    let alertResult = document.getElementById("alertResult");

    if (inpCompra >= 1000){
        let total = inpCompra*0.8
        alertResult.innerHTML= `El total de la compra es $${total}`;
    }
    else{
        alertResult.innerHTML= `El total de la compra es $${inpCompra}`;
    }

}