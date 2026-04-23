const name ="shreya"
const repoCount = 50

console.log(name+repoCount+"Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String('shr-ey-a')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne ="  shreya   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%chaudhary"

console.log(url.replace('%','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))