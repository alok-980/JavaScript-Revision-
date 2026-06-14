// 1 - Find Expenshive Product

// let prices = [100, 250, 500, 150, 700]
// let premium = prices.filter((price) => price > 300)
// console.log(premium)

// 2 - Last studen in class

// let student = ['Aman', 'Ritik', 'Priya', 'Rahul']
// console.log(student[student.length - 1])

// 3 - Add new product

// let products = ['Laptop', 'Mouse', 'Keyboard']
// products.push('Monitor')
// console.log(products)

// 4 - Remove last notification

// let notifications = [
//     'Order Placed',
//     'Order Shipped',
//     'Order Delivered'
// ]
// notifications.pop()
// console.log(notifications)

// 5 - Check user exists

// let users = ['Aman', 'Ritik', 'Priya']
// console.log(users.includes('Ritik') ? true : false)

// 6 - Conver marks to percentage

// let marks = [80, 90, 70]
// let newArr = []
// marks.map((mark) => {
//     newArr.push(`${mark}%`)
// })
// console.log(newArr)

// 7 - Count product

// let cart = ['Mouse', 'Keyboard', 'Monitor', 'Laptop']
// console.log(cart.length)

// 8 - Student Average

// let marks = [80, 90, 70, 85, 95]
// let total = marks.reduce((acc, val) => {
//     return acc + val
// }, 0)
// let avg = total/marks.length
// console.log(avg)

// 9 - Return all even number

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let even = numbers.filter((num) => num % 2 == 0)
// console.log(even)

// 10 - Product search

// let products = [
//     'Laptop',
//     'Mouse',
//     'Keyboard',
//     'Monitor'
// ]
// console.log(products.indexOf('Keyboard'))

// 11 - Total revenue

// let sales = [500, 700, 1000, 300]
// let total = sales.reduce((acc, val) => {
//     return acc + val
// }, 0)
// console.log(total)

// 12 - Uppercase username

// let users = ['ritik', 'aman', 'priya']
// let user = users.map((user) => user.toUpperCase())
// console.log(user)

// 13 - Find first adult

// let ages = [12, 15, 17, 19, 22]
// console.log(ages.find((age) => age > 18))

// 14 - Positive number check

// let nums = [5, 8, 10, 3]
// console.log(nums.every((num) => num >= 0))

// 15 - Most frequent number

// let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1]
// let frq = numbers.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1
//     return acc
// }, {})
// let mostFrequent = Object.keys(frq).reduce((acc, val) => frq[acc] > frq[val] ? acc : val)
// console.log(mostFrequent)

// 16 - Second largest number

// let nums = [10, 50, 20, 80, 40]
// let secondLarges = 0
// let largest = 0
// nums.map((num) => {
//     if(num > largest) {
//         secondLarges = largest
//         largest = num
//     }
// })
// console.log(secondLarges)

// 17 - Remove duplicate

// let ids = [1, 2, 2, 3, 4, 5, 5]
// let newArr = []
// ids.map((id) => {
//     if(!newArr.includes(id)) {
//         newArr.push(id)
//     }
// })
// console.log(newArr)

// 18 - Longest word

// let words = [
//     'JavaScript',
//     'HTML',
//     'CSS',
//     'Programming',
// ]
// let longestWord
// let long = 0
// words.map((word) => {
//     if(word.length > long) {
//         longestWord = word
//         long = word.length
//     }
// })
// console.log(longestWord)

// 19 - Rotate array right

// let nums = [1, 2, 3, 4, 5]
// let last = nums.pop()
// nums.unshift(last)
// console.log(nums)

// 20 - Best selling products

// let sales = [
//     'Mouse',
//     'Keyboard',
//     'Mouse',
//     'Laptop',
//     'Mouse',
//     'Keyboard'
// ]
// let frq = sales.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1
//     return acc
// }, {})
// let mostSale = Object.keys(frq).reduce((acc, val) => frq[acc] > frq[val] ? acc : val)
// console.log(mostSale)

// ----------------------------------------
// Object
// ----------------------------------------

// 1 - Access user name

// let user = {
//     name: "Ritik",
//     age: 21,
//     city: "Bhopal"
// }
// console.log(user.name)

// 2 - Update user age

// let user = {
//     name: 'Ririk',
//     age: 21
// }
// user.age = 22
// console.log(user)

// 3 - Add country

// let user = {
//     name: "Ririk",
//     city: "Bhopal"
// }
// user.country = "India"
// console.log(user)

// 4 - Delete property

// let user = {
//     name: "Ritik",
//     age: 21,
//     password: "12345"
// }
// delete user.password
// console.log(user)

// 5 - Check property exists

// let product = {
//     name: "Laptop",
//     price: 60000
// }
// console.log(product.hasOwnProperty("price"))

// 6 - Print all keys

// let car = {
//     brand: "BMW",
//     model: "X5",
//     year: 2025
// }
// let carArr = []
// Object.keys(car).map((car) => {
//     carArr.push(car)
// })
// console.log(carArr)

// 7 - Print all values

// let cars = {
//     brand: "BMW",
//     model: "X5",
//     year: 2025
// }
// let carArr = []
// Object.values(cars).map((car) => {
//     carArr.push(car)
// })
// console.log(carArr)

// 8 - Print user information dynamically

// let user = {
//     name: "Ritik",
//     age: 21,
//     city: "Bhopal"
// }
// let value = Object.entries(user)
// for (let val of value) {
//     console.log(`${val[0]}: ${val[1]}`)
// }

// 9 - Employee salary increase

// let employee = {
//     name: "Aman",
//     salary: 50000
// }
// let hike = employee.salary * 10 / 100
// employee.salary = employee.salary + hike
// console.log(employee)

// 10 - Nested Object access

// let user = {
//     name: "Ritik",
//     address: {
//         city: "Bhopal",
//         state: "MP"
//     }
// }
// console.log(user.address.city)

// 11 - Object destructuring

// let student = {
//     name: "Ritik",
//     age: 21,
//     course: "BCA"
// }
// let { name, age } = student
// console.log(name)
// console.log(age)

// 12 - Rename during destructuring

// let student = {
//     name: "Ritik",
//     age: 20
// }
// let { name: studentName, age: studentAge } = student
// console.log(studentName)
// console.log(studentAge)

// 13 - Merge user and address

// let user = {
//     name: "Ritik",
//     age: 21
// }
// let address = {
//     city: "Bhopal",
//     state: "MP"
// }
// let userInfo = {...user, ...address}
// console.log(userInfo)

// 14 - Count object properties

// let user = {
//     name: "Ritik",
//     age: 21,
//     city: "Bhopal",
//     country: "India"
// }
// console.log(Object.keys(user).length)

// 15 - Higest paid employee

// let employees = {
//     aman: 25000,
//     ritik: 50000,
//     priya: 45000
// }
// let employee = Object.entries(employees)
// let higestPaidEmployee
// let max = 0
// for (let emp of employee) {
//     if(emp[1] > max) {
//         max = emp[1]
//         higestPaidEmployee = emp[0]
//     }
// }
// console.log(higestPaidEmployee)

// 16 - Most used programming language

// let votes = {
//     JavaScript: 25,
//     Python: 30,
//     Java: 15,
//     Cpp: 10
// }
// let vote = Object.entries(votes)
// let mostUsedLanguage
// let max = 0
// for (let vt of vote) {
//     if(vt[1] > max) {
//         max = vt[1]
//         mostUsedLanguage = vt[0]
//     }
// }
// console.log(mostUsedLanguage)

// 17 - Reverse key value

// let countries = {
//     India: "Delhi",
//     Japan: "Tokya",
//     France: "Paris"
// }
// let reverse = Object.fromEntries(
//     Object.entries(countries).map(([key, val]) => [val, key]) 
// )
// console.log(reverse)

// 18 - Student marks summary

// let marks = {
//     math: 90,
//     science: 80,
//     english: 85
// }
// let report = Object.values(marks).reduce((acc, val) => {
//     return acc + val
// }, 0)
// console.log(report)

// 19 - Find missing property

// let user = {
//     name: "Ritik",
//     age: 21,
// }
// let has = user.hasOwnProperty('email')
// if(!has) {
//     user.email = "Not Provided"
// }
// console.log(user)

// 20 - Product inventory analyzer

// let inventory = {
//     mouse: 25,
//     keyboard: 10,
//     monitor: 5,
//     laptop: 2
// }
// let qty = Object.values(inventory)
// let total = qty.reduce((acc, val) => {
//     return acc + val
// }, 0)
// console.log(total)

// let max = Math.max(...qty)
// let productHigStock = Object.keys(inventory).find(key => inventory[key] === max)
// console.log(productHigStock)

// let min = Math.min(...qty)
// let productLowStock = Object.keys(inventory).find(key => inventory[key] === min)
// console.log(productLowStock)


// -----------------------------------------------
// Functions
// -----------------------------------------------

// 1 - Greeting function

// function greet(name) {
//     console.log(name)
// }

// greet("Alok Chauhan")

// 2 - add two numbers

// let add = (a, b) => {
//     return a + b
// }

// console.log(add(2, 4))

// 3 - Find square

// function square(num) {
//     return num * num
// }
// console.log(square(5))

// 4 - Check even number

// function isEven(num) {
//     if(num % 2 === 0) {
//         console.log(`${num} is an even number.`)
//     } else {
//         console.log(`${num} is not an even number.`)
//     }
// }

// isEven(6)

// 5 - Default username

// function greet(name="Guest") {
//     console.log(`Hellp ${name}`)
// }

// greet()

// 6 - Celsius to fahrenheit

// function convertTemp(celsius) {
//     return (celsius*9/5)+32
// }

// console.log(convertTemp(40))

// 7 - Arrow function practice

// function multiply(a, b) {
//     return a * b
// }

// let multiply = (a, b) => {
//     return a * b
// }
// console.log(multiply(4, 5))

// 8 - Discount calculator

// let calculateDiscount = (price) => {
//     return price - (price * 10 / 100)
// }
// console.log(calculateDiscount(50))

// 9 - Largest of three numbers

// let findLargest = (a, b, c) => {

// }