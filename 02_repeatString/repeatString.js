const repeatString = function(word, num) {
    
    if (num == 0) {
        return ''
    }
    else if (num < 1) {
        return "ERROR"
    }
    let newWord = ""
    for (let i = 0; i < num; i++) {
        newWord = newWord+word
    }
    return newWord
};

// Do not edit below this line
module.exports = repeatString;
