# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### Type Guards:
Type guard is technique of narrowing down the types with the help of conditional block.

### Necessities of typeguard:
As typeScript is statically typed language, we come to know most of the issues during the time of compilation. Type guard in typeScript becomes befitting because it helps to detect more runtime failures that the TypeScript framework cannot handle and untectable during compilation by adding an extra layer of safety in type checking. So the necessities of typescript in short are:
1. ensures accurate type inference.
2. prevents runtime errors thereby ensures type safety at runtime.

### Types of type guard:
There are various types of typeguard of which the following are conventionally used:
1. using `typeof` 
2. using `in`
3. using `instanceof`
4. using `is` for custom type guard

### Use cases of various types of type guard:
Their use cases are discussed below:
1. Using `typeof`:
`typeof` normally returns the type of primitive and non-primitive data types. This `typeof` keyword is used in the conditional statement to check the type and performed its corresponding subsequent operation of narrowing down the type.
For Example:

```
const convertingString = (param:string | number):string =>{
    if(typeof param === "number"){
        return param.toString()
    }else{
        return param
    }
}

```

2. using `in` Keyword:
Normally `in` checks whether the key exists in an object. This is used for type guard with the same use case to narrow down the type.
For example:
```
type Car = {
    brand: string;
    door:number;
}

type Motorcycle = {
    brand: string;
}

const VehicleCheck = (vechicle: Car | Motorcycle)=>{
    if("door" in vehicle){
        console.log("This is a car")
    }else{
        console.log("This is a motorcycle")
    }

}

```

3. using `instanceof`
The `instanceof` operator tests to see if an object is an instance of a class. The return value is a boolean. In a conditional statement block using this `instanceof` keyword is used for narrowing down the type.

```
class Car = {
    brand: string;
    door:number;
}

class Motorcycle = {
    brand: string;
}

const VehicleCheck = (vechicle: Car | Motorcycle)=>{
    if(vehicle instanceof Car){
        console.log("This is a car")
    }
    if(vehicle instanceof Motorcycle){
        console.log("This is a motorcycle")
    }

}
```
4. using `is` for custom type guard:
Custom Type Guards are user-defined utility functions that return a boolean by checking required conditions. Within these functions, types of a variable / parameter is checked through `is` operator and narrowing down the types. Syntax is `variableName is typeName`.

```
interface Car = {
    brand: string;
    door:number;
}

interface Motorcycle = {
    brand: string;
}

const isCar (vehicle: Car | Motorcycle): vehicle is Car{
    return "door" in vehicle
}

const VehicleCheck = (vechicle: Car | Motorcycle)=>{
    if(isCar(vehicle)){
        console.log("This is a car")
    }else{
        console.log("This is a motorcycle")
    }
}

```