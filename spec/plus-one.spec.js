

function getLargeNumber(digits) {
    const lgNum = BigInt(digits.join(''));
    const plusOne = lgNum + 1n;
    return plusOne.toString().split('').map((n) => {
        return parseInt(n, 10);
    });
}

/**
 * You are given a large integer represented as an integer array digits, where each digits[i] 
 * is the ith digit of the integer. The digits are ordered from most significant to least significant
 * in left-to-right order. The large integer does not contain any leading 0's.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 */
describe('Plus One', () => {
    it('case one', () => {
        expect(getLargeNumber([1,2,3])).toEqual([1,2,4]);
    });

    it('case two', () => {
        expect(getLargeNumber([4,3,2,1])).toEqual([4,3,2,2]);
    });

    it('case three', () => {
        expect(getLargeNumber([9])).toEqual([1, 0]);
    });

    it('case four', () => {
        expect(getLargeNumber([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
    });
});