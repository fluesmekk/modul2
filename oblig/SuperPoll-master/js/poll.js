



function updateViewPoll() {
    let html = ''
    for (let i = 0; i < model.polls.length; i++) {
        html += `<li onclick="viewCurrentPoll(${i})">${model.polls[i].question}</li>`
    }
    document.getElementById('app').innerHTML = html;
}


function createTdForOptions(index) {
    for (let i = 0; i < model.polls[index].options.length; i++) {
        model.options.lowerRowOptions += `<td>${model.polls[index].options[i]}</td>`;
        model.options.upperRowOptions += `<th>Svaralternativ ${i + 1}</th>`

    }
}



function viewCurrentPoll(index) {
    createTdForOptions(index);
    document.getElementById('app').innerHTML = `
        <table>
            <tr>
                <th>Fortsatt Åpen</th>
                <th>Spørsmål</th>
                ${model.options.upperRowOptions}
                <th>Rediger</th>
            </tr>
            
            <tr>
                <td class="center">${model.polls[index].isOpen}</td>
                <td>${model.polls[index].question}</td>
                ${model.options.lowerRowOptions}
                <td><button onclick="editMode(${index})">Rediger</button></td>
            </tr>
        </table>

    `;
}



//model.savedOpt er utprintingen av dynamisk table html og ligger ikke hardkoda

function editMode(index) {

    model.drawHtmlOptionsLower = '';
    model.drawHtmlOptionsUpper = '';
    model.savedOptions = [];


    console.log(model.polls[index].isOpen)
    model.tempIsOpen = model.polls[index].isOpen;
    model.saveState = model.polls[index].options.length;

    for (let i = 0; i < model.polls[index].options.length; i++) {
        model.savedOptions[i] = model.polls[index].options[i];
    }

    for (let i = 0; i < model.polls[index].options.length; i++) {
        model.oninputs[i] = '';
        model.drawHtmlOptionsLower += `<td><input size="5" oninput="model.oninputs[${i}] = this.value" value="${model.polls[index].options[i]}"></input></td>`;
        model.drawHtmlOptionsUpper += `<th>Svaralternativ ${i + 1}</th>`
    }

    document.getElementById('app').innerHTML = `
        <table>
            <tr>
                <th>Fortsatt Åpen</th>
                <th>Spørsmål</th>
                ${model.drawHtmlOptionsUpper}
                <th>Lagre</th>
            </tr>
            
            <tr>
                <td class="center"><input oninput="model.isOpenVarOninput = this.value" size="2" value="${model.polls[index].isOpen}"></input></td>
                <td><textarea id="question" placeholder="${model.polls[index].question}"></textarea></td>
                ${model.drawHtmlOptionsLower}
                <td><button onclick="save(${index})">Lagre</button></td>
            </tr>
        </table>

    `;
}


function save(index) {
    
    if (model.isOpenVarOninput == '') {
        model.polls[index].isOpen = model.tempIsOpen;

    } else if (model.isOpenVarOninput == 'true' || model.isOpenVarOninput == 'false') {
        model.polls[index].isOpen = model.isOpenVarOninput;
    }

    for (let i = 0; i < model.saveState; i++) {

        if (model.oninputs[i] == '') {
            model.polls[index].question[i] = model.savedOptions[i];

        } else if (model.oninputs[i] != '') {
            document.getElementById('app').innerHTML = ``;
            model.polls[index].options[i] = model.oninputs[i];
        }
    }
        model.options.lowerRowOptions = '';
        model.options.upperRowOptions = '';
        viewCurrentPoll(index);
}


//fiske isDone i pushet? 
//isDone har ikke verdi, save funksjnonen funker nok