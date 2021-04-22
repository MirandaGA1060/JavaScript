btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularTabla);

function calcularTabla(){
    const alertResult = document.getElementById("alertResult");
    let tabla ='';
    let a = prompt('Ingrese un número');
        if(a == null || isNaN(Number(a))==true){
            alert('Debe ingresar un número');
        }
        else{
            a=Number(a);
            for(let x=1;x<=10;x++){
            tabla+=`<ul>${a} x ${x} = ${x*a}</ul>`;
            }
        }
    alertResult.innerHTML=`${tabla}`; 
}
    