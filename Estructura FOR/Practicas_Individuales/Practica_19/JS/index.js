btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult");
    let suma =5;
    let serie ='';
    let count = 0;
    let a = 5;
        while(suma <1800){
            serie+=`<li>${a} la suma es ${suma} </li>`
            if(count%2==0){
                a+=2;
                count++;
                suma+=a;
            }
            else{
                a+=3;
                count++;
                suma+=a;
            }
        }
    alertResult.innerHTML=`${serie}`; 
}
    