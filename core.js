function getKeys() {
    const keys = {
        'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'B dim'],
        'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F# dim'],
        'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C# dim'],
        'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G# dim'],
        'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D# dim'],
        'B': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#', 'A# dim'],
        'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E dim'],
        'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B# dim'],
        'F': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'E dim'],
        'Bb': ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'],
        'Eb': ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'],
        // 'Ab': ['Ab', ],
        // 'Db': ['Db', ],
        // 'Gb': ['Gb', ],
        // 'Cb': ['Cb', ],
    }

    return keys;
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

function getRandomKey() {
    return randomElement(Object.keys(getKeys()));
}

function getRandomProgression(key) {
    let progression = [];

    const scaleDegrees = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii⁰'];

    const allowedDegressMap = {
        // first bar
        '0': [0],
        '1': Object.keys(scaleDegrees),
        '2': Object.keys(scaleDegrees),
        '3': [3, 4], // IV, V
        // second bar
        '4': [0],
        '5': Object.keys(scaleDegrees),
        '6': Object.keys(scaleDegrees),
        '7': [3, 4], // IV, V
    }

    for (var entry in allowedDegressMap)
    {
        scaleDegreeIndex = randomElement(allowedDegressMap[entry]);
        scaleDegree = scaleDegrees[scaleDegreeIndex];
        scaleDegreeNames = getKeys()[key];
        scaleDegreeName = scaleDegreeNames[scaleDegreeIndex];

        progression.push(`${scaleDegree} (${scaleDegreeName})`);
    }

    return progression;
}