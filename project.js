score = 0;
cross = true;

audio = new Audio('sounds/music.mp3');
audiogo = new Audio('sounds/gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("Key code is : ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            console.log('yes');
            dino.classList.remove('animateDino');
        }, 700);
    }

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle');
    gameOver = document.querySelector('.gameOver');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offSetX = Math.abs(dx - ox);
    offSetY = Math.abs(dy - oy);

    if (offSetX < 73 && offSetY < 52) {
        gameOver.innerHTML ="Game Over - Reload to Play Again";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offSetX < 145 && cross) {
        score += 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
    setTimeout(() => {

        animDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('aniamtion-duration'));
        newDur = animDur - 0.1;
        obsatcle.style.animationDuration = newDur + 's';
    }, 500);

}, 10);

function updateScore(score) {
    scoreContainer.innerHTML = "Your score :" + score;
}