let btnCosto = document.getElementById("btnCosto");
btnCosto.addEventListener("click", evaluarCosto);

function evaluarCosto(){
    let inpPresupuesto = Number(document.getElementById("inpPresupuesto").value);
    let alertResult = document.getElementById("alertResult");
    const costoKm = 10;
    const costoPasajeMexico = 750*costoKm*2;
    const costoPasajePV = 800*costoKm*2;
    const costoPasajeAcapulco = 1200*costoKm*2;
    const costoPasajeCancun = 1800*costoKm*2;


    if (inpPresupuesto >= costoPasajeCancun){
        alertResult.innerHTML= `El presupuesto abarca un viaje redondo a cualquiera de los siguientes destinos: Cancún, Acapulco, Puerto Vallarta y México`;
        
    }
    else if (inpPresupuesto >= costoPasajeAcapulco && inpPresupuesto < costoPasajeCancun){
        alertResult.innerHTML= `El presupuesto abarca un viaje redondo a cualquiera de los siguientes destinos: Acapulco, Puerto Vallarta y México`;
    }
    else if (inpPresupuesto >= costoPasajePV && inpPresupuesto < costoPasajeAcapulco){
        alertResult.innerHTML= `El presupuesto abarca un viaje redondo a cualquiera de los siguientes destinos: Puerto Vallarta y México`;
    }
    else if (inpPresupuesto >= costoPasajeMexico && inpPresupuesto < costoPasajePV){
        alertResult.innerHTML= `El presupuesto abarca un viaje redondo a México`;
    }
    else if (inpPresupuesto < costoPasajeMexico){
        alertResult.innerHTML= `No se puede cubrir el costo del viaje a ninguno de los destinos disponibles`;
    }


}