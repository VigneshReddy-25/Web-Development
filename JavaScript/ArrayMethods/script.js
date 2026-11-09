let emps= [
  { id: 1, name: "Rahul", age: 25, salary: 30000 },
  { id: 2, name: "Priya", age: 28, salary: 45000 },
  { id: 3, name: "Arjun", age: 24, salary: 28000 },
  { id: 4, name: "Sneha", age: 30, salary: 50000 },
  { id: 5, name: "Kiran", age: 27, salary: 40000 }
];

// 1. create new arr with only emps names

console.log("----------1st Question----------");
let newArr = emps.map((items) => {
    return items.name;
})
console.log(newArr)

// 2. give 5000 incre to all emps 

console.log("----------2nd Question----------");
let incArr = emps.map((items) => {
    items.salary = items.salary + 5000;
    return items;
})
console.log(incArr);

// 3. find id no. 4 age 

console.log("----------3rd Question----------");
emps.filter((items) => {
    if(items.id == 4){
        age=items;
        return age
    }
})
console.log("The age of id 4 is ",age.age);

// 4. find sum of all emps sal

console.log("----------4th Question----------");
let total = emps.reduce((sum, items) => {
    sum+=items.salary;
    return sum
},0)
console.log("Total Salary: ", total)

// 5. find age dif b.n id no 3 and 5

console.log("----------5th Question----------");
let ages = emps.reduce((acc, items) => {
    if (items.id == 3) acc.threeage = items.age;
    if (items.id == 5) acc.fifthage = items.age;
    return acc;
}, {});

let diff = ages.threeage - ages.fifthage;

console.log("The age difference of id 3 and id 5 is ",Math.abs(diff));
// 6. filter emps whose sal>=40000

console.log("----------6th Question----------");
let newArray = emps.filter((items) => {
    if(items.salary >= 40000) {
        return items;
    }
})
console.log(newArray);