const btnAbrir = document.querySelector('#abrir-pantalla-completa');
const btnCerrar = document.querySelector('#salir-pantalla-completa');

btnAbrir.addEventListener('click', openFullScreen());

btnCerrar.addEventListener('click', closeFullScreen());

function openFullScreen(){
    document.documentElement.requestFullscreen();
}

function closeFullScreen(){ 
    document.documentElement.exitFullscreen();
}