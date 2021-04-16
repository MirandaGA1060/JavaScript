btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", serieNumeros);

function serieNumeros(){
    const alertResult = document.getElementById("alertResult")
    resultado = '';
    for(let i=100; i>=0; i--){
        resultado += `<li class="list-group-item">${i}</li>`;
    }
    alertResult.innerHTML=`${resultado}`
}