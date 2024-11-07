# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### Type Guards:
Type guard is technique of narrowing down the types. In this technique types are declared using conditional block. Type guard returns a boolean value.

### Necessities of typeguard:
As typeScript is statically typed language and we get to know about most of the issues during compile time only, type guard in typeScript becomes handly because it helps detect more runtime failures that the TypeScript framework can not handle. So the necessities of typescript in short are:
1. ensures accurate type inference.
2. prevents runtime errors thereby ensures type safety at runtime.

### Types of type guard:
There are various types of typeguard of which the following are conventionally used:
1. using `typeof` 
2. using `in`
3. using `instanceof`
4. using `is` for custom type guard

### use cases of various types of type guard:
Their use cases are discussed below:
1. Using `typeof`:
`typeof` normally returns the type of primitive and non-primitive data types. This `typeof` keyword is used in the conditional statement to check the type and performed its corresponding subsequent operation.
For Example: 

```
const identifyNumber = (param1:string|number, param2:string|number) =>{
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2
    }else{
        return param1.toString() + param2.toString()
    }
}

```

2. using `in` Keyword:
Normally `in` checks the keys of an object. This is also used for type guard.
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

3. using instanceof
The `instanceof` operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

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


```
interface Car = {
    brand: string;
    door:number;
}

interface Motorcycle = {
    brand: string;
}

const isCar (vehicle: Car | Motorcycle): vehicle is Car{
    return door in vehicle
}

const VehicleCheck = (vechicle: Car | Motorcycle)=>{
    if(isCar(vehicle)){
        console.log("This is a car")
    }else{
        console.log("This is a motorcycle")
    }
}

```