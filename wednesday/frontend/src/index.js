import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
//////////////// The name on the ids in index.html //////////////////
const IDgetJokeEx1Btn = "getJokeEx1Btn";
const IDprintJokeEx1P = "getJokeEx1Print";
const IDaddJokeEx1Field = "addJokeEx1Field";
const IDaddJokeEx1Btn = "addJokeEx1Btn";

////////////// Creates list of all jokes ///////////////////
function makeListItems() {
  const jokes = jokeFacade.getJokes();
  let jokeList = jokes.map(joke => `<li> ${joke} </li>`);
  const listItemsAsStr = jokeList.join("");
  document.getElementById("jokes").innerHTML = listItemsAsStr;
}

////////////// Make jokes list /////////////////
makeListItems();


////////////// Selects the next joke in the array and starts over ///////////////
let i = 0;
function getNextJoke() {
  let allJokes = jokeFacade.getJokes();
  if(i === allJokes.length) {
    i = 0;
  }
  let singleJoke = allJokes[i];
  document.getElementById(IDprintJokeEx1P).innerHTML = singleJoke;
  i++;
}

/////////////// Show jokes on multiple "occasions" /////////////////
function showJoke(btnIDName, callback) {
  // btnIDName = the name of the id in index.html that triggers the show joke action
  document.getElementById(btnIDName).addEventListener("click", callback);
}

//////////////// Show next joke on get-joke-button click ///////////////
showJoke(IDgetJokeEx1Btn, getNextJoke);


////////////// Add new joke function //////////////
function addNewJoke() {
  let jokeToBeAdded = document.getElementById(IDaddJokeEx1Field).value;
  jokeFacade.addJoke(jokeToBeAdded);
  makeListItems();
  document.getElementById(IDprintJokeEx1P).innerHTML = jokeToBeAdded;

  // Clear text field
  document.getElementById(IDaddJokeEx1Field).value = "";
}

//////////// Add and show new joke ///////////////
showJoke(IDaddJokeEx1Btn, addNewJoke);


/* JS For Exercise-2 below */
const IDfetchEx2Btn = "fetchEx2Btn";
const IDfetchEx2Print = "showFetchEx2Print";

/////////////// Fetch from api function ////////////////
function fetchJokeFromAPI() {
  fetch('https://studypoints.info/jokes/api/jokes/period/hour')
  .then(response => response.json())
  .then(data => document.getElementById(IDfetchEx2Print).innerHTML = data.joke);
}

///////////// Do the actual fetch ////////////////
// It's possible to fetch the joke because of this response header: "Access-Control-Allow-Origin: *" which grants everyone access to fetch from the API.
document.getElementById(IDfetchEx2Btn).addEventListener("click", fetchJokeFromAPI);

/////////// Get new joke every hour //////////////
setInterval(fetchJokeFromAPI, (1000 * 60 * 60));



/* JS For Exercise-3 below */
///////////////// GET: all users ////////////////////
function showAllUsers() {
  userFacade.getUsers()
  .then(users => {
    const userRows = users.map(user => `
    <tr>
      <td>${user.id}</td>
      <td>${user.age}</td>
      <td>${user.name}</td>
      <td>${user.gender}</td>
      <td>${user.email}</td>
    </tr>
    `);
    const userRowsAsString = userRows.join("");
    document.getElementById("allUserRows").innerHTML = userRowsAsString;
  });
}
showAllUsers();

document.getElementById("reloadUsers").addEventListener("click", showAllUsers);

//////////////////// GET: single user by id /////////////////////
function getUserSearch() {
  let userID = document.getElementById("searchUserEx4Field").value;
  userFacade.getUser(userID)
  .then(user => {
    document.getElementById("printUserEx4Table").innerHTML = `
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Age</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>${user.id}</td>
        <td>${user.age}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
      </tr>
    </table>
    `})
    .catch(err => {
      if(err.status) {
        err.fullError.then(e => document.getElementById("errormessages").value = e.msg);
      } else {
        console.log("Network error");
      }
    });
}

document.getElementById("searchUserEx4Btn").addEventListener("click", getUserSearch);


function addNewUser() {
  let newUserAge = document.getElementById("addUserEx4FieldAge").value; 
  let newUserName = document.getElementById("addUserEx4FieldName").value; 
  let newUserGender = document.getElementById("addUserEx4FieldGender").value; 
  let newUserEmail = document.getElementById("addUserEx4FieldEmail").value; 

  const newUser = {
    age: newUserAge,
    name: newUserName,
    gender: newUserGender,
    email: newUserEmail
  }
  userFacade.addUser(newUser)
  .catch(err => {
    if(err.status) {
      err.fullError.then(e => document.getElementById("errormessages").value = e.msg);
    } else {
      console.log("Network error");
    }
  });
  ///// Clear input fields ///////
  document.getElementById("addUserEx4FieldAge").value = ""; 
  document.getElementById("addUserEx4FieldName").value = ""; 
  document.getElementById("addUserEx4FieldGender").value = ""; 
  document.getElementById("addUserEx4FieldEmail").value = ""; 
}
document.getElementById("addUserEx4Btn").addEventListener("click", addNewUser);


function editExistingUser() {
  let editUserID = document.getElementById("editUserEx4FieldId").value;
  let editUserAge = document.getElementById("editUserEx4FieldAge").value; 
  let editUserName = document.getElementById("editUserEx4FieldName").value; 
  let editUserGender = document.getElementById("editUserEx4FieldGender").value; 
  let editUserEmail = document.getElementById("editUserEx4FieldEmail").value; 

  const editedUser = {
    id: editUserID,
    age: editUserAge,
    name: editUserName,
    gender: editUserGender,
    email: editUserEmail
  }
  userFacade.editUser(editedUser)
  .catch(err => {
    if(err.status) {
      err.fullError.then(e => document.getElementById("errormessages").value = e.msg);
    } else {
      console.log("Network error");
    }
  });

  /////// clear fields ////////////
  document.getElementById("editUserEx4FieldId").value = ""; 
  document.getElementById("editUserEx4FieldAge").value = ""; 
  document.getElementById("editUserEx4FieldName").value = ""; 
  document.getElementById("editUserEx4FieldGender").value = ""; 
  document.getElementById("editUserEx4FieldEmail").value = ""; 
}
document.getElementById("editUserEx4Btn").addEventListener("click", editExistingUser);


function deleteUserById() {
  let deleteUserID = document.getElementById("deleteUserEx4FieldId").value;

  userFacade.deleteUser(deleteUserID)
  .catch(err => {
    if(err.status) {
      err.fullError.then(e => document.getElementById("errormessages").value = e.msg);
    } else {
      console.log("Network error");
    }
  });

  /////// Clear field ///////////
  document.getElementById("deleteUserEx4FieldId").value = "";
}
document.getElementById("deleteUserEx4Btn").addEventListener("click", deleteUserById);



/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



