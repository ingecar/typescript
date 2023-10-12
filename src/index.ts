// TypeScript Data Types - Primitive Types
let message: string = 'Hello World';
let count: number;
const numero: number = 5;
let isTrue: boolean = true;
count = 20;


// TypeScript Arrays 
let arrNumber: number[] = [1, 2, 3];
let arrString: Array<string> = ['1', '2', '3'];
let arrString2: string[] = ['1', '2', '3'];
let arrBoolean: boolean[] = [true, false, true];


// Tuple - fixed number of elements prferible for max 3 elements
let person: [string, number, string[]] = ['John Doe', 28, ['Casado', 'Ingeniero']]; // array in a tuple
let employee: [string, number, boolean] = ['John Doe', 28, true];


// Union Type - multiple types
let userID: string | number | null;


// enum - custom type
const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
console.log(Direction.Left); // 0


// Objects 

type User = { // type definition of an object
    readonly id: number,
    name: string,
    age?: number, // optional
    direction: Direction
}

const objeto : User = {
    id: 1,
    name: 'John Doe', 
    direction: Direction.Right
} 
   


// User.id = 2; // error because is readonly
console.log('Id:', objeto.id, 'User:', objeto.name, 'Age:', objeto.age, 'Direction:', objeto.direction);    


// Type Assertion - type casting
let cid: any = 1;
let customerId = cid as number;
// const mycanvas = <HTMLCanvasElement> document.getElementById('canvas');

// Functions
function addNum(x: number, y: number | string = ''): void {
    console.log(x, y) 
}

function addNum2(x: number, y: number) {    
    return x + y;
}

//function with object as parameter and optional parameter y with 2 types               
function printPosition(position: { x: number, y?: number | string   }) {
    console.log('latitude and longitude are', position.x,'and', position.y);
}
addNum(1, 0);5
printPosition({ x: 1, y: 2});
// console.log(addNum2(1, 2));

// Interface are like custom types
interface Book {
    id: number;
    title: string;
    author: string;
    coauthor?: string;
    isnew?: (id: boolean) => void
}
const book1: Book = {
    id: 1,
    title: 'Book One',
    author: 'John Doe',
    coauthor: 'Jane Doe',
}

const book2: Book [] = [];
book2.push(book1);
// console.log(book2);


// Classes
class employee1 {
    id: number;
    name: string;
    position: string;

    constructor(id: number, name: string, position: string) {
        this.id = id;
        this.name = name;
        this.position = position;
    }
    showInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Position: ${this.position}`);
    }
}

const emp1 = new employee1(1, 'John Doe', 'Manager');
// console.log(emp1.showInfo());


// const username = 'John Doe';
// const age = 28;
// const hasHobbies = 'Dancing, Singing';
// practice

// console.log(`Hello, my name is ${username} and I am ${age} years old and I have some hobbies like ${hasHobbies}.`);



