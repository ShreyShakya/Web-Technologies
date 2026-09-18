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

function renderUI() {
  todoContainer.innerHTML = ""
  
  taskListData.forEach((taskText, index) => {
    const notesList = document.createElement("li")
    notesList.textContent = taskText

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "x"

    removeBtn.addEventListener("click", function () {
      taskListData.splice(index, 1)
      saveData()
      renderUI()
    })

    notesList.append(removeBtn)
    todoContainer.append(notesList)
  })
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault()

  if (todoInput.value.trim() === "") {
    return;
  }

  taskListData.push(todoInput.value)
  saveData()
  renderUI()
  todoInput.value = ""
})

loadData()
renderUI()