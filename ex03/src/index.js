// Only change code below this line
class Person {
    static display() {
        var message = "Static method is invoked from Person class";
        return console.log(message);
    }
    
    show() {
        Person.display();
    }

}
// Only change above this line
var message = new Person();
message.show();
module.exports = Person;
