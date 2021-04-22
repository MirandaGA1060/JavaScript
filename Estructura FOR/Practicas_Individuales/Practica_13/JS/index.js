btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let M = Number(prompt('Ingrese un número entero y positivo'))
    let suma =0;
    let resultado = '';
    if(isNaN(M) == true || M<=0 ){
        alert('Se debe ingresar un número entero positivo')
    }
    else{
        for(let x=2;x<=M;x++){
            suma =0;
            for(i=1;i<=x/2;i++){
                if(x % i == 0){
                    suma+=i;
                }
            }
            if(suma == x){
                resultado += `<ul>${x} es un número perfecto </ul>`;
            }
            else{
                continue;
            }
        }
    }
            alertResult.innerHTML=`${resultado}`;   
    }
    