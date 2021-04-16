btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularPromedio);

function calcularPromedio(){
    let acumuladorCalificacion =0;
    let counterCalificacion =0;
    let promedio =0;
    let continuar = true;

    while(continuar == true){
        let calificacion = prompt(`Ingrese la calificación`);
        if(calificacion == null){
            continuar = false;
        }
        else{
            acumuladorCalificacion += Number(calificacion);
            counterCalificacion++;
        }
    }
    promedio = acumuladorCalificacion/counterCalificacion;
    const alertResult = document.getElementById("alertResult")
    alertResult.innerHTML=`El promedio es igual a ${promedio}`
}