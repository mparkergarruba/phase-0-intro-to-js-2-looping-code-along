const cardsToSend =[]

function writeCards([...names], eventName) {
    debugger
    for (let i = 0; i < names.length; i++) {
        cardsToSend.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return cardsToSend
}

function countDown(number) {
    let i = 0
    while (number >= i) {
        console.log(number)
        number -= 1
    }
}
