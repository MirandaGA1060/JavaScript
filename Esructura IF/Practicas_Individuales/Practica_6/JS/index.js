const btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarPresupuesto);

function evaluarPresupuesto(){
    let inpPresupuesto = Number(document.getElementById("inpPresupuesto").value);
    let inpA1 = Number(document.getElementById("inpA1").value);
    let inpA2 = Number(document.getElementById("inpA2").value);
    let inpA3 = Number(document.getElementById("inpA3").value);
    let inpA4 = Number(document.getElementById("inpA4").value);
    const alertResult = document.getElementById("alertResult");
    costoTotal = inpA1 + inpA2 + inpA3 + inpA4

    if(costoTotal <= inpPresupuesto){
        alertResult.innerHTML= `El precio está dentro del presupuesto`;
    }
    else{
        alertResult.innerHTML= `El precio no está dentro del presupuesto`;
    }
    
}