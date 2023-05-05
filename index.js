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
