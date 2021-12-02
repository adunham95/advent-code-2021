import getInput from "../../readInputs.js";

const inputs = getInput(false, "Day_2");
const inputArray = inputs.split('\n');

let horizontal = 0,
    depth = 0,
    aim = 0;

const directions = inputArray.map(ints => {
    const split = ints.split(' ');
    console.log(split)
    const obj = {
        direction: split[0],
        count: parseInt(split[1])
    }

    switch(obj.direction){
        case "forward":
            horizontal += obj.count;
            depth += aim * obj.count;
            break;
        case "up":
            // depth -= obj.count;
            aim -= obj.count;
            break;
        case "down":
            // depth += obj.count;
            aim += obj.count;
            break;
    
        default:
            break;
    }

    console.log(horizontal, depth, aim)

    return obj
})

console.log(directions)
console.log(horizontal, depth, aim)

const finalAnswer = horizontal * depth;

console.log("Final Answer", finalAnswer)