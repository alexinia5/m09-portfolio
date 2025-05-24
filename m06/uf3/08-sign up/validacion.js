function numbers () {
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    return numbers;
}
function specialCharacters () {
    let char = '';
    return char;
}
function upper () {
    let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upperLetters;
}
function lower () {
    let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    return lowerLetters;
}

function regexEmail () {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex;
}

const submit = document.querySelector('#submit');
// validar email
// submit.addEventListener('click', function validateEmail() {
//     let emailValidation = document.getElementById('email').value;
//     let emailRegex = regexEmail();

//     if (emailValidation.match(emailRegex)) {
//         return true;
//     } else {
//         return false;
//     }
// });

// validar password

submit.addEventListener('click', function validatePassword () {
    let passwordValidation = document.getElementById('password').value;
    // cercles validation
    const checkChars = document.getElementById('check-chars');
    const checkNum = document.getElementById('check-numbers');
    const checkSpecialChar = document.getElementById('check-special-char');
    const checkUpperLower = document.getElementById('check-upper-lower');
    
    let num = numbers();
    let specialChar = specialCharacters();
    let upperCase = upper();
    let lowerCase = lower();
    
    // correcto
    if (passwordValidation.length >= 8) {
        checkChars.className = 'correct';
    } else {
        checkChars.className = 'incorrect';
    }
    
    // 
    for (let n in num) {
        if (passwordValidation.includes(num[n])) {
            checkNum.className = 'correct';
        } else {
            checkNum.className = 'incorrect';
        }
    }
    
    if (passwordValidation.includes(specialChar)) {
        checkSpecialChar.className = 'correct';
    } else {
        checkSpecialChar.className = 'incorrect';
    }

    for (const u in upperCase) {
        for (const l in lowerCase) {
            if (passwordValidation.includes(upperCase[u]) && passwordValidation.includes(lowerCase[l])){
                checkUpperLower.className = 'correct';
            } else {
                checkUpperLower.className = 'incorrect';
            }
        }
    }
});
