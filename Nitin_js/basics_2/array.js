const myarr=[0,1,2,3,4];         //in JS there is no specific data tupe we can put both number and string in same array
console.log(myarr);
myarr.push(7)
myarr.pop()
console.log(myarr.length);
myarr.unshift(7)      /// add element at the start
myarr.shift()           // remove element at the start

const newarr= myarr.join(); /// this will change the array to string 
console.log(typeof newarr)
const mn1=myarr.slice(0,3)    //slice jush retrieves the gin indexes and donot make changes in the array
console.log(myarr);

console.log(mn1)
const mn2=myarr.splice(0,3)      ////splice changes the array when e try to splice numbers from the array
console.log(mn2)
console.log(myarr);



const marvel=["ironman","black panther","hulk"]
const dc=["batman", "flash", "superman"]
//console.log(marvel.push(dc))// this is not a good practice to insert another array by using push instead use concat or spread operator ...
///const allheroes=marvel.concat(dc);
// or
const allheros=[...marvel,...dc]             ///using spread operator
console.log(allheros)

console.log(Array.from("Nitin"))         //from keyword helps to create array



