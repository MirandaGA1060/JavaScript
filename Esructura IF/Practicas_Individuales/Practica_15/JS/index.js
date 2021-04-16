let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarAlumno);

function evaluarAlumno(){
    let inpCalificacion = Number(document.getElementById("inpCalificacion").value);
    let alertResult = document.getElementById("alertResult");

    if (inpCalificacion >= 0 && inpCalificacion <= 10){
        if(inpCalificacion == 10){
            alertResult.innerHTML= `La nota obtenida es A`;
        }
        else if(inpCalificacion == 9){
            alertResult.innerHTML= `La nota obtenida es B`;
        }
        else if(inpCalificacion == 8){
            alertResult.innerHTML= `La nota obtenida es C`;
        } 
        else if(inpCalificacion == 7 || inpCalificacion == 6){
            alertResult.innerHTML= `La nota obtenida es D`;
        }
        else {
            alertResult.innerHTML= `La nota obtenida es reprobatoria`;
        }       
    }
    else{
        alertResult.innerHTML= `La calificación ingresada no es válida`;
    }

}