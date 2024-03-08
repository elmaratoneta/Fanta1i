// Ottieni il riferimento al popup
var popup = document.getElementById('popup');

// Ottieni il riferimento all'icona per chiudere il popup
var closePopupIcon = document.getElementById('closePopupIcon');

// Funzione per mostrare il popup con un'animazione
function showPopup() {
    popup.style.display = 'block';
}

// Funzione per chiudere il popup con un'animazione
function closePopup() {
    popup.style.animation = 'popupCloseAnimation 0.3s ease forwards'; // Aggiunta animazione alla chiusura
    setTimeout(function() {
        popup.style.display = 'none'; // Nasconde il popup dopo l'animazione
    }, 300); // Tempo dell'animazione
}

// Aggiungi un gestore di eventi al pulsante per mostrare il popup
document.addEventListener('DOMContentLoaded', function() {
    showPopup();
});

// Aggiungi un gestore di eventi all'icona per chiudere il popup
closePopupIcon.addEventListener('click', closePopup);

// Animazione per la chiusura del pop-up
var popupCloseAnimation = `@keyframes popupCloseAnimation {
    from {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    to {
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 0;
    }
}`;


// Funzione per mostrare il pop-up
function showPopup() {
    var popup = document.getElementById('popup');
    var main = document.querySelector('main');
    popup.style.display = 'block';
    main.classList.add('popup-open'); // Aggiungi la classe popup-open al main
}

// Funzione per chiudere il pop-up
function closePopup() {
    var popup = document.getElementById('popup');
    var main = document.querySelector('main');
    popup.style.display = 'none';
    main.classList.remove('popup-open'); // Rimuovi la classe popup-open dal main
}

// Aggiungi l'animazione al CSS dinamicamente
var style = document.createElement('style');
style.innerHTML = popupCloseAnimation;
document.head.appendChild(style);
