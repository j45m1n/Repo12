function rangeOfNumbers(startN, endN) { 

    if (startN === endN) return [startN];
    return [startN, ...rangeOfNumbers(startN + 1, endN)];
}

console.log(rangeOfNumbers(1, 7));
module.exports = rangeOfNumbers;