const seededRandom = function (seed) {
	var m = 2 ** 35 - 31;
	var a = 185852;
	var s = seed % m;
	return function () {
		return (s = (s * a) % m) / m;
	};
};

export const fetchAPI = function (date) {
    //Added for testing purposes
     if (process.env.NODE_ENV === 'test') {
			return ['9:00', '10:00', '11:00'];
		}
    let result = [];
    //Had to change API to us date.getTime instead of date.getDate
	let random = seededRandom(date.getTime());

	for (let i = 17; i <= 23; i++) {
		if (random() < 0.5) {
			result.push(i + ':00');
		}
		if (random() < 0.5) {
			result.push(i + ':30');
		}
	}
	return result;
};

export const submitAPI = function (formData) {
	return true;
};
