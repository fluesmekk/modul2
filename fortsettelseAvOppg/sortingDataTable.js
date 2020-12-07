//model
const model = {
    inputName: '',
    inputAge: '',
    inputHobby: '',
    inputBirthday: '',
    inputToBeEdited: '',
    editMode: '',
    people: [
        { name: 'Lars', age: 24, hobby: 'Sykling', birthday: '10.09.1996', },
        { name: 'Terje', age: 26, hobby: 'Skating', birthday: '10.09.1994', },
        { name: 'Henning', age: 24, hobby: 'Frimerker', birthday: '10.09.1996', },
        { name: 'Tuva', age: 25, hobby: 'Puslespill', birthday: '10.09.1995', },
    ]
}


//view
updateView()
function updateView() {
    let html = '';
        for (let i = 0; i < model.people.length; i++) {
            if (model.inputToBeEdited == i) {
                html += `<tr>
                        <td><input value="${model.people[i].name}" oninput="model.inputName = this.value" onload="model.inputName = this.value"></input></td>
                        <td><input value="${model.people[i].age}" oninput="model.inputAge = this.value" onload="model.inputAge = this.value"></input></td>
                        <td><input value="${model.people[i].hobby}" oninput="model.inputHobby = this.value" onload="model.inputHobby = this.value"></input></td>
                        <td><input type="date" value="" oninput="model.inputBirthday = this.value"></input></td>
                        <td><button onclick="removePeople(${[i]})">x</button></td>
                        <td><button onclick="changeObjectValue(${[i]})">Lagre</button></td>
                    </tr>`
            } else if (model.inputToBeEdited == false){
                html += `<tr>
                        <td>${model.people[i].name}</td>
                        <td>${model.people[i].age}</td>
                        <td>${model.people[i].hobby}</td>
                        <td>${model.people[i].birthday}</td>
                        <td><button onclick="removePeople(${[i]})">x</button></td>
                        <td><button onclick="editMode(${[i]})">Edit</button></td>
                    </tr>`
            }
                
        }
    
    document.getElementById('app').innerHTML = `
    <table>
    <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Hobby</td>
        <td>Birthday</td>
    </tr>
    ${html}
    <tr>
        <td><input size="7" oninput="model.inputName = this.value"></td>
        <td><input size="1" oninput="model.inputAge = this.value"></td>
        <td><input size="6" oninput="model.inputHobby = this.value"></td>
        <td><input type="date" size="6" oninput="model.inputBirthday = this.value"></td>
        <td><button onclick="addPeople()">Legg til</button></td>
    </tr>
    </table>
    `

}



//controller
function removePeople(index) {
    model.people.splice([index], 1);
    updateView();
}

function addPeople() {
    const newPerson = {
        name: model.inputName,
        age: model.inputAge,
        hobby: model.inputHobby,
        birthday: model.inputBirthday,
    };
    model.people.push(newPerson);
    updateView();
}

function editMode(index) {
    model.inputToBeEdited = index;
    updateView();
}

function changeObjectValue(index) {
    model.people[index].name = model.inputName;
    model.people[index].age = model.inputAge;
    model.people[index].hobby = model.inputHobby;
    model.people[index].birthday = model.inputBirthday;
    model.inputToBeEdited = false;
    updateView();
}

//endre date format
//fikse edit
//gjøre det mulig å gå ut av edit.