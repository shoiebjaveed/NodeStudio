var name = "Max";
var age = 24;
var hasHobbies = true;

var showUser = ( showName, showAge, showHobby) => {
  return (
    "name is " +
    showName +
    ", age is " +
    showAge +
    ", has hobby " +
    showHobby
  );
}

console.log(showUser(name, age, hasHobbies));

//Product of two
var generateResult = (num1, num2) => {
    console.log("answer = " + num1 * num2);
}

generateResult(2,5);

//studentObj
const studentObj = {
    name: "max",
    age: 24,
    class: 12
}

console.log(studentObj);