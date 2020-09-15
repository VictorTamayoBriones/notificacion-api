document.addEventListener('DOMContentLoaded', ()=>{

    const observer = new IntersectionObserver( entries =>{

        if(entries[0].isIntersecting){
            console.log('ya es visible');
        }else{
            console.log('no es visible');
        }
    });

    observer.observe(document.querySelector('.premium'));

});