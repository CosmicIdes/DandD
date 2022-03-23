// alignment dropdown list

var alignment;

let dropdownA = document.getElementById('alignmentList');
dropdownA.length = 0;

let defaultOptionA = document.createElement('option');
defaultOptionA.text = 'Choose Alignment';

dropdownA.add(defaultOptionA);
dropdownA.selectedIndex = 0;

const xhrAlign = new XMLHttpRequest();

xhrAlign.open('GET','./json/alignments.json', true);
xhrAlign.responseType = 'text';

xhrAlign.onload = function() {
    if (xhrAlign.status === 200) {
        const myAlign = JSON.parse(xhrAlign.responseText); 
        let option;
        for (let a = 0; a < myAlign.alignment.length; a++) {
            option = document.createElement('option');
            option.text = myAlign.alignment[a].name;
            option.value = myAlign.alignment[a].name;
            dropdown.add(option);
        }
    }
}

xhrAlign.send();