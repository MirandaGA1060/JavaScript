let btnCosto = document.getElementById("btnCosto");
btnCosto.addEventListener("click", evaluarCosto);

function evaluarCosto(){
    let inpHoras = Number(document.getElementById("inpHoras").value);
    let alertResult = document.getElementById("alertResult");
    let total = 0;


    if (inpHoras > 2){
        total += 10;
        inpHoras -= 2;
        if (inpHoras > 3){
            total += 12;
            inpHoras -= 3;
            if (inpHoras>5){
                total += 15;
                inpHoras -= 5;
                total += inpHoras*2;
                alertResult.innerHTML= `El costo total del estacionamiento es $${total}`;
            }
            else{
                total += inpHoras*3;
                alertResult.innerHTML= `El costo total del estacionamiento es $${total}`;
            }
        }
        else{
            total += inpHoras*4;
            alertResult.innerHTML= `El costo total del estacionamiento es $${total}`;
        }
    }
    else{
        total += inpHoras*5;
            alertResult.innerHTML= `El costo total del estacionamiento es $${total}`;
    }

}