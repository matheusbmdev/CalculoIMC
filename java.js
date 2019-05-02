var alt2;
var resul;
var altura1;
var peso1;
function calcular(){
   altura1 = document.getElementById("Altura").value;
    peso1 = document.getElementById("Peso").value;
    alt2 = altura1 * altura1;
    resul = peso1 / alt2;
    
    if(resul < 18.5) alert("IMC : "+resul.toFixed(2)+" Classificação : Magreza, Obesidade 0");
    else if(resul >= 18.5 && resul < 24.9) alert("IMC : "+resul.toFixed(2)+" Classificação : Normal, Obesidade 0");
    else if(resul >= 25 && resul < 29.9) alert("IMC : "+resul.toFixed(2)+" Classificação : Sobrepso, Obesidade I");
    else if(resul >= 30 && resul < 39.9) alert("IMC : "+resul.toFixed(2)+" Classificação : Obesidade, Obesidade II");
    else if(resul >= 40) alert("IMC : "+resul.toFixed(2)+" Classificação : Obesidade Grave, Obesidade III");


}