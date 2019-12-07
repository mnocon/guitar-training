$(document).ready(function () {
    setRandomKey();
    setRandomStrumming();
    setRandomProgression();
});

function setRandomKey() {
    const keys = ['A', 'A#', 'Bb', 'B', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'Ab'];
    $("#randomScale").text(randomElement(keys));
}

function setRandomStrumming() {
    var pattern = getRandomPattern(128, 255);

    $("#pattern_1_1").text(pattern[0]);
    $("#pattern_1_2").text(pattern[1]);
    $("#pattern_1_3").text(pattern[2]);
    $("#pattern_1_4").text(pattern[3]);
    $("#pattern_1_5").text(pattern[4]);
    $("#pattern_1_6").text(pattern[5]);
    $("#pattern_1_7").text(pattern[6]);
    $("#pattern_1_8").text(pattern[7]);

    var pattern2 = getRandomPattern(0, 255);

    $("#pattern_2_1").text(pattern2[0]);
    $("#pattern_2_2").text(pattern2[1]);
    $("#pattern_2_3").text(pattern2[2]);
    $("#pattern_2_4").text(pattern2[3]);
    $("#pattern_2_5").text(pattern2[4]);
    $("#pattern_2_6").text(pattern2[5]);
    $("#pattern_2_7").text(pattern2[6]);
    $("#pattern_2_8").text(pattern2[7]);
}

function setRandomProgression() {
    // start each bar with tonic
    $("#progression_1_1").text('I');
    $("#progression_2_1").text('I');

    // end each bar with IV or V chord
    $("#progression_1_4").text(randomElement(['IV', 'V']));
    $("#progression_2_4").text(randomElement(['IV', 'V']));

    // rest is filled randomly
    const degrees = ['I', 'ii', 'iii', 'IV', 'V', 'vi']; // skip diminished for now

    $("#progression_1_2").text(randomElement(degrees));
    $("#progression_1_3").text(randomElement(degrees));
    $("#progression_2_2").text(randomElement(degrees));
    $("#progression_2_3").text(randomElement(degrees));
}

function randomElement(elements) {
    return elements[Math.floor(Math.random() * elements.length)];
}

function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function toByte(n) {
    return ("000000000" + n.toString(2)).substr(-8)
}

function getRandomPattern(min, max) {
    randomNumber = getRandomInt(min, max);
    byte = toByte(randomNumber);
    newByte = '';

    for (i = 0; i < byte.length; i++) {
        if (byte[i] == '0') {
            newByte += '-';
            continue;
        }

        if (i % 2 == 0) {
            newByte += '↓';
        } else {
            newByte += '↑';
        }
    }


    return newByte
}