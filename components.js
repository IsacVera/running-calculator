let paceButton = document.querySelector('#paceButton')
let distanceButton = document.querySelector('#distanceButton')
let timeButton = document.querySelector('#timeButton')

let menu = document.querySelector('#menu');

//creating distance section of menu
let distanceSection = document.createElement('div') 
let distanceTopSection = document.createElement('div')
let distanceHeader = document.createElement('h2')
distanceHeader.innerHTML = 'Distance';
let distanceSelect = document.createElement('select')
distanceSelect.id = 'measurement';
let optionMiles = document.createElement('option')
optionMiles.value = 'miles';
optionMiles.innerHTML = 'Miles';
let optionKilometers = document.createElement('option')
optionKilometers.value = 'kilometers';
optionKilometers.innerHTML = 'Kilometers';
distanceSelect.appendChild(optionMiles);
distanceSelect.appendChild(optionKilometers);
let distanceInputElement = document.createElement('input')
distanceInputElement.id = 'distanceInput';
distanceInputElement.type = 'text';

distanceTopSection.appendChild(distanceHeader);
distanceTopSection.appendChild(distanceSelect);

distanceSection.appendChild(distanceTopSection);
distanceSection.appendChild(distanceInputElement);


//creating pace section of menu
let paceSection = document.createElement('div')
let paceHeader = document.createElement('h2')
paceHeader.innerHTML = 'Pace';
let paceInputElement = document.createElement('input')
paceInputElement.id = 'paceInput';
paceInputElement.type = 'text';
paceInputElement.value = '00:00:0';

paceSection.appendChild(paceHeader);
paceSection.appendChild(paceInputElement);


//creating time section of menu
let timeSection = document.createElement('div')
let timeHeader = document.createElement('h2')
timeHeader.innerHTML = 'Time';
let timeInputElement = document.createElement('input')
timeInputElement.id = 'timeInput';
timeInputElement.type = 'text';
timeInputElement.value = '00:00:0';

timeSection.appendChild(timeHeader);
timeSection.appendChild(timeInputElement);


//Default Menu
menu.appendChild(timeSection);
menu.appendChild(distanceSection);

