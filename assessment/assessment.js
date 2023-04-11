//Write a function that takes in a string and returns it when reversed
let food = "eating"
let reversed=food.split("").reverse()
console.log(reversed.join(""))
  

//2. Write a function that takes in the following array and consoles the target if it is found else



function divideArray(num){
 if(num.length<=1){
    return num
 }
 let middle=Math.floor((num.length)/2);
 let left=num.slice(0,middle);
 let right=num.slice(middle);
 console.log(sortedArray(divideArray(left),divideArray(right)))

 }
function sortedArray (left,right){
    let empty=[]
while(left.length && right.length){
    
     if (left[0]<right[0]){
      empty.push(left.shift())
    }
     else {
        empty.push(right.shift())
    }
    
}

return [...empty,...left,...right]

}
let num = [2,8,0,23,5,45,76]
let sortedarray=divideArray(num)
console.log(sortedarray)
let Target = 23

function binary(num,Target){
 let start=0;
 let end=num.length-1;
 while(start<=end){

    let middlee=Math.floor((start+end)/2)
    if(num[middlee]===Target){
        return middlee
    }
    else if(num[middlee]<Target){
        start=middlee+1
    }
    else{
    end=middlee-1
    }
 }
 return null

}
console.log(sortedarray,Target)
//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for(let i=2000;i<=2023;i++){
    if(i%4===0){
        console.log(`${i} is a leap year`)
    }
    else {
        console.log(`${i} is not a leap year`)
    }
}
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for (let i=0; i<=100; i++){
    if(i% 3===0 && i %5===0){
        console.log("FizzBuzz")}

       else if(i%3 ===0){
            console.log("Fizz")
        }
        else if(i%5 ===0){
            console.log("Buzz")
        }
    }
   

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
for(let num=0; num<numArray.length;num++){
    console.log(numArray[num]*4)
}
//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
 let nums = ["10","24","45","56","67"]
 let final=[]
 for (let first=""; first<nums.length; first++){
    console.log(final.push(first))
 }