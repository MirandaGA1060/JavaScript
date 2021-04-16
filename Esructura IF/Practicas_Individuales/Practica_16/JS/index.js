const btnCosto = document.getElementById("btnCosto");
btnCosto.addEventListener("click", calcularCosto);

function calcularCosto(){
    let tipoPoliza = document.getElementById("sltTipoPoliza").value;
    let alcohol = document.getElementById("sltAlcohol").value;
    let lentes = document.getElementById("sltLentes").value;
    let enfermedad = document.getElementById("sltEnfermedad").value;
    let edad = document.getElementById("sltEdad").value;
    let porcentaje = 0;
    let precioPoliza = 0;
    let cuotaBase = 0;
    const alertResult = document.getElementById("alertResult");

    if(tipoPoliza == "A"){
        cuotaBase = 1200;
    }
    if(tipoPoliza == "B"){
        cuotaBase = 950;
    }
    
        if(alcohol == "1"){
            porcentaje += 0.1;
            if(lentes == "1"){
                porcentaje += 0.05;
                if (enfermedad == "1"){
                    porcentaje += 0.05;
                    if(edad == "1"){
                        porcentaje += 0.2;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                    else if (edad == "0"){
                        porcentaje += 0.1;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                }
                else if (enfermedad == "0"){
                    if(edad == "1"){
                        porcentaje += 0.2;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                    else if (edad == "0"){
                        porcentaje += 0.1;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                } 
            }
            else if (lentes =="0"){
                if (enfermedad == "1"){
                    porcentaje += 0.05;
                    if(edad == "1"){
                        porcentaje += 0.2;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                    else if (edad == "0"){
                        porcentaje += 0.1;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                }
                else if (enfermedad == "0"){
                    if(edad == "1"){
                        porcentaje += 0.2;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                    else if (edad == "0"){
                        porcentaje += 0.1;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                }
            }
        }
        else if(alcohol == "0"){
            if(lentes == "1"){
                porcentaje += 0.05;
                if (enfermedad == "1"){
                    porcentaje += 0.05;
                    if(edad == "1"){
                        porcentaje += 0.2;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                    else if (edad == "0"){
                        porcentaje += 0.1;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                }
                else if (enfermedad == "0"){
                    if(edad == "1"){
                        porcentaje += 0.2;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                    else if (edad == "0"){
                        porcentaje += 0.1;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                } 
            }
            else if (lentes =="0"){
                if (enfermedad == "1"){
                    porcentaje += 0.05;
                    if(edad == "1"){
                        porcentaje += 0.2;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                    else if (edad == "0"){
                        porcentaje += 0.1;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                }
                else if (enfermedad == "0"){
                    if(edad == "1"){
                        porcentaje += 0.2;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                    else if (edad == "0"){
                        porcentaje += 0.1;
                        precioPoliza = cuotaBase*(1+porcentaje);
                    }
                }
            }            
        }
    alertResult.innerHTML= `El precio de la póliza es $${precioPoliza}`;        

}