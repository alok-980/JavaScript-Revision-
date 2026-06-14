let btn = document.querySelector("button")
let bulb = document.querySelector(".light")

// with the help of if-else
btn.addEventListener("click", () => {
    if (btn.textContent === "On") {
        btn.textContent = "Off"
        bulb.style.backgroundColor = "yellow"
        bulb.style.border = "1px solid white"
        bulb.style.boxShadow = "0px 0px 20px 10px rgba(255, 255, 0, 0.6)"

        console.log("Bulb On")
    } else {
        btn.textContent = "On"
        bulb.style.backgroundColor = "white"
        bulb.style.border = "2px solid black"
        bulb.style.boxShadow = "none"

        console.log("Bulb Off")
    }
})

// with the help of classList
btn.addEventListener("click", () => {
    if (bulb.classList.toggle("lightUp")) {
        btn.textContent = "Off"
    } else {
        btn.textContent = "On"
    }
})