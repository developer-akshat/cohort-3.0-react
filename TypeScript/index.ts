let a = 90 
a = "Hello"
 console.log(a) // It only accept number data type because of Inference.

 let b:string = 100
 b = "Namaste"
  console.log(b) //It only accept string data type because of annotation

  let sum = (a:number,b:number):number =>{ //Given with annotation because 
                                           //it get to know which value it get in argument
     return a + b
  }
 console.log(sum (5,10))


 let sum1 = (a:number)=> (b?:number) =>{ //This is recursion function with ts
    if(b !== undefined) return sum1(a+b)
        return a
 }

let res = sum1(5)(10)()
console.log(res)

type obj = {
    name:string,
    age:number,
    role:string,
    company:string,
    address:{
        locality:string,
        city:string,
    }
}

let employe:obj = {
    name :"Amit",
    age : 23,
    role : "Software Developer",
    company : "Sheriyans Coding School",
    address : {
        locality : "Sector-24 ,B-Block",
        city : "Noida",
    }
}

console.log(employe)

