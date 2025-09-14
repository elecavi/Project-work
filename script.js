// Seleziona tutte le slide presenti nella pagina e le memorizza in un array
const slides = document.querySelectorAll('.slide');

// Seleziona i pulsanti di navigazione "precedente" e "successivo"
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0; // Si tratta della variabile che tiene traccia della slide attualmente visibile

// Funzione principale per mostrare la slide corrispondente all'indice passato
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Aggiorna l'indice della slide corrente e mostra la slide corrispondente
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // permette il loop 
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Mostra la slide iniziale quando la pagina viene caricata
showSlide(currentIndex);

// Cambio automatico della slide ogni 6 secondi
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 6000);

// Seleziona tutti gli elementi che devono avere l'effetto fade-in
const faders = document.querySelectorAll('.fade-in-section, .fade-in-title');

// Opzioni per l'Intersection Observer
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

// Intersection Observer per gestire le animazioni fade-in quando gli elementi entrano nel viewport
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

// Applica l'Intersection Observer a tutti gli elementi selezionati
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

