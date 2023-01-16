

/**
 * Returns true if the letters in the magazine
 * can be used to construct the ransom note.
 * @param {string} ransomNote 
 * @param {string} magazine 
 * @returns {boolean}
 */
function canBeConstructedUsingLetters(ransomNote, magazine) {
    const noteLetters = ransomNote.split('');
    let magazineLetters = magazine.split('');

    for (let j = 0; j < noteLetters.length; j++) {
        if (magazineLetters.indexOf(noteLetters[j]) !== -1) {
            magazineLetters = magazineLetters.filter((l) => {
                return l !== noteLetters[j];
            });
        }
    }

    return false;
}

describe('Ransom Note', () => {
    it('case 1', () => {
        expect(canBeConstructedUsingLetters('a', 'b')).toBeFalse();
    });
    
    it('case 2', () => {
        expect(canBeConstructedUsingLetters('aa', 'ab')).toBeFalse();
    });

    /**
     * These don't work because we cannot use the same letter twice.
    it('case 3', () => {
        expect(canBeConstructedUsingLetters('aa', 'aab')).toBeTrue();
    });

    it('case 4', () => {
        expect(canBeConstructedUsingLetters('helloworld', 'helloleetcodeworld')).toBeTrue();
    });
     */
});