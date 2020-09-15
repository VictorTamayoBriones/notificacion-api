const btnNotificar = document.querySelector('#notificar');

btnNotificar.addEventListener('click', ()=>{
    Notification.requestPermission().then( resultado =>{
        console.log(`El resultado es ${resultado}`);
    })
})

const btnVerNotificacion = document.querySelector('#verNotificacion');

btnVerNotificacion.addEventListener('click', () =>{
    console.log('Ahorita te sale una notificacion');

    if(Notification.permission === 'granted'){
        console.log('si debe salir');
        const notificacion = new Notification('Esta es una notificacion',{
            icon: '../img/ccj.png',
            body: 'hola que tal?,  no soy spam'
        });

        notificacion.onclick=function(){
            window.open('https://github.com/VictorTamayoBriones/notificacion-api');
        }
    }

});