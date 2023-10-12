"use strict";
let myTypeString;
myTypeString = 'Hello World';
let myTypeNumber = 22;
let myTypeBoolean = true;
let arrNumber = [1, 2, 3];
let arrString = ['uno', 'dos', 'tres'];
let arrBoolean = [true, false, true];
let employee = ['John Doe', 28, true];
let person = ['John Doe', 28, ['Casado', 'Ingeniero']];
let employeeList = [
    ['John Doe', 28],
    ['Jane Doe', 29],
    ['Jack Doe', 30]
];
console.log(employeeList);
console.log(`El texto de myTypeString es: ${myTypeString}`);
console.log(`El tamaño de la cadena MyTypestring es: ${myTypeString.length}`);
console.log(`MyTypestring es de tipo: ${typeof (myTypeString)}`);
let userID;
function addNum(x, y = '') {
    console.log(`Los valores de la funcion son; ${x} y ${y}`);
}
function addNum2(x, y) {
    return x + y;
}
function printPosition(position) {
    console.log('la latitud y longitud son:', position.x, 'y', position.y);
}
addNum(1, 0);
let suma = addNum2(1, 3);
console.log(`La suma de 1 + 3 es igual a: `, suma);
printPosition({ x: 1, y: 2 });
//# sourceMappingURL=main.js.map