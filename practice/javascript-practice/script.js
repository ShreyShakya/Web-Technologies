const myHeading = document.querySelector("h1")
const myName = document.getElementById("nameInput")
const age = document.getElementById("ageInput")
const myBtn = document.querySelector("button")
const message = document.querySelector("p")

myBtn.addEventListener("click", function() {
  if (myName.value === "") {
    alert("Please enter your name!")
  } else if (age.value === "" || age.value < 18) {
    alert("Must be at least 18 years old")
  } else {
  myHeading.textContent = "Registration Complete"
  message.textContent = `welcome ${myName.value}`
  }
})