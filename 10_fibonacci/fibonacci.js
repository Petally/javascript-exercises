const fibonacci = function(index) {
    let processed = parseInt(index);
    if (processed === 0) { return 0; }
    if (processed < 0) {
        return "OOPS";
    } else {
        let a = 0;
        let b = 1;
        let c = 0;
        for (let i = 2; i <= processed; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;
