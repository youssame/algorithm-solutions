/**
 * @link https://leetcode.com/problems/integer-to-roman/description/
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    return buildRomanResult("", num);
};

// a recursive function that build roman numbers
var buildRomanResult = (str, num) => {
    if (num < 1) return str;
    const [rest, txt] = calculateRomanSymbol(num);
    return buildRomanResult(str + txt, rest);

}
// a function that fix the before roman character format
var beforeValues = (num) => {
    if (num.toString().length === 1 && num.toString().substring(0, 1) === "4") 
        return [num - 4, 'IV'];
    if (num.toString().length === 1 && num.toString().at(0) === "9") 
        return [num - 9, 'IX'];
    if (num.toString().length === 2 && num.toString().at(0) === "4") 
        return [num - 40, 'XL'];
    if (num.toString().length === 2 && num.toString().at(0) === "9") 
        return [num - 90, 'XC'];
    if (num.toString().length === 3 && num.toString().at(0) === "4") 
        return [num - 400, 'CD'];
    if (num.toString().length === 3 && num.toString().at(0) === "9") 
        return [num - 900, 'CM'];
    return undefined;
}

// a function that return the roman number with the rest number
var calculateRomanSymbol = (num) => {
    const bVal = beforeValues(num);
    if (bVal) return [bVal[0], bVal[1]];
    const [state, symb] = getStateAndSymbol(num);
    if (state) return [0, symb];
    if (num < 5)
        return [0, symb.repeat(num)];
    if (num < 10)
        return [num - 5, symb.repeat(getRepeatCount(num))];
    if (num < 50)
        return [num - 10, symb.repeat(getRepeatCount(num))];
    if (num < 100)
        return [num - 50, symb.repeat(getRepeatCount(num))];
    if (num < 500)
        return [num - 100, symb.repeat(getRepeatCount(num))];
    if (num < 1000)
        return [num - 500, symb.repeat(getRepeatCount(num))];
    return [num - 1000, symb.repeat(getRepeatCount(num))];
}
// a function that return the count of roman number
const getRepeatCount = (num) => {
        const length = num.length;
        const refNumber = parseInt(num.toString() + "0".repeat(length - 1));
        return parseInt(Math.floor(num / refNumber));
}

// a function that return the roman number symbole with a boolean that indicates if the number is equal to a roman number
const getStateAndSymbol = (num) => {
    if (num < 5)
        return [num === 1, "I"];
    if (num < 10)
        return [num === 5, "V"];
    if (num < 50)
        return [num === 10, "X"];
    if (num < 100)
        return [num === 50, "L"];
    if (num < 500)
        return [num === 100, "C"];
    if (num < 1000)
        return [num === 500, "D"];
    return [num === 1000, "M"];
}

module.exports = intToRoman;