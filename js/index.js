// race dropdown list
let race;
let subRace;

let dropdown = document.getElementById('raceList');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Race';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const xhrRace = new XMLHttpRequest();

xhrRace.open('GET','./json/race.json', true);
xhrRace.responseType = 'text';

xhrRace.onload = function() {
    if (xhrRace.status === 200) {
        const myRace = JSON.parse(xhrRace.responseText); 
        let option;
        for (let r = 0; r < myRace.race.length; r++) {
            option = document.createElement('option');
            option.text = myRace.race[r].name;
            option.value = myRace.race[r].name;
            dropdown.add(option);
        }
    }
}

xhrRace.send();

// subrace dropdown list

document.getElementById('raceList').addEventListener('click', function (){
   let dropdownSR = getElementById('subRaceList');
   dropdownSR.length = 0;
   let defaultOptionSR = document.createElement('option');
    defaultOption.text = 'Choose Subrace';
    const xhrSubRace = new XMLHttpRequest();
    xhrSubRace.open('GET', '.json/race.json', true);
    xhrSubRace.responsetype = 'text';
    xhrSubRace.onload = function() {
        if (xhrSubRace.status === 200) {
            const mySubRace = JSON.parse(xhrSubRace.responseText);
            let option;
            for (let s = 0; s < mySubRace.subRace.length; s++) {
                optionSR = document.createElement('option');
                optionSR.text = mySubRace.subRace[s].subRace;
                optionSR.value = mySubRace.subRace[s].subRace;
                dropdownSR.add(option);
            }
        }
    }
});


