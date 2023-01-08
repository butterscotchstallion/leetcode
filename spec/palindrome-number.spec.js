
function isPalindrome(input) {
    const reversed = input.toString().split('').reverse().join('');
    return reversed == input;
}

describe("palindrome number", () => {
    it("should return true if the number is a palindrome", () => {
        const expected = isPalindrome(121);
        expect(expected).toBeTrue();
    });
});