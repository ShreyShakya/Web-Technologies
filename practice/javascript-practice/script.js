const myHeading = document.querySelector("h1");
const myBtn = document.getElementById("myButton");
const input = document.querySelector("input")
myHeading.textContent = "Hello Shrey!"
myBtn.textContent = "Dont click"
myBtn.style.backgroundColor = "yellow"

myBtn.addEventListener("click", function() {
  alert("Hello!")
})

input.addEventListener("keydown", function(event) {
  // myHeading.textContent = input.value;
  if (event.key === "Enter") {
    myHeading.textContent = input.value
  }
})