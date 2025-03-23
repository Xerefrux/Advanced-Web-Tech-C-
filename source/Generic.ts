//Generics
function Add<T>(value:T):T
{
    return value;
}
let num=Add<number>(10);
let str=Add<string>("Hello World!");
console.log(num);
console.log(str);

console.log("\n");

function ADD<T,A>(value1:T,value2:A):[T,A]
{
    return [value1,value2];
}
let res=ADD<string,number>("Raiyan Sayeed",23);
console.log(res);

console.log("\n");

//Class using Generics
class storage<T>
{
    private data:T;
    constructor(value:T)
    {
        this.data=value;
    }
    getData():T
    {
        return this.data;
    }
}

let myStorage=new storage<number>(100);
console.log(myStorage.getData());
let myStorage2=new storage<string>("New inventory");
console.log(myStorage2.getData());