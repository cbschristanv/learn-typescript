// NOTE All variables should be unique
var inputNum1 = document.querySelector("#input1");
var inputNum2 = document.querySelector("#input2");
var submitButton = document.querySelector("button");
function addNumbers(num1, num2) {
    return num1 + num2;
}
// ? question mark defines that even if null or undefined add event lister will trigger
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", function () {
    console.log("the sum is ".concat(addNumbers(parseInt(inputNum1.value), parseInt(inputNum2.value))));
});
