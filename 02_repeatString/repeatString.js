const repeatString = function(word, num) {
    if (num < 0) return "ERROR";
    let newWord = "";
    for (let i = 0; i < num; i++) {
        newWord = newWord+word
    }
    return newWord
};

module.exports = repeatString;
