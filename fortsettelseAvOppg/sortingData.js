//model
const model = {
    inputName: '',
    inputAge: '',
    people: [
        { name: 'Per', age: 17, },
        { name: 'Pål', age: 18, },
        { name: 'Espen', age: 19, },
    ],
}



//view
updateView()
function updateView() {
    let html = '';
    for (let i = 0; i < model.people.length; i++) {
        html += `<li>  ${model.people[i].name} 
                        ${model.people[i].age} år 
                        <button onclick="deletePerson(${[i]})">x</button>
                </div>
                </br>
                `;
    }
    document.getElementById('app').innerHTML = `
    
    <h2>Personer og Alder</h2>
    ${html}
    <pre>Navn:          Alder:</pre>
    <input size="10" oninput="model.inputName = this.value"></input>
    <input size="5" oninput="model.inputAge = this.value"></input>
    <button onclick="addPeople()">Legg til</button>



    `;

}


//controller
function deletePerson(index) {
    model.people.splice([index], 1);
    updateView();
}

function addPeople() {
    const newPerson = {
        name: model.inputName,
        age: model.inputAge,
    }
    model.people.push(newPerson);
    updateView();
}