function viewPollsVote() {
    var html= '';
    document.getElementById('app').innerHTML = '';
    for (let i = 0; i < model.polls.length; i++) {
        html += `
        <li onclick="selectPollVote(${i})">${model.polls[i].question}</li>
     `;
    }
    document.getElementById('app').innerHTML = html;
}

// function checkIfVoted() {
    
// }

function createTdThOptionsVote(index) {
    for (let i = 0; i < model.polls[index].options.length; i++) {
        model.currentPollView.thUpperRow += `<th>Svaralternativ ${i + 1}</th>`;
        model.currentPollView.tdLowerRow += `<td>${model.polls[index].options[i]}</td>`;
        model.currentPollView.vote += `<td><button onclick="votePoll(${index}, ${i})" >Stem</button></td>`
    }
}

function selectPollVote(index) {
    
    createTdThOptionsVote(index);
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
        <tr>
            <td></td>
            <td></td>
            ${model.currentPollView.vote}
        </tr>
    </table>
    `;


    document.getElementById('app').innerHTML = html;
}

function votePoll(index, iFromCurrentPollView) {
    var userIdVoted = '';
    //her henter jeg i fra det som tegner opp votes per option.
    for (let i = 0; i < model.users.length; i++) {
        if (model.users[i].voted == true) return;
        if (model.users[i].username == model.app.loggedInUser) {
            model.polls[index].optionsVotes[iFromCurrentPollView] += 1;
            model.users[i].voted = true;
            userIdVoted = model.users[i].username;
        }
    }
}