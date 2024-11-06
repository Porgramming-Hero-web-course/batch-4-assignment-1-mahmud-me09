const sumArray = (arr:number[]):number =>{
    return arr.reduce((sum:number, currentVal:number):number => sum + currentVal, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]))
