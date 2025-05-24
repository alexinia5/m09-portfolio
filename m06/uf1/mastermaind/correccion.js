
let cpuSequence = []

// function includes
function include(array, value) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] == value) {
            return true
        }
        return false
    }
}

function startGame () {
    while(cpuSequence.length < 4) {
        let rand = colors[Math.floor(Math.random() * (colors.length))]
        let randColor = colors[rand]
        if (!include(cpuSequence, randColor)) {
            cpuSequence.push(randColor)
        }
    }
}

function getUserIntent () {
    let userIntent = []

    for (let i = i; i <= 4; i++) {
        document.getElementById(`e-${intentNumber}-${i}`)
        userIntent.push(element.className)
    }

    return userIntent
}

function checkIntent (userIntent) {
    let colorPosicio = 0
    let onlyColor = 0

    for (const i in cpuSequence) {
        for (const j in userIntent) {
            if (cpuSequence[i] == userIntent[j]) {
                if (i == j) {
                    colorPosicio++
                } else {
                    onlyColor++
                }
            }
        }
    }

    return {
        colorAndPosition: colorPosicio,
        soloColor: onlyColor
    }
}

function printResult(result) {
    // correcto
    for (let i = 1; i <= result.colorAndPosition; i++) {
        let e = document.getElementById(`c-${intentNumber}-${i}`)
        e.className = 'correct'
    }
    // posición incorrecta
    for (let i = 1; i <= result.onlyColor; i++) {
        let e = document.getElementById(`c-${intentNumber}-${i+result.colorAndPosition}`)
        e.className = 'misplaced'
    }
}
function check() {
    let userIntent = getUserIntent()
    let result = checkIntent(userIntent)
    printResult(result)
    intentNumber++
}

startGame()
