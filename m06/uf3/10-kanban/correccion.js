// añadir a una columna un elemento draggable
let col = document.querySelectorAll('.column');
let selectedCard;

// ordenar elementos
for (let c of col) {
    c.addEventListener('drop', (e) => {
        let addTask = e.currentTarget.querySelectorAll('add-task').length;

        if (e.target.classList.contains('card')) {
            e.currentTarget.classList.remove('añadirMargin')
            e.target.currentTarget.insertBefore(selectedCard, e.target)
            
        }else if (addTask) {
            e.currentTarget.insertBefore(selectedCard, addTask);
        } else {
            e.currentTarget.appendChild(selectedCard);
        }
    });
    c.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    c.addEventListener('dragenter', (e) => {
        if (e.target.classList.contains('card')) {
            e.target.classList.add('añadirMargin');
        }
        e.currentTarget.classList.add('drag')
    });
    c.addEventListener('dragleave', (e) => {
        if (e.target.classList.contains('card')) {
            e.currentTarget.classList.remove('añadirMargin')
        }
    });
}

for (let card of cards) {
    card.addEventListener('dragstart', (e) => {
        selectedCard = e.target
    });
}

