$(document).ready(function () {
    const key = getRandomKey();

    const pattern1 = getRandomStrummingPattern(128, 255);
    const pattern2 = getRandomStrummingPattern(128, 255);
    const progression = getRandomProgression(key);

    setRandomKey(key);
    setRandomStrumming(pattern1, pattern2);
    setRandomProgression(progression, true);
});