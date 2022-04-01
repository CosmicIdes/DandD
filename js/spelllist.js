let spells;

let dropdownS = document.getElementById('spellList');
dropdownS.length = 0;

let defaultOptionS= document.createElement('option');
defaultOptionS.text = 'Choose Spell';

dropdownS.add(defaultOptionS);
dropdownS.selectedIndex = 0;

const xhrSpells = new XMLHttpRequest();

xhrSpells.open('GET','http://www.dnd5eapi.co/api/spells/', true);
xhrSpells.responseType = 'text';

xhrSpells.onload = function() {
    if (xhrSpells.status === 200) {
        const mySpells = JSON.parse(xhrSpells.responseText); 
        let optionS = '';
        for (let s = 0; s < mySpells.results.length; s++) {
            optionS = document.createElement('option');
            optionS.text = mySpells.results[s].name;
            optionS.value = mySpells.results[s].name;
            dropdownS.add(optionS);        
        }
    }
}


xhrSpells.send();
