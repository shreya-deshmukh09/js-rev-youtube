function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
}

addTwoNumbers(3,4)

function Sum(num1,num2){
    let result = num1 + num2
    return result;
}

const result = Sum(6,8)
console.log("Result :", result);


function add(num1,num2){
    return num1+num2
}

const ans =add(9,5)
console.log(ans)



function loginUserMessage(username){
    if(username ===  undefined){
console.log("please enter a username")
return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage())



// rest operator(...)

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))


//functions with object
const user ={
    username: "shreya",
    age:18
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    age:20
})




//function with array

const myNewArray =[ 200,400,100,500]

function returnSecValue(getArray){
    return getArray[1]
}

//console.log(returnSecValue(myNewArray));
console.log(returnSecValue([200,400,100,500]));