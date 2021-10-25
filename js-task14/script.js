//rest parameter
function sum(...theArgs) {
  console.log(theArgs);
}
sum(1, 2, 3);

//spread operator
const num = [7, 8, 9];
const combined = [...num, 1, 4, 2];
console.log(combined);

//for loop
const even = [2, 4, 6];
for (let evenNum of even) {
  evenNum = evenNum + 2;
  console.log(evenNum);
}

//object destructing
const name = {
  firstName: "abc",
  lastName: "xyz"
};
const { firstName: fName, lastName: lName } = name;
console.log(`${fName} ${lName}`);
//array destructuring

function values() {
  return [50, 60, 70];
}
let value = values();
let x = value[0];
y = value[1];
z = value[2];
console.log(`${x} ${y} ${z}`);
