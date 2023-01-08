
function isValid(input) {
    const strArray = input.split('');
    const symbolCounts = {
        '[': 0,
        ']': 0,
        '(': 0,
        ')': 0,
        '{': 0,
        '}': 0,
    };
    const symbols = Object.keys(symbolCounts);
    let isValidParens = false;
    let isValidBrackets = false;
    let isValidBraces = false;
    let isCorrectClosingOrder = false;

    for (let j = 0; j < strArray.length; j++) {
        const char = strArray[j];

        if (symbols.indexOf(char) !== -1) {
            symbolCounts[char]++;

            if (j < strArray.length - 1) {
                const nextChar = strArray[j+1];

                if (char === '(') {
                    isCorrectClosingOrder = nextChar !== ')';
                    break;
                }

                if (char === '[') {
                    isCorrectClosingOrder = nextChar !== ']';
                    break;
                }

                if (char === '{') {
                    isCorrectClosingOrder = nextChar !== '}';
                    break;
                }
            }
        }
    }

    isValidParens = symbolCounts['('] === symbolCounts[')'];
    isValidBrackets = symbolCounts['['] === symbolCounts[']'];
    isValidBraces = symbolCounts['{'] === symbolCounts['}'];

    return isValidParens && isValidBrackets && isValidBraces && isCorrectClosingOrder ;
}

describe('valid parenthesis', () => {
    /*
    it('should return true if parenthesis are balanced', () => {
        expect(isValid('()')).toBeTrue();
    });
    */

    it('should return false if parenthesis are unbalanced', () => {
        expect(isValid('[')).toBeFalse();
    });

    /*
    it('should return true if brackets are balanced', () => {
        expect(isValid('[]')).toBeTrue();
    });

    it('should return false if brackets are unbalanced', () => {
        expect(isValid('[')).toBeFalse();
    });
   
    it('should return true when both are balanced', () => {
        expect(isValid("()[]{}")).toBeTrue();
    });
    */

    it('should return false case 3', () => {
        expect(isValid("(]")).toBeFalse();
    });

    it('should return false when the closing symbol is in the wrong order', () => {
        expect(isValid("([)]")).toBeFalse();
    });

    it('should return false when the closing symbol is in the wrong order case 2', () => {
        expect(isValid("(){}}{")).toBeFalse();
    });
});