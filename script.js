function capitalize(str) {
    if(typeof str !== "string") throw new Error("Must pass a string to this function");

    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reversedString(str) {
    if(typeof str !== "string") throw new Error("Must pass a string to this function");

    return str.split("").reverse().join("");
}

const calculator = {
    add: function(first, second) {
        return first + second;
    },
    subtract: function(first, second) {
        return first - second;
    },
    divide: function(first, second) {
        return first / second;
    },
    multiply: function(first, second) {
        return first * second;
    }
}


module.exports = { capitalize, reversedString, calculator };