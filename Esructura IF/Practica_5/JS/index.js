let btnInfo = document.getElementById("btnInfo");
btnInfo.addEventListener("click", informacionArt);


function informacionArt(){
    let inpNombre = document.getElementById("inpNombre").value;
    let inpClave = Number(document.getElementById("inpClave").value);
    let inpCosto = Number(document.getElementById("inpCosto").value);
    let alertResult = document.getElementById("alertResult");
    let costoDesc = 0;

    if (inpClave == 1){
        costoDesc = inpCosto*0.9;
        alertResult.innerHTML= `Nombre: ${inpNombre} Clave: ${inpClave} Costo original: ${inpCosto} Costo descuento: ${costoDesc}`;
    }
    if (inpClave == 2){
        costoDesc = inpCosto*0.8;
        alertResult.innerHTML= `Nombre: ${inpNombre} Clave: ${inpClave} Costo original: ${inpCosto} Costo descuento: ${costoDesc}`;
    }

    }