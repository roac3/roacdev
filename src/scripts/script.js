addEventListener('load',()=>{
    const card = document.querySelector('.card')

    function animationUp(){
        let Ypos= scrollY

        if (Ypos > (card.getBoundingClientRect().top + 550)){
            card.classList.add('animate-fade-up')
            console.log('now')
        }else{
            card.classList.remove('animate-fade-up')
        }
    
    }
    
    addEventListener('scroll',animationUp)
});
