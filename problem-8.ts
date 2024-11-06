const validateKeys = <T extends object> (obj: T, keys: (keyof T)[]) : boolean =>{
    const keysInObj = Object.keys(obj) as Array<keyof T>;
    return keys.every((key) => keysInObj.includes(key));
}

const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name", "age"]));

// Sample Output:
// true;
