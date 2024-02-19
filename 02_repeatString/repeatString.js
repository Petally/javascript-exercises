const repeatString = function(string, repeatAmount) {
  if (Math.sign(repeatAmount) === -1) return "ERROR";

  let repeatedString = "";
  
  for (let i = 0; i < repeatAmount; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
