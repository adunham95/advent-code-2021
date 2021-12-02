import fs from 'fs'
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default function getInput(dev = false, day = "Day_1"){
    console.log(__dirname)

    const inputPath = join(__dirname, `./${day}/input.txt`);
    const inputDevPath = join(__dirname, `./${day}/testInput.txt`);


    if(dev){
        return fs.readFileSync(inputDevPath, {encoding:'utf8', flag:'r'});
    }
    return fs.readFileSync(inputPath, {encoding:'utf8', flag:'r'});
}