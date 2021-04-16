btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularMayor);

function calcularMayor(){
    let count
    let countMenor =0;
    let countMayor =0;
    let continuar = true;
    while(continuar == true){
        let numero = prompt(`Ingrese el número a evaluar`);
        if(isNaN(Number(numero))== true){
            alert('Es necesario ingresar solo números')
        }
        else if(numero == null){
            continuar = false;
        }
        else{
            if(Number(numero >= 500) ){
                countMayor++;
                count++;
            }
            else{
                countMenor++;
                count++;
            }
        }
    }
    const alertResult = document.getElementById("alertResult")
    alertResult.innerHTML=`Se ingresaron ${countMayor} números mayores que 500 y ${countMenor} números menores que 500`
}