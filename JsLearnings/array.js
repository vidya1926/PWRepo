// let  arr=["chrome","edge"]
// let trainers=new Array("vidya")


// let len=arr.length;
// console.log(len);

 let num=[1,2,3,4,5,4]
// console.log(num.sort())




//let result=num.filter((n)=>n==4)
// console.log(result)

let slicedArr=num.slice(1,4)
// console.log(slicedArr)

let numbers=[5,6,3,6,9]
let unique=[]
let dup=[]
// let newArr2=num.splice(arr[0],1)
// console.log(newArr2)
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===6){
       dup.push(numbers.splice(i,1)[0])
       i--;
    }
    else{        
        unique.push(numbers[i]    )
    }
}

console.log(unique)

console.log(dup)


let cart = ['Laptop', 'Headphones', 'Keyboard', 'iphone'];
cart.splice(1, 2, 'Speakers');
console.log(cart);

let mixedArrays= [1,2,3,'chrome','edge',true,[1,2,3,4],2.5]
let innerArray=mixedArrays.filter(arrValue=>Array.isArray(arrValue))
console.log(innerArray)

let a=mixedArrays.shift()
console.log(a)