btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let ahorro = 1;
    let resultado = '';
        for(let x=1;x<=365;x++){
        ahorro=ahorro*3;
    }
    ahorro=ahorro/100;
    alertResult.innerHTML=`El ahorro de un año es $${ahorro}`; 
}
    