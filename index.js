// Code your solutions in this file
function countDown (start) {
    let i = start+1;
    while (i > 0) {
        console.log(i-=1);
    }

    return i;
}

function writeCards(names, event) {
    let messageArray = []
    for (let i = 0; i < names.length; i++) {
        messageArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messageArray;
}