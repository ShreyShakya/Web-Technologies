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

// map usernames
const users = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "User" },
  { name: "Charlie", role: "Guest" }
];

const userName = users.map((user) => {
  return user.name
})

console.log(userName)

// add fee using map
const prices = [10, 20, 30, 40]

const totalCosts = prices.map((price) => {
  return "$" + price + 5
})

// add emails using map
const names = ["john", "sarah", "alex"]
const employeeEmails = names.map((name) => {
  return name + "@company.com"
})

console.log(employeeEmails)

// calculate stock vaues
const items = [
  { name: "Pen", price: 2, quantity: 10 },
  { name: "Marker", price: 5, quantity: 4 }
];

const stockValues = items.map((item) => {
  return item.price * item.quantity
})

console.log(stockValues)

// --------
const order = [
  { name: "Premium Coffee Beans", price: 20, quantity: 3, isFragile: false },
  { name: "Glass Coffee Mug", price: 15, quantity: 2, isFragile: true },
  { name: "Electric Milk Frother", price: 40, quantity: 1, isFragile: false }
];

let totalBill = 0;
let fragileItemsCount = 0;

order.forEach((bill) => {
  
  totalBill = totalBill + (bill.price * bill.quantity)
  
  if (bill.isFragile === true) {
  fragileItemsCount += 1
  }
})

const receiptNames = order.map((name) => {
  return name.name + " x" + name.quantity
})

console.log(totalBill)
console.log(receiptNames)
console.log(fragileItemsCount)

// grade, attendence, score
const students = [
  { name: "Aria", testScore: 85, attendance: 95, isNewStudent: false },
  { name: "Braxton", testScore: 60, attendance: 70, isNewStudent: true },
  { name: "Clara", testScore: 92, attendance: 100, isNewStudent: false }
];

let classTotalScore = 0;
let perfectAttendanceCount = 0;

students.forEach((student) => {
  classTotalScore += student.testScore 
  
  if (student.attendance === 100) {
    perfectAttendanceCount += 1
  }
})

const honorRollCertificates = students.map((student) => {
  if (student.testScore > 80) {
    return student.name + " - Grade: " + student.testScore
  }
})

console.log("Total Score: " + classTotalScore)
console.log("Perfect Attendence: " + perfectAttendanceCount)
console.log(honorRollCertificates)

// movie theater revenue
const movies = [
  { title: "Sci-Fi Odyssey", ticketPrice: 12, ticketsSold: 100, is3D: true },
  { title: "Romantic Comedy", ticketPrice: 10, ticketsSold: 50, is3D: false },
  { title: "Action Blast", ticketPrice: 15, ticketsSold: 200, is3D: true }
];

let totalTheaterRevenue = 0;
let threeDMovieCount = 0;

movies.forEach((movie) => {
  totalTheaterRevenue += movie.ticketPrice * movie.ticketsSold
  
  if(movie.is3D === true) {
    threeDMovieCount += 1
  }
})

const billboardTitles = movies.map((movie) => {
  return movie.title.toUpperCase()
})

console.log(totalTheaterRevenue)
console.log(threeDMovieCount)
console.log(billboardTitles)

// filter ()

let prices = [150, 45, 200, 30, 99]

const cheapPrices = prices.filter((amount) => {
    return amount < 100
})

console.log(cheapPrices)

// ----- 

const inventory = [
  { name: "Notebook", stock: 12 },
  { name: "Pencil", stock: 0 },
  { name: "Eraser", stock: 5 }
];

const availableItems = inventory.filter((item) => {
  return item.stock > 0
})

console.log(availableItems)

// -----

const team = [
  { name: "Alex", isAdmin: true },
  { name: "Blake", isAdmin: false },
  { name: "Charlie", isAdmin: true }
];

const adminUsers = team.filter((name) => {
  return name.isAdmin === true
})

console.log(adminUsers)

//  shothand arrow
//  const triples = numbers.map(num => num * 3)
//  const usernames = lowerNames.map(name => name.toLowerCase())
//  const adults = ages.filter(age => age >= 18)
//  const rawPrices = items.map(item => item.price)
//  names.forEach(name => console.log(name))

let students = [
  { name: 'Alex', score: 85 },
  { name: 'Becca', score: 92 },
  { name: 'Chris', score: 78 },
  { name: 'Diana', score: 88 }
]

const getHighScore = (arr) => {return arr.filter(student => student.score >= 85)}

console.log(getHighScore(students))

function getNames(manual) {
  return manual.map(student => student.name)
}

console.log(getNames(students))

// ------
let products1 = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 85 },
  { name: 'Monitor', price: 300 }
]

let products2 = [
  { name: 'Monitor', price: 1200 },
  { name: 'Keyboard', price: 25 },
  { name: 'Mouse', price: 85 },
  { name: 'Laptop', price: 300 }
]

// STANDARD FUNCTION
function getName(arr) {
  return arr.map(product => product.name)
}

console.log(getName(products1))

//NAMED ARROW FUNCTION
const productCheap = (arr1) => arr1.filter(product => product.price > 100)

console.log(productCheap(products2))

//INLINE ARROW store in variable
const doublePrice = products1.map(product => product.price * 2)
console.log(doublePrice)

//STANDARD FUNCTION
function doubleValue(arr2) {
  return arr2.filter(item => item.price > 50)
}
console.log(doubleValue(products2))

//NAMED ARROW FUNCTION
const upperCase = (arr) => arr.map(fname => fname.name.toUpperCase())
console.log(upperCase(products1))

// COMBINED
const expensiveProductNames = (productArray) => {
  return productArray
  .filter(item => item.price > 100)
  .map(item => item.name)
}

console.log(expensiveProductNames(products1))

// Write a function that:
// - Gets products that have stock > 0
// - Returns just their NAMES (not the whole objects)
// Use method chaininggit 

let products = [
  { id: 1, name: 'Laptop', stock: 15 },
  { id: 2, name: 'Mouse', stock: 0 },
  { id: 3, name: 'Keyboard', stock: 8 }
]

function inStock(arr) {
  return arr
    .filter(product => product.stock > 0)
    .map(product => product.name)
}

console.log(inStock(products))

// -------
const products = [
  {
    name: "Laptop",
    price: 1200,
    stock: 3,
    category: "Electronics"
  },
  {
    name: "Phone",
    price: 600,
    stock: 0,
    category: "Electronics"
  },
  {
    name: "Chair",
    price: 150,
    stock: 5,
    category: "Furniture"
  },
  {
    name: "Monitor",
    price: 400,
    stock: 2,
    category: "Electronics"
  },
  {
    name: "Desk",
    price: 300,
    stock: 0,
    category: "Furniture"
  }
]

let totalValue = 0

const availableProducts = products.filter(product => product.stock > 0).map(product => product.name)

const productNames = products.map(product => product.name.toUpperCase())

 function checkProduct(name) {
   if (name.stock > 0) {
     console.log(`${name.name} is available`)
   } else {
     console.log(`${name.name} is not available`)
   }
 }

function getProductPrice(index) {
  return products[index].price
}

const calculateTotal = (product) => {
  totalValue = totalValue + product.price * product.stock
}

products.forEach(calculateTotal)
products.forEach(checkProduct)
console.log(availableProducts)
console.log(productNames)
console.log(getProductPrice(2))
console.log(totalValue)

let employees = [
  { id: 1, name: 'Alice', salary: 50000, department: 'Engineering' },
  { id: 2, name: 'Bob', salary: 45000, department: 'Sales' },
  { id: 3, name: 'Charlie', salary: 60000, department: 'Engineering' },
  { id: 4, name: 'Diana', salary: 55000, department: 'HR' },
  { id: 5, name: 'Eve', salary: 48000, department: 'Sales' }
]

// EXERCISE 1: Standard function
// Gets names of employees in Engineering department

function engineeringNames(arr) {
  return arr.filter(employee => employee.department === 'Engineering').map(employee => employee.name)
}

console.log(engineeringNames(employees))

// EXERCISE 2: Named arrow function
// Gets employees with salary > 50000

const highEarners = (arr) => { return arr.filter(employee => employee.salary > 50000).map(employee => employee.name)}

console.log(highEarners(employees))

// EXERCISE 3: Inline arrow (store in variable)
// Get all employee names (just the names, not objects)

const allNames = employees.map(employee => employee.name)

console.log(allNames)

// EXERCISE 4: Standard function with chaining
// Get names of Sales employees, all UPPERCASE

function salesDepartmentNamesUppercase(arr) {
  return arr.filter(employee => employee.department === 'Sales').map(employee => employee.name.toUpperCase())
}

console.log(salesDepartmentNamesUppercase(employees))

// EXERCISE 5: Named arrow function with chaining
// Get salaries of Engineering employees, add 5000 to each

const engineeringSalariesWithBonus = (arr) => arr.filter(employee => employee.department === 'Engineering').map(employee => employee.salary + 5000)

console.log(engineeringSalariesWithBonus(employees))

// EXERCISE 6: HARDEST - Combine everything
// Write a function that:
// - Takes an array of employees
// - Filters for Sales department ONLY
// - Maps to get salaries
// - ADDS 10% bonus to each salary (multiply by 1.1)
// Use method chaining

function salesWithBonus(arr) {
  return arr.filter(employee => employee.department === 'Sales').map(employee => employee.salary * 1.1)
}

console.log(salesWithBonus(employees))




