// keyup
function pressKey (e) { 
    if (morethan8) {
        document.getElementById('have8chars').className = 'valid';
    } else {
        document.getElementById('have8chars').className = '';
    }

    document.getElementById('oneNumber').className = haveANumber(txt) ? 'valid' : '';
    document.getElementById('oneUpper').className = haveUpper(txt) ? 'valid' : '';
    document.getElementById('oneLower').className = haveLower(txt) ? 'valid' : '';
}

function morethan8 (txt) {
    let count;

    for (let i = 0; i < txt.length; i++) {
        if (txt.charAt(i) != '') {
            count++;
        }
        
    }
}

function haveANumber (txt) {
    for (let i = 0; i < txt.length; i++) {
            if (!isNaN(parseInt(txt.charAt(i)))) {
                return true;
            }
    }    
    return false;
}

function isSpecialChar (txt) {
    let specialChar = ["@", "~", "-", "·"];
    for (let i = 0; i < txt.length; i++) {
        for (let j = 0; j < specialChar.length; j++) {
            if (specialChar[j] === txt[i]) {
                return true;
            }
        }
    }
    return false;
}

function haveUpper (txt) {
    for (let i = 0; i < txt.length; i++) {
        if (txt.charAt(i).toUpperCase() == txt.charAt(i)) {
            return true;
        }
    }
    return false;
}

function haveLower (txt) {
    for (let i = 0; i < txt.length; i++) {
        if (txt.charAt(i).toLowerCase() == txt.charAt(i)) {
            return true;
        }
    }
    return false;
}
