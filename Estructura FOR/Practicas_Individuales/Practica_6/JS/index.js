btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", pagosMensuales);

function pagosMensuales(){
    const alertResult = document.getElementById("alertResult")
    const pagoInicial= 10;
    let pagoMensual = 0;
    let pagoTotal =0;;
    resultado = '';
    for(let i=0; i<=19; i++){
        pagoMensual = pagoInicial*(2**i);
        pagoTotal += pagoMensual; 
        resultado += `<li class="list-group-item">El pago correspondiente al mes ${i+1} es $${pagoMensual} </li>`;
    }
    resultado += `<li class="list-group-item">El pago total despues de 20 meses es $${pagoTotal} </li>`;
    alertResult.innerHTML=`${resultado}`
}