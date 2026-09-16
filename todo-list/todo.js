const todoInput = document.querySelector("input")
const submitBtn = document.querySelector("button")
const todoContainer = document.querySelector("ul")

let taskListData = []

submitBtn.addEventListener("click", function (event) {
  event.preventDefault()

  if (todoInput.value.trim() === "") {
    return;
  }

  const notesList = document.createElement("li")
  notesList.textContent = todoInput.value

  const removeBtn = document.createElement("button")
  removeBtn.textContent = "x"

  removeBtn.addEventListener("click", function () {
    notesList.remove()
  })

  notesList.append(removeBtn)
  todoContainer.append(notesList)
  todoInput.value = ""
})