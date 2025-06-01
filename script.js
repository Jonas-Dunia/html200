let balance = 1000; // Starting balance
let running = true;

while (running) {
  let action = prompt("Choose an action:\n(Q) Quit\n(W) Withdraw\n(D) Deposit\n(B) View Balance").toUpperCase();

  if (action === "Q") {
    running = false;
    alert("Thank you for banking with us.");
  } else if (action === "W") {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));
    if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount.");
    } else if (amount > balance) {
      alert("Insufficient funds.");
    } else if (balance - amount < 300) {
      let confirmLow = confirm(`This will leave your balance below $300. Are you sure?`);
      if (confirmLow) {
        balance -= amount;
        alert(`Withdrawal successful. New balance: $${balance.toFixed(2)}`);
      }
    } else {
      balance -= amount;
      alert(`Withdrawal successful. New balance: $${balance.toFixed(2)}`);
    }
  } else if (action === "D") {
    let amount = parseFloat(prompt("Enter amount to deposit:"));
    if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount.");
    } else if (amount > 50000) {
      alert("Deposit limit is $50,000.");
    } else {
      balance += amount;
      alert(`Deposit successful. New balance: $${balance.toFixed(2)}`);
    }
  } else if (action === "B") {
    alert(`Current balance: $${balance.toFixed(2)}`);
  } else {
    alert("Invalid input. Please choose Q, W, D, or B.");
  }
}