let html = '';


function viewPolls() {
    document.getElementById('app').innerHTML = '';
    for (let i = 0; i < model.polls.length; i++) {
        html += `
        <li onclick="selectPoll(${i})">${model.polls[i].question}</li>
     `;
    }
    document.getElementById('app').innerHTML = html;
}


function createTdThOptions(index) {
    for (let i = 0; i < model.polls[index].options.length; i++) {
        model.currentPollView.thUpperRow += `<th>Svaralternativ ${i + 1}</th>`;
        model.currentPollView.tdLowerRow += `<td>${model.polls[index].options[i]}</td>`;
    }
}


function selectPoll(index) {
    
    createTdThOptions(index)
    html = `
    <table>
        <tr>
            <th>Fortsatt åpen?</th>
            <th>Spørsmål</th>
            ${model.currentPollView.thUpperRow}
            <th>Rediger</th>
        </tr>
        <tr>
            <td>${model.polls[index].isOpen}</td>
            <td>${model.polls[index].question}</td>
            ${model.currentPollView.tdLowerRow}
            <td><button onclick="editMode(${index})">Rediger</button></td>
        </tr>
    </table>
    `;


    document.getElementById('app').innerHTML = html;
}

function createTdThOptionInputs (index)  {
    for (let i = 0; i < model.polls[index].options.length; i++) {
        model.currentPollView.thUpperRow += `<th>Svaralternativ ${i + 1}</th>`;
        model.currentPollView.tdLowerRow += `<td><input oninput="model.savedFromInput.options[${i}] = this.value" value="${model.polls[index].options[i]}"></input></td>`;
    }
}



function editMode(index) {
    model.currentPollView.thUpperRow = '';
    model.currentPollView.tdLowerRow = '';

    model.savedWhenEdit.isOpen = model.polls[index].isOpen;
    model.savedWhenEdit.question = model.polls[index].question;

    for (let i = 0; i < model.polls[index].options.length; i++) {
        model.savedWhenEdit.options[i] = model.polls[index].options[i];
    }


    createTdThOptionInputs(index)
    html = ` 
    <table>
        <tr>
            <th>Fortsatt åpen?</th>
            <th>Spørsmål</th>
            ${model.currentPollView.thUpperRow}
            <th>Rediger</th>
        </tr>
        <tr>
            <td><input oninput="model.savedFromInput.isOpen = this.value" value="${model.polls[index].isOpen}"></input></td>
            <td><input oninput="model.savedFromInput.question = this.value" value="${model.polls[index].question}"></input></td>
            ${model.currentPollView.tdLowerRow}
            <td><button onclick="saveMode(${index})">Lagre</button></td>
        </tr>
    </table>
    `;
    document.getElementById('app').innerHTML = html;
}


function saveMode(index) {

    model.polls[index].isOpen = model.savedWhenEdit.isOpen;
     if (model.savedFromInput.isOpen != '') {
        model.polls[index].isOpen = model.savedFromInput.isOpen;
    }

        model.polls[index].question = model.savedWhenEdit.question;
    if (model.savedFromInput.question != '') {
        model.polls[index].question = model.savedFromInput.question;
    }


    for (let i = 0; i < model.polls[index].options.length; i++) {
        if (model.savedFromInput.options[i] == undefined) {
            model.polls[index].options[i] = model.savedWhenEdit.options[i];
        } else if (model.savedFromInput.options[i] != undefined) {
            model.polls[index].options[i] = model.savedFromInput.options[i];
        }
    }

    model.currentPollView.thUpperRow = '';
    model.currentPollView.tdLowerRow = '';
    selectPoll(index);
}