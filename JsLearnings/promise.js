let pizzaType;
function orderPizza(){
     console.log("Online pizza")
     return new Promise((resolve,reject)=>{
     setTimeout(() => {    
        const success=false;
        if(success)    {
        console.log("pizza is getting ready")
        resolve("cheese")
    }else{
       reject("Order cancelled") 
    }
     }, 3000);
    
})}

orderPizza().then((pizzatype)=>console.log("Delivered pizza  " +pizzatype))
  .catch((error)=>console.log("Unexpected delay " +error))


  
  async function getPizza(){
    try{
        const pizzaType=await orderPizza()
        console.log(pizzaType +" Delivered")
    }catch(error){
        console.error(error)
    }
  }

  getPizza()