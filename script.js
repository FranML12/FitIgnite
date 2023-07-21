// Obtiene el elemento del contador
var contadorElemento = document.getElementById("numero");

// Define el valor inicial y el valor final del contador
var valorInicial = 0;
var valorFinal = 1000;
var valorObjetivo = 2000;

// Define la duración total de la animación en milisegundos
var duracion = 3000;

// Calcula el incremento por cada intervalo de tiempo para llegar a 1000
var incremento = Math.ceil((valorFinal - valorInicial) / (duracion / 10));

// Función que actualiza el contador en cada intervalo
function actualizarContador() {
  valorInicial += incremento;
  
  // Si se ha llegado al valor final, pausar antes de continuar hacia 2000
  if (valorInicial >= valorFinal) {
    contadorElemento.textContent = valorFinal;
    setTimeout(aumentarLentamente, 1000); // Pausa de 1000 milisegundos (1 segundo)
  } else {
    contadorElemento.textContent = valorInicial;
    setTimeout(actualizarContador, 10);
  }
}

// Función que aumenta lentamente el contador hasta 2000
function aumentarLentamente() {
  // Calcula el incremento por cada intervalo de tiempo para llegar a 2000
  var incrementoLento = 1;
  
  // Continuar aumentando hasta llegar a 2000
  if (valorInicial < valorObjetivo) {
    valorInicial += incrementoLento;
    contadorElemento.textContent = valorInicial;
    setTimeout(aumentarLentamente, 350); // Pequeña pausa para una transición más lenta (100 milisegundos)
  }
}

// Inicia la animación del contador cuando la página se carga completamente
window.addEventListener("load", actualizarContador);
