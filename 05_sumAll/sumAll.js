const sumAll = function(range1, range2) {
  if (range1 < 0 || range2 < 0) { return "ERROR"; }
  if (typeof range1 !== 'number' || typeof range2 !== 'number') { return "ERROR"; }

  const start = (range1 < range2) ? range1 : range2;
  const end = (range1 < range2) ? range2 : range1; 
  
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
