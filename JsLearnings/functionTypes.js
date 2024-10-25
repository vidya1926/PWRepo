
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
