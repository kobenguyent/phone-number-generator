type T = {}

export const getRandom = (list: Array<T>): T => {
	return list[Math.floor(Math.random() * list.length)];
};

export const getRandomInt = (min: number, max: number) => {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};
