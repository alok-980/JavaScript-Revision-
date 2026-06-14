1 - getAttribute, setAttribute, hasAttribute, removeAttribute

// we can khow how many properties in attribute
const h1 = document.querySelector("#id1")

// getAttribute
let res = h1.getAttribute("class")
console.log(res)

// setAttribute
h1.setAttribute("width", "200")
console.log(h1.getAttribute("width"))

// removeAttribute
h1.removeAttribute("width")
console.log(h1.getAttribute("width"))

// hasAttribute
console.log(h1.hasAttribute("width"))

// we can make custom attribute using data- name exm.. data-user-id, data-simla
let userCard = document.querySelector("#id2")
console.log(userCard.getAttribute("data-user-id"))
// change the value of custom attribute using dataset
userCard.dataset.userId = "678"
console.log(userCard.getAttribute("data-user-id"))

// input.value vs input.getAttribute("value") 
// input.value inpute se latest value lake deta hai but imput.getAttribute vhi static value deta hai har bar
const inp = document.querySelector("input")
const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    console.log("input.value -> ", inp.value)
    console.log("input.getAttribute -> ", inp.getAttribute("value"))
})

// 2 - creating, incerting and removing element

// createElement
let footer = document.createElement("footer")
console.log(footer)

// insertion ----
//   appendChild -- old
//   append -- new

// appendChild
document.body.appendChild(footer)

let h5 = document.createElement("h5")
console.log(h5)
h5.textContent = "hlo"
footer.appendChild(h5)

let main = document.querySelector("main")

// appendChild me hame bar baar appendChild type karke tag append karna pad raha hai but 
// append me ham ye baar append type karke sare tag ko comma se saperate karke insertion kar sakte hai
// but abhi jaise abhi hame main ko select kiya hai to usi me sirf hoga
// appendChilde ke liye hame baar baar main.append child likhna pad raha hai 
// but append me ham main.append(section, span) insertion kar sakte hai

// jaise abhi hame span tag banaya or append ki help se add kiya
let section = document.createElement("section")
let span = document.createElement("span")
span.innerHTML = "this is <i>dynamic...</i>"

// appendChild
// main.appendChild(section)
// main.appendChild(span)

// ------- appen, remove, insert ------------
// append
main.append(section, span)

// remove element
main.removeChild(span)

// insertBefore
let main = document.querySelector("main")

// const box1 = document.querySelector(".box1")
// const box2 = document.querySelector(".box2")
// const box3 = document.querySelector(".box3")

const box1 = document.createElement("div")
const box2 = document.createElement("div")
const box3 = document.createElement("div")

main.append(box1, box2, box3)
box1.classList.add("box")
box2.classList.add("box")
box3.classList.add("box")

console.log(box1)
box1.style.backgroundColor = "yellow"
box2.style.backgroundColor = "blue"

// insertBefore - old API
// insertBefore - ke phle box3 ko box1 ke phle
main.insertBefore(box3, box1)

// new APIs - prepend, before, after
// prepend - sabse phle
main.prepend(box2)

// before - ke phle
box1.before(box2)

// after - ke baad
box3.after(box2)

// replace
main.replaceChild(box3, box1)
box1.replaceWith(box3)

// ---------- old APIs --------
appendChild, insertBefore, removeChilde, replaceChild

// ---------- new APIs --------
append, prepend, after, before, replaceWith



