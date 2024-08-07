const removeFromArray = function(numbers, ...theArgs) {
    return numbers.filter(element => !theArgs.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
