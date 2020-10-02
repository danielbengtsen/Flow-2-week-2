/* let car = {make: "volvo", year: 2011}
console.log(car) //1

let carCopy = {...car};
console.log(carCopy) //2

carCopy.year = 2018;

console.log(car) //3
console.log(carCopy) //4
 */








var numbers = [1, 3, 5, 10, 11];

/* function makeListItem(number) {
  return `<li>${number}</li>`
}

function changeSign(number) {
  return number * -1;
}

let listItems = numbers.map(makeListItem).join("");

function myMap(callback, array) {
  let arrayCopy = [];
  array.forEach(element => {
    const newItem = callback(element)
    arrayCopy.push(newItem)
  });
  return arrayCopy;
}

let listItems2 = myMap(changeSign, numbers).join("");
console.log(listItems2) */








/* var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`
}

let listItems = numbers.map(makeListItem).join("")
console.log("1 " + listItems)

listItems = numbers.map(function (number) {
  return `<li>${number}</li>`
}).join("")
console.log("2 " + listItems)

listItems = numbers.map(number => `<li>${number}</li>`).join("")
console.log("3 " + listItems)

listItems = numbers.map(number => {
    `<li>${number}</li>`
}).join("")
console.log("4 " + listItems) */








/* var members = [
  { name: "Peter", age: 14, gender : "male" },
  { name: "Jan", age: 35, gender : "male" },
  { name: "Janne", age: 25,  gender : "female" },
  { name: "Martin", age: 22, gender : "male" }]

const tableRows = members.map((member) => `
  <tr>
      <td>${member.name}</td>
      <td>${member.age}</td>
      <td>${member.gender}</td>
  </tr>
`).join("")

console.log(tableRows) */
  






/* const obj = { a: 1, b: true, c: "hello" }
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
printKeyValuePairs(obj)



function printKeyValuePairs(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}

function setValueDynamically(obj, key, val) {
  obj[key] = val;
}
setValueDynamically(obj, "c", "HELLO"); */




//////////////////////////////
// Challenge 5:
//////////////////////////////
let name = { name: "Peter", age: 14, gender: "male" }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
function printObjectDetails(obj) {
  const count = Object.keys(obj).length;  //get the then number of properties
  console.log(`This object has ${count} properties`)
  console.log("Keys and Values for the object are: ")
  for(const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
printObjectDetails(name)





//////////////////////////////
// Challenge 6:
//////////////////////////////
var members = [
  { name: "Peter", age: 14, gender: "male" },
  { name: "Jan", age: 35, gender: "male" },
  { name: "Janne", age: 25, gender: "female" },
  { name: "Martin", age: 22, gender: "male" }]
 
 
let peter = { name: "Peter", age: 14, gender: "male" }
 
function addMayDriveProperty(member) {
  let clone = { ...member }
  for (const [key, value] of Object.entries(clone)) {
    if (key === "age" && value > 17) {
      clone.mayDrive = true
    }
    else {
      clone.mayDrive = false
    }
  }
  return clone;
}
console.log(peter)
let newPeter = addMayDriveProperty(peter)
console.log(peter)
console.log(newPeter)




