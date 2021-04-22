btnInitApp = document.getElementById("btnInitApp");
btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    const alertResult = document.getElementById("alertResult");
    let continuar = true;
    let continuarEmpleado = true;
    let continuarTiendas = true;
    let T=0;
    let N = 1;
    let ventasTienda =0;
    let ventasCiudad =0;
    let ventasTotales =0;
    let totalTienda ='';
    let totalCiudad = '';


    while(continuar==true){
        let ciudad = prompt('Introduzca el nombre de la ciudad')
        if(ciudad == null){
            continuar = false;
        }
        else{
            continuarTiendas =true;
            while(continuarTiendas == true){
                if(confirm(`Desea agregar una tienda en la ciudad ${ciudad}?`)){
                    T+=1;
                    continuarEmpleado =true;
                    while(continuarEmpleado == true){
                        let ventasEmpleado = prompt(`Ingrese las ventas del empleado no. ${N} de la tienda no. ${T}`);
                        if(ventasEmpleado == null){
                            N = 1;
                            continuarEmpleado=false;
                        }
                        else if(isNaN(Number(ventasEmpleado))==true || Number(ventasEmpleado)<0 ){
                            alert('Se debe ingresar un número positivo')
                        }
                        else{
                            ventasTienda += Number(ventasEmpleado);
                            N+=1;
                        }
                    }
                    ventasCiudad += ventasTienda;
                    totalTienda+=`<ul>La tienda número ${T} de la ciudad ${ciudad} vendió $${ventasTienda}</ul>`;
                    ventasTienda =0;
                }
                else{
                    T=0;
                    continuarTiendas = false;
                    totalCiudad+=`<ul>La ciudad ${ciudad} vendió $${ventasCiudad}</ul>`;
                    ventasTotales += ventasCiudad;
                    ventasCiudad =0;
                }
            }   
        }
    }
    
    alertResult.innerHTML=`<ul>En total se vendió $${ventasTotales}</ul> <hr> ${totalCiudad} <hr> ${totalTienda}`;   
    }
    