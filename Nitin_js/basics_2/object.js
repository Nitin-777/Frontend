const mykey=Symbol("key1")

const user={
    Name: "Nitin Sharma",
    Enroll: "A41105222099",
    [mykey]:"mykey1",
    Age:20,
    Hobby:"Goat in coding",
    present:"Learning Java script",
}

console.log(user);
console.log(user.Name);    // one of the ways to fetch from object
console.log(user["Name"])  // prefer this way to fetch info from obj

user.myfunction= function(){
    console.log(`My Name is ${user.Name}`);
    console.log(`My name 2 is ${this.Name}`);
    
}
console.log(user.myfunction());

Object.freeze(user)          // this will not allow to make any changes in the object further


