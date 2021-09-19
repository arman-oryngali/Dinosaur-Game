const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown"/*нажатия кнопки*/, function(event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") { /*если динозавр не имеет класса jump, то таком случии мы его добавляем*/
       dino.classList.add("jump") 
    }
    setTimeout( function() { /*противном случаи, каждый 0,3 сек будет удалять класса jump*/
        dino.classList.remove("jump") /*setTimeout позволяет вызвать функцию один раз, через определенно промежуток времени*/
    }, 500)  
}
/*setInterval - позволяет вызвать функцию много раз, через определенно промежуток времени*/
let isAlive = setInterval ( function() { /* чтобы при ударение игра заканчивалась. */
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")); /*dinoTop позволяет узнать где находиться. */
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >=140) {
        alert("GAME OVER!")
    }
}, 10)