let entrada = document.getElementById("entrada");
let btnEncriptar = document.getElementById("encriptado");
let btnDesencriptar = document.getElementById("desencriptado");
let munheco = document.getElementById("munheco");
let btncopiar = document.getElementById("btncopiar");
let contMunheco = document.getElementById("cardmunheco");
let salida = document.getElementById("salida");
let cardRespuesta = document.getElementById("cardRespuesta");

entrada.addEventListener("input", () => {
  if (entrada.value === "") {
    salida.innerHTML = "";
    contMunheco.style.display = "flex";
    btncopiar.style.display = "none";
  }
});

btnEncriptar.onclick = Encriptar;
btnDesencriptar.onclick = Desencriptar;
btncopiar.onclick = copiarText;


function Encriptar() {
  salida.innerHTML = "";
  let cadenaEntrante = entrada.value;
  let arrayCadena = cadenaEntrante.split("");
  if (cadenaEntrante != "") {
    
    ComprobarCadena(cadenaEntrante);
    for (let i = 0; i < arrayCadena.length; i++) {
      switch (arrayCadena[i]) {
        case "a":
          arrayCadena[i] = "ai";
          break;
        case "e":
          arrayCadena[i] = "enter";
          break;
        case "i":
          arrayCadena[i] = "imes";
          break;
        case "o":
          arrayCadena[i] = "ober";
          break;
        case "u":
          arrayCadena[i] = "ufat";
          break;
        default:
          continue;
      }
    }
    let resultado = arrayCadena.join("");
    salida.innerText = resultado;
    comprobar(resultado);
    document.getElementsByTagName("textarea")[0].value = "";
    entrada.focus();
  }else{
    alert("El campo está vacio");
  }
}

function Desencriptar() {
  salida.innerHTML = "";
  let cadenaEncript = entrada.value;
  let mensajeDesc = cadenaEncript.split(" ");
  if (cadenaEncript != "") {
    
    for (let j = 0; j < mensajeDesc.length; j++) {
      mensajeDesc[j] = mensajeDesc[j].replace(/ai/g, "a");
      mensajeDesc[j] = mensajeDesc[j].replace(/enter/g, "e");
      mensajeDesc[j] = mensajeDesc[j].replace(/imes/g, "i");
      mensajeDesc[j] = mensajeDesc[j].replace(/ober/g, "o");
      mensajeDesc[j] = mensajeDesc[j].replace(/ufat/g, "u");
    }
  
    let cadenaDesencrip = mensajeDesc.join(" ");
    salida.innerHTML = cadenaDesencrip;
    comprobar(cadenaDesencrip);
  }else{
    alert("El campo esta vacio");
  }
}

function ComprobarCadena(mensaje) {
  let regMayus = /^[A-ZÑÁÉÍÓÚ]+$/;
  let regEsp = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
  let regMin = /^[a-z]+$/;
  if (!regMin.test(mensaje) || regEsp.test(mensaje) || regMayus.test(mensaje)) {
    alert("Solo se permiten minusculas");
  }
}

function copiarText() {
  let texto = salida.textContent;
  navigator.clipboard.writeText(texto);
  entrada.focus();
  entrada.value = texto;
}
function comprobar(cadena) {
  if (cadena) {
    contMunheco.style.display = "none";
    btncopiar.style.display = "block";
    document.getElementById('salida').classList.add('respuesta');
  }
}