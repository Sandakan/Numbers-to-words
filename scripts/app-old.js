'use strict';
// ? //////////////////////////////////////// NUMBERS TO WORDS (V2.0) ////////////////////////////////////////////////
var areThereSpecials;
var inputParts = [];
var res = '';
var int = 0;
var availableExtras = '';
var checkThis = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var checkSpecials = ['11', '12', '13', '14', '15', '16', '17', '18', '19'];
var addSpecials = [
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen',
];
var addThis = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var addThisTens = [
	'',
	'ten',
	'twenty',
	'thirty',
	'forty',
	'fifty',
	'sixty',
	'seventy',
	'eighty',
	'ninety',
];
var addThisHundreds = [
	'',
	'one hundred',
	'two hundred',
	'three hundred',
	'four hundred',
	'five hundred',
	'six hundred',
	'seven hundred',
	'eight hundred',
	'nine hundred',
];
var addExtras = [
	'thousand ',
	'million ',
	'billion ',
	'trillion ',
	'quadrillion ',
	'quintillion ',
	'sextillion ',
	'septillion ',
	'octillion ',
	'nonillion ',
	'decillion ',
	'undecillion ',
	'duodecillion ',
	'sexdecillion ',
	'septendecillion ',
	'octodecillion ',
	'novemdecillion ',
	'vigintillion ',
	'Centillian ',
	'Uncentillion ',
	'Decicentillion ',
	'Undecicentillion ',
	'Viginticentillion ',
	'Unviginticentillion ',
	'Trigintacentillion ',
	'Quadragintacentillion ',
	'Quinquagintacentillion ',
	'Sexagintacentillion ',
	'Septuagintacentillion ',
	'Octogintacentillion ',
	'Nonagintacentillion ',
	'Ducentillion ',
	'Trecentillion ',
	'Quadringentillion ',
	'Quingentillion ',
	'Sescentillion ',
	'Septingentillion ',
	'Octingentillion ',
	'Nongentillion ',
	'Millinillion ',
];
// ? ////////////////////////////////////// FUNCTIONS STARTS FROM HERE ////////////////////////////////////////////////
function zero(strLength) {
	//This function returns if value of a -3 <= 0 ,returns 0 .Else returns a -3
	if (strLength - 3 <= 0) {
		return 0;
	} else {
		return strLength - 3;
	}
}
// ? /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const threeParts = (str) => {
	//This function separates the input into parts which has only 3 elements maximum in one part. It could be parts with 1 or 2 elements.
	int = Math.floor(str.split('').length / 3); //Holds the value which of how many parts that can be broke in input. **Without adding extra 1 if their is a remainder.**
	let strLength = str.length;
	if (strLength % 3 > 0) int++; //this command checks how many parts can be broke in input. If it has a remainder, this adds another 1 part to fill that element.
	for (let q = 1; q <= int; q++) {
		//This loops to add elements containing parts to an array called inputParts.
		inputParts.push(str.substring(zero(strLength), strLength));
		strLength -= 3;
	}
};
// ? //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ones(position, part, areThereSpecials) {
	//This is the function which adds words relating to the number in the one's digit.
	if (!areThereSpecials) {
		//This checks whether there are special elements such as eleven,twelve.etc
		for (let x = 0; x < checkThis.length; x++) {
			if (part[position] == checkThis[x]) res = addThis[x] + ' ' + res; //Adds words relating to the number to the variable called res.
		}
	}
}
// ? ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function specialTimes(part) {
	for (let x = 0; x < checkSpecials.length; x++) {
		if (part.length == 3 && part[1] + part[2] == checkSpecials[x]) {
			areThereSpecials = true;
			res = addSpecials[x] + ' ' + res;
			//Adds words relating to the number to the variable called res.
		} else if (part.length == 2 && part[0] + part[1] == checkSpecials[x]) {
			areThereSpecials = true;
			res = addSpecials[x] + ' ' + res;
			//Adds words relating to the number to the variable called res.
		}
	}
}
// ? //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tens(position, part, areThereSpecials) {
	//This is the function which adds words relating to the number in the ten's digit.
	if (!areThereSpecials) {
		//This checks whether there are special elements such as eleven,twelve.etc
		for (let x = 0; x < checkThis.length; x++) {
			if (part[position] == checkThis[x]) res = addThisTens[x] + ' ' + res;
		}
	}
}
// ? ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function hundreds(position, part, extraOne = '') {
	//This is the function which adds words relating to the number in the hundred's digit.
	for (let x = 0; x < checkThis.length; x++) {
		if (part[position] == checkThis[x]) res = extraOne + addThisHundreds[x] + ' ' + res; //Adds words relating to the number to the variable called res.
	}
}
// ? ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main(parts, output) {
	//This is the main function which decides how the convertion should work. It loops through number of parts and pass the number to the convert function  as an argument while checks the number of elements of the selected part and passes it too.
	for (let x = 0; x < parts; x++) {
		if (x !== parts - 1) availableExtras = addExtras[x];
		else availableExtras = ''; // This adds extras like thousand,million.etc to the output.
		convert(output[x].length, x, parts);
	}
}
// ? //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function convert(digits, whichPart) {
	//This is the function which holds everything of this code.It runs specified functions according to number of digits the selected part has.
	var str = inputParts[whichPart].toString().split('');
	areThereSpecials = false;
	if (digits == 1) {
		ones(0, str);
	} else if (digits == 2) {
		specialTimes(str, areThereSpecials);
		ones(1, str, areThereSpecials);
		tens(0, str, areThereSpecials);
	} else if (digits == 3) {
		specialTimes(str, areThereSpecials);
		ones(2, str, areThereSpecials);
		tens(1, str, areThereSpecials);
		hundreds(0, str, availableExtras);
	}
}
// ? ////////////////////////// LISTENING INPUT AND OTHER SIMPLE COMMANDS GOES HERE ///////////////////////////////////
document.getElementById('btn').addEventListener('click', () => {
	let value = document.getElementById('input').value; //listens to an input from the USER
	inputParts = [];
	if (/\d/gim.test(value)) {
		let input = value.replace(/\D/gim, ''); // removes the spaces and non-digit characters globally and case-insensitively.
		threeParts(input); //Above functions are called here.
		main(int, inputParts);
		let output = res.trim();
		// console.log(input, int, inputParts, output);
		if (/^-/gim.test(value)) output = `minus ${output}`;
		document.getElementById(
			'result-container'
		).innerHTML = `Input : ${input}<br>Input parts : ${inputParts.reverse()}<br>Number of parts : ${int}<br><br>Output : ${output}.`;
	} else
		document.getElementById(
			'result-container'
		).innerHTML = `<center>Numbers not found in the input.</center>`;
});
// ? /////////////////////////////////////////// END OF THE CODE /////////////////////////////////////////////////////
/*
?  RELEASE NOTES ///////////////////////////////////////////////////////////////////////////////////////////////////////
*v2.0
    - Updated the functionality of the algorithm.
    - Fixed some bugs
    - Made upto the maximum number you have even heard.
*/
