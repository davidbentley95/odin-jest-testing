function capitalize(str) {
  if (typeof str !== "string")
    throw new Error("Must pass a string to this function");

  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reversedString(str) {
  if (typeof str !== "string")
    throw new Error("Must pass a string to this function");

  return str.split("").reverse().join("");
}

const calculator = {
  add: function (first, second) {
    return first + second;
  },
  subtract: function (first, second) {
    return first - second;
  },
  divide: function (first, second) {
    return first / second;
  },
  multiply: function (first, second) {
    return first * second;
  },
};

function caesarCipher(str, factor) {
  const effectiveShift = factor % 26;
  const baseArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let cipherString = "";
  const regex = /^[A-Za-z]$/;

  for (let i = 0; i < str.length; i++) {
    
    if (regex.test(str[i])) {
      let index = baseArr.indexOf(str.toLowerCase()[i]) + effectiveShift;

      if (index > 25) {
        index = index - 26;
      }

      if (str[i] === str[i].toUpperCase()) {
        cipherString += baseArr[index].toUpperCase();
      } else {
        cipherString += baseArr[index];
      }
    } else {
        cipherString += str[i];
    }
  }

  return cipherString;
}

function analyzeArray(arr) {

  const sortedArr = [...arr].sort((a,b) => a - b);
  let average = 0;

  for(let i = 0; i < arr.length; i++) {
    average += arr[i];
  }

  const arrObject = {
    average: average / arr.length,
    min: sortedArr[0],
    max: sortedArr[arr.length -1],
    length: arr.length,
  };

  return arrObject;

}

module.exports = { capitalize, reversedString, calculator, caesarCipher, analyzeArray };
