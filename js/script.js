// funzioni ---------------------------------

// funzione per creare un numero casuale

function random() {
    return Math.floor(Math.random() * (100 + 1 - 1) + 1)
}


//---------------------------

const timer = document.getElementById(`time`)
const number = document.querySelector(`.number`)

const totalNumber = 5

let listNumber = []

while (listNumber.length < totalNumber) {
    let randomNumber

    do {

        randomNumber = random()

    } while (listNumber.includes(randomNumber)) {

        listNumber.push(randomNumber)
    }
}

console.log(listNumber)

for (let i = 0; i < totalNumber; i++) {
    number.innerHTML += `<span>${listNumber[i]}</span>`
}

let countDownNumber = 30
timer.innerText = countDownNumber

const countDown = setInterval(() => {
    timer.innerText = --countDownNumber

    if (countDownNumber === 0) {

        clearInterval(countDown)

        number.classList.add(`hidden`)
    }
}, 1000)


setTimeout(() => {

    let userNumber = []

    for (let i = 0; i < totalNumber; i++) {
        userNumber.push(parseInt(prompt(`scrivi un numero`)))
    }
    console.log(userNumber)

    let point = 0

    for (let i = 0; i < userNumber.length; i++) {
        if (listNumber.includes(userNumber[i])) {
            point++
        }
    }

    console.log(point)

    alert(`i tuoi punti sono ${point}`)


}, 30200)













