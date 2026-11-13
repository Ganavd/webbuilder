const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
};

window.onload = () => {
    requestAnimationFrame(draw)
}

addEventListener("dblclick", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    point()
    console.log("placed");
    
})

// const download = new Image()
// download.src = "icons/download.svg"
// const connect = new Image()
// connect.src = "icons/connect.svg"
// const find_path = new Image()
// find_path.src = "icons/find_path.svg"

var lines = []
var radius = 50
var teks = "A"
function point() {
    c.beginPath()
    c.fillStyle = "black"
    c.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2, false);
    c.fillText(teks, mouse.x, mouse.y)
    c.stroke()
   connect()
}
function connect() {
    c.beginPath()
    c.lineTo(mouse.x,mouse.y, 10)
    c.stroke()
    console.log("line");
    
}

function draw() {
    requestAnimationFrame(draw);
}