btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let M = Number(prompt('Ingrese un número entero y positivo'))
    let counterPrimo = 0;
    let primo = 0;
    let resultado = '';
    if(isNaN(M) == true || M<=0 ){
        alert('Se debe ingresar un número entero positivo')
    }
    else{
        for(let x=2;x<=M;x++){
            primo = 1;
            for(i=2;i<=x/2;i++){
                if(x % i == 0){
                    primo=0;
                }
            }
            if(primo == 1){
                resultado += `<ul>${x} es un número primo </ul>`;
                counterPrimo+=1;
            }
            else{
                continue;
            }
        }
        resultado+=`<ul>El número de números primos menores que ${M} es ${counterPrimo}</ul>`;
    }
            alertResult.innerHTML=`${resultado}`;   
    }
    