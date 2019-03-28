// document.getElementById("button3").onclick = function () {
//     document.getElementById("demo").innerHTML = "Hello JavaScript 3! ";
// };
// document.getElementById("button4").onclick = function () {
//     document.getElementById("demo").innerHTML = "Hello JavaScript 4! ";
// };
//
// document.getElementById("button1").onclick = function validateForm() {
//     var age = document.getElementById("demo").innerHTML;
// };
// document.getElementById("button2").onclick = function () {
//     document.getElementById("demo").innerHTML = "Hello JavaScript 2! ";
// };
// function form1(){
//     var value = document.getElementById("form1").value;
// }


function show() {
    var inputs = document.getElementById("inputs");
    if (inputs.style.display == "inline") {
        inputs.style.display = "none";
    } else {
        inputs.style.display = "inline";
    }
}

function count() {
    var object1 = document.getElementById("obj1").value;
    var object2 = document.getElementById("obj2").value;

    var count = object1 * object2;
    document.getElementById("demo").innerText = count;
}