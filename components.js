let body = document.body

let formTypeSection = document.createElement('div')
formTypeSection.className = 'formTypeSection';
let paceButton = document.createElement('button')
paceButton.id = 'paceButton';
paceButton.className = 'formTypeButton active';
paceButton.innerText = 'Pace';
let distanceButton = document.createElement('button')
distanceButton.id = 'distanceButton';
distanceButton.className = 'formTypeButton';
distanceButton.innerText = 'Distance';
let timeButton = document.createElement('button')
timeButton.id = 'timeButton';
timeButton.className = 'formTypeButton';
timeButton.innerText = 'Time';

formTypeSection.appendChild(paceButton);
formTypeSection.appendChild(distanceButton);
formTypeSection.appendChild(timeButton);


let submitButton = document.createElement('button')
submitButton.id = 'submitInput';
submitButton.className = 'formButtons';
submitButton.innerText = "Submit";

let clearButton = document.createElement('button')
clearButton.id = 'clearInput';
clearButton.className = 'formButtons';
clearButton.innerText = "Clear";

let form = document.querySelector('#inputUnits');

let spaceLine = document.createElement('div');
spaceLine.className = 'spaceLine';

//creating distance section of menu
let distanceSection = document.createElement('div') 
let distanceHeader = document.createElement('h2')
distanceHeader.innerHTML = 'Distance';
distanceHeader.className = 'inputHeader';
let distanceInputSection = document.createElement('div')
distanceInputSection.className = 'inputSection'
let distanceMeasurement = document.createElement('select')
distanceMeasurement.id = 'distanceMeasurement';
distanceMeasurement.className = 'inputSpace';
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
distanceInputElement.className = 'inputSpace';
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
paceHeader.className = 'inputHeader';
let paceInputSection = document.createElement('div')
paceInputSection.className = 'inputSection'
let paceMeasurement = document.createElement('select')
paceMeasurement.id = 'paceMeasurement';
paceMeasurement.className = 'inputSpace';
let paceMilesOption = document.createElement('option')
paceMilesOption.value = 'perMile';
paceMilesOption.innerHTML = 'Per Mile';
let paceKilometersOption = document.createElement('option')
paceKilometersOption.value = 'perKilometer';
paceKilometersOption.innerHTML = 'Per Kilometer';
paceMeasurement.appendChild(paceMilesOption);
paceMeasurement.appendChild(paceKilometersOption);
let paceInputElement = document.createElement('input')
paceInputElement.id = 'paceInput';
paceInputElement.className = 'inputSpace';
paceInputElement.type = 'text';
paceInputElement.value = '00:00:0';
let paceFormat = document.createElement('span')
paceFormat.innerHTML = 'hh:mm:ss'

paceInputSection.appendChild(paceInputElement);
paceInputSection.appendChild(paceMeasurement);
paceInputSection.appendChild(paceFormat);

paceSection.appendChild(paceHeader);
paceSection.appendChild(paceInputSection);


//creating time section of menu
let timeSection = document.createElement('div')
let timeHeader = document.createElement('h2')
timeHeader.innerHTML = 'Time';
timeHeader.className = 'inputHeader';
let timeInputSection = document.createElement('div')
timeInputSection.className = 'inputSection'
let timeInputElement = document.createElement('input')
timeInputElement.id = 'timeInput';
timeInputElement.className='inputSpace';
timeInputElement.type = 'text';
timeInputElement.value = '00:00:0';
let timeFormat = document.createElement('span')
timeFormat.innerHTML = 'hh:mm:ss'

timeInputSection.appendChild(timeInputElement);
timeInputSection.appendChild(timeFormat);

timeSection.appendChild(timeHeader);
timeSection.appendChild(timeInputSection);

//creating results section of the menu
let resultsSection = document.createElement('div')
let resultsHeader = document.createElement('h2')
resultsHeader.innerHTML = 'Results';
let results = document.createElement('div')
results.id = 'results';

resultsSection.appendChild(resultsHeader);
resultsSection.appendChild(results);

let menu = document.querySelector('#menu')
//Default Menu
menu.insertBefore(formTypeSection, form);
form.appendChild(timeSection);
form.appendChild(spaceLine);
form.appendChild(distanceSection);

form.appendChild(submitButton);
form.appendChild(clearButton);

