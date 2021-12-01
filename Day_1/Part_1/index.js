import fs from 'fs'
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, "../input.txt");
// const inputPath = join(__dirname, "../testInput.txt");

const inputs = fs.readFileSync(inputPath, {encoding:'utf8', flag:'r'});
const inputArray = inputs.split('\n');

const splitInputs = inputArray.map((input, i) => {
    let difference = 0;
    if(i !== 0){
        difference = input - inputArray[i-1];
    }
    return {
        input,
        difference
    }
}).filter(input => input.difference > 0)

console.log(splitInputs.length);

