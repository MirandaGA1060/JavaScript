let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarAlumno);

function evaluarAlumno(){
    let calificacion = Number(document.getElementById("calificacion").value);
    let alertResult = document.getElementById("alertResult");

    if (calificacion >= 6 && calificacion <= 10){
        alertResult.innerHTML= `El alumno está aprobado`;
    }
    if (calificacion < 6 && calificacion >= 0){
        alertResult.innerHTML= `El alumno está reprobado`;
    }
    else{
        alertResult.innerHTML= `La calificación ingresada no es válida`;
    }

}