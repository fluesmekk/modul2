//model

const model = {
    changeDate: 'false',
    temporaryBirthday: '',
    inputName: '',
    inputAge: '',
    inputHobby: '',
    inputBirthday: '',
    inputToBeEdited: '',
    people: [
        { name: 'Lars', age: 24, hobby: 'Sykling', birthday: '10.09.1996', editMode: 'false', },
        { name: 'Terje', age: 26, hobby: 'Skating', birthday: '10.09.1994', editMode: 'false', },
        { name: 'Henning', age: 24, hobby: 'Frimerker', birthday: '10.09.1996', editMode: 'false', },
        { name: 'Tuva', age: 25, hobby: 'Puslespill', birthday: '10.09.1995', editMode: 'false', },
    ]
}


//view
updateView()
function updateView() {
    let html = '';
        for (let i = 0; i < model.people.length; i++) {
            if (model.people[i].editMode == true) {
                html += `<tr>
                        <td><input size="6" id="modelName${i}" value="${model.people[i].name}"></input></td>
                        <td><input size="2" id="modelAge${i}" value="${model.people[i].age}"></input></td>
                        <td><input size="4" id="modelHobby${i}" value="${model.people[i].hobby}"></input></td>
                        <td><input id="modelBirthday${i}" type="date" onchange="changeDate()" value="${model.people[i].birthday}"></input></td>
                        <td><button onclick="removePeople(${[i]})">x</button></td>
                        <td><button onclick="saveChanges(${[i]})">Lagre</button></td>
                </tr>` 
            } else {
                html += `<tr>
                        <td>${model.people[i].name}</td>
                        <td>${model.people[i].age}</td>
                        <td>${model.people[i].hobby}</td>
                        <td>${model.people[i].birthday}</td>
                        <td><button onclick="removePeople(${[i]})">x</button></td>
                        <td><button onclick="editMode(${i})">Rediger</button></td>
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
        birthday: new Date(model.inputBirthday).toLocaleDateString(),
    };
    model.people.push(newPerson);
    updateView();
}

//enabler editmode inne i people[i].editmode
function editMode(index) {
    model.temporaryBirthday = model.people[index].birthday;
    model.people[index].editMode = true;
    updateView();
}

//settes i datoendremodus når datoen blir endret
function changeDate() {
    model.changeDate = true;
}

function saveChanges(index) {

    //binder variabel navn opp til id
    const nameId = `modelName${index}`;
    const ageId = `modelAge${index}`;
    const hobbyId = `modelHobby${index}`;
    const birthdayId = `modelBirthday${index}`;

    //binder opp inputs til variabelnavn brukt nedenfor
    const nameInput = document.getElementById(nameId);
    const ageInput = document.getElementById(ageId);
    const hobbyInput = document.getElementById(hobbyId);
    const birthdayInput = document.getElementById(birthdayId);
    

    //variabelnavn til index for hvilken vi endrer på
    const modelIndex = model.people[index];

    //setter verdier fra inputs til underkategoriene på people[i]
    modelIndex.name = nameInput.value;
    modelIndex.age = ageInput.value;
    modelIndex.hobby = hobbyInput.value;
    modelIndex.birthday = model.temporaryBirthday;
    
    //hvis vi har endret dato så formaterer vi den riktig så setter den til norsk verdi
    if (model.changeDate == true) {
        modelIndex.birthday = new Date(birthdayInput.value).toLocaleDateString();
        console.log(`${modelIndex.birthday}dette er modelIndex.birthday`)
    }
    //går fra edit mode tilbake til vanlig med lagret data
    model.changeDate = false;
    model.people[index].editMode = false;
    updateView();

}

//endre date format
