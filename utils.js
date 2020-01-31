function randomElement(elements) {
    return elements[Math.floor(Math.random() * elements.length)];
}

function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function toByte(n) {
    return ("000000000" + n.toString(2)).substr(-8)
}