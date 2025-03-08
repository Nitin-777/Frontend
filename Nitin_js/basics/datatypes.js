"using strict";


//alert(3+3)  this wont work because we are using nodejs not browser

//DATAtypes
// number -> 2 power 53
// bigint -> very very large values
// string -> " "
// boolean -> true/false
// Null -> standalone
// undefined ->
// symbol ->unique
// object

console.log(typeof "NITIN") /// typeof helps to find which datatype is the variable;


      //*********two types of datatypes primitive and non primitive */
 //*Primitive*/
 // are of  7 types
 // 1->string
 // 2->null
 // 3->undefined
 // 4->number
 // 5->boolean
 // 6->symbol
 // 7->bigInt

 // non-primitive (reference)//
 // 1-> array
 // 2-> objects
 // 3-> functions
  
 const heroes=["doodieman","shaktiman","batman"]  //this is how we declare a array

 let myobj={                          //this is how we create a object
    name:"Nitin Sharma",
    Age:20,
 }
 
 const myfunction= function(){
    console.log("nitin");
 }
 console.log(myfunction);
 console.log(heroes[0]);

 
 

