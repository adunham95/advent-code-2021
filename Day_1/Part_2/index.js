import fs from 'fs'
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, "../input.txt");
// const inputPath = join(__dirname, "../testInput.txt");

const inputs = fs.readFileSync(inputPath, {encoding:'utf8', flag:'r'});
const inputArray = inputs.split('\n');
const splitWidowArray = []

inputArray.forEach((input, i) => {
    const numb1 = inputArray[i-2];
    const numb2 = inputArray[i-1];
    const numb3 = input;

    if(typeof numb1 !== "undefined" && typeof numb2 !== "undefined"){
        console.log('Do math');
        console.log('numbers', `${numb1}, ${numb2}, ${numb3}`);
        const sum = parseInt(numb1) + parseInt(numb2) + parseInt(numb3);
        splitWidowArray.push(sum)
    }
})

const differenceArray = splitWidowArray.map((s,i) => {
    let difference = 0;
    if(i !== 0){
        difference = s - splitWidowArray[i-1];
    }
    return {
        input: s,
        difference
    }
}).filter(input => input.difference > 0)

console.log(splitWidowArray);
console.log(differenceArray.length)

