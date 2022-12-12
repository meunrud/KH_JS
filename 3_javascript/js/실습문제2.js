let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

const sum = function (n1, n2) {
    return n1 + n2;
};

result.innerHTML = sum(num1, num2);
