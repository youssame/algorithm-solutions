/**
 * 
 * @param {Array} arr Array of value 
 * @param {any} search value
 * @BigO log(n)
 * @returns the index of the value or -1
 */
const linear_search = (arr, search) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === search) return index;
    }
    return -1;
}
module.exports = linear_search;