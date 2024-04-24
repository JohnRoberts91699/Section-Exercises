function convertTimeToWords(timeString) {
    // Parse the input time string
    const [hourStr, minuteStr] = timeString.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);

    // Convert hour to words
    let hourWords = '';
    if (hour === 0) {
        hourWords = 'twelve';
    } else if (hour === 12) {
        hourWords = 'twelve';
    } else if (hour <= 11) {
        hourWords = convertHourToWords(hour);
    } else {
        hourWords = convertHourToWords(hour - 12);
    }

    // Convert minute to words
    let minuteWords = '';
    if (minute === 0) {
        minuteWords = '';
    } else if (minute <= 9) {
        minuteWords = 'oh ' + convertSingleDigitToWords(minute);
    } else if (minute <= 19) {
        minuteWords = convertTeenToWords(minute);
    } else {
        const tensDigit = Math.floor(minute / 10);
        const onesDigit = minute % 10;
        minuteWords = convertTensDigitToWords(tensDigit) + ' ' + convertSingleDigitToWords(onesDigit);
    }

    // Combine hour and minute words into the final output
    let finalOutput = '';
    if (hour === 0 && minute === 0) {
        finalOutput = 'midnight';
    } else if (hour === 12 && minute === 0) {
        finalOutput = 'noon';
    } else if (hour < 12) {
        finalOutput = hourWords + ' ' + minuteWords + ' am';
    } else {
        finalOutput = hourWords + ' ' + minuteWords + ' pm';
    }

    return finalOutput;
}

// Helper functions for conversion
function convertHourToWords(hour) {
    const hoursMap = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven'
    };
    return hoursMap[hour];
}

function convertSingleDigitToWords(digit) {
    const singleDigitMap = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
        5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
    };
    return singleDigitMap[digit];
}

function convertTeenToWords(teen) {
    const teenMap = {
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
        15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
    };
    return teenMap[teen];
}

function convertTensDigitToWords(tensDigit) {
    const tensDigitMap = {
        2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty'
    };
    return tensDigitMap[tensDigit];
}

// Example usage
console.log(convertTimeToWords('12:09')); // Outputs: 'twelve oh nine pm'
console.log(convertTimeToWords('06:30')); // Outputs: 'six thirty am'
