export const checkLeadingZero = (prev, next) => {
	let isLeadingZero = false;
	if ('-*/+'.indexOf(prev) > 1 && next === '0') {
		isLeadingZero = true;
	}

	return isLeadingZero;
};
