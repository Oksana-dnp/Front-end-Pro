const secret = {
    "!": [17],
    " ": [5, 10],
    "e": [1, 15],
    "o": [4, 8],
    "h": [0],
    "l": [2, 3, 13, 14, 16],
    "f": [6],
    "r": [7],
    "m": [9],
    "H": [11],
    "i": [12],
}

var lengthSecret = [];
while (true) {
    for (key in secret) {
        lengthSecret.push(secret[key].length);
    }
    break;
}

var maxValueSecret;

lengthSecret.reduce(function (result, num) {
    maxValueSecret = result + num;
    return maxValueSecret;
})

console.log('maxValueSecret', maxValueSecret);

var i = 0;
while (i < maxValueSecret) {
    for (key in secret) {
        if (secret[key].includes(i)) {
            document.write(key);
        }
    }
    i++;
}

