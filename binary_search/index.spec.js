const binary_search = require(".");

describe('test binary search function', () => { 
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arr3 = [1];
    const arr4 = [];

    test('When the element exists in the array', () => { 
        expect(binary_search(arr, 1)).toEqual(0);
        expect(binary_search(arr, 3)).toEqual(2);
        expect(binary_search(arr, 6)).toEqual(5);
        expect(binary_search(arr, 11)).toEqual(10);

        expect(binary_search(arr2, 5)).toEqual(4);
        expect(binary_search(arr2, 4)).toEqual(3);

        expect(binary_search(arr3, 1)).toEqual(0);
    });
    test('When the element don\'t exist in the array', () => { 
        expect(binary_search(arr, 0)).toEqual(-1);
        expect(binary_search(arr, 22)).toEqual(-1);

        expect(binary_search(arr2, -1)).toEqual(-1);

        expect(binary_search(arr3, 4)).toEqual(-1);

        expect(binary_search(arr4, 1)).toEqual(-1);
    });
 })