// NOTE All variables should be unique
const inputNum1 = document.querySelector("#input1") as HTMLInputElement;
const inputNum2 = document.querySelector("#input2") as HTMLInputElement;
const submitButton = document.querySelector("button");


// num1 : number = number defines int,float etc. 
function addNumbers(num1 : number, num2 : number){
    return num1 + num2;
}

// ? question mark defines that even if null or undefined add event lister will trigger
submitButton?.addEventListener("click", ()=> {
    console.log(`the sum is ${addNumbers(parseInt(inputNum1.value), parseInt(inputNum2.value))}`)
})