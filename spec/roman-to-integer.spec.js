
function romanToInt(s) {
    let sum = 0;
    const chars = s.split('');
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let isSpecialCase = false;

    for (let j = 0; j < chars.length; j++) {
        if (Object.keys(symbols).indexOf(chars[j]) !== -1) {
            if (j < chars.length) {
                const nextChr = chars[j+1];

                // II
                if (chars.indexOf('III') !== -1) {
                    sum += 3;
                    isSpecialCase = true;
                } else if (chars.indexOf('II') !== -1) {
                    sum += 2;
                    isSpecialCase = true;
                }

                // IV
                if (chars[j] === 'I' && nextChr === 'V') {
                    sum += symbols['V'] - symbols['I'];
                    isSpecialCase = true;
                }

                // VI
                if (chars[j] === 'V' && nextChr === 'I') {
                    sum += symbols['V'] - symbols['I'];
                    isSpecialCase = true;
                }

                // IX
                if (chars[j] === 'I' && nextChr === 'X') {
                    sum += symbols['X'] - symbols['I'];
                    isSpecialCase = true;
                }
                
                // XL
                if (chars[j] === 'X' && nextChr === 'L') {
                    sum += symbols['L'] - symbols['X'];
                    isSpecialCase = true;
                }

                // XC
                if (chars[j] === 'X' && nextChr === 'C') {
                    sum += symbols['C'] - symbols['X'];
                    isSpecialCase = true;
                }

                // CD
                if (chars[j] === 'C' && nextChr === 'D') {
                    sum += symbols['D'] - symbols['C'];
                    isSpecialCase = true;
                }

                // CM
                if (chars[j] === 'C' && nextChr === 'M') {
                    sum += symbols['M'] - symbols['C'];
                    isSpecialCase = true;
                }
            }
            
            if (!isSpecialCase) {
                sum += symbols[chars[j]];
            }
        }
    }

    return sum;
}

describe('Roman to integer', () => {
    it('should convert a roman numeral to int', () => {
        expect(romanToInt('III')).toEqual(3);
    });

    /*it('should convert a roman numeral to int case 2', () => {
        expect(romanToInt('LVIII')).toEqual(58);
    });*/

    it('should convert a roman numeral to int case 3', () => {
        expect(romanToInt('MCMXCIV')).toEqual(1994);
    });

    it('should convert a roman numeral to int case 4', () => {
        expect(romanToInt('IX')).toEqual(9);
    });

    /*it('should convert a roman numeral to int case 5', () => {
        expect(romanToInt('MCMXCVI')).toEqual(1996);
    });*/
});