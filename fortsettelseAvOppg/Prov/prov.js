//model

var model = {
    changeSelectText: '',
    changeSelectColor: '',
    temporaryDataColor: '',
    temporaryDataText: '',
    inputValue: '',
    inputValueColor: '',
    data: [
        {text: 'red', color: 'red', editMode: false,},
        {text: 'red', color: 'blue', editMode: false,},
        {text: 'red', color: 'yellow', editMode: false,},
    ]
    
}


updateView()
function updateView() {
    let html = '';    

    for (let i = 0; i < model.data.length; i++) {
        if (model.data[i].editMode == false) {
            html += `
            <div onclick="changeColor(${i})" style="color:${model.data[i].color};">${model.data[i].text}
            </div>
            <button onclick="editData(${[i]})">Edit</button>
            `;
        } else if (model.data[i].editMode == true) {
            html += `
            <div onclick="changeColor(${i})" class="${model.data[i].color}">
            <input size="5" onmousedown="selectChangeText(${[i]})" oninput="model.inputValue = this.value" value="${model.data[i].text}"></input>
            <input size="5" onmousedown="selectChangeColor(${[i]})" oninput="model.inputValueColor = this.value" value="${model.data[i].color}" ></input>
            </div>
            <button onclick="saveData(${[i]})">Lagre</button>
            `;
        }
         
    }
    
    document.getElementById('app').innerHTML = `
    <div>fargeskift med tekst-endring</div>
    ${html}
    `;
}

//controller
function changeColor(index) {
    if (model.data[index].editMode == true) return;
    model.data[index].color = 'red';
    updateView();
}

function editData(index) {
    model.data[index].editMode = true;
    model.temporaryDataText = model.data[index].text;
    model.temporaryDataColor = model.data[index].color;
    updateView();
}

function saveData(index) {
        model.data[index].text = model.temporaryDataText;
        model.data[index].color = model.temporaryDataColor;
    if (model.changeSelectText == true) {
        model.data[index].text = model.inputValue;
        model.changeSelectText = false;
    } else if (model.changeSelectColor == true) {
        model.data[index].color = model.inputValueColor;
        model.changeSelectColor = false;
    }
        
        
 
    model.data[index].editMode = false;
    
    updateView();
}

function selectChangeText() {
    model.changeSelectText = true;
}
function selectChangeColor() {
    model.changeSelectColor = true;
}
//hvis den ikke endrer husk å lagre verdi
//fikse når man trykker i input