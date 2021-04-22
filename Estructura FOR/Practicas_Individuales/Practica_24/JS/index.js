btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSuma);

function calcularSuma(){
    const alertResult = document.getElementById("alertResult")
    let sumaPares =0;
    let sumaImpares =0;
    for(let x=200;x<=400;x++){
        if(x%2 == 0){
            sumaPares+=x;
        }
        else{
            sumaImpares+=x;
        }
    }
    alertResult.innerHTML=`La suma de los números pares es ${sumaPares} la suma de los números impares es ${sumaImpares}`; 
}
    