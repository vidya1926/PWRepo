
//named fnction or function declaration

function getBrowserVersion(bVersion){
    console.log("browserVersion")
    return bVersion
}
let response=getBrowserVersion(112)


//Function expression
let browser=function getBrowserrName(bName){
    return bName + response
}
console.log(browser("Chrome"))

//anonymous function
let user=function (username){
   return username
}
console.log(user("DemoUser"))

//Arrow Function
let userCredentials =()=>console.log("username as Vidya, password as 123")
userCredentials()

//IIFE
console.log(((a,b)=>a+b)(2,3));

//Higher order 
/*
 callback
 promise
 async 
 await
*/



let pizzaType;
function orderPizza(){
     console.log("Online pizza")
     setTimeout(() => {        
        console.log("pizza is getting ready")
         pizzaType="cheese"
     }, 3000);
     console.log("Deliverd pizza")
     return pizzaType;

}
let pizzaReady =orderPizza()
console.log("Delivery Boy arrived with " +pizzaReady)
