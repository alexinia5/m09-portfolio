import { setDarkColor, TogleTheme } from "./Darker";
import {min, max, descompose} from "./Mathematics";

console.log(min([8, 3, 23, 2, 6, 7, 3, 23, -3, -23]));
console.log(max([8, 3, 23, 2, 6, 7, 3, 23, 234]));
console.log(descompose(35));

// #region Exercici 4
setDarkColor('#111');

document.addEventListener('DOMContentLoaded', function() {
    let element = document.getElementById('main');
    TogleTheme(element);
});

setTimeout(function() {
    
}, 3000)