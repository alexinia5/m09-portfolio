import Conductor from './model/Conductor';

let c = new Conductor('Pepito', new Date(1990,12,23), true);
c.BirthDate = new Date(2015,2,4);
console.log(c.print());
console.log(c.print('Dayson'));
console.log(c.print(new Date(2000,23,22)));
console.log(c.print(false));