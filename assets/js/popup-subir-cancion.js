var btnAbrirPopup = document.getElementById('abrir-popup'),
	overlay = document.getElementById('overlay-subir-cancion'),
	popup = document.getElementById('popup-subir-cancion'),
	btnCerrarPopup = document.getElementById('btn-cerrar-subir-cancion');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
	overlay.classList.remove('active');

});