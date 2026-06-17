let usreName = document.querySelector("#name")
let userAge = document.querySelector("#age")
let imageUrl = document.querySelector("#image")
let submit = document.querySelector("button")

let userCard = document.querySelector(".user-card")
let form = document.querySelector("form")

let delBtn = document.querySelector(".del-btn")
let editBtn = document.querySelector(".edit-btn")

const users = [
    {
        name: "Alok",
        age: 22,
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "Rahul",
        age: 24,
        image: "https://i.pravatar.cc/150?img=2"
    },
    {
        name: "Priya",
        age: 21,
        image: "https://i.pravatar.cc/150?img=3"
    }
];

let cardUi = () => {

    userCard.innerHTML = ""

    users.forEach((user, idx) => {
        userCard.innerHTML += `
        <div class="inner-div" data-id="${idx}">
                <img src="${user.image}"
                    alt="">
                <h5>Name - ${user.name}</h5>
                <h5>Age - ${user.age}</h5>
                <div class="btn-div">
                    <button class="edit-btn">edit</button>
                    <button class="del-btn">delete</button>
                </div>
        </div>
    `
    })
}

cardUi()

submit.addEventListener("click", (e) => {
    e.preventDefault()

    if (usreName.value.trim() === "" || userAge.value.trim() === "" || imageUrl.value === "") {
        alert("please fill the all fields")
        return
    }

    users.push({
        name: usreName.value,
        age: userAge.value,
        image: imageUrl.value
    })

    cardUi()

    form.reset()
})

userCard.addEventListener("click", (e) => {
    if(e.target.classList.contains("del-btn")) {
        let card = e.target.closest(".inner-div")

        let id = card.dataset.id

        users.splice(id, 1)
    }

    cardUi()
})

