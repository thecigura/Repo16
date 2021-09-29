// Only change code below this line
class Microsoft {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    occupation() {
        return "${this._name} is a philanthropist!";
    }



class Facebook extends Microsoft {
    constructor(name, age) {
        super (Microsoft)
        this._name = name;
        this._age = age;
    }
    studentAge(){
        
    }
}

// Only change above this line


module.exports = {
    Microsoft,
    Facebook
}
