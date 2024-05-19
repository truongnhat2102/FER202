import React from 'react';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}




function People() {
    const person = new Person("John", 25);
    person.sayHello();
}

export default People;