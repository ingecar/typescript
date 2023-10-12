"use strict";
let message = 'Hello World';
let count;
const numero = 5;
let isTrue = true;
count = 20;
let arrNumber = [1, 2, 3];
let arrString = ['1', '2', '3'];
let arrString2 = ['1', '2', '3'];
let arrBoolean = [true, false, true];
let person = ['John Doe', 28, ['Casado', 'Ingeniero']];
let employee = ['John Doe', 28, true];
let userID;
console.log("LEFT");
const objeto = {
    id: 1,
    name: 'John Doe',
    direction: "RIGHT"
};
console.log('Id:', objeto.id, 'User:', objeto.name, 'Age:', objeto.age, 'Direction:', objeto.direction);
let cid = 1;
let customerId = cid;
function addNum(x, y = '') {
    console.log(x, y);
}
function addNum2(x, y) {
    return x + y;
}
function printPosition(position) {
    console.log('latitude and longitude are', position.x, 'and', position.y);
}
addNum(1, 0);
5;
printPosition({ x: 1, y: 2 });
const book1 = {
    id: 1,
    title: 'Book One',
    author: 'John Doe',
    coauthor: 'Jane Doe',
};
const book2 = [];
book2.push(book1);
class employee1 {
    constructor(id, name, position) {
        this.id = id;
        this.name = name;
        this.position = position;
    }
    showInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Position: ${this.position}`);
    }
}
const emp1 = new employee1(1, 'John Doe', 'Manager');
//# sourceMappingURL=index.js.map