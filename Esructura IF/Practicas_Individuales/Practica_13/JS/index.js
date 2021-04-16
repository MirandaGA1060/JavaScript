const btnCosto = document.getElementById("btnCosto");
btnCosto.addEventListener("click", calcularCosto);

function calcularCosto(){
    let inpCostoInicial = Number(document.getElementById("inpCostoInicial").value);
    let tipoUva = document.getElementById("sltTipoUva").value;
    let tamano = document.getElementById("sltTamano").value;
    let costoFinal =0;
    const alertResult = document.getElementById("alertResult");

    if (tipoUva == "A"){
        if(tamano == "1"){
            costoFinal = inpCostoInicial+0.20;
            alertResult.innerHTML= `El precio final de la uva es $${costoFinal}`;
        }
        else if(tamano == "2"){
            costoFinal = inpCostoInicial+0.30;
            alertResult.innerHTML= `El precio final de la uva es $${costoFinal}`;
        }
        
    }

    else if (tipoUva == "B"){
        if(tamano == "1"){
            costoFinal = inpCostoInicial-0.30;
            alertResult.innerHTML= `El precio final de la uva es $${costoFinal}`;
        }
        else if(tamano == "2"){
            costoFinal = inpCostoInicial-0.50;
            alertResult.innerHTML= `El precio final de la uva es $${costoFinal}`;
        }
    }

}