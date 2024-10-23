// Obtenemos la fecha y hora de finalización del contador
const countDownDate = new Date("Feb 1, 2024 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();

    // Calculamos la diferencia entre la fecha y hora de finalización y la actual
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si el contador llega a cero, mostramos un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡El encuentro ha comenzado!";
    }
}, 1000);

// Para deshabilitar la página
function bloquearPagina() {
    document.getElementById("paginaBloqueada").style.display = "flex";
}

// Para habilitar la página
function desbloquearPagina() {
    document.getElementById("paginaBloqueada").style.display = "none";
}

// Ejemplo de uso
// Puedes llamar a estas funciones según tus necesidades, por ejemplo, al cargar la página o en respuesta a ciertos eventos.
// bloquearPagina(); // Descomenta esta línea si deseas bloquear la página al cargar.
// desbloquearPagina(); // Descomenta esta línea si deseas desbloquear la página.
