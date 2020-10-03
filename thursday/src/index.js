import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"

/////////// Create table of all persons ////////////////
function createAllPersonsTable() {
  personFacade.getAllPersons()
    .then(data => {
      const persons = data.all;
      const tableRows = persons.map(person => `
        <tr>
          <td>${person.id}</td>
          <td>${person.firstName}</td>
          <td>${person.lastName}</td>
          <td>${person.phone}</td>
          <td>${person.street}</td>
          <td>${person.zip}</td>
          <td>${person.city}</td>
        </tr>
      `)
      const tableRowsAsStr = tableRows.join("");
      document.getElementById("tbody").innerHTML = tableRowsAsStr;
    })
    .catch(err => {
      if(err.status) {
        err.fullError.then(e => {
          console.log(e.message);
          let errField = document.getElementById("error");
          errField.innerHTML = e.message;
          errField.style.display = "block";
        });
      } else {
        console.log("Network error");
      } 
    });
}
//////// Call on load /////////
createAllPersonsTable();
///////// Call when button pressed //////////
document.getElementById("reload").addEventListener("click", createAllPersonsTable);

///////////// Add new person to table /////////////////
function newPerson() {
  const newPFirstName = document.getElementById("fname").value;
  const newPLastName = document.getElementById("lname").value;
  const newPPhone = document.getElementById("phone").value;
  const newPStreet = document.getElementById("street").value;
  const newPZip = document.getElementById("zip").value;
  const newPCity = document.getElementById("city").value;

  const newPToAdd = {
    firstName: newPFirstName,
    lastName: newPLastName,
    phone: newPPhone,
    street: newPStreet,
    zip: newPZip,
    city: newPCity
  }

  personFacade.addPerson(newPToAdd)
    .then(res => res.json())
    .catch(err => {
      if(err.status) {
        err.fullError.then(e => {
          console.log(e.message);
          let errField = document.getElementById("error");
          errField.innerHTML = e.message;
          errField.style.display = "block";
        });
      } else {
        console.log("Network error");
      } 
    });
    
    ///////// Clear fields /////////
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("street").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("city").value = "";
  }
  
  ////////// Call when button is pressed //////////
  document.getElementById("savebtn").addEventListener("click", newPerson);






