let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarCalificacion);

function evaluarCalificacion(){
    let inpP1 = Number(document.getElementById("inpP1").value);
    let inpP2 = Number(document.getElementById("inpP2").value);
    let inpP3 = Number(document.getElementById("inpP3").value);
    let inpP4 = Number(document.getElementById("inpP4").value);
    const alertResult = document.getElementById("alertResult");
    let menor = 0;
    let promedio = 0;
    
    if(inpP1 <= inpP2){
        if(inpP1 <= inpP3){
            if(inpP1 <= inpP4){
                menor = inpP1;
            }
            else{
                menor = inpP4;
            }
        }
        else{
            if(inpP3 <= inpP4){
                menor = inpP3;
            }
            else{
                menor = inpP4
            }
        }
    }
    else{
        if(inpP2 <= inpP3){
            if(inpP2 <= inpP4){
                menor = inpP2;
            }
            else{
                menor = inpP4;
            }
        }
        else{
            if(inpP3 <= inpP4){
                menor = inpP3;
            }
            else{
                menor = inpP4
            }
        }
    }

    promedio = (inpP1 + inpP2 + inpP3 + inpP4 - menor)/3
    alertResult.innerHTML= `La menor calificación es ${menor} y la calificación final es ${promedio}`;
}