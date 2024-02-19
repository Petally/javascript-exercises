const reverseString = function(word) {
  let reversedArray = word.split('');
  reversedArray.reverse(); 
  return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
