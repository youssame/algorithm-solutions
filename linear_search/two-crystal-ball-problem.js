/**
 * The two crystal ball problem
 * Given two crystal balls that will break if dropped from high enough distance
 * determine the exact spot in which it will break in the most optimized way.
 */

/**
 * 
 * @param {boolean[]} breaks the array of the breaking state
 * @returns index or -1
 * @BigO O(Sqr(N))
 */
const searchSpot = (breaks) => {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let index = 0;
    for (;;index += jump) {
        if (index > breaks.length - 1) return -1;
        if (breaks[index]) break;
    }
    index -= jump;
    for (let j = 0; j < jump && index < breaks.length; j--, index++) {
        if (breaks[index]) return index;
    }
    
    return -1;
}
module.exports = searchSpot;