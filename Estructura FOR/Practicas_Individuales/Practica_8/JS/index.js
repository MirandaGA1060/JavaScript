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
        if(i==1){
            alertResult.innerHTML=`El número con la posición 1 es 0`
        }
        else if(i==2){
            alertResult.innerHTML=`El número con la posición 2 es 1`
        }
        else{
        for(let count=3;count<=i;count++){
            a_n3=a_n1+a_n2;
            a_n1=a_n2;
            a_n2=a_n3;
        }
        alertResult.innerHTML=`<ul>El número con la posición ${i} en la serie de Fibonacci es ${a_n3}</ul>`
        }
    }
    }
    