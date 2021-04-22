btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult")
    let impuestosTotal = 0;
    let impuestos1 = 0;
    let impuestos2 = 0;
    let impuestos3 = 0;
    let continuar =true;
    let resultado = '';
        while(continuar == true){
            let clave =prompt('Ingrese la clave del automóvil');
            if(clave == null){
                continuar=false;
            }
            else{
                clave=Number(clave)
                if(clave==1){
                let costo = Number(prompt('Ingrese el valor del automóvil'));
                impuestos1+=costo*0.1; 
                }
                else if(clave==2){
                    let costo = Number(prompt('Ingrese el valor del automóvil'));
                    impuestos2+=costo*0.07; 
                }
                else if(clave==3){
                    let costo = Number(prompt('Ingrese el valor del automóvil'));
                    impuestos3+=costo*0.05; 
                }
                else{
                    alert('Ingrese una clave válida');
                }
            }
        }
    impuestosTotal=impuestos1+impuestos2+impuestos3;   
    alertResult.innerHTML=`<ul>Los impuestos totales son $${impuestosTotal}</ul>
    <ul>Los impuestos por la categoría 1 son $${impuestos1}</ul>
    <ul>Los impuestos por la categoría 2 son $${impuestos2}</ul>
    <ul>Los impuestos por la categoría 3 son $${impuestos3}</ul>`; 
}
    