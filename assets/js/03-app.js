window.addEventListener('online', verify());
window.addEventListener('offline', verify());
function verify(){
    if(navigator.onLine){
        console.log('Tines conexion a internet');
    }else{
        console.log('no tienes conexion a internet... (._.#)');
    }
}