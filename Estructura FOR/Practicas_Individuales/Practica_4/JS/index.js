btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", puntoMedio);

function puntoMedio(){
    const alertResult = document.getElementById("alertResult")
    let x1 = 70;
    let x2 = 150;
    let continuar = true;
    while(continuar == true){
        if(x1 == x2){
            continuar = false;
        }
        else{
            x1++;
            x2--;
        }
    }
    alertResult.innerHTML=`Las personas se encontrarán en el kilómetro ${x1} de la carretera`
}