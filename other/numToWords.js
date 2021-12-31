var digits = ' one two three four five six seven eight nine'.split(' ');
var tens = 'ten twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
var specials = ' eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(
	' '
);
var big =
	'thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion decillion undecillion duodecillion sexdecillion septendecillion octodecillion novemdecillion vigintillion centillian uncentillion decicentillion undecicentillion viginticentillion unviginticentillion trigintacentillion quadragintacentillion quinquagintacentillion sexagintacentillion septuagintacentillion octogintacentillion nonagintacentillion ducentillion trecentillion quadringentillion quingentillion sescentillion septingentillion octingentillion nongentillion millinillion '.split(
		' '
	);
// let res = '';

// const zero = (strLength) => {
// 	if (strLength - 3 <= 0) return 0;
// 	else return strLength - 3;
// };

// const onesCounter = (position, part, areThereSpecials) => {
// 	if (!areThereSpecials) {
// 		for (let x = 0; x < 9; x++) {
// 			if (part[position] == [x]) res = digits[x] + ' ' + res;
// 		}
// 	}
// };

// const tensCounter = (position, part, areThereSpecials) => {
// 	//This is the function which adds words relating to the number in the ten's digit.
// 	if (!areThereSpecials) {
// 		//This checks whether there are special elements such as eleven,twelve.etc
// 		for (let x = 0; x < 9; x++) {
// 			if (part[position] == [x]) res = tens[x] + ' ' + res;
// 		}
// 	}
// };

// const hundredsCounter = (position, part, extraOne = '') => {
// 	//This is the function which adds words relating to the number in the hundred's digit.
// 	for (let x = 0; x < 9; x++) {
// 		if (part[position] == [x]) res = extraOne + hundreds[x] + ' ' + res; //Adds words relating to the number to the variable called res.
// 	}
// };

// const specialTimes = (part) => {
// 	for (let x = 0; x < big.length; x++) {
// 		if (part.length == 3 && part[1] + part[2] == big[x]) {
// 			areThereSpecials = true;
// 			res = specials[x] + ' ' + res;
// 			//Adds words relating to the number to the variable called res.
// 		} else if (part.length == 2 && part[0] + part[1] == big[x]) {
// 			areThereSpecials = true;
// 			res = specials[x] + ' ' + res;
// 			//Adds words relating to the number to the variable called res.
// 		}
// 	}
// };

document.getElementById('btn').addEventListener('click', () => {
	const value = document.getElementById('input').value;
	if (/\d/gim.test(value)) {
		const input = value.replace(/\D/gim, '');
		let inputLength = input.length; //* 5
		let inputNumOfParts = Math.floor(input.split('').length / 3); //* 1
		let inputParts = [];
		// let bigValues = '';
		// let areThereSpecials;

		if (inputLength % 3 > 0) inputNumOfParts++;
		for (let x = 1; x <= inputNumOfParts; x++) {
			inputParts.push(input.substring(inputLength - 3 || 0, inputLength));
			inputLength -= 3;
			// console.log(inputParts, inputLength);
		}

		var res = '';
		for (let currentPart = 0; currentPart < inputNumOfParts; currentPart++) {
			let arr = inputParts[currentPart].toString().split('');
			console.log(inputParts[currentPart], arr);
			if (arr.length == 1) {
				for (let y = 0; y < 9; y++) {
					if (arr[0] == y) {
						res += digits[y];
					}
				}
			} else if (arr.length == 2) {
				// if (arr[0] == 1) { // use specials
				// }
			} else if (arr.length == 3) {
			} else console.log(`Error ${arr}`);
		}
		console.log(res);

		// for (let x = 0; x < inputNumOfParts; x++) {
		// 	if (x !== inputNumOfParts - 1) bigValues = big[x];
		// 	// else bigValues = '';

		// 	// convert(inputParts[x].length, x, inputParts);
		// 	console.log(bigValues);
		// 	const str = inputParts[x].toString().split('');
		// 	areThereSpecials = false;
		// 	console.log(str);
		// 	if (inputParts[x].length == 1) {
		// 		onesCounter(0, str);
		// 	} else if (inputParts[x].length == 2) {
		// 		specialTimes(str, areThereSpecials);
		// 		onesCounter(1, str, areThereSpecials);
		// 		tensCounter(0, str, areThereSpecials);
		// 	} else if (inputParts[x].length == 3) {
		// 		specialTimes(str, areThereSpecials);
		// 		onesCounter(2, str, areThereSpecials);
		// 		tensCounter(1, str, areThereSpecials);
		// 		hundredsCounter(0, str, bigValues);
		// 	}
		// }

		// function main(parts, output) { inputNumOfParts, inputParts
		// 	//This is the main function which decides how the convertion should work. It loops through number of parts and pass the number to the convert function  as an argument while checks the number of elements of the selected part and passes it too.
		// 	for (let x = 0; x < parts; x++) {
		// 		if (x !== parts - 1) availableExtras = addExtras[x];
		// 		else availableExtras = ''; // This adds extras like thousand,million.etc to the output.
		// 		convert(output[x].length, x, parts);
		// 	}
		// }

		// threeParts(input);
		// main(int, inputParts);
		// let output = res.trim();
		// if (/^-/gim.test(value)) output = `minus ${output}`;
		// `Input : ${input}<br>Input parts : ${inputParts.reverse()}<br>Number of parts : ${int}<br><br>Output : ${output}.`;

		// document.getElementById(
		// 	'result-container'
		// ).innerHTML = `Input : ${input}<br>Input parts : ${inputParts}<br>Number of parts : ${inputNumOfParts}<br>bigValues : ${bigValues}<br><br>Output : ${res}.`;
	}
	// else
	// 	document.getElementById(
	// 		'result-container'
	// 	).innerHTML = `<center>Numbers not found in the input.</center>`;
});
