const number=100

console.log(number);
console.log(typeof(number));
console.log(number.toString());
console.log(typeof(number));
console.log(number.toFixed(2));   // thiw will roundoff the number to 2 decimal places
console.log(number);

const number2=245.798;
console.log(number2.toPrecision(4));         //this will give the precise value until what we want

const hundreds=10000000000;
console.log(hundreds.toLocaleString('en-IN'));   // thiw will add commas after zeroes and make it readable  'en-IN' will make sure the commas are put according to indian standards

    /******************************************Maths************************************* */
    console.log(Math);
    console.log(Math.abs(-4));
    console.log(Math.round(4.5));
    console.log(Math.min(4,6,1,2,0));
    console.log(Math.max(10,5,9,11,7));

    console.log(Math.floor((Math.random()*10)+1));          // random gives us value from 0 to 1 so multiply it with 1 to shift decimal 1 place

    const min=10
    const max=20
    console.log(Math.floor(Math.random()*(max-min+1)+min))
    