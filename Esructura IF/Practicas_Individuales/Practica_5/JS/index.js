let btnCosto = document.getElementById("btnOrdenar");
btnOrdenar.addEventListener("click", ordenarNumeros);

function ordenarNumeros(){
    let inpA = Number(document.getElementById("inpA").value);
    let inpB = Number(document.getElementById("inpB").value);
    let inpC = Number(document.getElementById("inpC").value);
    let alertResult = document.getElementById("alertResult");
    

    if (inpA > inpB){
        if(inpA > inpC){
            if(inpB > inpC){
            alertResult.innerHTML= `${inpA}, ${inpB}, ${inpC}`;
            }
            else {
            alertResult.innerHTML= `${inpA}, ${inpC}, ${inpB}`;
            }  
        }
        else{
            alertResult.innerHTML= `${inpC}, ${inpA}, ${inpB}`;
        }
    }
    else{
        if(inpB > inpC){
            if(inpA > inpC){
            alertResult.innerHTML= `${inpB}, ${inpA}, ${inpC}`;
            }
            else {
            alertResult.innerHTML= `${inpB}, ${inpC}, ${inpA}`;
            }  
        }
        else{
            alertResult.innerHTML= `${inpC}, ${inpB}, ${inpA}`;
        }

    }


}