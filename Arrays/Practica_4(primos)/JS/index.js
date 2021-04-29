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

function confirmarPrimo(numero){
    if(numero == 1){
        return false;
    } 

    for(let i=2;i<numero;i++){
        if(numero % i == 0){
            return false;
        }
    }
    return true;
}

function llenarArray(event){
    let numero =0;
    let i=0;
    if(event.key != "Enter"){
        return;
    }

    
    else if(isNaN(Number(inpLongitud.value)) == true || Number.isInteger(Number(inpLongitud.value))==false ||Number(inpLongitud.value)<=0||inpLongitud.value== null ){
        alert('Favor de ingresar un número entero');
        return;
    }
    else{
    longitud= Number(inpLongitud.value);
    }

    while(i<longitud){
        numero=generarIntRandom(1,100);
        if(confirmarPrimo(numero)){
            array[i]=numero;
            i++;
        }
    }

    inpLongitud.disabled=true;
    btnApp.disabled=false;
}

function mostrarResultado(){
    let resultado ='';
    
    for(let i =0;i<longitud;i++){
        resultado += `<li class="list-group-item"> array[${i}]=${array[i]} </li>`;
    }  
    
    resultContainer.innerHTML=resultado;
}



