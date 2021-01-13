// Static method are called without instantiate

class Programmer{
    constructor(type) {
         this.type = type;
    }

    static php(phpType) {
        console.log(`I am a ${phpType} programmer`) // return I am a PHP programmer

    }
}   
Programmer.php('PHP');