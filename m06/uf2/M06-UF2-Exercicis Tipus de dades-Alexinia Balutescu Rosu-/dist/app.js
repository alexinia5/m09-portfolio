"use strict";
// #region Exercici 1
let str = 'Hola món';
let num = 1;
document.write(`String: ${str}`);
document.write(`Number: ${num}`);
// #endregion
// #region Exercici 2
// let trillon : bigint = 1000000000000;
// let result = num + trillon;
// #endregion
// #region Exercici 3
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8];
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isMajor = true;
        if (isMajor) {
            document.write(`Majors que 0 ${arr[i]}`);
        }
        else {
            isMajor = false;
        }
    }
}
printArray(arrNum);
// #endregion
// #region Exercici 4
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednesday"] = 2] = "Wednesday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = 6] = "Sunday";
})(Week || (Week = {}));
function printWeekNumberDay(param) {
    return param;
}
console.log(printWeekNumberDay(Week.Saturday));
// #endregion
// #region Exercici 5
var Size;
(function (Size) {
    Size[Size["XS"] = 0] = "XS";
    Size[Size["S"] = 1] = "S";
    Size[Size["M"] = 2] = "M";
    Size[Size["L"] = 3] = "L";
    Size[Size["XL"] = 4] = "XL";
})(Size || (Size = {}));
function getPriceFromSize(size, price) {
    return price * (1 + (size * 0.5));
}
// #endregion
// #region Exercici 6
var Colors;
(function (Colors) {
    Colors["red"] = "#EB1416";
    Colors["orange"] = "#FFA500";
    Colors["yellow"] = "#F9FF4F";
    Colors["green"] = "#79C314";
    Colors["blue"] = "#487DE7";
    Colors["indigo"] = "#4B369D";
    Colors["violet"] = "#70369D";
})(Colors || (Colors = {}));
function printColors(colors) {
    let body = document.body;
    for (let color of colors) {
        let divColor = document.createElement('DIV');
        divColor.style.width = '50mm';
        divColor.style.height = '50mm';
        divColor.style.display = 'inline-flex';
        divColor.style.backgroundColor = color;
        body.appendChild(divColor);
    }
}
printColors([Colors.red, Colors.orange, Colors.yellow, Colors.green, Colors.blue, Colors.indigo, Colors.violet]);
// #endregion
// #region Exercici 7
function returnType(param) {
    return document.write(typeof param);
}
console.log(returnType('hola'));
// #endregion
// #region Exercici 8
function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i + 1; j++) {
            if (array[j] > array[j + 1]) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}
console.log(bubbleSort(['X', 'E', 'W', 'S', 'A', 'B']));
let user = 'sara';
document.write(user);
let arrayUsers = [
    { id: 20, name: 'Benjamín', email: 'benjamín@gmail.com' },
    { id: 21, name: 'Pepito', email: 'pepito@gmail.com' },
];
function getUser(user) {
    for (let u of user) {
        console.log(u.name, u.email);
    }
}
getUser(arrayUsers);
function getArea(forma) {
    if (forma) {
        console.log(forma.base);
    }
    else if (forma) {
        console.log(forma.radi);
    }
}
// #endregion
//# sourceMappingURL=app.js.map