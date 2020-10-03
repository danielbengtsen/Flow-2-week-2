const URL = "https://dallal.dk/flow2_week1/api/person/";

function handleHttpErrors(res) {
    if(!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()});
    } 
    return res.json();
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if(body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function getAllPersons() {
    return fetch(URL + "getallpersons")
    .then(handleHttpErrors)
}

function addPerson(person) {
    const options = makeOptions("POST", person);
    return fetch(URL, options)
        .then(handleHttpErrors)
}

function editPerson(person) {
    const options = makeOptions("PUT", person);
    return fetch(URL + person.id, options)
        .then(handleHttpErrors)
}
  
const personFacade = {
    getAllPersons,
    addPerson,
    editPerson
}

export default personFacade;



