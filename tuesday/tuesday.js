/*************************
* Exercise 1, a.
**************************/
console.log("********* Exercise 1, a *********");
const array = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];
let onlyA = array.filter((name) => name.includes('a'));
console.log("Containing \"a\": ", onlyA);


/*************************
* Exercise 1, b.
**************************/
console.log("\n********* Exercise 1, b *********");
let revNames = array.map((name) => name.split("").reverse().join(""));
console.log("Reverse names: ", revNames);


/*************************
* Exercise 2, a.
**************************/
console.log("\n********* Exercise 2, a *********");
function myFilter(array, callback) {
    let newArray = [];
    array.forEach(element => {
        if(callback(element) == true) {
            const newItem = element;
            newArray.push(newItem);
        }
    });
    return newArray;
}
let jsFilter = array.filter((name) => name.includes('a'));
console.log("JS filter: ", jsFilter);

let ownFilter = myFilter(array, (name) => name.includes('a'));
console.log("myFilter: ", ownFilter);


/*************************
* Exercise 2, b.
**************************/
console.log("\n********* Exercise 2, b *********");
function myMap(array, callback) {
    let newArray = [];
    array.forEach(element => {
        const newItem = callback(element);
        newArray.push(newItem);
    });
    return newArray;
}
let jsMap = array.map((name) => name.split("").reverse().join(""));
console.log("JS map: ", jsMap);

let ownMap = myMap(array, (name) => name.split("").reverse().join(""));
console.log("myMap: ", ownMap);



/*************************
* Exercise 3, a.
**************************/
console.log("\n********* Exercise 3, a *********");
var numbers = [1, 3, 5, 10, 11];
let count = 0;
let sum = 0;
var result = numbers.map(function() {
    if(count != numbers.length-1) {
        sum = numbers[count] + numbers[count+1];
    } else {
        sum = numbers[count];
    }
    count++;
    return sum;
});
console.log("map + callback: ", result);



/*************************
* Exercise 3, b.
**************************/
console.log("\n********* Exercise 3, b *********");
let navA = array.map((name) => "    <a href=\"\">" + name + "</a>\n").join("");
console.log("<nav>\n" + navA + "</nav>");  



/*************************
* Exercise 3, c.
**************************/
console.log("\n********* Exercise 3, c *********");
var persons = [{name: "Hassan", phone: "1234567"}, {name: "Peter", phone: "675843"}, {name: "Jan", phone: "98547"}, {name: "Boline", phone: "79345"}];
let th = addTr("<th>name</th>\n<th>phone</th>\n");

var data = persons.map(function(element) {
    let allTd = [];
    let result = "";
    result = addTd(element.name) + addTd(element.phone);
    result = addTr(result);
    allTd.push(result);
    return allTd;
}).join("");

function addTd(element) {
    return "<td>" + element + "</td>\n";
}

function addTr(tds) {
    return "<tr>\n" + tds + "</tr>\n";
}

function addTable(trs) {
    return "<table>\n" + trs + "</table>";
}

let table = addTable(th + data);
console.log(table);



/*************************
* Exercise 4, a.
**************************/
console.log("\n********* Exercise 4, a *********");
var all = ["Hassan", "Peter", "Carla", "Boline"];

let allHashtag = all.join("#");
console.log("all with hashtags: " + allHashtag);



/*************************
* Exercise 4, b.
**************************/
console.log("\n********* Exercise 4, b *********");
var numbers = [2, 3, 67, 33];

function myReduce(total, current) {
    return total + current;
}

console.log("The sum: " + numbers.reduce(myReduce));



/*************************
* Exercise 4, c.
**************************/
console.log("\n********* Exercise 4, c *********");
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];

function average(total, current) {
    total.age += current.age;
    return total;
}
 
let sumOfMembers = members.reduce(average);
let averageMembersAge = sumOfMembers.age / members.length;
console.log("Sum of members age: " + averageMembersAge);



/*************************
* Challenge 1
**************************/
console.log("\n********* Challenge 1 *********");
let car = {make: "volvo", year: 2011}
console.log(car) //1

let carCopy = {...car};
console.log(carCopy) //2

carCopy.year = 2018;

console.log(car) //3
console.log(carCopy) //4



/*************************
* Challenge 2
**************************/
console.log("\n********* Challenge 2 *********");
var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`;
}

function changeSign(number) {
  return number * -1;
}

let listItems = numbers.map(makeListItem).join("");

// myMap function is made in exercise 2, b.
let listItems2 = myMap(numbers, changeSign).join("");
console.log(listItems2);



/*************************
* Challenge 3
**************************/
console.log("\n********* Challenge 3 *********");
var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`;
}

let itemsInList = numbers.map(makeListItem).join("");
console.log("1 " + itemsInList);

itemsInList = numbers.map(function (number) {
  return `<li>${number}</li>`;
}).join("");
console.log("2 " + itemsInList);

itemsInList = numbers.map(number => `<li>${number}</li>`).join("");
console.log("3 " + itemsInList);

itemsInList = numbers.map(number => {
    return `<li>${number}</li>`;
}).join("");
console.log("4 " + itemsInList);



/*************************
* Challenge 4
**************************/
console.log("\n********* Challenge 4 *********");
var members = [
    { name: "Peter", age: 14, gender : "male" },
    { name: "Jan", age: 35, gender : "male" },
    { name: "Janne", age: 25,  gender : "female" },
    { name: "Martin", age: 22, gender : "male" }];
  
const tableRows = members.map((member) => `
<tr>
    <td>${member.name}</td>
    <td>${member.age}</td>
    <td>${member.gender}</td>
</tr>
`).join("");

console.log(tableRows);



/*************************
* Challenge 5
**************************/
console.log("\n********* Challenge 5 *********");  
let name = { name: "Peter", age: 14, gender: "male" }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
function printObjectDetails(obj) {
  const count = Object.keys(obj).length;  //get the then number of properties
  console.log(`This object has ${count} properties`);
  console.log("Keys and Values for the object are: ");
  for(const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
printObjectDetails(name);



/*************************
* Challenge 6
**************************/
console.log("\n********* Challenge 6 *********");  
var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }];
   
   
  let peter = { name: "Peter", age: 14, gender: "male" }
   
  function addMayDriveProperty(member) {
    let clone = { ...member };
    for (const [key, value] of Object.entries(clone)) {
      if (key === "age" && value > 17) {
        clone.mayDrive = true;
      }
      else {
        clone.mayDrive = false;
      }
    }
    return clone;
  }
  let addJustedMember = addMayDriveProperty(peter);
  console.log(addJustedMember);
  console.log(peter);

