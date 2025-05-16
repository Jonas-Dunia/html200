// Step 1: Create an array with at least 5 strings
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log('Initial array:', fruits);

// Step 2: Add an element to the end of the array
fruits.push('fig');
console.log('After adding an element:', fruits);

// Step 3: Remove the third element (index 2, because arrays are 0-indexed)
fruits.splice(2, 1);
console.log('After removing third element:', fruits);

// Step 4: Create a string from the elements, comma-separated
let fruitString = fruits.join(', ');
console.log('Comma-separated string:', fruitString);