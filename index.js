function writeCards(name, event) {
    let messages = [];
    let i =0;
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
return messages;
}
console.log(writeCards(["Guadalupe","Ollie","Aki"], "surprise"));

function countDown() {
    let countDown = 0;
    while (countDown <11) {
        console.log(countDown++);
    }
}
