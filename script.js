function responder(esPositiva) {
    const responseDiv = document.getElementById('responseMessage');
    
    if (esPositiva) {
        responseDiv.innerHTML = `
            <div class="response-yes">
                ¡Tiiiii! 🎉💕<br>
                ¡No puedo esperar a pasar este tiempo con vos mi ositoo!<br>
                Te amo mucho ❤️
            </div>
        `;
        
        // Crear más corazones flotantes
        crearCorazonesEspeciales();
        
        // Vibración si está disponible
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
        
    } else {
        responseDiv.innerHTML = `
            <div class="response-maybe">
                Está bien mi amor 😊<br>
                Tomate el tiempo que necesites para decidir<br>
                Voy a estar aca esperándote 💕
            </div>
        `;
    }
    
    responseDiv.classList.add('show');
    
    // Scroll suave hacia la respuesta
    setTimeout(() => {
        responseDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function crearCorazonesEspeciales() {
    const container = document.querySelector('.hearts');
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 80 + 10 + '%';
            heart.style.top = Math.random() * 80 + 10 + '%';
            heart.style.fontSize = Math.random() * 15 + 15 + 'px';
            heart.style.animationDuration = Math.random() * 2 + 2 + 's';
            
            container.appendChild(heart);
            
            // Remover el corazón después de la animación
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 4000);
        }, i * 200);
    }
}

// Agregar efecto de tilt en móviles
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(e) {
        const card = document.querySelector('.card');
        const tiltX = e.gamma / 30; // Limitar el rango
        const tiltY = e.beta / 30;
        
        card.style.transform = `perspective(1000px) rotateY(${tiltX}deg) rotateX(${-tiltY}deg)`;
    });
}

// Efecto de partículas al cargar
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        crearCorazonesEspeciales();
    }, 1000);
});