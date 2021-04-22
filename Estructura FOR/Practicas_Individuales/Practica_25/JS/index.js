btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularTabla);

function calcularTabla(){
    const alertResult = document.getElementById("alertResult");
    let factorial =1;
    let a = Number(prompt('Ingrese un número'));
        if(Number.isInteger(a) == false|| isNaN(a)==true || a<0){
            alert('Debe ingresar un número entero y positivo');
        }
        else{
            for(let x=a;x>1;x--){
            factorial=factorial*x;
            }
        }
    alertResult.innerHTML=`El factorial de ${a} es ${factorial}`; 
}
    