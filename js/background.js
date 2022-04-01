let background;

let dropdownB = document.getElementById('backgroundList');
dropdownB.length = 0;

let defaultOptionB= document.createElement('option');
defaultOptionB.text = 'Choose Background';

dropdownB.add(defaultOptionB);
dropdownB.selectedIndex = 0;

const xhrBackground= new XMLHttpRequest();

xhrBackground.open('GET','http://www.dnd5eapi.co/api/backgrounds/', true);
xhrBackground.responseType = 'text';

xhrBackground.onload = function() {
    if (xhrBackground.status === 200) {
        const myBackground = JSON.parse(xhrBackground.responseText); 
        let optionB = '';
        for (let b = 0; b < myBackground.results.length; b++) {
            optionB = document.createElement('option');
            optionB.text = myBackground.results[b].name;
            optionB.value = myBackground.results[b].name;
            dropdownB.add(optionB);        
        }
    }
}


xhrBackground.send();
