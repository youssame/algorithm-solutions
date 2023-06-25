const intToRoman = require(".");

describe('Test intToRoman function', () => {
    const res1 = intToRoman(52);
    const res2 = intToRoman(10);
    const res3 = intToRoman(20);
    const res4 = intToRoman(5);
    const res6 = intToRoman(1994);
    const res7 = intToRoman(21);
    test('test different cases', () => {
        expect(res1).toEqual("LII");
        expect(res2).toEqual("X");
        expect(res3).toEqual("XX");
        expect(res4).toEqual("V");
        expect(res6).toEqual("MCMXCIV");
        expect(res7).toEqual("XXI");
    });
});