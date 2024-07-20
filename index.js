let calculatorSetting = "pace"

paceButton.addEventListener('click', function() {
    calculatorSetting = "pace";

    paceButton.className = 'formTypeButton active';
    distanceButton.className = 'formTypeButton';
    timeButton.className = 'formTypeButton';

    while (form.lastChild) {
        form.removeChild(form.lastChild)
    }
    form.appendChild(timeSection);
    form.appendChild(spaceLine);
    form.appendChild(distanceSection);
    form.appendChild(submitButton);
    form.appendChild(clearButton);
})

distanceButton.addEventListener('click', function() {
    calculatorSetting = "distance";

    paceButton.className = 'formTypeButton';
    distanceButton.className = 'formTypeButton active';
    timeButton.className = 'formTypeButton';

    while (form.lastChild) {
        form.removeChild(form.lastChild)
    }
    form.appendChild(timeSection);
    form.appendChild(spaceLine);
    form.appendChild(paceSection);
    form.appendChild(submitButton);
    form.appendChild(clearButton);
})

timeButton.addEventListener('click', function() {
    calculatorSetting = "time";

    paceButton.className = 'formTypeButton';
    distanceButton.className = 'formTypeButton';
    timeButton.className = 'formTypeButton active';

    while (form.lastChild) {
        form.removeChild(form.lastChild)
    }
    form.appendChild(distanceSection);
    form.appendChild(spaceLine);
    form.appendChild(paceSection);
    form.appendChild(submitButton);
    form.appendChild(clearButton);
})



function distanceMeasureEventChangeHandler() {
    unit = distanceMeasurement.value 
    race = distanceEvent.value

    if (unit == 'miles') {
        if (race == 'marathon') {
            distanceInputElement.value = '26.219';
        } else if (race == 'halfMarathon') {
            distanceInputElement.value = '13.1095';
        } else if (race == 'tenK') {
            distanceInputElement.value = '6.2137';
        } else if (race == 'fiveK') {
            distanceInputElement.value = '3.1069';
        } else if (race == '1500') {
            distanceInputElement.value = '0.932';
        } else if (race == '800') {
            distanceInputElement.value = '0.497';
        }
    }

    if (unit == 'kilometers') {
        if (race == 'marathon') {
            distanceInputElement.value = '42.195';
        } else if (race == 'halfMarathon') {
            distanceInputElement.value = '21.0975';
        } else if (race == 'tenK') {
            distanceInputElement.value = '10';
        } else if (race == 'fiveK') {
            distanceInputElement.value = '5';
        } else if (race == '1500') {
            distanceInputElement.value = '1.5';
        } else if (race == '800') {
            distanceInputElement.value = '0.8';
        }
    }
}

distanceMeasurement.addEventListener('change', function() {
    distanceMeasureEventChangeHandler();
})

distanceEvent.addEventListener('change', function() {
    distanceMeasureEventChangeHandler();
})


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

    timeString = `${hoursString}:${minutesString}:${secondsString}`

    return timeString;
}


function formatNumber(num) {
    return Math.floor(num*1000)/1000;
}


function formatTime(time) {
    let countToDecimal = 0;
    for (let i=0; i<time.length; i++) {
        if (time[i] === '.') {
            break;
        }
        countToDecimal++
    }

    let endDecimalNum = 0;
    if ((time.length - countToDecimal) > 0) {
        if ((time.length - countToDecimal) > 2) {
            endDecimalNum = (countToDecimal+1) + 3;
        } else if ((time.length - countToDecimal) > 1) {
            endDecimalNum = (countToDecimal+1) + 2;
        } else {
            endDecimalNum = (countToDecimal+1) + 1;
        }
        time = time.slice(0, endDecimalNum);
    }

    let endZeros = 0;
    for (let i=0; i<3; i++) {
        if (time[time.length-i-1] === '0') {
            endZeros++;
        } else{
            break;
        }
    }
    time = time.slice(0, time.length-endZeros);

    timeSegments = time.split(":");
    
    for (let i=0; i<timeSegments.length; i++) {
        timeSegments[i] = Number(timeSegments[i]);
    }

    timeOutput = '';
    if (timeSegments[0] > 0) {
        timeOutput = `${timeOutput} ${timeSegments[0]} hours`;
    } if (timeSegments[1] > 0) {
        timeOutput = `${timeOutput} ${timeSegments[1]} minutes`;
    } if (timeSegments[2] > 0) {
        timeOutput = `${timeOutput} ${timeSegments[2]} seconds`;
    }

    return timeOutput;
}


function calculatePace(time, distance) {
    let milesDistance, kilometersDistance, metersDistance;
    let unit = distanceMeasurement.value;

    if (unit == 'miles') {
        milesDistance = distance;
        kilometersDistance = milesDistance * 1.609344;
        metersDistance = kilometersDistance * 1000;
    } else if (unit == 'kilometers') {
        kilometersDistance = distance;
        milesDistance = kilometersDistance * 0.6213712;
        metersDistance = kilometersDistance * 1000;
    }

    secondsPerMile = time/milesDistance;
    secondsPerKilometer = time/kilometersDistance;
    milesPerHour = 3600/secondsPerMile;
    kilometersPerHour = 3600/secondsPerKilometer;

    metersPerSecond = metersDistance/time;
    metersPerMinute = metersPerSecond * 60;

    milesPerHour = formatNumber(milesPerHour)
    kilometersPerHour = formatNumber(kilometersPerHour)
    metersPerSecond = formatNumber(metersPerSecond)
    metersPerMinute = formatNumber(metersPerMinute)

    let paceOutput = {
        'secondsPerMile': secondsPerMile,
        'secondsPerKilometer': secondsPerKilometer,
        'milesPerHour': milesPerHour,
        'kilometersPerHour': kilometersPerHour,
        'metersPerMinute': metersPerMinute,
        'metersPerSecond': metersPerSecond,
    };

    return paceOutput;
}


function calculateTime(pace, distance) {
    let milesDistance, kilometersDistance = null;
    let distanceUnit = distanceMeasurement.value;
    let paceUnit = paceMeasurement.value;

    if ((distanceUnit == 'miles') && (paceUnit == 'perKilometer')) {
        milesDistance = distance;
        distance = milesDistance * 1.609344;

    } else if ((distanceUnit == 'kilometers') && (paceUnit == 'perMile')) {
        kilometersDistance = distance;
        distance = kilometersDistance * 0.6213712;
    }

    secondsTime = pace * distance;

    timeString = secondsToTime(secondsTime);
    return timeString
}


function calculateDistance(time, pace) {
    let milePace, kilometerPace, meterPace, yardPace = null;
    let mileDistance, kilometerDistance, meterDistance, yardDistance = null;
    unit = paceMeasurement.value;

    if (unit == 'perMile') {
        milePace = pace;
        kilometerPace = pace * 0.6213712;
         
    } else if (unit == 'perKilometer') {
        kilometerPace = pace;
        milePace = kilometerPace * 1.609344;
    }
    meterPace = kilometerPace / 1000;
    yardPace = milePace / 1760;

    mileDistance = time/milePace;
    kilometerDistance = time/kilometerPace;
    meterDistance = time/meterPace;
    yardDistance = time/yardPace;

    mileDistance = formatNumber(mileDistance);
    kilometerDistance = formatNumber(kilometerDistance);
    meterDistance = formatNumber(meterDistance);
    yardDistance = formatNumber(yardDistance);

    distances = {
        'miles': mileDistance,
        'kilometers': kilometerDistance,
        'meters': meterDistance,
        'yards': yardDistance,
    }

    return distances
}


function verifyTimes(time) {
    let timeSegments = time.split(":")
    for (let i=0;i<timeSegments.length;i++){

        let timeNum = Number(timeSegments[i]);
        if (typeof(timeNum) === 'number'
            && !isNaN(Number(timeSegments[i]))) {
        } else {
            return false;
        }
        if (timeNum <= 0) {
            return false
        }
    } 
    return true;
}


function verifyInputs(inputs) {
    if (calculatorSetting === 'pace') {
    } else if (calculatorSetting === 'distance') {
        if (!verifyTimes(inputs.timeInput) || !verifyTimes(inputs.paceInput)) {
            console.log('false');
            return false;
        }
    } else if (calculatorSetting === 'time') {
        
    }
    console.log('true')
    return true; 
}


function showResults(output) {
    results.innerHTML = output; 
    menu.appendChild(resultsSection)
}


submitButton = document.querySelector('#submitInput')

submitButton.addEventListener('click', function() {
    inputs = {
        timeInput: timeInput.value || null,
        distanceInput: distanceInput.value || null,
        paceInput: paceInput.value || null
    }

    verifyInputs(inputs)

    if (calculatorSetting === "pace") {
        time = timeToSeconds(timeInput.value);
        distance = Number(distanceInput.value);

        let paces = calculatePace(time, distance);

        timePerMile = formatTime(secondsToTime(paces.secondsPerMile))
        timePerKilometer = formatTime(secondsToTime(paces.secondsPerKilometer))

        resultsString = `Pace in different units:<br>${timePerMile} per mile<br>${timePerKilometer} per kilometer<br>${paces.milesPerHour} miles/hour<br>${paces.kilometersPerHour} kilometers/hour<br>${paces.metersPerMinute} meters/minute<br>${paces.metersPerSecond} meters/second`

        showResults(resultsString);

    }
    else if (calculatorSetting === "distance") {
        time = timeToSeconds(timeInput.value);
        pace = timeToSeconds(paceInput.value);
        
        distances = calculateDistance(time, pace);

        resultsString = `With the given time and pace, the distance traveled will be:<br>${distances.miles} Miles<br>${distances.kilometers} Kilometers<br>${distances.meters} Meters<br>${distances.yards} Yards`

        showResults(resultsString);

    }

    else if (calculatorSetting === "time") {
        pace = timeToSeconds(paceInput.value);
        distance = Number(distanceInput.value);

        timeString = calculateTime(pace, distance);

        timeString = formatTime(timeString)

        showResults(`With the given distance and pace, the time required will be: ${timeString}`);
    }
    
})

clearButton = document.querySelector('#clearInput')

clearButton.addEventListener('click', function() {
    distanceInput.value = null;
    paceInput.value = '00:00:0';
    timeInput.value = '00:00:0';
    distanceEvent.value = 'default';
    if (menu.lastChild === resultsSection) {
        menu.removeChild(resultsSection);
    }
})

