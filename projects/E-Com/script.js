let createProduct = document.querySelector(".crt-pro")
let formDiv = document.querySelector(".form")
let clsBtn = document.querySelector(".close-btn")
let form = document.querySelector("form")
let productDiv = document.querySelector(".product")

let productList = []

let updateIdx = null;
let deleteIdx = null;

let viewList = () => {

    productDiv.innerHTML = ""

    productList.forEach((ele) => {
        productDiv.innerHTML += `
            <div class="pro-card">
                <div class="card-img">
                        <img src="${ele.image}" alt="product image>
                </div>

                <div class="card-text">
                    <h3>Name - ${ele.productName}</h3>
                    <p>Price - ${ele.price}</p>
                    <p>Description - ${ele.description}</p>
                </div>

                <div class="btns">
                    <button onClick="updateProduct('${ele.id}')" class="up-btn">Update</button>
                    <button onClick="deleteProduct('${ele.id}')" class="del-btn">Delete</button>
                </div>
            </div>
        `
    })
}

viewList()

createProduct.addEventListener("click", () => {
    formDiv.style.display = "flex"
})

clsBtn.addEventListener("click", () => {
    formDiv.style.display = "none"
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let productName = event.target[0].value
    let description = event.target[1].value
    let price = event.target[2].value
    let image = event.target[3].value

    if(productName.trim() === "" || description.trim() === "" || price.trim() === "" || image === "") {
        alert("Please fill all the fields")
        return
    }

    let productObj = {
        id: Date.now(),
        productName,
        description,
        price,
        image
    }

    if(updateIdx !== null) {
        productList[updateIdx] = productObj
        updateIdx = null
    } else {
        productList.push(productObj)
    }

    viewList()

    console.log(productList)

    form.reset()
    formDiv.style.display = "none"
})

const updateProduct = (productId) => {

    let product = productList.find((ele) => ele.id == productId)
    updateIdx = productList.findIndex((ele) => ele.id == productId)

    formDiv.style.display = "flex"

    form[0].value = product.productName
    form[1].value = product.description
    form[2].value = product.price
    form[3].value = product.image 
}

const deleteProduct = (productId) => {
    let product = productList.find((ele) => ele.id == productId)
    deleteIdx = productList.findIndex((ele) => ele.id == productId)

    productList.splice(deleteIdx, 1)

    deleteIdx = null

    viewList()
}