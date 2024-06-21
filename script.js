function calculate() {
    const birthdate = document.getElementById('birthdate').value;
    const calculationType = document.getElementById('calculation').value;
    const language = document.getElementById('language').value;

    if (!birthdate) {
        alert("Please select a birth date.");
        return;
    }

    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    let result;

    if (calculationType === 'mulyankan') {
        result = calculateMulyankan(day);
    } else if (calculationType === 'bhagyank') {
        result = calculateBhagyank(day, month, year);
    }

    const detailData = {
        number: result,
        type: calculationType,
        language: language
    };

    localStorage.setItem('numerologyDetail', JSON.stringify(detailData));
    window.location.href = 'details.html';
}

function calculateMulyankan(day) {
    return reduceToOneDigit(day);
}

function calculateBhagyank(day, month, year) {
    const sum = day + month + yearDigitsSum(year);
    return reduceToOneDigit(sum);
}

function yearDigitsSum(year) {
    return String(year).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

function reduceToOneDigit(number) {
    while (number > 9) {
        number = String(number).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return number;
}
