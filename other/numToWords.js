var digits = ' one two three four five six seven eight nine'.split(' ');
var tens = 'ten twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
var specials = ' eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(
	' '
);
var big =
	'thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion decillion undecillion duodecillion sexdecillion septendecillion octodecillion novemdecillion vigintillion centillian uncentillion decicentillion undecicentillion viginticentillion unviginticentillion trigintacentillion quadragintacentillion quinquagintacentillion sexagintacentillion septuagintacentillion octogintacentillion nonagintacentillion ducentillion trecentillion quadringentillion quingentillion sescentillion septingentillion octingentillion nongentillion millinillion '.split(
		' '
	);
var noOfThreePairs;
var pairedInput = [];
var output = [];

var input = prompt(
	'Enter any number ? \nNon - Digit characters will be removed automatically !',
	'111212313414515'
).replace(/\s\D^-/gim, '');
input.length % 3 >= 1
	? (noOfThreePairs = Math.floor(input.length / 3) + 1)
	: (noOfThreePairs = Math.floor(input.length / 3));

for (let x = 0; x < noOfThreePairs; x++) {
	pairedInput.unshift(input.substring(input.length - 3 * x - 3, input.length - 3 * x));
}
for (let y = 1; y <= noOfThreePairs; y++) {
	pairCalculator(
		pairedInput[pairedInput.length - y],
		pairedInput[pairedInput.length - y].length,
		output,
		y
	);
	//this loop sends each pair to calculate to the pairCalculator function.
}

function pairCalculator(arg, argLength, output, pairNum) {
	debugger;
	//alert(argLength);  // =3,3,3,1
	let res = '';
	let continueNextRound = false;
	for (let i = 0; i < argLength; i++) {
		if (continueNextRound) {
			continueNextRound = false;
			continue;
		}
		if (i == 0 && parseInt(arg[i + 1]) == 1) {
			res += `${specials[parseInt(arg[i])]} `;
			continueNextRound = true;
			continue;
		}
		i == 1 ? (res += `${tens[parseInt(arg[i - 1])]} `) : (res += `${digits[parseInt(arg[i])]} `);
		if (i == 0 && argLength == 3 && parseInt(arg[0]) !== 0) res += `hundred `;
	}
	// console.log(`pairContent : ${arg}\npairNum : ${pairNum}\nresult : ${res}\nresult with big : ${res+big[pairNum-2]} \n(undefined = okay if pairNum = 1)`);
	pairNum > 1 ? output.unshift(`${res + big[pairNum - 2]} `) : output.unshift(res);
}

console.log(`${pairedInput} \n${output.join('')}`);

//alert(output);
//alert(`Number of three pairs : ${noOfThreePairs}\nArray with three pairs : ${pairedInput}\n${pairedInput[pairedInput.length -1]}`);

//let i = argLength-1; i >= 0; i--
