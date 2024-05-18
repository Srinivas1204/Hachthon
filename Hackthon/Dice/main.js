const canvas = document.getElementById('myCanvas');
canvas.height=400
canvas.width=400
const ctx = canvas.getContext('2d');
function dice(number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(90, 90, 200, 200);
    ctx.fillStyle = 'black';
    ctx.font = 'bold 100px sans-serif';
    ctx.fillText(number,170,210);
}
function diceNumber() {
    return Math.floor(Math.random() * 6) + 1;
 }


document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        const randomNumber = diceNumber();
        dice(randomNumber);
    }
});
dice(diceNumber());