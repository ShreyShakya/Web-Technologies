const displayNum = document.querySelector("#display")
const btn = document.querySelector("#enter")
const clearBtn = document.querySelector("#clear")
const input = document.querySelector("input")
const sumD = document.querySelector("#sum")
const avgD = document.querySelector("#avg")
const highD = document.querySelector("#highest")
const lowD = document.querySelector("#lowest")

let arr = []

const highest = (arr) => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

const lowest = (arr) => {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

btn.addEventListener("click", function () {

    if (Number.isNaN(Number(input.value)) || input.value === "") {
        alert('Please enter a valid number')
        input.value = ""
        return
    }

    for (let i = 0; i < arr.length; i++) {
        if (Number(input.value) === arr[i]) {
            alert('Number already exists')
            input.value = ""
            return
        }
    }

    arr.push(Number(input.value))

    displayNum.textContent = `Entered Numbers: ${arr}`

    input.value = ""

    const sum = arr.reduce((a, b) => a + b, 0)

    const average = sum / arr.length

    sumD.textContent = `Sum: ${sum}`

    avgD.textContent = `Average: ${average}`


    highD.textContent = `Highest: ${highest(arr)}`

    lowD.textContent = `Lowest: ${lowest(arr)}`
})

clearBtn.addEventListener("click", function () {
    arr = []

    displayNum.textContent = `Entered Numbers: `
    sumD.textContent = `Sum: `
    avgD.textContent = `Average: `
    highD.textContent = `Highest: `
    lowD.textContent = `Lowest: `
})