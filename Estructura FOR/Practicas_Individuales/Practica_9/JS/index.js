btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let i = Number(prompt('Ingrese un número entero positivo'))
    let a_n1 = 0;
    let a_n2 = 1;
    let a_n3 = 0;
    if(isNaN(i) == true || i<=0){
        alert('Se debe ingresar un número entero positivo')
    }
    else{
        while(a_n3<=i){
            a_n3=a_n1+a_n2;
            a_n1=a_n2;
            a_n2=a_n3;
        }
        if(a_n3==1){
            alertResult.innerHTML=`<ul>El número menor o igual a ${i} en la serie de Fibonacci es ${a_n3}</ul>` 
        }
        else{
            alertResult.innerHTML=`<ul>El número menor o igual a ${i} en la serie de Fibonacci es ${a_n1}</ul>`   
        }
    }
    }
    