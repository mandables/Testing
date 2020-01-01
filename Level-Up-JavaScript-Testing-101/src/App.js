export const add = (a, b) => a + b;

export const total = (delivery, subTotal) => {
	return '£' + add(delivery, subTotal);
};

export const filterByTerm = (array, searchTerm) => {
	if (searchTerm !== '') {
		return array.filter((element) => element.url.includes(searchTerm.toLowerCase()));
	} else if (!array.length) {
		throw 'array cannot be empty';
	} else {
		throw 'Search term must be provided';
	}
};
