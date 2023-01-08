
function isStrictlyPalindromic(input) {
    const baseValues = [];
    let based;
    let reversed;
    let isPalindrome;
    // Every base between N and N - 2
    for (let base = 2; base <= input - 2; base++) {
        based = input.toString(base);
        reversed = based.toString().split('').reverse().join('');
        isPalindrome = reversed === input;
        if (!isPalindrome) {
            return false;
        }
    }
    return true;
}

describe('Given an integer n, return true if n is strictly palindromic and false otherwise.', () => {
    it('case 1', () => {
        expect(isStrictlyPalindromic(9)).toBeFalse();
    });

    it('case 2', () => {
        expect(isStrictlyPalindromic(4)).toBeFalse();
    });

    it('case 3', () => {
        expect(isStrictlyPalindromic(2)).toBeTrue();
    });
});