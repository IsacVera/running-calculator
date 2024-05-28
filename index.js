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


let calculatorSetting = "pace"
let measurement = document.querySelector('#measurement')

paceButton.addEventListener('click', function() {
    calculatorSetting = "pace";

    while (menu.lastChild) {
        menu.removeChild(menu.lastChild)
    }
    menu.appendChild(timeSection);
    menu.appendChild(distanceSection);
})

distanceButton.addEventListener('click', function() {
    calculatorSetting = "distance";

    while (menu.lastChild) {
        menu.removeChild(menu.lastChild)
    }
    menu.appendChild(timeSection);
    menu.appendChild(paceSection);
})

timeButton.addEventListener('click', function() {
    calculatorSetting = "time";

    while (menu.lastChild) {
        menu.removeChild(menu.lastChild)
    }
    menu.appendChild(distanceSection);
    menu.appendChild(paceSection);
})

submitButton = document.querySelector('#submitInput')


function timeToSeconds(timeString) {
    let hoursEndPostition = null;
    let minutesEndPosition = null;

    for (let i=0; i<timeString.length; i++) {
        if (timeString[i] === ":") {
            break;
        }
        hoursEndPostition += 1;
    }

    let hours = Number(timeString.slice(0, hoursEndPostition));

    minutesEndPosition = hoursEndPostition + 1
    for (let i=hoursEndPostition+1; i<timeString.length; i++) {
        if (timeString[i] === ":") {
            break;
        }
        minutesEndPosition += 1;
    }

    let minutes = Number(timeString.slice(hoursEndPostition+1, minutesEndPosition));
    let seconds = Number(timeString.slice(minutesEndPosition+1));
    
    hoursToSec = hours * 60 * 60;
    minToSec = minutes * 60;

    totalSeconds = hoursToSec + minToSec + seconds;
    return totalSeconds;
}


function secondsToTime(seconds) {
    hours = Math.floor(seconds/3600);
    seconds = seconds % 3600;

    minutes = Math.floor(seconds/60);
    seconds = seconds % 60;

    hoursString = hours.toString()
    minutesString = minutes.toString()
    secondsString = seconds.toString()

    if (hoursString.length === 1) {
        hoursString = `0${hoursString}`;
    }

    if (minutesString.length === 1) {
        minutesString = "0" + minutesString;
    }

    if (secondsString.length === 1) {
        secondsString = "0" + secondsString;
    }

    secondsString = `${hoursString}:${minutesString}:${secondsString}`

    return secondsString;
}


function calculatePace(time, distance) {
    secondsPace = time/distance;

    paceString = secondsToTime(secondsPace);
    return paceString;
}


function calculateTime(pace, distance) {
    secondsTime = pace * distance;

    timeString = secondsToTime(secondsTime);
    return timeString
}


function calculateDistance(time, pace) {
    distance = time/pace;

    distance = Math.floor(distance*100000)/100000
    return distance
    }


submitButton.addEventListener('click', function(event) {
    if (calculatorSetting === "pace") {
        let distanceInput = document.querySelector('#distanceInput')
        let timeInput = document.querySelector('#timeInput')
        
        time = timeToSeconds(timeInput.value);
        distance = Number(distanceInput.value);

        paceString = calculatePace(time, distance);

        console.log(paceString)
    }
    else if (calculatorSetting === "distance") {
        let paceInput = document.querySelector('#paceInput')
        let timeInput = document.querySelector('#timeInput')

        time = timeToSeconds(timeInput.value);
        pace = timeToSeconds(paceInput.value);

        distance = calculateDistance(time, pace);
        console.log(distance)
    }

    else if (calculatorSetting === "time") {
        let distanceInput = document.querySelector('#distanceInput')
        let paceInput = document.querySelector('#paceInput')

        pace = timeToSeconds(paceInput.value);
        distance = Number(distanceInput.value);

        timeString = calculateTime(pace, distance);

        console.log(timeString)
    }
    
})

