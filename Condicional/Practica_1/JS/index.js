let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarNumeros);

function evaluarNumeros(){
    let inpNumero1 = Number(document.getElementById("inpNumero1").value);
    let inpNumero2 = Number(document.getElementById("inpNumero2").value);

    let numeroMayor = 0;
    let alertResult = document.getElementById("alertResult");

    if (inpNumero1 > inpNumero2){
        alertResult.innerHTML= `El número mayor es ${inpNumero1}`;
    }
    else{
        alertResult.innerHTML= `El número mayor es ${inpNumero2}`;
    }

}