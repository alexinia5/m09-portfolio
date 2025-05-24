# Corrección Conecta 4

- Recorrer la matriz (doble bucle)

- Funciones separados

```javascript	
function checkForWin () {
    for (let r = 0; r < gameBoard.length; r++) {
        for (let c = 0; c < gameBoard[c].length; c++) {
            if (gameBoard[r][c] != '') {
                if (checkHorizontal(r, c) || checkVertical (r, c) || checDiagonalBaix(r, c) || checDiagonalDalt(r, c)) {
                    document.write('El jugador $(gameBoard[r][c]) ha guanyat!');
                }
            }
        }     
    }
}

function checkHorizontal (r, c) {
    let i;

    for (i = 1; i < 4 && c+i < gameBoard[r].length>; i++) {   
        if (gameBoard[r][c] != gameBoard[r][c + i]) {
            return false;
        }
    }
    if (i == 4) return true;
    else return false;
}

function checkVertical (r, c) {
    let i;

    for (i = 1; i < 4 && r+i < gameBoard.length ; i++) {   
        if (gameBoard[r][c] != gameBoard[r + i][c]) {
            return false;
        }
    }
    
    if (i == 4) return true;
    else return false;
}

function checkDiagonalBaix (r, c) {
    let i;

    for (i = 1; i < 4 && r+i < gameBoard.length ; i++) {   
        if (gameBoard[r][c] != gameBoard[r + i][c + i]) {
            return false;
        }
    }
    if (i == 4) return true;
    else return false;
}

function checkDiagonalDalt (r, c) {
    let i;

    for (i = 1; i < 4  && r-i > 0 && c+i < gameBoard[r-1].length; i++) {   
        if (gameBoard[r][c] != gameBoard[r - i][c + i]) {
            return false;
        }
    }
    if (i == 4) return true;
    else return false;
}

```

- Todo junto
```javascript
function checkForWin() {
    for (let r = 0; r < gameBoard.length; r++) {
        for (let c = 0; c < gameBoard[c].length; c++) {
            if (gameBoard[r][c] != '') {

                if (checkConecta(r, w)) {
                    document.write('El jugador $(gameBoard[r][c]) ha guanyat!');
                }
            }
        }     
    }
}

function checkCasilla() {
    let directions = [[0,1], [1,0], [1,1], [-1,1]];
    let i;

    for (let d of directions) {
        rmulti = d[0];
        cmulti = d[1];

        for (i = 1; i < 4 && r+(i*cmulti) < gameBoard[r].length &&
        r+(i*cmulti) >= 0 &&
        c+i(i*rmulti) < gameBoard[r+(i*cmulti)].length &&
        c+i(i*rmulti) >= 0; i++ ) {

            if (gameBoard[r][c] != gameBoard[r+(i*rmulti)][c+(i*cmulti)]) {
                break;
            }   
        }

        if (i == 4) return true;
    }

    return false;
}

```
