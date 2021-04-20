btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let a_0 = Number(prompt('Ingrese el número con el que se iniciará la serie'))
    let a_n = 0;
    resultado = '';
    if(isNaN(a_0)== true || a_0<0){
        alert('Se debe ingresar un número entero positivo')
    }
    else{
        a_n = a_0;
        resultado += `<ul>${a_n}</ul>`
        while(a_n >1){
            if(a_n % 2 == 0){
                a_n = a_n/2;
                resultado += `<ul>${a_n}</ul>`
            }
            else{
                a_n = (a_n*3)+1;
                resultado += `<ul>${a_n}</ul>`
            }
        }
        

    }
    alertResult.innerHTML=`${resultado}`
}