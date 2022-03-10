export const tokenizeString = (str) => {
	// --- Parse a calculation string into an array of numbers and operators
	const tokenArr = [];
	let token = '';
	for (const character of str) {
		if ('*/+-'.indexOf(character) > -1) {
			if (token === '' && character === '-') {
				token = '-';
			} else {
				tokenArr.push(parseFloat(token), character);
				token = '';
			}
		} else {
			token += character;
		}
	}
	if (token !== '') {
		tokenArr.push(parseFloat(token));
	}
	return tokenArr;
};
