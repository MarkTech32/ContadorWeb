const BotonSumar = document.getElementById("BotonSumar");
const BotonRestar = document.getElementById("BotonRestar");
const BotonrSet = document.getElementById("BotonSet");
const Label1 = document.getElementById("Label1");
let contador = 0;

BotonSumar.onclick = function(){
    contador++
    Label1.textContent = contador;
}

BotonRestar.onclick = function(){
    contador--
    Label1.textContent = contador;
}

BotonrSet.onclick = function(){
    contador = 0
    Label1.textContent = contador;
}

