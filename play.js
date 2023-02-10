// const person = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log("Hi, I am " + this.name);
//     }
// }

// const printName = ({ name, greet}) => {
//     console.log(name);
// }

// printName(person);

// const { name, age } = person;

// console.log(name, age);

// const copiedPerson = {...person};
// copiedPerson.age = 44;

// const hobbies = ['Sports', 'Cooking'];

// let [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// const copiedArray = [...hobbies];

// console.log(copiedArray);
// console.log(person)
// console.log(copiedPerson);

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4));

// const obj1 = { key1: 1, key2: 2, key3: 1000 };

// const { key1, key3 } = { ...obj1 };

// console.log(key1, key3);

const arr1 = ["value1", "value2"];

const [val1, val2] = arr1;

console.log(val1);

console.log(val2);

const obj1 = { key1: 1, key2: 2, key3: 1000 };

let { key1, key3 } = obj1;

key1 = 20;

key3 = 123;

console.log(obj1.key1, obj1.key3);
console.log(key1, key3);
