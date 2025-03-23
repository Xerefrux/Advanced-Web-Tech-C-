//for-in loop
let a = [1, 2, 3, 4, 5];
for (let n in a) 
{
    console.log(n); //prints the index of the array
}
console.log("\n");
for(let n in a)
{
    console.log(a[n]); //prints the value of the array
}

console.log("\n");

const person =
{
    name: 'Raiyan',
    age: 23
}

for(let i in person)
{
    console.log(i+ " : "+person[i]);
}
console.log("\n");
//for-of loop

const b = [3,5,2]
for(let n of b)
{
    console.log(n);
}
console.log("\n");
//forEach loop
a.forEach((Element, index, array) => {
    console.log(array);
});