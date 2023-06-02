const linear_search = require(".");
const twoCrystalBallProblem = require("./two-crystal-ball-problem");

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
describe('Test two crystal ball problem', () => {
    const breaks = [false, false, false, true, true, true, true, true];
    const breaks2 = [true, true, true];
    const breaks3 = [false, false, true];
    const breaks4 = [false];
    const breaks5 = [true];
    test('When the element exists in the array', () => {
        expect(twoCrystalBallProblem(breaks)).toEqual(3);
        expect(twoCrystalBallProblem(breaks2)).toEqual(0);
        expect(twoCrystalBallProblem(breaks3)).toEqual(2);
        expect(twoCrystalBallProblem(breaks4)).toEqual(-1);
        expect(twoCrystalBallProblem(breaks5)).toEqual(0);
    });
});