// #region Exercici 1
let str : string = 'Hola món';
let num : number = 1;
document.write(`String: ${str}`)
document.write(`Number: ${num}`)
// #endregion


// #region Exercici 2
// let trillon : bigint = 1000000000000;
// let result = num + trillon;
// #endregion


// #region Exercici 3
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8];
function printArray(arr : any) : void {
    for (let i = 0; i < arr.length; i++) {
        let isMajor : boolean = true;
        if (isMajor) {
            document.write(`Majors que 0 ${arr[i]}`);
        } else {
            isMajor = false;
        }
    }
}
printArray(arrNum)
// #endregion


// #region Exercici 4
enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
function printWeekNumberDay(param : Week) : number {
    return param;
}
console.log(printWeekNumberDay(Week.Saturday))
// #endregion


// #region Exercici 5
enum Size {
    'XS',
    'S',
    'M',
    'L',
    'XL',
}
function getPriceFromSize(size : Size, price : number) : number {
    return price * (1+(size*0.5));
}
// #endregion


// #region Exercici 6
enum Colors {
    red = '#EB1416',
    orange = '#FFA500',
    yellow = '#F9FF4F',
    green = '#79C314',
    blue = '#487DE7',
    indigo = '#4B369D',
    violet = '#70369D'
}
function printColors(colors : Colors[]) : void{
    let body : HTMLElement = document.body;
    
    for (let color of colors) {
        let divColor : HTMLElement = document.createElement('DIV');
        divColor.style.width = '50mm';
        divColor.style.height = '50mm';
        divColor.style.display = 'inline-flex';
        divColor.style.backgroundColor = color;
        body.appendChild(divColor);
    }
}
printColors([Colors.red, Colors.orange, Colors.yellow, Colors.green, Colors.blue, Colors.indigo, Colors.violet])
// #endregion


// #region Exercici 7
function returnType<T> (param: T) {
    return document.write(typeof param);
}
console.log(returnType('hola'));
// #endregion


// #region Exercici 8
function bubbleSort<T> (array: T[]) : T[]{
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length -i +1; j++) {
            if (array[j] > array[j+1]) {
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
}
console.log(bubbleSort(['X', 'E', 'W', 'S', 'A', 'B']));
// #endregion


// #region Exercici 9
type UserName = string;
let user : UserName = 'sara';
document.write(user);

// #endregion


// #region Exercici 10
type User = {
    id: number,
    name: string,
    email: string
};

let arrayUsers : User[] = [
    {id: 20, name: 'Benjamín', email: 'benjamín@gmail.com'},
    {id: 21, name: 'Pepito', email: 'pepito@gmail.com'},
]

function getUser(user : User[]) {
    for (let u of user) {
        console.log(u.name, u.email)
    }
}

getUser(arrayUsers);
// #endregion


// #region Exercici 11
type Triangle = {
    base: number,
    alçada: number
}

type Cercle = {
    radi: number
}

function getArea(forma: Triangle | Cercle) {
    if (forma as Triangle) {
        console.log(forma.base);
    } else if (forma as Cercle) {
        console.log(forma.radi);
    }
}
// #endregion