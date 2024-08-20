// Meta Pixel Code
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '8034086150021614');
fbq('track', 'PageView');
// Fin del código Meta Pixel

// Resto de tu código JavaScript

// Índice inicial para el carrusel
let currentIndex = 0;

// Seleccionar todas las imágenes del carrusel
const images = document.querySelectorAll('.carousel-images img');

// Número total de imágenes en el carrusel
const totalImages = images.length;

// Evento para el botón "Siguiente"
document.getElementById('nextBtn').addEventListener('click', function() {
    // Incrementar el índice y usar el módulo para ciclar de vuelta al inicio
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

// Evento para el botón "Anterior"
document.getElementById('prevBtn').addEventListener('click', function() {
    // Decrementar el índice y usar el módulo para ciclar al final si es necesario
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

// Función para actualizar la posición del carrusel
function updateCarousel() {
    // Calcular el valor de la transformación en el eje X
    const translateX = -currentIndex * 100;
    // Aplicar la transformación para mostrar la imagen correspondiente
    document.querySelector('.carousel-images').style.transform = `translateX(${translateX}%)`;
}





// Mostrar el pop-up al hacer clic en el botón "QUIERO LA PROMOCIÓN"
document.getElementById('promoButton').addEventListener('click', function() {
    document.getElementById('promoPopup').style.display = 'flex';
    document.getElementById('countdown-container').style.display = 'none'; // Ocultar el contador
});

// Mostrar el pop-up al hacer clic en el botón "QUIERO MI DETOX PLUS" (botón 1)
document.getElementById('promoButton1').addEventListener('click', function() {
    document.getElementById('promoPopup').style.display = 'flex';
    document.getElementById('countdown-container').style.display = 'none'; // Ocultar el contador
});

// Mostrar el pop-up al hacer clic en el botón "QUIERO MI DETOX PLUS" (botón 2)
document.getElementById('promoButton2').addEventListener('click', function() {
    document.getElementById('promoPopup').style.display = 'flex';
    document.getElementById('countdown-container').style.display = 'none'; // Ocultar el contador
});

// Mostrar el pop-up al hacer clic en el botón "QUIERO MI DETOX PLUS" (botón 3)
document.getElementById('promoButton3').addEventListener('click', function() {
    document.getElementById('promoPopup').style.display = 'flex';
    document.getElementById('countdown-container').style.display = 'none'; // Ocultar el contador
});

// Cerrar el pop-up al hacer clic en la 'X'
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('promoPopup').style.display = 'none';
    document.getElementById('countdown-container').style.display = 'block'; // Mostrar el contador de nuevo
});

// Cerrar el pop-up al hacer clic fuera del contenido del formulario
window.addEventListener('click', function(event) {
    const popup = document.getElementById('promoPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
        document.getElementById('countdown-container').style.display = 'block'; // Mostrar el contador de nuevo
    }
});





// Enviar el formulario a WhatsApp al hacer clic en el botón "Enviar"
document.getElementById('promoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores de los campos del formulario
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const direction = document.getElementById('direction').value;
    const reference = document.getElementById('reference').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const promo = document.querySelector('input[name="promo"]:checked').value;

    // Crear el mensaje de WhatsApp con los valores obtenidos
    const message = `Quiero la promoción:\nCiudad: ${city}\nDistrito: ${district}\n Dirección: ${direction}\n Referencia ${reference} Nombre: ${name}\nTeléfono: ${phone}\nPromoción seleccionada: ${promo}`;

    // Generar la URL de WhatsApp y abrirla en una nueva pestaña
    const whatsappUrl = `https://api.whatsapp.com/send?phone=51991759051&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});


// Definir la duración del contador en minutos y segundos
let timerDuration = 15 * 60; // 15 minutos en segundos

// Obtener los elementos donde se mostrarán las horas, minutos y segundos
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Función que actualiza el contador
function updateTimer() {
    // Calcular las horas, minutos y segundos restantes
    const hours = Math.floor(timerDuration / 3600);
    const minutes = Math.floor((timerDuration % 3600) / 60);
    const seconds = timerDuration % 60;

    // Formatear los valores para que siempre tengan dos dígitos
    hoursElement.textContent = `${hours < 10 ? '0' : ''}${hours}`;
    minutesElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}`;
    secondsElement.textContent = `${seconds < 10 ? '0' : ''}${seconds}`;

    // Decrementar el tiempo
    timerDuration--;

    // Verificar si el contador ha llegado a cero
    if (timerDuration < 0) {
        clearInterval(timerInterval);
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
    }
}

// Iniciar el contador
const timerInterval = setInterval(updateTimer, 1000);
