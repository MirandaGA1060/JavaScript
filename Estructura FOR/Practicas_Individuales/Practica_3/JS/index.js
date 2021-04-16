btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", serieNumeros);

function serieNumeros(){
    const alertResult = document.getElementById("alertResult")
    let horasSemanales =0;
    let salarioHora = 100;
    for(let i=1; i<=6; i++){
        let horas = Number(prompt(`Ingrese el numero de horas trabajadas en el dia ${i}`))
        if(isNaN(horas) == true){
            alert('Es necesario ingresar solo números')
        }
        else{
            horasSemanales+=horas;
        }
    }
    alertResult.innerHTML=`Se trabajaron ${horasSemanales}hrs en la semana, el salario correspondiente es $${horasSemanales*salarioHora}`
}