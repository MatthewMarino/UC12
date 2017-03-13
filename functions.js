/**
* Removes part of string between two sub strings
* @param {string} text The original string
* @param {string} start The starting string
* @param {string} end The ending string
* @return {string} The string in between
* @throws {Error} If start or end not found
*/
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}

/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        } else {
            throw new Error("Invalid area code: " + areaCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}

/**
 * Returns a line code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The line code
 * @throws {Error} If the format is incorrect
 */
function getLineCode(phoneNum) {

    var lineCode;

    try {
        lineCode = phoneNum.slice(10);
        if (lineCode.length == 4 && Number(lineCode)) {
            return lineCode;
        } else {
            throw new Error("Invalid line code: " + lineCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the line code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayLineCode(inputId, outputId) {

    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputText = "Your line code is " + lineCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Returns a CO code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The CO code
 * @throws {Error} If the format is incorrect
 */
function getCoCode(phoneNum) {

    var coCode;

    try {
        coCode = between(phoneNum, ") ", "-");
        if (coCode.length == 3 && Number(coCode)) {
            return coCode;
        } else {
            throw new Error("Invalid CO code: " + coCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the CO code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayCoCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var coCode = getCoCode(phoneNum);
        outputText = "Your CO code is " + coCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}
/*
function validPhone(phoneNum) {
	// check and remove parenthesis
	if (phoneNum.indexOf('(') != 0 && phoneNum.indexOf(')') != 4) {
		console.log("Missing parenthesis.");
		return false;
	}
	else {
		//remove the parenthesis
		phoneNum = phoneNum.replace(')', '');
		phoneNum = phoneNum.replace('(', '');
		console.log(phoneNum);
	}
	// check to see if the - is in the correct place and the other digits are numbers
	var cell = phoneNum.split('-');
	console.log(cell);
	if (Number(cell[1]) && Number(cell[0]) && phoneNum.charAt(6) == '-' && phoneNum.length == 11) {
		return true;
	}
	else {
		return false;
	}
}

function disPhoneNum(inputId, outputId) {
	var input = document.getElementById(inputId).value;
	var outputText = "";
	if (validPhone(input) == true) {
		outputText = "The number " + input + " is a actual phone number.";
	}
	else {
		outputText = "The number " + input + " is not a phone number.";
	}
	document.getElementById(outputId).innerHTML = outputText;
}
*/
