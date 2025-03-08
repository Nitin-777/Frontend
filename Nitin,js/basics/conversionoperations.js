let score=33
console.log(typeof score)
score="33abc"
let value=Number(score) // this will convert any datatype in to number datatype
console.log(value);

score=null
console.log(typeof(score)) // we can use typeof even as a function,  null will be treated as a object here
console.log(score)

//"33" -> 33
// "33abc" -> NaN(not a number)


// when we convert try to convert in Boolean
  // 1 -> true; 0 -> false
  // " " -> false
  // "Nitin" -> true
     
      // *****************************************Operations*************************************************** //


      let num =3
      let Negnum= -num   // this will help to convert positive number to negative number
      console.log(Negnum)
      console.log(2**4) //this denotes 2 to power 4


      console.log("1" + 2)  // this will treat the answer as a string 
      console.log(1 + 2 + "3")  /// this will fir perform the operation and then convert in a string
       

      // ********************************************Comparison************************************************** //

      console.log("2" > 1)
      console.log(1 < "2")
      console.log(null >= 0)
      console.log(null==0)
      console.log("2"===2)  /// triple equals to will even compare the datatype but the above comparisons wont 