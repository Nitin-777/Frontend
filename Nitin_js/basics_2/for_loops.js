const arr=[1,2,3,4,5]
for (const i of arr) {           //for-of loop
    console.log(i);
}
const map= new Map()                // creation of map
map.set("NS", "Nitin Sharma")
map.set("Ns", "Nabin SHarma")
map.set("KO", "Kaustav mani Ojha")

console.log(map);
for (const [key,value] of map) {           //iteration in map
    console.log('Initial is',key,'Name is',value);
    
    
}
const myobj={       // creating object
    Id:"099",
    Name:"Nitin Sharma",
    Course:"Btech Cse",
}
for (const key in myobj) {                  // for-in loop for traversing in objects 
    console.log(`Give ${key} -: ${myobj[key]}`);
}

const myarr=[
    {
        id:"099",
        uni:"Amity",
    },
    {

    },
    {

    },
]

myarr.forEach((item) => {        // for each loop in array of objects
    console.log(item.uni)
})

