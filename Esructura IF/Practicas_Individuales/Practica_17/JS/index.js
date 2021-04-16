const btnCosto = document.getElementById("btnCosto");
btnCosto.addEventListener("click", calcularCosto);

function calcularCosto(){
    let inpAntiguedad = Number(document.getElementById("inpAntiguedad").value);
    let inpSalario = Number(document.getElementById("inpSalario").value);
    let bonoAntiguedad = 0;
    let bonoSalario = 0;
    const alertResult = document.getElementById("alertResult");

    if(inpAntiguedad >2 && inpAntiguedad <5){
        bonoAntiguedad=inpSalario*0.2;
    }
    else if(inpAntiguedad >= 5 ){
        bonoAntiguedad=inpSalario*0.3;
    }

    if(inpSalario < 1000){
        bonoSalario = inpSalario*0.25;
    }

}