// Code your solutions in this file
function writeCards (arrayNames, event) {
    let cards = []
    for (let i = 0; i < arrayNames.length; i++) {
        cards.push(`Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown (i) {
    while (i > 0) {
        console.log(i);
        i -= 1;
    }
    console.log(i);
}