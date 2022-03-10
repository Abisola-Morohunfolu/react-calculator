export const calculate = (tokens) => {
	// --- Perform a calculation expressed as an array of operators and numbers

	const division = (a, b) => {
		if (b === 0 || b === -0) return '';

		return Math.abs(Math.floor(a / b));
	};
	const operatorPrecedence = [
		{ '*': (a, b) => a * b, '/': (a, b) => division(a, b) },
		{ '+': (a, b) => a + b, '-': (a, b) => a - b },
	];
	let operator;
	for (const operators of operatorPrecedence) {
		const newTokens = [];
		for (const token of tokens) {
			if (token in operators) {
				operator = operators[token];
			} else if (operator) {
				newTokens[newTokens.length - 1] = operator(newTokens[newTokens.length - 1], token);
				operator = null;
			} else {
				newTokens.push(token);
			}
		}
		tokens = newTokens;
	}
	if (tokens.length > 1) {
		console.log('Error: unable to resolve value');
		return tokens;
	} else {
		return tokens[0];
	}
};
