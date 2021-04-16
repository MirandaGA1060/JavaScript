const btnCosto = document.getElementById("btnCosto");
btnCosto.addEventListener("click", calcularCosto);

function calcularCosto(){
    let inpKm = Number(document.getElementById("inpKm").value);
    let inpPersonas = Number(document.getElementById("inpPersonas").value);
    let tipoAutobus = document.getElementById("sltTipoAutobus").value;
    let costoTotal =0;
    let costoInd =0;
    let alertResult = document.getElementById("alertResult");

    if (inpPersonas <=20){

    if (tipoAutobus == "A"){
        costoTotal = inpKm*1.5;
        costoInd = costoTotal / inpPersonas;
        alertResult.innerHTML= `El costo total del viaje es $${costoTotal} el costo por persona es de $${costoInd} `;
    }

    else if (tipoAutobus == "B"){
        costoTotal = inpKm*2;
        costoInd = costoTotal / inpPersonas;
        alertResult.innerHTML= `El costo total del viaje es $${costoTotal} el costo por persona es de $${costoInd} `;
    }

    else if (tipoAutobus == "C"){
        costoTotal = inpKm*2.5;
        costoInd = costoTotal / inpPersonas;
        alertResult.innerHTML= `El costo total del viaje es $${costoTotal} el costo por persona es de $${costoInd} `;
    }
    else if (tipoAutobus == "D"){
        costoTotal = inpKm*3;
        costoInd = costoTotal / inpPersonas;
        alertResult.innerHTML= `El costo total del viaje es $${costoTotal} el costo por persona es de $${costoInd} `;
    }

    }
    else{
        alertResult.innerHTML= `El número máximo de pasajeros es 20`;
    }

}