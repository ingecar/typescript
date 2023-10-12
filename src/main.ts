// Primitive Types
let myTypeString: string 
myTypeString = 'Hello World';
let myTypeNumber = 22;
let myTypeBoolean: boolean = true;

// TypeScript Arrays 
let arrNumber: number[] = [1, 2, 3];
let arrString: Array<string> = ['uno', 'dos', 'tres'];
let arrBoolean: boolean[] = [true, false, true];

// Tuple - fixed number of elements
let employee: [string, number, boolean] = ['John Doe', 28, true];
let person: [string, number, string[]] = ['John Doe', 28, ['Casado', 'Ingeniero']]; // array in a tuple

// Tuple Array
let employeeList: [string, number][] = [
    ['John Doe', 28],
    ['Jane Doe', 29],
    ['Jack Doe', 30]
];
console.log(employeeList);
console.log(`El texto de myTypeString es: ${myTypeString}`);
console.log(`El tamaño de la cadena MyTypestring es: ${myTypeString.length}`);
console.log(`MyTypestring es de tipo: ${typeof(myTypeString)}`);

// Union Type 
let userID: string | number | null ;

// Functions
function addNum(x: number, y: number | string = ''): void {
    console.log(`Los valores de la funcion son; ${x} y ${y}`) 
}

function addNum2(x: number, y: number) {    
    return x + y;
}

//function with object as parameter and optional parameter y with 2 types               
function printPosition(position: { x: number, y?: number | string   }) {
    console.log('la latitud y longitud son:', position.x, 'y' , position.y);
}
addNum(1, 0)
let suma = addNum2(1, 3); //asignar una funcion a una variable
console.log(`La suma de 1 + 3 es igual a: `, suma)
printPosition({ x: 1, y: 2});

 

















// // enum - custom type
// const enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT'
// }
// console.log(Direction.Left); // 0


// // Objects 

// type User = { // type definition of an object
//     readonly id: number,
//     name: string,
//     age?: number, // optional
//     direction: Direction
// }

// const objeto : User = {
//     id: 1,
//     name: 'John Doe', 
//     direction: Direction.Right
// } 
   


// // User.id = 2; // error because is readonly
// console.log('Id:', objeto.id, 'User:', objeto.name, 'Age:', objeto.age, 'Direction:', objeto.direction);    


// // Type Assertion - type casting
// let cid: any = 1;
// let customerId = cid as number;
// // const mycanvas = <HTMLCanvasElement> document.getElementById('canvas');



// // Interface are like custom types
// interface Book {
//     id: number;
//     title: string;
//     author: string;
//     coauthor?: string;
//     isnew?: (id: boolean) => void
// }
// const book1: Book = {
//     id: 1,
//     title: 'Book One',
//     author: 'John Doe',
//     coauthor: 'Jane Doe',
// }

// const book2: Book [] = [];
// book2.push(book1);
// // console.log(book2);


// // Classes
// class employee1 {
//     id: number;
//     name: string;
//     position: string;

//     constructor(id: number, name: string, position: string) {
//         this.id = id;
//         this.name = name;
//         this.position = position;
//     }
//     showInfo(): void {
//         console.log(`ID: ${this.id}, Name: ${this.name}, Position: ${this.position}`);
//     }
// }

// const emp1 = new employee1(1, 'John Doe', 'Manager');
// // console.log(emp1.showInfo());


// // const username = 'John Doe';
// // const age = 28;
// // const hasHobbies = 'Dancing, Singing';
// // practice

// // console.log(`Hello, my name is ${username} and I am ${age} years old and I have some hobbies like ${hasHobbies}.`);



