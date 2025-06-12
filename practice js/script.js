function cal() {
  let x = Number(prompt("Enter the first number"));
  let y = Number(prompt("Enter the second number"));
  let operand = prompt("Enter operation (+, -, /, *):");
  let res;

  if (operand === '+') {
    res = x + y;
  } else if (operand === '-') {
    res = x - y;
  } else if (operand === '/') {
    if (y === 0) {
      res = "Cannot divide by zero!";
    } else {
      res = x / y;
    }
  } else if (operand === '*') {
    res = x * y;
  } else {
    res = "Invalid operator!";
  }
  alert("Result: " + res);
}
cal(); 
