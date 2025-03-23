//Spread Operator
const a = [2,5,1]
const b = [...a,4]
console.log(b) 

console.log("\n")

const car =
{
    name: "BMW",
    color: "red"
}

const modifyCar = 
{
    color: "Green",
    address: "Kuril"
}

const latestCar = {...car, ...modifyCar}
console.log(latestCar)
