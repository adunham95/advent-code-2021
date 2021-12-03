import getInput from "../../readInputs.js";

const inputs = getInput(false, "Day_3");
const inputArray = inputs.split('\n');

function getValue(array, charAt, isPopularValue = true){
    let zero = {};
    let one = {};

    for (let i = 0; i < array[0].length; i++) {
        zero[i] = 0;
        one[i] = 0; 
    }

    array.forEach(input => {
        let letters = input.split("");
        letters.forEach((l, i) => {
            if(l === "0") zero[i] = zero[i]+1 
            else{one[i] = one[i]+1}
        })
    })
    
    let popular = [];
    let unPopular = [];
    
    Object.keys(zero).forEach(k => {
        if(zero[k] > one[k]){
            popular.push("0")
            unPopular.push("1")
        }
        if(zero[k] <= one[k]){
            popular.push("1")
            unPopular.push("0")
        }
    });

    if(isPopularValue){
        return popular[charAt]
    }
    else{
        return unPopular[charAt]
    } 
}

function binaryToValue(binary){
    return parseInt(binary, 2)
}

let oxyGenRating = [...inputArray];
let oxyPosition = 0;
let oxyValue;

while(oxyGenRating.length > 1){
    console.log(oxyPosition)
    oxyValue = getValue(oxyGenRating, oxyPosition, true);
    oxyGenRating = oxyGenRating.filter(str => {
        const matchingPosition = str.charAt(oxyPosition);
        const isMatch = matchingPosition === oxyValue;
        return isMatch;
    });
    oxyPosition++;
}

let co2Rating = [...inputArray];
let co2Position = 0;
let co2Value;

while(co2Rating.length > 1){
    co2Value = getValue(co2Rating, co2Position, false);
    co2Rating = co2Rating.filter(str => {
        const matchingPosition = str.charAt(co2Position);
        const isMatch = matchingPosition === co2Value;
        return isMatch;
    });
    co2Position++;
}


oxyGenRating = oxyGenRating.map(bin => binaryToValue(bin))[0];
co2Rating = co2Rating.map(bin => binaryToValue(bin))[0];

console.log({oxyGenRating, co2Rating})

const result = oxyGenRating * co2Rating;
console.log("Result", result)
