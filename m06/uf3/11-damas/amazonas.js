const BOARD_SIZE = 10;
let board;
let torn = 'white';
let oldQueenElement;

document.addEventListener("DOMContentLoaded", function() {
    board = document.querySelector('.board');
    initBoard();
    markQueens();   
});

function initBoard() {
    let cell;
    for (let r = 0; r < BOARD_SIZE; r++) {
        let row = document.createElement("div");
        board.appendChild(row);
        for (let c = 0; c < BOARD_SIZE; c++) {
            cell = document.createElement("div");
            cell.setAttribute("data-row", r);
            cell.setAttribute("data-column", c);
            row.appendChild(cell);
        }
    }

    board.children[0].children[3].className = 'blackQueen';
    board.children[0].children[6].className = 'blackQueen';
    board.children[3].children[0].className = 'blackQueen';
    board.children[3].children[9].className = 'blackQueen';

    board.children[9].children[3].className = 'whiteQueen';
    board.children[9].children[6].className = 'whiteQueen';
    board.children[6].children[9].className = 'whiteQueen';
    board.children[6].children[0].className = 'whiteQueen';

    board.addEventListener("click", function (e) {
        cellClick(e);
    }); 
}

function markQueens () {
    let queens = board.getElementsByClassName(torn + 'Queen');
    for (let queen of queens) {
        queen.classList.add('toSelect');
    }
}

function cellClick(e) {
    if (e.target.classList.contains('toSelect')) {
        removeClass('.toSelect');
        markQueensMovement(e.target, 'markMovements');
    } 
    else if (e.target.classList.contains('markMovements')) {
        e.target.className = oldQueenElement.className;
        oldQueenElement.className = '';
        removeClass('.markMovements');
        markQueensMovement(e.target, 'putArrow');
    } else if (e.target.classList.contains('putArrow')) {
        e.target.className = 'arrow';
        checkOponentMovement();
        removeClass('.putArrow');

        if (!checkOponentMovement('black')) {
            alert ('Win white Queen');
        } else {
            alert ('Win black Queen');
        }

        torn = (torn == white ? 'black' : 'white');
        markQueens();
    }
}

function getElementsOfQueenMovement (currentQueen, className) {
    let movements = [];

    let rowQueen = parseInt(currentQueen.getAttribute('data-row'));
    let colQueen = parseInt(currentQueen.getAttribute('data-column'));

    let directions = [
        {row:0, col:1}, // horizontal derecha
        {row:0, col:-1}, // horizontal izquierda
        {row:1, col:0}, // vertical a bajo
        {row:-1, col:0}, // vertical arriba
        {row:1, col:1}, // diagonal derecha a bajo
        {row:1, col:-1}, // diagonal izquierda a bajo
        {row:-1, col:1}, // diagonal derecha arriba
        {row:-1, col:-1}, // diagonal izquierda arriba
    ]

    for (let dir of directions) {
        for (let i = 1;
            // horizontales derecha - izquierda
            (dir.col*i)+colQueen >= 0 && 
            (dir.col*i)+colQueen < BOARD_SIZE && 
            // verticales arriba - a bajo
            (dir.row*i)+colQueen >= 0 && 
            (dir.row*i)+colQueen < BOARD_SIZE && 
            // diagonales derecha/izquierda arriba - a bajo
            board.children[(dir.row*i)+rowQueen].children[(dir.col*i)+colQueen].className == ''; 
            i++) {
                board.children[(dir.row*i)+rowQueen].children[(dir.col*i)+colQueen].className = 'markMovements';
                movements.push(board.children[(dir.row*i)+rowQueen].children[(dir.col*i)+colQueen].className);
            }
    }
    return movements;
}

function removeClass (className) {
    let elements = board.querySelectorAll(className);

    for (let elem of elements) {
        elem.classList.remove(className);
    }
}

function markQueensMovement(currentQueen, className) {
    let movements = getElementsOfQueenMovement(currentQueen);

    for (let move of movements) {
        move.className = className
    }
}

function checkOponentMovement(torn) {
    let queens = board.getElementsByClassName(torn + "queen");
    let count = 0;

    for (let queen of queens) {
        let movements = getElementsOfQueenMovement(queen);
        count += movements.length;
    }
    return count > 0;
}