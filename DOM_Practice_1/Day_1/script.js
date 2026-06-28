// Q - 1
// document.querySelector("#title").textContent = "Welcome to JavaScript DOM"

// Q - 2
// let changeColor = document.querySelector("#btn")
// let body = document.querySelector("body")

// changeColor.addEventListener("click", () => {
//     body.style.backgroundColor = "lightblue"
// })

//  Q - 3
// let inp = document.querySelector("#username")
// let btn = document.querySelector(".btn")
// let p = document.querySelector("#output")

// btn.addEventListener("click", () => {
//     p.textContent = inp.value
// })

// Q - 4
// let p = document.querySelector("#message")
// let tglBtn = document.querySelector(".tglBtn")

// tglBtn.addEventListener("click", () => {
//     p.style.display === "none" ? p.style.display = "" : p.style.display = "none"
// })

// Q - 5
// let ul = document.querySelector("#list")
// let btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//     let li = document.createElement("li")
//     li.textContent = "Banana"

//     ul.appendChild(li)
// })

// Q - 6
// let removeBtn = document.querySelector("button")

// removeBtn.addEventListener("click", () => {
//     removeBtn.parentElement.remove()
// })

// Q - 7
// let h1 = document.querySelector("h1")
// let incBtn = document.querySelector(".inc")
// let decBtn = document.querySelector(".dec")

// let val = 0

// let fun = () => {
//     h1.textContent = val
// }
// fun()

// incBtn.addEventListener("click", () => {
//     val = val + 1
//     fun()
// })

// decBtn.addEventListener("click", () => {
//     val = val - 1
//     fun()
// })

// Q - 8
// let textCount = document.querySelector("textarea")
// let p = document.querySelector("p")

// textCount.addEventListener("input", () => {
//     p.textContent = `Characters: ${textCount.value.length}`
// })

// Q - 9
// let inp = document.querySelector("input")
// let btn = document.querySelector("button")
// let ul = document.querySelector("ul")

// btn.addEventListener("click", () => {
//     let li = document.createElement("li")
//     if(inp.value === "") {
//         alert("please fill the input box")
//         return
//     }
//     li.textContent = inp.value
//     ul.appendChild(li)
//     inp.value = ""
// })

// Q - 10
// const imgUrlArr = [
//     "https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1782296862749-1e1b6ef35f0e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1782542549365-545809c39691?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1782520789078-97933c5c9487?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1781808314914-5059d7367775?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
// ]

// let img = document.querySelector("img")
// let btn = document.querySelector("button")

// let idx = 0

// btn.addEventListener("click", () => {
//     if (idx >= imgUrlArr.length) {
//         idx = 0
//     } else {
//         img.setAttribute("src", `${imgUrlArr[idx]}`)
//         console.log(img.getAttribute("src"))
//         idx += 1
//     }
// })

// Q - 11
// let btn = document.querySelector("button")
// let body = document.querySelector("body")

// btn.addEventListener("click", () => {
//     if(btn.textContent === "🌙 Dark Mode") {
//         btn.textContent = "☀️ Light Mode"
//         body.style.backgroundColor = "black"
//         btn.style.border = "2px solid white"
//         btn.style.backgroundColor = "gray"
//         btn.style.color = "white"
//     } else {
//         btn.textContent = "🌙 Dark Mode"
//         body.style.backgroundColor = ""
//         btn.style.border = ""
//         btn.style.backgroundColor = ""
//         btn.style.color = ""
//     }
// })

// Q - 12
let nameInp = document.querySelector(".nameInp")
let courseInp = document.querySelector(".courseInp")
let addStudent = document.querySelector("#addBtn")
let studentCard = document.querySelector("#students")

let students = [
]

let renderCard = () => {
    studentCard.innerHTML = ""

    students.forEach((student, idx) => {
        const card = document.createElement("div")
        card.classList = "card"

        const h1 = document.createElement("h1")
        h1.textContent = `${student.name}`

        const p = document.createElement("p")
        p.textContent = `${student.course}`

        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete"

        card.appendChild(h1)
        card.appendChild(p)
        card.appendChild(delBtn)

        studentCard.appendChild(card)

        delBtn.addEventListener("click", () => {
            students.splice(idx, 1)
            renderCard()
        })
    })

    let h2 = document.createElement("h2")
    h2.textContent = `Total student : ${students.length}`
    studentCard.appendChild(h2)
}

renderCard()

addStudent.addEventListener("click", () => {

    if (nameInp.value.trim() === "" || courseInp.value.trim() === "") {
        alert("Please fill the input field")
        return
    }

    let student = {
        name: nameInp.value.trim(),
        course: courseInp.value.trim()
    }

    students.push(student)

    console.log(students)
    renderCard()

    nameInp.value = ""
    courseInp.value = ""
})
