let inp = document.querySelector(".inputBox")
let btn = document.querySelector(".addBtn")
let task = document.querySelector(".task")

btn.addEventListener("click", () => {
    let val = inp.value

    if (val.trim() === "") return

    // ul
    let ul = document.createElement("ul")
    let isDone = false

    // set ul text
    let text = document.createElement("span")
    text.textContent = val

    // button
    let div = document.createElement("div")

    // edit btn
    let editBtn = document.createElement("button")
    editBtn.textContent = "edit"
    editBtn.classList.add("btn")
    editBtn.classList.add("edit")

    // delete btn
    let delBtn = document.createElement("button")
    delBtn.textContent = "delete"
    delBtn.classList.add("btn")
    delBtn.classList.add("del")

    // isDone
    let doneBtn = document.createElement("button")
    doneBtn.textContent = "done"
    doneBtn.classList.add("btn")

    // edit task
    editBtn.addEventListener("click", () => {
        let editedText = prompt("Edit task: ", text.textContent)

        if (editedText.trim() === "") return

        text.textContent = editedText
    })

    // delete task
    delBtn.addEventListener("click", () => {
        task.removeChild(ul)
        console.log("delete")
    })

    div.append(editBtn, delBtn)
    ul.append(text, div)
    task.append(ul)

    inp.value = ""
})