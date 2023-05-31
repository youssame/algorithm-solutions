const linear_search = require(".");

describe('Test linear search default function', () => {
    const arr = ['a', 'b', 'c', 'd'];
    test('When the element exists in the array', () => {
        expect(linear_search(arr, 'a')).toEqual(0);
        expect(linear_search(arr, 'd')).toEqual(3);
    });
    test('When the element don\'t exist in the array', () => {
        expect(linear_search(arr, 'e')).toEqual(-1);
    });
});