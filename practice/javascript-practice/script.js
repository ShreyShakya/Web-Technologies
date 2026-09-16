// const myHeading = document.querySelector("h1")
// const myName = document.getElementById("nameInput")
// const age = document.getElementById("ageInput")
// const myBtn = document.querySelector("button")
// const message = document.querySelector("p")

// myBtn.addEventListener("click", function() {
//   if (myName.value === "") {
//     alert("Please enter your name!")
//   } else if (age.value === "" || age.value < 18) {
//     alert("Must be at least 18 years old")
//   } else {
//   myHeading.textContent = "Registration Complete"
//   message.textContent = `welcome ${myName.value}`
//   }
// })

// const itemInput = document.getElementById("itemInput")
// const addBtn = document.getElementById("addBtn")
// const itemList = document.getElementById("itemList")

// addBtn.addEventListener("click", function () {

//   if (itemInput.value === "") {
//     alert("Please enter a valid word")
//     return
//   }

//   const newItem = document.createElement("li")
//   newItem.textContent = itemInput.value

//   const removeBtn = document.createElement("button")
//   removeBtn.textContent = "x"

//   removeBtn.addEventListener("click", function () {
//     newItem.remove()
//   })

//   newItem.append(removeBtn)
//   itemList.append(newItem)
//   console.log(itemList)
//   itemInput.value = ""
// })
