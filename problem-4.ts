type Circle = {
    shape: "circle";
    radius:number
}

type Ractangle = {
    shape:"rectangle";
    height:number;
    width:number
}

const calculateShapeArea = (shapeObject:Circle | Ractangle):number =>{
    if("width" in shapeObject){
        const {height,width} = shapeObject
        return (height*width)
    }else{
        const {radius} = shapeObject
        return 3.1416*radius*radius
    }
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

console.log(circleArea)

// Sample Input 2:
const rectangleArea = calculateShapeArea({
	shape: "rectangle",
	width: 4,
	height: 6,
});

// Sample Output 2:
console.log(rectangleArea)
