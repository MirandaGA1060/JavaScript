let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarDia);

function evaluarDia(){
    let inpNumero = Number(document.getElementById("inpNumero").value);
    const semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    let alertResult = document.getElementById("alertResult");
    
    if(inpNumero >=1 && inpNumero <=7){
        alertResult.innerHTML= `El número corresponde al día ${semana[inpNumero-1]}`;
    }
    else{
        alertResult.innerHTML= `El número no está entre 1 y 7`;
    }

}