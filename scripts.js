$('[lang]').hide();
$('[lang="es"]').show();

$('ul#lang-switch li a').on('click', function(event) {
event.preventDefault();
const selectedLang = $(this).attr('href').replace('#', '');

$('[lang]').hide();
$(`[lang="${selectedLang}"]`).show();
});