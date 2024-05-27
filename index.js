calculatorSetting = "pace"
measurement = document.querySelector('#measurement')

distanceInput = document.querySelector('#distanceInput')
paceInput = document.querySelector('#paceInput')
timeInput = document.querySelector('#timeInput')

paceButton = document.querySelector('#paceButton')
distanceButton = document.querySelector('#distanceButton')
timeButton = document.querySelector('#timeButton')

paceButton.addEventListener('click', function() {
    calculatorSetting = "pace";
})

distanceButton.addEventListener('click', function() {
    calculatorSetting = "distance";
})

timeButton.addEventListener('click', function() {
    calculatorSetting = "time";
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
    console.log(time)
    console.log(pace)
    distance = time/pace;

    distance = Math.floor(distance*100000)/100000
    return distance
    }


submitButton.addEventListener('click', function(event) {
    if (calculatorSetting === "pace") {
        time = timeToSeconds(timeInput.value);
        distance = Number(distanceInput.value);

        paceString = calculatePace(time, distance);

        console.log(paceString)
    }
    else if (calculatorSetting === "distance") {
        time = timeToSeconds(timeInput.value);
        pace = timeToSeconds(paceInput.value);

        distance = calculateDistance(time, pace);

    }

    else if (calculatorSetting === "time") {
        pace = timeToSeconds(paceInput.value);
        distance = Number(distanceInput.value);

        timeString = calculateTime(pace, distance);

        console.log(timeString)
    }
    
})

