function pallindrome(s){
let rev=""
for(let i=s.length-1;i>=0;i--){
    rev=rev+s.charAt(i)
}
console.log(rev)
if(s===rev){
        console.log("Pallindrome")
    }else{
        console.log("not pallindrome")
    }
}
pallindrome("vidya")
pallindrome("madam")

