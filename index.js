//Arrays

const hobbies = ['apple', 'oranges', '', 'mango', '', 'lemon'];

// for(let hobby of hobbies) {
//     console.log(hobby);
// }
const newHobbies = hobbies.map((hobby) => {return hobby === '' ? 'empty string' : hobby});

console.log(newHobbies)

const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}

console.log(obj1)

console.log(obj2)

//Rest Operator

const toArray = (...args) => {
    return args
}

console.log(toArray(1,3,4,5,6,6))

//Destructuring
const person = {
    name: "Max",
    age: 24,
    greet() {
        console.log("Hi, I'm " + this.name)
    }
}

const sayHi = ({ greet }) => {
    console.log(greet())
}

sayHi(person)

const {name , age} = person;
console.log(name, age)