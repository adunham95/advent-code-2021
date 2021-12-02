import fs from 'fs';
import path from 'path'

const directories = source => fs.readdirSync(source, {
    withFileTypes: true
 }).reduce((a, c) => {
    c.isDirectory() && a.push(c.name)
    return a
 }, [])

const dayDirs = directories("./").filter(str => /^Day/.test(str))

const nextDayNumb = dayDirs.length + 1;
const fileList = [
    {path: `./Day_${nextDayNumb}/input.txt`, contents: ''},
    {path: `./Day_${nextDayNumb}/testInput.txt`, contents: ''},
    {path:`./Day_${nextDayNumb}/Part_1/index.js`, contents: `import getInput from "../../readInputs.js";\n\nconst inputs = getInput(true, "Day_${nextDayNumb}");`},
    {path: `./Day_${nextDayNumb}/Part_2/index.js`, contents: `import getInput from "../../readInputs.js";\n\nconst inputs = getInput(true, "Day_${nextDayNumb}");`}
]


fileList.forEach(dayDir => {
    fs.mkdir(path.dirname(dayDir.path), { recursive: true}, function (err) {
        if (err) return cb(err);
    
        fs.writeFile(dayDir.path, dayDir.contents, () => {});
      });
})

//Update package.json
const packageJsonFile = './package.json'
const packageJson =  JSON.parse(fs.readFileSync(packageJsonFile, {encoding:'utf8', flag:'r'}));

packageJson.scripts[`day${nextDayNumb}:part1`] = `node ./Day_${nextDayNumb}/Part_1/index.js`;
packageJson.scripts[`day${nextDayNumb}:part2`] = `node ./Day_${nextDayNumb}/Part_2/index.js`;

console.log(packageJson)

fs.writeFile(packageJsonFile, JSON.stringify(packageJson, null, 2), () => {});