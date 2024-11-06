const countWordOccurrences = (str:string,matchingString:string):number => {
    let stringArray: string[] = str.split(RegExp("[^a-z&^A-Z]")).filter(Boolean);
    console.log(stringArray)
    return stringArray.filter(word => word.toLowerCase() === matchingString.toLowerCase()).length
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
