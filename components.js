let paceButton = document.querySelector('#paceButton')
let distanceButton = document.querySelector('#distanceButton')
let timeButton = document.querySelector('#timeButton')

let menu = document.querySelector('#menu');

//creating distance section of menu
let distanceSection = document.createElement('div') 
let distanceHeader = document.createElement('h2')
distanceHeader.innerHTML = 'Distance';
let distanceInputSection = document.createElement('div')
let distanceSelect = document.createElement('select')
distanceSelect.id = 'distanceMeasurement';
let distanceMilesOption = document.createElement('option')
distanceMilesOption.value = 'miles';
distanceMilesOption.innerHTML = 'Miles';
let distanceKilometersOption = document.createElement('option')
distanceKilometersOption.value = 'kilometers';
distanceKilometersOption.innerHTML = 'Kilometers';
distanceSelect.appendChild(distanceMilesOption);
distanceSelect.appendChild(distanceKilometersOption);
let distanceInputElement = document.createElement('input')
distanceInputElement.id = 'distanceInput';
distanceInputElement.type = 'text';

distanceInputSection.appendChild(distanceInputElement);
distanceInputSection.appendChild(distanceSelect);

distanceSection.appendChild(distanceHeader);
distanceSection.appendChild(distanceInputSection);


//creating pace section of menu
let paceSection = document.createElement('div')
let paceHeader = document.createElement('h2')
paceHeader.innerHTML = 'Pace';
let paceInputSection = document.createElement('div')
let paceSelect = document.createElement('select')
paceSelect.id = 'paceMeasurement';
let paceMilesOption = document.createElement('option')
paceMilesOption.value = 'perMile';
paceMilesOption.innerHTML = 'Per Mile';
let paceKilometersOption = document.createElement('option')
paceKilometersOption.value = 'perKilometer';
paceKilometersOption.innerHTML = 'Per Kilometer';
paceSelect.appendChild(paceMilesOption);
paceSelect.appendChild(paceKilometersOption);
let paceInputElement = document.createElement('input')
paceInputElement.id = 'paceInput';
paceInputElement.type = 'text';
paceInputElement.value = '00:00:0';
let paceFormat = document.createElement('p')
paceFormat.innerHTML = 'hh:mm:ss'

paceInputSection.appendChild(paceInputElement);
paceInputSection.appendChild(paceSelect);
paceInputSection.appendChild(paceFormat);

paceSection.appendChild(paceHeader);
paceSection.appendChild(paceInputSection);


//creating time section of menu
let timeSection = document.createElement('div')
let timeHeader = document.createElement('h2')
timeHeader.innerHTML = 'Time';
let timeInputSection = document.createElement('div')
let timeInputElement = document.createElement('input')
timeInputElement.id = 'timeInput';
timeInputElement.type = 'text';
timeInputElement.value = '00:00:0';
let timeFormat = document.createElement('p')
timeFormat.innerHTML = 'hh:mm:ss'

timeInputSection.appendChild(timeInputElement);
timeInputSection.appendChild(timeFormat);

timeSection.appendChild(timeHeader);
timeSection.appendChild(timeInputSection);


//Default Menu
menu.appendChild(timeSection);
menu.appendChild(distanceSection);

