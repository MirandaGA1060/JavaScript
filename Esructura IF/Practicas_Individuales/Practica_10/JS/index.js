let btnCosto = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarCapicua);

function evaluarCapicua(){
    let inpNumero = document.getElementById("inpNumero").value;
    let alertResult = document.getElementById("alertResult");
    
    if(inpNumero.length == 4){
        if (inpNumero[0] == inpNumero[3] && inpNumero[1]==inpNumero[2]){
            alertResult.innerHTML= `El número ${inpNumero} es capicúa`;
        }
        else{
            alertResult.innerHTML= `El número ${inpNumero} no es capicúa`;
        }
    }
    else{
        alertResult.innerHTML= `El número no tiene cuatro cifras`;
    }

}