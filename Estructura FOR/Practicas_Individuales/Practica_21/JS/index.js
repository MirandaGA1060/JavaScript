btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult");
    let suma =0;
    let serie ='';
        while(suma <=100){
            let a = prompt('Ingrese un número');
            if(a == null || isNaN(Number(a))==true){
                alert('Debe ingresar un número');
            }
            else{
                suma+=Number(a);
                serie+=`<ul>la suma es ${suma} </ul>`
            }
        }
    alertResult.innerHTML=`${serie}`; 
}
    