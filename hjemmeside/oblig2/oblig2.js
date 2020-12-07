function createBar(number, barNo) {
    let border = 'none';
    if (barNo == chosenBar) {
        border = 'black';
    }
    const width = 8;
    const spacing = 3;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);

    return `<rect stroke=${border} onclick="select(${barNo})"; width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

// controller
function select(barNo) {
    if (barNo == chosenBar) {
        chosenBar = ''
    } else {
        chosenBar = barNo;
    }
    show();
}

function removeSelectedBar() {
    numbers.splice(chosenBar - 1, 1);
    show();
}

function changeSelectedBar() {
    if (inputValue > 10 || inputValue <= 0) {
        inputValue = 5;
        alert('wrong value, select a value between 1-10.');

    } else if (inputValue < 10) {
        numbers[chosenBar - 1] = inputValue;
    }
    show();
}

function createNewBar() {
    if (inputValue > 10) {
        alert('too high value, select a value between 1-10. Setting to bar 10');
    } else if (inputValue <= 10) {
        numbers.push(inputValue);
        show();
    }

}
