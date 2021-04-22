btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let sueldo = 1500;
    let resultado = '';
        for(let x=1;x<=6;x++){
        resultado+=`<ul>El salario del año ${x} es ${sueldo}</ul>`;
        sueldo=sueldo*1.10;
    }
    alertResult.innerHTML=`${resultado}`; 
}
    