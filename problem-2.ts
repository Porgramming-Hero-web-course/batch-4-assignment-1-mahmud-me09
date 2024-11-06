const removeDuplicates = (arr: number[]): number[] => {
	const newArray: number[] = [];
    let previousNumber:number;
	arr.forEach((number) => {
		if (number !== newArray.find(num=>num===number)) {
			previousNumber = number;
			newArray.push(number);
		}
	});
	return newArray;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
