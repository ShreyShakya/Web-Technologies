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

// combine into one single loop

