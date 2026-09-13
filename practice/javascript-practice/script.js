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

// print only safe 

let rooms = [
  { name: "Kitchen", safe: true },
  { name: "Basement", safe: false },
  { name: "Lobby", safe: true }
]

rooms.forEach(onlySafe)

function onlySafe(check){
  if (check.safe === true) {
    console.log(check.name + " is safe")
    
  }
}

// Function + array + index
let users = ["john", "doe", "alex", "mike"]

function getUser(index) {
  return users[index];
}

console.log(getUser(2))

//update vip list
let accounts = [
  { name: "Alice", balance: 500 },
  { name: "Bob", balance: 1200 },
  { name: "Charlie", balance: 300 }
]
let vipList = []

accounts.forEach(updateList)

function updateList(user) {
  if (user.balance > 1000) {
    vipList.push(user.name)
  }
}

console.log(vipList)

// update list & guest count
let attendees = [
  { name: "Alex", ticket: { type: "Standard", guests: 0 } },
  { name: "Becca", ticket: { type: "VIP", guests: 2 } },
  { name: "Chris", ticket: { type: "Standard", guests: 1 } },
  { name: "Diana", ticket: { type: "VIP", guests: 0 } }
]

// Trackers you need to update:
let vipNames = []
let totalPeopleAtFestival = 0

attendees.forEach(updateNames)
attendees.forEach(totalPeople)

function updateNames(user){
  if (user.ticket.type === "VIP") {
    vipNames.push(user.name)
  }
}

function totalPeople(user2){
  totalPeopleAtFestival = totalPeopleAtFestival + (1+ user2.ticket.guests)
}

console.log(vipNames)
console.log(totalPeopleAtFestival)

// rank racers

let racers = ["Alice", "Bob", "Charlie"]

racers.forEach(ranker)

function ranker(name, i) {
  console.log("Rank " + (i + 1) + ": " + name)
}

// add id to null

let products = [
  { name: "Laptop", id: null },
  { name: "Phone", id: null },
  { name: "Tablet", id: null }
]

products.forEach(idGiver)

function idGiver(num, i) {
  num.id = i
}

console.log(products)

// 50% off if even

let bill = [10, 20, 30, 40]

bill.forEach(discountEven)

function discountEven(num, i) {
  if (num % 2 === 0) {
    bill[i] = num * 0.5
  }
}

console.log(bill)

//get user name using index
let users = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Mike", age: 22 },
  { name: "Alex", age: 28 }
]

const getUser = (user) => {
  return users[user].name
}

console.log(getUser(2))

// get price using index
let products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 }
]

const getPrice = (product) => {
  return products[product].price
}

console.log(getPrice(3))

// get age using index
let users = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Mike", age: 22 },
  { name: "Alex", age: 28 }
]

const getAge = (user) => {
  return users[user].age
}

console.log(getAge(2))

// arrow function to print age above 18
let users = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 17 },
  { name: "Mike", age: 30 }
]

const ageCheck = (user) => {
  if (user.age >= 18) {
    console.log(user.name)
  }
}

users.forEach(ageCheck)


// double and store in new array
let numbers = [10, 20, 30, 40]
let doubledNumbers = []

const doubleIt = (number) => {
  doubledNumbers.push(number * 2)
}

numbers.forEach(doubleIt)

console.log(doubledNumbers)

// arrow and nested objects
let products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 100 }
]

let expensiveProducts = []

const checkValue = (product) => {
  if (product.price >= 500) {
    expensiveProducts.push(product.name)
  }
}

products.forEach(checkValue)

console.log(expensiveProducts)

// arrow and nested objects
let users = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Mike", age: 22 }
]

let names = []

const ageCheck = (user) => {
  if (user.age >= 25) {
    names.push(user.name)
  }
}

users.forEach(ageCheck)

console.log(names)

// arrow function to get total value
let products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Mouse", price: 50 }
]

let total = 0

const totalValue = (product) => {
  total = total + product.price
}

products.forEach(totalValue)

console.log(total)

// list vips & calculate total guests

let attendees = [
  {
    name: "Alex",
    age: 22,
    ticket: { type: "VIP", guests: 2 }
  },
  {
    name: "Becca",
    age: 17,
    ticket: { type: "Standard", guests: 1 }
  },
  {
    name: "Chris",
    age: 25,
    ticket: { type: "Standard", guests: 0 }
  },
  {
    name: "Diana",
    age: 30,
    ticket: { type: "VIP", guests: 1 }
  }
]

let vipNames = []
let totalPeople = 0

const processAttendee = (attendee) => {
  if (attendee.ticket.type === "VIP") {
    vipNames.push(attendee.name)
  }
  
  totalPeople = totalPeople + 1 + attendee.ticket.guests
  
   if (attendee.age >= 18) {
    console.log(attendee.name + " can go")
  } else {
    console.log(attendee.name + " cant go")
  }
  
}
 
attendees.forEach(processAttendee)

console.log(vipNames)
console.log(totalPeople)

// sorting in appropriate arrays
let products = [
  {
    name: "Laptop",
    price: 1200,
    stock: 5,
    category: { type: "Electronics", warranty: "2 years" }
  },
  {
    name: "Book",
    price: 15,
    stock: 50,
    category: { type: "Books", warranty: "None" }
  },
  {
    name: "Headphones",
    price: 150,
    stock: 0,
    category: { type: "Electronics", warranty: "1 year" }
  },
  {
    name: "Desk Chair",
    price: 300,
    stock: 8,
    category: { type: "Furniture", warranty: "3 years" }
  },
  {
    name: "Notebook",
    price: 5,
    stock: 200,
    category: { type: "Books", warranty: "None" }
  }
]

let inStock = []
let totalRevenue = 0
let noWarrantyCount = 0

const checkStock = (product) => {
  // prints which electronic is in what category
  console.log (product.name + " is in " + product.category.type)
  // pushes products which are in stock to inStock array
  if (product.stock > 0) {
    inStock.push(product.name)
  }
  // calculates the total revenue
  totalRevenue = totalRevenue + product.price * product.stock
  // prints products that are electronics and have a warranty
  if (product.category.type === "Electronics" && product.category.warranty != "None") {
    console.log("Electronics with warranty: " + product.name)
  }
  // no warranty count
  if (product.category.warranty === "None") {
    noWarrantyCount = noWarrantyCount + 1
  }
}

products.forEach(checkStock)

console.log("Products in stock: " + inStock)
console.log("total revenue: " + totalRevenue)
console.log("Products with no warranty: " + noWarrantyCount)