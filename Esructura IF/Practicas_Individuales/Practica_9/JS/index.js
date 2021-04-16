const btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarMultiplos);

function evaluarMultiplos(){
    let inpN1 = Number(document.getElementById("inpN1").value);
    let inpN2 = Number(document.getElementById("inpN2").value);
    const alertResult = document.getElementById("alertResult");

    if(inpN1 >= inpN2){
        let r = inpN1 % inpN2;
        if (r == 0){
            alertResult.innerHTML= `${inpN1} es múltiplo de ${inpN2}`;
        }
        else{
            alertResult.innerHTML= `Los números no son multiplos`;
        }
        
    }
    else{
        let r = inpN2 % inpN1;
        if (r == 0){
            alertResult.innerHTML= `${inpN2} es múltiplo de ${inpN1}`;
        }
        else{
            alertResult.innerHTML= `Los números no son multiplos`;
        }
    }
    
}