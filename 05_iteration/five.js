// forEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){
    console.log(val);
} )

 coding.forEach( (item) => {
     console.log(item);
 } )

 function printMe(item){
    console.log(item);
 }

coding.forEach(printMe)
// we can access element of array by using all above diff way of using forEach

 coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
 } )
//here we get key with index aslo with access of whole arr each time


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} ) 
//we can access values of key of obj present in array by this above code