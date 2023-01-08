function isValidPalindrome(input) {
    const alphaNumeric = input.replace(/[\W, \_]/g, '').toLowerCase();
    const reversed = alphaNumeric.split('').reverse().join('');
    return reversed === alphaNumeric;
}

describe('Given a string s, return true if it is a palindrome, or false otherwise.', () => {
    it('should return true when given a valid palindrome', () => {
        const actual = isValidPalindrome('A man, a plan, a canal: Panama');
        expect(actual).toBeTrue();
    });

    it('should return false when given an invalid palindrome', () => {
        const actual = isValidPalindrome('race a car');
        expect(actual).toBeFalse();
    });

    it('should return true when given a space', () => {
        const actual = isValidPalindrome(' ');
        expect(actual).toBeTrue();
    });

    it('should return true when given a string with an underscore', () => {
        const actual = isValidPalindrome('ab_a');
        expect(actual).toBeTrue();
    });
});