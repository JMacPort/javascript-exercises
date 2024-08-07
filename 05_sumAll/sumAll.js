const sumAll = function(num1, num2) {
    let totalSum = 0
    if (num1 > num2) {
        let tempNum = num1
        num1 = num2
        num2 = tempNum
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }

    for (let i = num1; i <= num2; i++) {
        totalSum += i
    }
    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
