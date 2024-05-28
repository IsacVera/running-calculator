let paceButton = document.querySelector('#paceButton')
let distanceButton = document.querySelector('#distanceButton')
let timeButton = document.querySelector('#timeButton')

let menu = document.querySelector('#menu');

//creating distance section of menu
let distanceSection = document.createElement('div') 
let distanceHeader = document.createElement('h2')
distanceHeader.innerHTML = 'Distance';
let distanceInputSection = document.createElement('div')
let distanceMeasurement = document.createElement('select')
distanceMeasurement.id = 'distanceMeasurement';
let distanceMilesOption = document.createElement('option')
distanceMilesOption.value = 'miles';
distanceMilesOption.innerHTML = 'Miles';
let distanceKilometersOption = document.createElement('option')
distanceKilometersOption.value = 'kilometers';
distanceKilometersOption.innerHTML = 'Kilometers';
distanceMeasurement.appendChild(distanceMilesOption);
distanceMeasurement.appendChild(distanceKilometersOption);

let distanceEvent = document.createElement('select')
distanceEvent.id = 'distanceEvent';
let defaultEvent = document.createElement('option')
defaultEvent.value = 'default';
defaultEvent.innerHTML = '-- Or pick an event --';
let marathonEvent = document.createElement('option')
marathonEvent.value = 'marathon';
marathonEvent.innerHTML = 'Marathon';
let halfMarathonEvent = document.createElement('option')
halfMarathonEvent.value = 'halfMarathon';
halfMarathonEvent.innerHTML = 'Half Marathon';
let tenKEvent = document.createElement('option')
tenKEvent.value = 'tenK';
tenKEvent.innerHTML = '10K';
let fiveKEvent = document.createElement('option')
fiveKEvent.value = 'fiveK';
fiveKEvent.innerHTML = '5K';
let fifteenHundredEvent = document.createElement('option')
fifteenHundredEvent.value = '1500';
fifteenHundredEvent.innerHTML = '1500';
let eightHundredEvent = document.createElement('option')
eightHundredEvent.value = '800';
eightHundredEvent.innerHTML = '800';
distanceEvent.appendChild(defaultEvent);
distanceEvent.appendChild(marathonEvent);
distanceEvent.appendChild(halfMarathonEvent);
distanceEvent.appendChild(tenKEvent);
distanceEvent.appendChild(fiveKEvent);
distanceEvent.appendChild(fifteenHundredEvent);
distanceEvent.appendChild(eightHundredEvent);

let distanceInputElement = document.createElement('input')
distanceInputElement.id = 'distanceInput';
distanceInputElement.type = 'text';

distanceInputSection.appendChild(distanceInputElement);
distanceInputSection.appendChild(distanceMeasurement);
distanceInputSection.appendChild(distanceEvent);

distanceSection.appendChild(distanceHeader);
distanceSection.appendChild(distanceInputSection);


//creating pace section of menu
let paceSection = document.createElement('div')
let paceHeader = document.createElement('h2')
paceHeader.innerHTML = 'Pace';
let paceInputSection = document.createElement('div')
let paceMeasurment = document.createElement('select')
paceMeasurment.id = 'paceMeasurement';
let paceMilesOption = document.createElement('option')
paceMilesOption.value = 'perMile';
paceMilesOption.innerHTML = 'Per Mile';
let paceKilometersOption = document.createElement('option')
paceKilometersOption.value = 'perKilometer';
paceKilometersOption.innerHTML = 'Per Kilometer';
paceMeasurment.appendChild(paceMilesOption);
paceMeasurment.appendChild(paceKilometersOption);
let paceInputElement = document.createElement('input')
paceInputElement.id = 'paceInput';
paceInputElement.type = 'text';
paceInputElement.value = '00:00:0';
let paceFormat = document.createElement('p')
paceFormat.innerHTML = 'hh:mm:ss'

paceInputSection.appendChild(paceInputElement);
paceInputSection.appendChild(paceMeasurment);
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

