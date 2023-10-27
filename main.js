
let value1=parseInt(prompt("Enter the first value"));
let value2=parseInt(prompt("Enter the second value"));

let operation=(value1,value2,sum)=>{
    sum(value1,value2)
}

let sum=(a,b)=>{
    let c=a+b;
    document.write(`The sum of two number is ${c}`)
}
operation(value1,value2,sum);