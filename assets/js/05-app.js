document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'visible'){
        console.log('El usuario esta dentro del examen');
    }else{
        console.log('El usuario salio a buscar a las respuestas');
    }
})