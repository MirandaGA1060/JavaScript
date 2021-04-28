const inpLongitud = document.getElementById("inpLongitud");
const inpValores = document.getElementById("inpValores");
const btnApp = document.getElementById("btnApp");

inpValores.disabled=true;
btnApp.disabled=true;

inpLongitud.addEventListener("keydown", determinarLongitud);
inpValores.addEventListener("keydown", almacenarValores);
//btnApp.addEventListener("click",mostrarValores);

let longitud = 0;
let indice = 0;
let numerosAlmacenados = [];

function determinarLongitud(event){
    if(event.key != "Enter"){
        return;
    }
    longitud= Number(inpLongitud.value);
    inpLongitud.disabled = true;
    inpValores.disabled=false;
    btnApp.disabled=false;
}
function almacenarValores(event){
    if(event.key != "Enter"){
        return;
    }
    if(indice >= longitud){
        alert('Llegó al límite de almacenamiento');
        inpValores.value='';
        return;
    }
    let valorIngresado = inpValores.value;
    if(isNaN(valorIngresado)){
        alert('Favor de ingresar un valor numérico');
        inpValores.value='';
        return;
    }
    else if(valorIngresado==""){
        alert('Favor de ingresar un valor');
        inpValores.value='';
        return;
    }
    for(let i=0; i<=numerosAlmacenados.length;i++){
        if(valorIngresado==numerosAlmacenados[i]){
            alert('Número repetido favor de ingresar un valor diferente');
            inpValores.value='';
            return;
        }
    }
    
    numerosAlmacenados[indice]=Number(valorIngresado);
    inpValores.value='';
    indice++;
}