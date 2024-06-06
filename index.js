let calculatorSetting = "pace"

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

    secondsString = `${hoursString}:${minutesString}:${secondsString}`

    return secondsString;
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
        console.log(milesDistance)
        metersDistance = kilometersDistance * 1000;
    }

    secondsPerMile = time/milesDistance;
    secondsPerKilometer = time/kilometersDistance;
    milesPerHour = 3600/secondsPerMile;
    kilometersPerHour = 3600/secondsPerKilometer;

    metersPerSecond = metersDistance/time;
    metersPerMinute = metersPerSecond * 60;

    console.log(secondsToTime(secondsPerMile), 'per mile')
    console.log(secondsToTime(secondsPerKilometer), 'per kilometer')
    console.log('miles per hour', milesPerHour)
    console.log('kilometers per hour', kilometersPerHour)
    console.log(metersPerMinute, 'meters/minute')
    console.log(metersPerSecond, 'meter/second')


    let paceOutput = {
        'secondsPerMile': secondsPerMile,
        'secondsPerKilometer': secondsPerKilometer,
        'milesPerHour': milesPerHour,
        'kilometersPerHour': kilometersPerHour,
        'metersPerMinute': metersPerMinute,
        'metersPerSecond': metersPerSecond,
    };

    console.log(paceOutput)

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

    console.log(time)
    console.log(pace)

    let milePace, kilometerPace, meterPace, yardPace = null;
    let mileDistance, kilometerDistance, meterDistance, yardDistance = null;
    unit = paceMeasurement.value;
    console.log(unit)

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

    console.log('miles', mileDistance)
    console.log('kilometers', kilometerDistance)
    console.log('meters', meterDistance)
    console.log('yards', yardDistance)

    //distance = Math.floor(distance*100000)/100000
    //return distance
}


function showResults(output) {
    results.innerHTML = output; 
    body.appendChild(resultsSection)
}


submitButton = document.querySelector('#submitInput')

submitButton.addEventListener('click', function() {
    if (calculatorSetting === "pace") {
        let distanceInput = document.querySelector('#distanceInput')
        let timeInput = document.querySelector('#timeInput')
        
        time = timeToSeconds(timeInput.value);
        distance = Number(distanceInput.value);

        let paces = calculatePace(time, distance);

        resultsString = `Pace in different units:<br>${secondsToTime(paces.secondsPerMile)} per mile<br>${secondsToTime(paces.secondsPerKilometer)} per kilometer<br>${paces.milesPerHour} miles/hour<br>${paces.kilometersPerHour} kilometers/hour<br>${paces.metersPerMinute} meters/minute<br>${paces.metersPerSecond} meters/second`

        showResults(resultsString)

    }
    else if (calculatorSetting === "distance") {
        let paceInput = document.querySelector('#paceInput')
        let timeInput = document.querySelector('#timeInput')

        time = timeToSeconds(timeInput.value);
        pace = timeToSeconds(paceInput.value);
        
        calculateDistance(time, pace);

        //distance = calculateDistance(time, pace);
        //console.log(distance)
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

clearButton = document.querySelector('#clearInput')

clearButton.addEventListener('click', function() {
    distanceInputElement.value = null;
    paceInputElement.value = '00:00:0';
    timeInputElement.value = '00:00:0';
    distanceEvent.value = 'default';
    if (body.lastChild === resultsSection) {
        body.removeChild(body.lastChild);
    }
})

