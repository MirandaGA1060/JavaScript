let btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarNumeros);

function evaluarNumeros(){
    let inpNombre1 = document.getElementById("inpNombre1").value;
    let inpNombre2 = document.getElementById("inpNombre2").value;

    let inpEdad1 = Number(document.getElementById("inpEdad1").value);
    let inpEdad2 = Number(document.getElementById("inpEdad2").value);

    let alertResult = document.getElementById("alertResult");

    if (inpEdad1 > inpEdad2){
        alertResult.innerHTML= `${inpNombre1} es la persona mayor.`;
    }
    else{
        alertResult.innerHTML= `${inpNombre2} es la persona mayor.`;;
    }

}