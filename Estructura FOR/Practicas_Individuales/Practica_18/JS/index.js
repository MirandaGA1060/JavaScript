btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let ahorro = 1;
    let continuar = true;
    let sumaPares =0;
    let countPares=0;
    let promedioPares =0;
    let sumaImpares =0;
        for(let x=1;x<=30;x++){
        continuar =true;    
        while(continuar == true){
            let numero = Number(prompt('Ingrese un número entero'))
            if(isNaN(numero) == true || Number.isInteger(numero)==false){
                alert('Debe ingresar un número entero')
            }
            else{
                continuar=false;
                if(numero%2 == 0){
                    sumaPares+=numero;
                    countPares+=1;
                }
                else{
                    sumaImpares+=numero;
                }
            }
        }
    }
    promedioPares=sumaPares/countPares;
    alertResult.innerHTML=`El promedio de los números pares es ${promedioPares} la suma de los números impares es ${sumaImpares}`; 
}
    