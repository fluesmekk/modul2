//model
let html = document.getElementById('app').innerHTML;

const snusArray = [
    {name: 'skruf sterk', merke: 'skruf', type: 'sterk', porsjon: true,},
    {name: 'skruf orginal', merke: 'skruf', type: 'orginal', porsjon: true,},
    {name: 'skruf ekstra sterk', merke: 'skruf', type: 'ekstra-sterk', porsjon: true,},
    {name: 'skruf fresh white', merke: 'skruf', type: 'fresh-white', porsjon: true,},
    {name: 'skruf polar', merke: 'skruf', type: 'polar-sterk', porsjon: true,},
    {name: 'skruf sterk-white', merke: 'skruf', type: 'sterk-white', porsjon: true,},
];


function show() {
    let html = `
                    <tr>
                        <th>Oppgave</th>
                        <th>Gjort</th>
                        <th>Navn</th>
                        <th>Frist</th>
                        <th>Dato Gjort</th>
                        <th></th>
                        
                        
                    </tr>`;
    for (let i = 0; i < tasks.length; i++) {
        html += createHtmlRow(i);
    }
    tasksTable.innerHTML = html;
}


// <option value="Skruf Sterk">Skruf sterk</option>
// <option value="Skruf orginal">Skruf orginal</option>
// <option value="Skruf ekstra sterk">Skruf ekstra sterk</option>
// <option value="Skruf fresh white">Skruf fresh white</option>