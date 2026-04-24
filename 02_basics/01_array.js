//array

const myArr =[0,1,2,3,4,5]
const myHeros=["shaktiman","spiderman","nagraj"]

const myArr2 = new Array (1,2,3,4)
console.log(myArr[1]);

// Array methods

myArr.push(6) // add 6 in the arr
myArr.push(7)
myArr.pop() // remove last element of arr

myArr.unshift(9) // add 9 at the 0th index of arr and all element shift 1 index aheade
myArr.shift() // remove 1st element of array

console.log(myArr.includes(9)) // check wheather the element include or not in that arr
console.log(myArr.includes(3))
console.log(myArr.indexOf(3)) // give element at that index



const newArr = myArr.join() // join the aar elements and give it as a string

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // give new arr in betn index 1 to 3 exclude element at 3rd index

console.log(myn1);
console.log("B", myArr);

const myn2 =myArr.splice(1,3) // do same thing but here 3rd index element includes also create change in original arr = ony element after 3rd index include
console.log("C", myArr);
console.log(myn2);


const fruits =["apple","bannana","orange","mango"]
const color =["pink","red","blue","black"]

// for merging 2 or more array
 
fruits.push(color) //push (this is not good way)
console.log(fruits)

const array = fruits.concat(color) // concat operator
console.log(array)
                                                 //both act same
const nArr = [...fruits,...color] //spreade operator

console.log(nArr)


const num =[ 1,2,3,[4,5,6],7,[6,7,[4,5]]]
const A = num.flat(9) // give array with all element in single arr
console.log(A)

console.log(Array.isArray("shreya"));
console.log(Array.from("shreya"));
console.log(Array.from({name: "shreya"})); //intresting (it gives an empty arr [] as output)


let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3)); // convert these all veriabls into array
