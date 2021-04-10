let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarEdades);

function evaluarEdades(){
    let inpH1 = Number(document.getElementById("inpH1").value);
    let inpH2 = Number(document.getElementById("inpH2").value);


    let diferenciaEdades = 0;
    let alertResult = document.getElementById("alertResult");

    if (inpH1 > inpH2){
        diferenciaEdades = inpH1 - inpH2;
        alertResult.innerHTML= `La edad del hermano mayor es ${inpH1} y la diferencia de edades es ${diferenciaEdades}`;
    }
    else{
        diferenciaEdades = inpH2 - inpH1;
        alertResult.innerHTML= `La edad del hermano mayor es ${inpH2} y la diferencia de edades es ${diferenciaEdades}`;
    }
}
