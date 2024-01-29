// type greetString = number|string;
// function greet(id: greetString){

// }

// greet("Hello iam String");
interface User{
    firstName:string,
    lastName:string,
    email?:string,
    age:number
}
function isLeagal(user: User){
    if(user.age>=18){
        return true;
    }
    else{
        return false
    }
}
console.log(isLeagal({
    firstName:"Inesh",
    lastName:"Reddy",
    email:"abc@gmail.com",
    age:19
}))
// function delayedCall(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// delayedCall(function() {
//     console.log("hi there");
// })


// function isLegal(age: number):boolean{
//     if(age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// // let x:boolean=isLegal(18);
// let x = isLegal(14);
// console.log(x);

// function calculateSum(a:number, b:number):number{
//     let sum:number= a+b;
//     return sum;
// }

// console.log(calculateSum(4,3))
// function greet(firstName: String){
//     console.log(`Hello ${firstName}`);
// }

// greet("Inesh");