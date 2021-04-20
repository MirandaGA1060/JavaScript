btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult");
    let totalesAnuales = '';
    let fabricasJulio = '';
    let mayorAnual ='';
    let produccionAnual = 0;
    let mayorProduccionAnual =0;
    let N =0;
    let continuar = true;

    while(continuar==true){
        if(confirm(`¿Desea añadir la producción anual de otra fábrica?`)){
            N+=1;
            produccionAnual = 0;
            for(let x=1;x<=12;x++){
                let produccion = Number(prompt(`Ingrese el valor de la producción del mes ${x}`));
                if(isNaN(produccion)== true || produccion<0 ){
                    alert('Es necesario ingresar solo números positivos');
                }
                else{
                    produccionAnual+=produccion;
                    if(x==7 && produccion>=3000000){
                        fabricasJulio+=`<ul>La fábrica número ${N} produjo mas e $3,000,000 en el mes de julio</ul>`;
                    }
                }
            }
            if(produccionAnual > mayorProduccionAnual){
                mayorProduccionAnual = produccionAnual;
                mayorAnual=`<ul>La fábrica con mayor producción anual fue la número ${N} con una producción de ${mayorProduccionAnual}</ul>`
            }
            totalesAnuales+=`<ul>La fábrica número ${N} produjo $${produccionAnual} en un año</ul>`;
        }
        else{
            continuar = false;
        }
    }
    
    alertResult.innerHTML=`${totalesAnuales} <hr> ${fabricasJulio} <hr> ${mayorAnual}`;   
    }
    