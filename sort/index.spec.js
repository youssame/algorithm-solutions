const bubble_sort = require("./bubble-sort");

describe('Test bubble sort', () => { 
    test('Test bubble sort with a normal array', () => { 
        const arr = [3, 4, 1, 0, 6, 5, 10, 9, 8, 7, 2];
        const res = bubble_sort(arr);
        expect(res).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
     })
    test('Test bubble sort with a one item array', () => { 
        const arr = [3];
        const res = bubble_sort(arr);
        expect(res).toEqual([3]);
     })
    test('Test bubble sort with an empty array', () => { 
        const arr = [];
        const res = bubble_sort(arr);
        expect(res).toEqual([]);
     })
 })