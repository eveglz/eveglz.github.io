//NavBar Scroll
function applyNavScrolled() {
  const scrolled = window.scrollY > 1;
  $('.navbar').toggleClass('scrolled', scrolled);
}
$(applyNavScrolled);
$(window).on('scroll', applyNavScrolled); 

//Languages
$('[lang]').removeClass('active');
$('[lang="en"]').addClass('active');

$('ul#lang-switch li a').on('click', function(event) {
event.preventDefault();
const selectedLang = $(this).attr('href').replace('#', '');
$(window).scrollTop(0);

$('[lang]').removeClass('active').addClass('exiting'); 

setTimeout(() => {
  $('[lang].active').removeClass('exiting').css('position','absolute');
}, 600); // mismo tiempo que la transición (.4s)

$(`[lang="${selectedLang}"]`).addClass('active');
applyNavScrolled();
});

//Copy Email
function copiarAlPortapapeles() {
  navigator.clipboard.writeText("eveglz@outlook.com")
    .then(() => {
      console.log('Texto copiado al portapapeles');
      alert('¡Texto copiado con éxito!');
    });
}
$('.copy-email').on('click', copiarAlPortapapeles);
$(window).scrollTop(0);

//Before & After
const imgs = document.querySelectorAll(".designImage");
const toggles = document.querySelectorAll(".toggleSwitch");

toggles.forEach(toggle => {
  toggle.addEventListener("change", () => {
    imgs.forEach(img => {
      img.classList.add("fade-out");

      setTimeout(() => {
        if (toggle.checked) {
          if (img.src.includes("before-kna.webp")) {
            img.src = "img/after-kna.webp";
          } else if (img.src.includes("before-ventanilla.webp")) {
            img.src = "img/after-ventanilla.webp";
          }
          img.alt = "After design";
        } else {
          if (img.src.includes("after-kna.webp")) {
            img.src = "img/before-kna.webp";
          } else if (img.src.includes("after-ventanilla.webp")) {
            img.src = "img/before-ventanilla.webp";
          }
          img.alt = "Before design";
        }

        img.classList.remove("fade-out");
      }, 300);
    });
  });
});
