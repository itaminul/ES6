// When we passed parameter in function, we can set default values
// in function parameter with if no values or undefined are passed into function

function callMe(messages) {
    console.log(`Hi I am ${messages} function`);
}
callMe();//return Hi I am undefined function

function callMe(messages='default') {
    console.log(`Hi I am ${messages} function`);
}
callMe();//return Hi I am a default function
