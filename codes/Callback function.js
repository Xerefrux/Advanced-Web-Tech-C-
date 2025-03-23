
//class
class a{
    constructor(name)
    {
        this.name = name;
    }
}

const b = new a("Raiyan");
console.log(b.name);

//Callback function
function sayHello()
{
    setTimeout(() => {
        console.log(this.name)
    }, 1000);
}
