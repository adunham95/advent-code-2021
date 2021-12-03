import getInput from "../../readInputs.js";

const inputs = getInput(false, "Day_3");
const inputArray = inputs.split('\n');
let zero = {"0":0,"1":0,"2":0,"3":0,"4":0};
let one = {"0":0,"1":0,"2":0,"3":0,"4":0};

let gamma = [];
let epsilon = [];

for (let i = 0; i < inputArray[0].length; i++) {
    zero[i] = 0;
    one[i] = 0; 
}

// console.log({zero, one})


inputArray.forEach(input => {
    let letters = input.split("");
    letters.forEach((l, i) => {
        if(l === "0") zero[i] = zero[i]+1 
        else{one[i] = one[i]+1}
    })
    
})

// console.log({
//     "0": zero,
//     "1": one
// });

Object.keys(zero).forEach(k => {
    if(zero[k] > one[k]){
        gamma.push("0")
        epsilon.push("1")
    }
    if(zero[k] < one[k]){
        gamma.push("1")
        epsilon.push("0")
    }
})

console.log({
    gamma, epsilon
})

const gammaString = gamma.join(""),
      epsilonString = epsilon.join('');

console.log(
    {
        gammaString,
        epsilonString,  
    }
)

const gammaNumb = parseInt(gammaString, 2),
    epsilonNumb = parseInt(epsilonString, 2);

console.log({gammaNumb, epsilonNumb})

const result = gammaNumb * epsilonNumb;
console.log("Result:", result)