btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", evaluarVentas);

function evaluarVentas(){
    let count1000 =0;
    let count500 =0;
    let countMenor =0;
    let continuar = true;
    while(continuar == true){
        let numero = prompt(`Ingrese el valor de la venta`);
        if(isNaN(Number(numero))== true){
            alert('Es necesario ingresar solo números')
        }
        else if(numero == null){
            continuar = false;
        }
        else{
            numero = Number(numero)
            if(numero > 1000){
                count1000++;
            }
            else if(numero <= 1000 && numero > 500 ){
                count500++;
            }
            else{
                countMenor++;
            }
        }
    }
    const alertResult = document.getElementById("alertResult")
    alertResult.innerHTML=`<ul> Se hicieron:</ul>
    <ul>${count1000} ventas con valor mayor a $1000,</ul>
    <ul>${count500} ventas con valor entre $500 y $1000</ul>
    <ul>${countMenor} ventas con valor menor a $500</ul>`
}