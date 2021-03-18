let paragraph = document.getElementById("mainParagraph");
let btnNumeric = document.getElementById("numeric");
let btnText = document.getElementById("text");
let btnBool = document.getElementById("bool");

btnNumeric.addEventListener("click", writeNumericValue);
btnText.addEventListener("click", writeTextValue);
btnBool.addEventListener("click", writeBoolValue);

function writeNumericValue(){
    let numericValue = 2+2;
    paragraph.textContent= numericValue;
}

function writeTextValue(){
    let textValue = "Miranda";
    paragraph.textContent= textValue;
}

function writeBoolValue(){
    let boolValue = true;
    paragraph.textContent= boolValue;
}

