const obj1={
    name:"Nitin",
    Id:"099",
}
const obj2={
    name2:"Nabin",
    Id2:"100"
}

const obj3= {...obj1, ...obj2}
console.log(obj3);


const users=[                 //array of objects
    {
        id:22,
        namee:"nitin",
    },
    {
        id:33,
        name:"Nabiin",
    }
]

console.log(users[1].id)     // fetching from array of users

console.log(Object.keys(obj1))
console.log(Object.values(obj1))