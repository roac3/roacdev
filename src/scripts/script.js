const $card = document.querySelector('.cajita')
const $text_code = document.querySelector('pre');
    

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

let text = ($text_code.innerText === undefined) ? $text_code.innerText : $text_code.textContent;
let cutText = text.split(/\r?\n/);

console.log(cutText);
    
addEventListener('scroll',animationUp)

