btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let continuar = true;
    let sumaPositivos =0;
    let countPositivos=0;
    let promedioPositivos =0;  

        while(continuar == true){
            let numero = prompt('Ingrese un número entero');
            if(numero == null){
                continuar=false;
            }
            else{
                numero = Number(numero);
                if(isNaN(numero) == true || Number.isInteger(numero)==false){
                    alert('Debe ingresar un número entero')
                }
                else{
                    if(numero>=0){
                        sumaPositivos+=numero;
                        countPositivos+=1;
                    }
                }
            }
        }
    promedioPositivos=sumaPositivos/countPositivos;
    alertResult.innerHTML=`Se leyeron ${countPositivos} números positivos y su promedio es ${promedioPositivos}`; 
}
    