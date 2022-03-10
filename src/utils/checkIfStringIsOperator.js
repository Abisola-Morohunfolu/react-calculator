export const isOperator = (str) => {
	return '*/+-'.indexOf(str) > -1;
	// return str === '-' || str === '+' || str === '*' || str === '/';
};
