const messages = [
    "Camilo",
    "Oscar",
    "Nicolay",
    "Yesica",
    "Diego",
    "Carolina",
    "Paulina"
  ];

function randomMsg() {
    console.log(messages[parseInt(Math.random() * messages.length)]);
}

module.exports = { randomMsg }