const btnAbrir = document.querySelector('#abrir-pantalla-completa');
const btnCerrar = document.querySelector('#salir-pantalla-completa');

btnAbrir.addEventListener('click', ()=>{
    document.documentElement.requestFullscreen();
});

btnCerrar.addEventListener('click', ()=>{
    document.exitFullscreen();
});