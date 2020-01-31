function setRandomKey(key) {
    $("#randomScale").text("Progression: " + key);
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

function setRandomProgression(progression, showNames) {

    const fieldsMap = {
        '#progression_1_1': 0,
        '#progression_1_2': 1,
        '#progression_1_3': 2,
        '#progression_1_4': 3,
        '#progression_2_1': 4,
        '#progression_2_2': 5,
        '#progression_2_3': 6,
        '#progression_2_4': 7,
    };


    for (field in fieldsMap) {
        text = showNames ? `${progression[fieldsMap[field]][0]} (${progression[fieldsMap[field]][1]})` : progression[fieldsMap[field]][0];
        $(field).text(text);
    }
}
