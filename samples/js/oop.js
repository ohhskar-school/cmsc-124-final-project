// Defining a Class
class Person {
    constructor(first, last, age){
        this.first = first,
        this.last = last,
        this.age = age
    }

    get name() {
        return `${this.first} ${this.last}`
    }
}

// Creating an Object
const ana = new Person("Ana", "Canete", 21)

// Adding a new property to an object
ana.course = "BS Bio"
