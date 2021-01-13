// Class are a template that use for creating object
class Programmer{
    constructor(type) {
         this.type = type;
    }

    javascript() {
        console.log(this.type); //return I am a javascript progrmmer
    }

    static php(phpType) {
        console.log(`I am a ${phpType} programmer`) // return I am a PHP programmer

    }
}   

let obj = new Programmer('I am a javascript programmer');
obj.javascript();
obj.php('PHP');