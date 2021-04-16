let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", ladosTriangulo);

function ladosTriangulo(){
    let inpL1 = Number(document.getElementById("inpL1").value);
    let inpL2 = Number(document.getElementById("inpL2").value);
    let inpL3 = Number(document.getElementById("inpL3").value);
    let alertResult = document.getElementById("alertResult");
    let suma1 = inpL1 + inpL2;
    let suma2 = inpL2 + inpL3;
    let suma3 = inpL1 + inpL3;

    if (inpL1 < suma2 && inpL2 < suma3 && inpL3 < suma1 ){
        if(inpL1==inpL2 || inpL1==inpL3){
            if(inpL1==inpL2 && inpL1==inpL3){
                alertResult.innerHTML= `Los lados forman un triángulo equilátero`;
            }
            else{
                alertResult.innerHTML= `Los lados forman un triángulo isóceles`;
            }
        }
        else{
            alertResult.innerHTML= `Los lados forman un triángulo escaleno`;
        }
        
    }
    else{
        alertResult.innerHTML= `Los lados no forman un triángulo`;
    }
}