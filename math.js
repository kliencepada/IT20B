function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

console.log(add(2, 3));        // 8
console.log(subtract(2, 3));  // 6
console.log(multiply(2, 3));   // 42
console.log(divide(2, 3));    // 4
