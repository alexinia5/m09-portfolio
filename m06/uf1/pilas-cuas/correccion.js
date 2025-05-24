class Item {
    value
    next
}

class Pila {

    constructor() {
        // declarar objeto
        this.top = null;
    }

    push (value) {
        let item = new Item();

        item.value = value;
        item.next = this.top;
        this.top = item;
    }

    pop () {     
        let aux = this.top;
        this.top = aux.next;

        return ret.value;
    }

    toString() {
        let aux = this.top;
        while(aux != null) {
            str += aux.value + ",";
            aux = aux.next;
        }
        return str;
    }
}

class Cua {
    first
    last

    enqueue (value) {
        let item = new Item();

        item.value = value;
        item.next = null;

        if (!this.first) {
            // primero y último de la lista
            this.first = item;
        } else {
            this.last.next = item;
        }
        this.last = item;
    }

    dequeue () {
        let i = new Item();
        this.first = i.next;
        return i.value;
    }

    toString () {
        let i = this.first;

        while(i) {
            str += i.value + ",";
            i = i.next;
        } 
        return str;
    }
}

// comprobar
let p = new Pila();
let c = new Cua();

// <button onclick="clickPush()/clickPop()"></button>
function clickPush() {  
    let value = prompt("Inserta un valor: ");
    p.push(value);
    document.getElementById("stack").innerHTML = "Stack: " + p.toString();

}

function clickPop() {  
    let value = p.pop();
    alert(value);
    document.getElementById("stack").innerHTML = "Stack: " + p.toString();
}

function clickEnqueue() {
    let value = prompt("Inserta un valor: ");
    p.enqueue(value);
    document.getElementById("stack").innerHTML = "Queue: " + p.toString();
}

function clickDequeue() {
    let value = p.dequeue();
    alert(value);
    document.getElementById("stack").innerHTML = "Stack: " + p.toString();
}

// pila
p.push();
p.pop();

// cua
c.enqueue();
c.dequeue();