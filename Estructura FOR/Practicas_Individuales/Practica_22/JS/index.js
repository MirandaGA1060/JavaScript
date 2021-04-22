btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let continuar = true;
    let suma =0;
    let sumaM =0;
    let sumaF =0;
    let count=0;
    let countM=0;
    let countF=0;
    let promedio =0;
    let promedioM =0;
    let promedioF=0;
    while(count<20){ 
        continuar = true; 
            let genero = prompt('Ingrese el sexo del alumno [M o F]');
            genero= genero.toUpperCase();
            
            
            if(genero == 'M'){
                while(continuar == true){
                    let numero = Number(prompt('Ingrese un número entero'));
                    if(isNaN(numero) == true || numero>10 || numero<0){
                        alert('Debe ingresar un número entero entre 0 y 10')
                    }
                    else{
                        continuar=false;
                        sumaM+=numero;
                        suma+=numero;
                        count++;
                        countM++;
                    }
                }
            }
            else if(genero == 'F'){
                while(continuar == true){
                    let numero = Number(prompt('Ingrese un número entero'));
                if(isNaN(numero) == true || numero>10 || numero<0){
                    alert('Debe ingresar un número entero entre 0 y 10')
                }
                else{
                    continuar=false;
                    sumaF+=numero;
                    suma+=numero;
                    count++;
                    countF++;
                }
            }
            }
            else{
                alert('Debe ingresar M o F')
            }
        }
    promedio=suma/count;
    promedioF = sumaF/countF;
    promedioM = sumaM/countM;
    if(promedioF>promedioM){
        alertResult.innerHTML=`<ul>El promedio de las calificaciones del grupo es ${promedio}</ul>
        <ul>El promedio de los hombres es ${promedioM} </ul>
        <ul>El promedio de las mujeres es ${promedioF} </ul> 
        <ul>El promedio de las mujeres fue el mayor </ul>`;
    }
    else{
        alertResult.innerHTML=`<ul>El promedio de las calificaciones del grupo es ${promedio}</ul>
        <ul>El promedio de los hombres es ${promedioM} </ul>
        <ul>El promedio de las mujeres es ${promedioF} </ul> 
        <ul>El promedio de los hombres fue el mayor </ul>`;
    }

    
}
    