addEventListener('load',()=>{
    const $card = document.querySelector('.cajita')

    function animationUp(){
        var windowheight = window.innerHeight;
        var pPoint = $card.getBoundingClientRect().top;
        var animationpoint = 250;

        if (pPoint < windowheight - animationpoint){
            $card.classList.add('animate-fade-up')
        }else{
            $card.classList.remove('animate-fade-up')
        }
    
    }
    
    addEventListener('scroll',animationUp)
});
