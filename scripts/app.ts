/* jshint -W117 */
/* jshint -W014 */
// ? //////////////////////////////////////// NUMBERS TO WORDS (V2.0) ////////////////////////////////////////////////
const namesOfUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const namesOfTens = [
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
const namesOfSpecials = [
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
const namesOfHundreds = [
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
const namesOfExtras = [
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
// This function returns if value of a -3 <= 0 ,returns 0 .Else returns a -3
// const zero = (strLength: number) => (strLength - 3 <= 0 ? 0 : strLength - 3);

const threeParts = (inputString: string) => {
	let inputParts: string[] = [];
	let noOfParts =
		inputString.length % 3 !== 0
			? Math.floor(inputString.length / 3) + 1
			: Math.floor(inputString.length / 3);
	for (let x = 0; x < noOfParts; x++) {
		inputParts.push(
			inputString.substring(inputString.length - 3 * (1 + x), inputString.length - 3 * x)
		);
	}
	return {
		parts: inputParts.reverse(),
		noOfParts,
	};
};

const main = (parts: string[]) => {
	let convertedParts: string[] = [];
	parts.length === 1 && parts[0] === '0'
		? convertedParts.push('zero')
		: parts
				.reverse()
				.forEach((part, currentPartNumber) =>
					convertedParts.push(
						`${
							currentPartNumber !== parts.length - 1 ? namesOfExtras[currentPartNumber] : ''
						}${convert(part)}`
					)
				);
	return convertedParts.reverse().join(' ');
};

const convert = (part: string) => {
	if (part.length === 1) return ones(part);
	if (part.length === 2) return `${tens(part)} ${ones(part)}`;
	if (part.length === 3) return `${hundreds(part)} ${tens(part)} ${ones(part)}`;
};

const ones = (part: string) => {
	if (part[part.length - 2] !== '1') return namesOfUnits[Number(part[part.length - 1])];
	else return '';
};
const tens = (part: string) => {
	if (part[part.length - 2] === '1') return namesOfSpecials[Number(part[part.length - 1]) - 1];
	else return namesOfTens[Number(part[part.length - 2])];
};
const hundreds = (part: string) => {
	return namesOfHundreds[Number(part[part.length - 3])];
};
// ? ////////////////////////// LISTENING INPUT AND OTHER SIMPLE COMMANDS GOES HERE ///////////////////////////////////
(<HTMLButtonElement>document.getElementById('btn')).addEventListener('click', () => {
	let value = (<HTMLInputElement>document.getElementById('input')).value; //listens to an input from the USER
	const { parts, noOfParts } = threeParts(value);
	(<HTMLInputElement>document.getElementById('input')).value = parts.join(',');
	(<HTMLElement>(
		document.getElementById('result-container')
	)).innerHTML = `<div>parts : ${parts}</div>
		<div>noOfParts : ${noOfParts}</div>
		<div>\noutput : ${main(parts)}</div>`;
});
