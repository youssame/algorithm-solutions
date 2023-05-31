/**
 * 
 * @param {Array} arr the array 
 * @param {number} search the number to find
 * @returns the index of the element or -1
 * @BigO O(log n)
 */
const binary_search = (arr, search) => {
    let left = 0;
    let right = arr.length;
    while(left < right) {
        const m = Math.floor((left + right) / 2);
        if (arr[m] === search) return m;
        if (search > arr[m]) {
            left = m + 1;
        } else {
            right = m;
        }
    }
    return -1;
}
module.exports = binary_search;