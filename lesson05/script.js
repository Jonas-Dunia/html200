function squareNumber() {
  const input = prompt("Enter a number:");
  const number = parseFloat(input);

  if (!isNaN(number)) {
    const result = number * number;
    alert("The square of " + number + " is " + result);
  } else {
    alert("That's not a valid number!");
  }
}

document.getElementById("squareButton").addEventListener("click", squareNumber);

function multiplyNumbers() {
  const input1 = prompt("Enter the first number:");
  const input2 = prompt("Enter the second number:");

  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  if (!isNaN(num1) && !isNaN(num2)) {
    const product = num1 * num2;
    alert("The product is " + product);
  } else {
    alert("One or both inputs were not valid numbers.");
  }
}

document.getElementById("multiplyButton").addEventListener("click", multiplyNumbers);