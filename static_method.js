// Static method are called without instantiate

class Progrmmer{
    constructor(type) {
         this.type = type;
    }

    static php(phpType) {
        console.log(`I am a ${phpType} programmer`) // return I am a PHP programmer

    }
}   
Progrmmer.php('PHP');