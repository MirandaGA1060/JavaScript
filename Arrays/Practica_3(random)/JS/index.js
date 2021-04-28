const inpLongitud = document.getElementById("inpLongitud");
const btnApp = document.getElementById("btnApp");
const resultContainer = document.getElementById("resultContainer")

btnApp.disabled=true;

inpLongitud.addEventListener("keydown", llenarArray);
btnApp.addEventListener("click",mostrarResultado);

let longitud = 0;
let array = [];

function generarIntRandom(min,max){
    let numero = Math.floor((Math.random()*(max-min+1))+min);
    return numero;
}

function llenarArray(event){
    if(event.key != "Enter"){
        return;
    }
    else if(isNaN(inpLongitud.value) == true || Number.isInteger(Number(inpLongitud.value))==false){
        alert('Favor de ingresar un número entero')
    }
    else{
    longitud= Number(inpLongitud.value);
    }

    for(let i=0;i<longitud;i++){
        array[i]=generarIntRandom(0,9);
    }

    inpLongitud.disabled=true;
    btnApp.disabled=false;
}

function mostrarResultado(){
    let resultado ='';
    let suma = 0;
    
    for(let i =0;i<longitud;i++){
        suma+=array[i];
        resultado += `<li class="list-group-item"> array[${i}]=${array[i]} </li>`;
    }  
    resultado +=`<li class="list-group-item"> La suma de los valores es ${suma} </li>`;
    resultContainer.innerHTML=resultado;
}



