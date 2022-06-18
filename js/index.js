let character = document.getElementById('character');
let block = document.getElementById('block');
const reset = document.createElement('button');
reset.type = 'button';
reset.textContent = 'Click to reset and try again!';


function jump() {

    if(character.classList != 'animate') {
        character.classList.add('animate');
    }

    setTimeout(function(){
        character.classList.remove('animate');
    }, 500);
}

let checkIfDead = setInterval(function(){

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('Sorry, you lose!');
        document.body.appendChild(reset);
        reset.onclick = function reloadPage() { window.location.href=window.location.href; };
    }
},10);
// }