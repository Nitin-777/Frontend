function addTwoNumbers(num1, num2){
    const result= num1+num2
    return result
}

console.log(addTwoNumbers(3,4));


function cartSum(...num){    ////   ... used is for rest operator which makes an array of inputs
    return num
}

console.log(cartSum(3,4,5,6))

const user={
    username: "Nitin Sharma",
    learning: "JavaScript"

}

function HandleObject(anyobject){
    console.log(`Hello my name is ${anyobject.username} and I am lerning ${anyobject.learning}`);
}

HandleObject(user)

const addtwo= (num1,num2) =>{        // how to create a function using arrow function
    return num1+num2
}
          //  OR
const adddtwo=(num1,num2) => (num1+num2)       // other way to declare a function using arro function
      
console.log(addtwo(1,3))                
console.log(adddtwo(3,5))