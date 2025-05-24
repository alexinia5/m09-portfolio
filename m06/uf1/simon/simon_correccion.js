// estilos separados de funcionalidad
// #color, #color.light

const colors = ['red', 'green', 'blue', 'yellow']
let sequence
let userPosition = 0
let isPlaying = false

function start() {
    sequence = []
    addColor()
    isPlaying = true
}

function addColor () {
    let rand = Math.floor(Math.random() * colors.length)
    // sequence.push(colors[rand])
    sequence[sequence.length] = colors[rand]
}

function clearAll () {
    for (const e of colors) {
        document.getElementById(color).className = ""
    }
}

function showSequence () {
    const speed = 1000
    for (let i = 0; i < sequence.length; i++) {
        setTimeout(function () {
            let color = sequence[i]
            let e = document.getElementById(color)
            e.className = "light"
        }, speed*i) 
        setTimeout(clearAll, (speed*(i+1))-500)  
    }
    setTimeout(clearAll, speed*sequence.length)
}

function clickColor (color) {
    if (!isPlaying) {
        return false
    }
    userPosition.push(color)
    if (sequence[userPosition] != color) {
        alert('game over');
    } else {
        if (userPosition == sequence.length) {
            userPosition = 0
            addColor()
        } else {
            userPosition++
        }
    }
}