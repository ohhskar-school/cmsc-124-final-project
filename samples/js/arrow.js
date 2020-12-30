function foo(){
    const num = 42

    // An arrow function as the value being returned
    return () => console.log(num)
}

const bar = foo()

bar() // Console: 42
