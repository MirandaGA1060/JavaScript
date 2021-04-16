btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSuma);

function calcularSuma(){
    const alertResult = document.getElementById("alertResult")
    resultado = '';
    for(let i=0; i<=50; i++){
        resultado += `<li class="list-group-item">El número ${2*i} es par</li>`;
    }
    alertResult.innerHTML=`${resultado}`
}