
class Person {
    constructor(name, email, age) {
        this.name = name,
        this.email = email,
        this.age = age
    }

    getPerson() {
        let PersonInfo = "Name:${this.name}, email:{this.email}, age:${this.age}"
        return PersonInfo;
    } 

}




  
module.exports = Person;