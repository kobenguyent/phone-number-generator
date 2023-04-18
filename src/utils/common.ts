interface T {
}

export const getRandom = (list: Array<T>): T => {
	return list[Math.floor(Math.random() * list.length)];
};

export const getRandomInt = (min:number, max:number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};
