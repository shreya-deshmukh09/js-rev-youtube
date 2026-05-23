let a = 50;

if (true){
    let a = 10 ;
    const b = 20 ;
    console.log("Inner:",a)  // here o/p=> Inner: 10
}

console.log(a);      
// here we get a = 50 not 10 as a o/p bcoz the scope of a=10 is limited only to that "if block"

//console.log(b); // similary we don't get b=20 as o/p here

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); => gives error bcoz it is out of scope
}

// console.log(username); => aslo give error (out of scope)



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
  return num + 2}
// this gives error
