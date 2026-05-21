// singleton (it is made by constructor not by literals)

//part 1

// object literals

const mySym =Symbol("key1") //{It is a symbol data type not of object topic}

// Decleration of object (here "JsUser" is an object)
const JsUser ={
    name : "Shreya",
    "full name" :"Shreya Deshmukh",
    [mySym]:"myKey1",
    age : 18,
    location:"pune",
    email: "deshmukh09@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "saturday"]
    
}

// how to access the object
console.log(JsUser.email)   // most of elements access by using "objname.variable" but in some case it need to use square brackets []
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "deshmukh28@gmail.com" //(change the obj element's value)
//Object.freeze(JsUser)  // by freezing the obj it can allows to make changes in the values of elements of obj
JsUser.email = "deshmukh05@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



//part 2 

//const tinderUser = new object()   //(singleton obj)
const tinderUser ={} // (non-singleton obj)// this are 2 diff ways to declear or wite an object

tinderUser.id ="123"
tinderUser.name = "Dipu"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//nested objects (objects inside object)
const regularUser ={
    email: "dhggffh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shreya",
            lastname:"deshmukh"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);


// combining objects
const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

//three ways to conbine obj
//1 =>
     const obj3 ={ obj1,obj2} //(not good way)
//    o/p=>{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//2=>
     const obj3 = Object.assign({}, obj1, obj2, obj4) //(better way)
//    o/p=>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }(

//3  
     const obj3 ={...obj1, ...obj2} //(best and easy way)
//    o/p=> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);


//arrays in object
const users =[
    {
        id:1,
        name:"shreya"
    },
    {
        id:1,
        name:"shreya"
    },
    {
        id:1,
        name:"shreya"
    },
]

users[1].name
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// output=>

//[ 'id', 'name', 'isLoggedIn' ]
//[ '123', 'Dipu', false ]
//[ [ 'id', '123' ], [ 'name', 'Dipu' ], [ 'isLoggedIn', false ] ]
//true//

