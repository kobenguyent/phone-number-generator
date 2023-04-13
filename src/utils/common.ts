export const getRandom = (list) => {
	return list[Math.floor(Math.random() * list.length)];
};

export const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};
