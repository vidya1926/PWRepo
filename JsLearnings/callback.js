
// function processInput(user, callback) {
//     console.log("Authorized user chek")
//     console.log(user)
//     callback(user)
// }
// function login(user) {
//     console.log("Authorized user " + user)
// }

// const userInput = "Vidya";
// processInput(userInput, login)

// let pizzaType
// function orderPizza() {
//     console.log("Order pizza online")
//     setTimeout(() => {
//         console.log("Pizza is getting ready")
//         pizzaType = "Cheese"
//     }, 3000)
//     console.log("Pizza delivered")
//     return pizzaType
// }

// let pizzaname = orderPizza();
// console.log("Delicious " + pizzaname)

// function orderPizza2() {
//     console.log("Order pizza online")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const sucess = true
//             if (sucess) {
//                 console.log("Pizza is getting ready")
//                 resolve("Cheese")
//             } else {
//                 reject("Order delayed")
//             }
//         }, 3000)       
//     })
// }

// orderPizza2().then((pizza)=>console.log("delivered" +pizza))
// .catch((error)=>console.error(error))


function allowUser(user,callback){
    console.log("User authorization")
    setTimeout(()=>{
    callback(user)
    },4000)
}

function userLogin(){
    console.log("Authorized user to login")
}

allowUser("vidya",userLogin)
console.log("Learning Callback")