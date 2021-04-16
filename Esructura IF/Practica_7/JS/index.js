let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", promedioProducción);

function promedioProducción(){
    let inpLu = Number(document.getElementById("inpLu").value);
    let inpMa = Number(document.getElementById("inpMa").value);
    let inpMi = Number(document.getElementById("inpMi").value);
    let inpJu = Number(document.getElementById("inpJu").value);
    let inpVi = Number(document.getElementById("inpVi").value);
    let inpSa = Number(document.getElementById("inpSa").value);

    let alertResult = document.getElementById("alertResult");
    let promedio = (inpLu+inpMa+inpMi+inpJu+inpVi+inpSa)/6;

    if (promedio >= 100){
        alertResult.innerHTML= `El promedio de producción lograda en la semana fue ${promedio} por lo que se otorgará un incentivo `;
    }
    else{
        alertResult.innerHTML= `El promedio de producción lograda en la semana fue ${promedio} por lo que no se otorgará un incentivo `;
    }
}