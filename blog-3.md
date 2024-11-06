# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### Type Guards:
\n Type guard is technique of narrowing down the types. In this technique types are declared using conditional block. Type guard returns a boolean value.

There are various types of typeguard of which the following are conventionally used:
1. using typeof 
2. using in
3. using instanceof

Their use cases are discussed below:
1. Using typeof:
typeof normally returns the type of primitive and non-primitive data types. This typeof keyword is used in the conditional statement to check the type and performed its corresponding subsequent operation.
For Example: 
'''
const add = (param1:string|number, param2:string|number) =>{
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2
    }else{
        return param1.toString() + param2.toString()
    }
}

'''tsc

2. using in Keyword:
Normally in checks the keys of an object. This is also used for type guard.
For example:
'''

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

'''

3. using instanceof

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