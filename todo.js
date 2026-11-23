
const boton = document.getElementById('btn-accion');
const mensaje = document.getElementById('mensaje-salida');
let contador = 0;

boton.addEventListener('click', function() {
    contador = contador + 1;
    mensaje.textContent = "¡Excelente! Has registrado " + contador + " hábito(s).";
    boton.textContent = "¡Registrado!";
});

const botonCta = document.getElementById('btn-cta');
const mensajeCta = document.getElementById('mensaje-cta');

botonCta.addEventListener('click', function() {
    mensajeCta.textContent = "¡Gracias por probar VitalPulse! Enlace simulado enviado.";
    botonCta.style.display = "none";
});