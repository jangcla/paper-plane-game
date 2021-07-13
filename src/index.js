function moveLeft() {
    let left = parseInt(window.getComputedStyle(paperplane).getPropertyValue("left"));
    left -= 200;
    if (left>=0) {
        paperplane.style.left = left + "px";
    }
}
function moveRight() {
    let left = parseInt(window.getComputedStyle(paperplane).getPropertyValue("left"));
    left += 200;
    if (left<600) {
        paperplane.style.left = left + "px";
    }
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "a") {moveLeft();}
    if (event.key === "ArrowRight"|| event.key === "d") {moveRight();}
})


let obstacle = document.getElementById("obstacle");
obstacle.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 200;  
    obstacle.style.left = left + "px";
})