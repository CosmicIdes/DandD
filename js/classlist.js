// class dropdown list

let classes;

let dropdownC = document.getElementById('classList');
dropdownC.length = 0;

let defaultOptionC= document.createElement('option');
defaultOptionC.text = 'Choose Class';

dropdownC.add(defaultOptionC);
dropdownC.selectedIndex = 0;

const xhrClasses = new XMLHttpRequest();

xhrClasses.open('GET','./json/class.json', true);
xhrClasses.responseType = 'text';

xhrClasses.onload = function() {
    if (xhrClasses.status === 200) {
        const myClasses = JSON.parse(xhrClasses.responseText); 
        let optionC = '';
        for (let c = 0; c < myClasses.classes.length; c++) {
            optionC = document.createElement('option');
            optionC.text = myClasses.classes[c].name;
            optionC.value = myClasses.classes[c].name;
            dropdownC.add(optionC);
        }
    }
}

xhrClasses.send();