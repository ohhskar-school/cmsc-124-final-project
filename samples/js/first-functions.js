// Function that accepts functions as arguments
function foo(callbackFn){
    console.log("bar")
    callbackFn("baz")
}

// Function stored in a variable
const bazMessageFn = function(message){
    console.log(message)
}

// Function used as an argument
foo(bazMessageFn)
