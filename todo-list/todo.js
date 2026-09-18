const todoInput = document.querySelector("input")
const submitBtn = document.querySelector("button")
const todoContainer = document.querySelector("ul")

let taskListData = []

function saveData() {
  localStorage.setItem('todos', JSON.stringify(taskListData))
}

function loadData() {
  taskListData = JSON.parse(localStorage.getItem('todos')) || []
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault()

  if (todoInput.value.trim() === "") {
    return;
  }

  taskListData.push(todoInput.value)
  saveData()

  const notesList = document.createElement("li")
  notesList.textContent = todoInput.value

  const removeBtn = document.createElement("button")
  removeBtn.textContent = "x"

  removeBtn.addEventListener("click", function () {
    const index = taskListData.indexOf(notesList.textContent.replace("x", "").trim())
    
    if (index > -1) {
      taskListData.splice(index, 1)
      saveData()
    }
    
    notesList.remove()
  })

  notesList.append(removeBtn)
  todoContainer.append(notesList)
  todoInput.value = ""
})