const getProperty = <X, Y extends keyof X>(obj:X, key:Y)=>{
    return obj[key]
}

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
// Alice;
