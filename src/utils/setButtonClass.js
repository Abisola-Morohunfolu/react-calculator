export const setButtonClass = (type, value = '') => {
	let className = '';
	switch (type) {
		case 'digit':
			className = `${type}-${value}`;
			break;
		case 'op':
			className = `${type}`;
			break;
		default:
			break;
	}

	return className;
};
