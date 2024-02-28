const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const pipe1 = document.querySelector('.pipe1')

const scoreElement = document.querySelector('.score')
let score = 0;
  

const jump = () => {
    mario.classList.add('jump');

    setTimeout (() =>{

        mario.classList.remove('jump');


    },500);
    
    score++;
    scoreElement.textContent = `Score: ${score}`;
    localStorage.setItem('score', score);

}


    const loop = setInterval (() =>{
        const pipePosition = pipe.offsetLeft;
        const pipePosition1 = pipe1.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' ,'');
    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80 || pipePosition1 <= 120 && pipePosition1 > 0 && marioPosition <80 ){
    
            pipe.style.animation='none';
            pipe.style.left = `${pipePosition}px`
    
            pipe1.style.animation='none';
            pipe1.style.left = `${pipePosition1}px`
    
            mario.style.animation='none';
            mario.style.bottom = `${marioPosition}px`
    
            mario.src = './imagens/game-over.png' 
            mario.style.width = '75px'
            mario.style.marginLeft ='45px'
    
        
            function showGameOverScreen() {
                const gameOverScreen = document.getElementById('gameOverScreen');
                gameOverScreen.style.display = 'block';
               
              }
              
              showGameOverScreen();
                
              
              clearInterval(loop);
                
            }   
        
    },10)
    




function restartGame() {
    window.location.reload();
  }



document.getElementById('restartButton').addEventListener('click', restartGame);
document.addEventListener('keydown',jump);