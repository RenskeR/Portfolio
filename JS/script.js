var foto = document.getElementById('foto');
var text = document.getElementById('naam');
var text2 = document.getElementById('naam2'); 

window.addEventListener('scroll', function(e) {
    var scroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
        // Pas de volgende regels aan om de tekst te verbergen en daarna zichtbaar te maken
        if (scroll < 500) {
            text.style.opacity = 0;
            text2.style.opacity = 0;
        } else {
            text.style.opacity = 1;
            text2.style.opacity = 1;
        }
        
        // Pas de opacity van de foto aan zoals eerder
        foto.style.opacity = Math.max(0, Math.min(1, -scroll / 400 + 2));
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}