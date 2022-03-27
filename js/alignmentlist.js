// alignment dropdown list

let alignment;

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
        let optionA = '';
        for (let a = 0; a < myAlign.alignment.length; a++) {
            optionA = document.createElement('option');
            optionA.text = myAlign.alignment[a].name;
            optionA.value = myAlign.alignment[a].name;
            dropdownA.add(optionA);
        }
    }
}

xhrAlign.send();