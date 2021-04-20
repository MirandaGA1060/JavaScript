btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    continuar = true;
    while(continuar == true){
    let i = Number(prompt('Ingrese el número identificador del candidato'))
    if(isNaN(i) == true || i<0 || i>4){
        alert('Se debe ingresar un número identificador válido')
    }
    else{
        if (i == 0){
        continuar = false;
        }
        else if (i==1){
        c1+=1;
        }
        else if (i==2){
        c2+=1;
        }
        else if (i==3){
        c3+=1;
        }
        else if (i==4){
        c4+=1;
        }
         }
    }
            alertResult.innerHTML=`<ul>El número de votos para el candidato 1 es ${c1}</ul>
            <ul>El número de votos para el candidato 2 es ${c2}</ul>
            <ul>El número de votos para el candidato 3 es ${c3}</ul>
            <ul>El número de votos para el candidato 4 es ${c4}</ul>`;   
    }
    