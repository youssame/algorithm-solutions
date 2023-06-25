/**
 * 
 * @param {number[]} arr
 * @return {number[]}
 * @BigO O(N^2) 
 */
const bubble_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
module.exports = bubble_sort;