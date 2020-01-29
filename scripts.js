$(document).ready(function () {
    const key = getRandomKey();

    const pattern1 = getRandomStrummingPattern(128, 255);
    const pattern2 = getRandomStrummingPattern(0, 255);
    const progression = getRandomProgression(key);

    setRandomKey(key);
    setRandomStrumming(pattern1, pattern2);
    setRandomProgression(progression);
});

function getRandomKey() {
    const keys = ['A', 'A#', 'Bb', 'B', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'Ab'];

    return randomElement(keys);
}

function setRandomKey(key) {
    $("#randomScale").text(key);
}

function setRandomStrumming(pattern1, pattern2) {
    $("#pattern_1_1").text(pattern1[0]);
    $("#pattern_1_2").text(pattern1[1]);
    $("#pattern_1_3").text(pattern1[2]);
    $("#pattern_1_4").text(pattern1[3]);
    $("#pattern_1_5").text(pattern1[4]);
    $("#pattern_1_6").text(pattern1[5]);
    $("#pattern_1_7").text(pattern1[6]);
    $("#pattern_1_8").text(pattern1[7]);

    $("#pattern_2_1").text(pattern2[0]);
    $("#pattern_2_2").text(pattern2[1]);
    $("#pattern_2_3").text(pattern2[2]);
    $("#pattern_2_4").text(pattern2[3]);
    $("#pattern_2_5").text(pattern2[4]);
    $("#pattern_2_6").text(pattern2[5]);
    $("#pattern_2_7").text(pattern2[6]);
    $("#pattern_2_8").text(pattern2[7]);
}

function getRandomProgression(key) {
    let progression = [];

    const scaleDegrees = ['ii', 'iii', 'IV', 'V', 'vi']; // skip diminished for now. Skip I to make things more interesting

    // 1 measure: I random random IV/V
    progression.push('I'); // start with a tonic
    progression.push(randomElement(scaleDegrees));
    progression.push(randomElement(scaleDegrees));
    progression.push(randomElement(['IV', 'V']));

    // 2 measure: I random random IV/V
    progression.push('I'); // start with a tonic
    progression.push(randomElement(scaleDegrees));
    progression.push(randomElement(scaleDegrees));
    progression.push(randomElement(['IV', 'V']));

    return progression;
}

function setRandomProgression(progression) {
    $("#progression_1_1").text(progression[0]);
    $("#progression_1_2").text(progression[1]);
    $("#progression_1_3").text(progression[2]);
    $("#progression_1_4").text(progression[3]);
    $("#progression_2_1").text(progression[4]);
    $("#progression_2_2").text(progression[5]);
    $("#progression_2_3").text(progression[6]);
    $("#progression_2_4").text(progression[7]);
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

function getRandomStrummingPattern(min, max) {
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