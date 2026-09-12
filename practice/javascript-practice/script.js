// Print all numbers
let numbers = [12, 25, 8, 40, 17]

for (let i=0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// Print only the even-indexed items
let names = ["John", "Sarah", "Mike", "Lisa", "David", "Alex"]

for (let i=0; i < names.length; i=i+2) {
  console.log(names[i])
}

// Add 10 to every number and print the result
let numbers1 = [5, 15, 25, 35, 45]

for (let i=0; i < numbers1.length; i++) {
  console.log(numbers1[i] + 10)
}

// Change the array
let numbers2 = [10, 20, 30, 40, 50]

for (let i=0; i < numbers2.length; i++) {
  numbers2[i] = numbers2[i] * 2;
}

console.log(numbers2)

// Function + array + index
let users = ["john", "doe", "alex", "mike"]

function getUser(index) {
  return users[index];
}

console.log(getUser(2))
