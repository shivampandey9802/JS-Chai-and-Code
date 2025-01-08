let box = document.querySelector('#box');
let x = 0, y = 0;
let move = 10;

document.addEventListener("keydown", (event) => {
    const press = event.key;
    console.log(press);

    if (press === "ArrowUp") {
        y -= move;
    } else if (press === "ArrowLeft") {
        x -= move;
    } else if (press === "ArrowDown") {
        y += move;
    } else if (press === "ArrowRight") {
        x += move;
    }
    
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
});
