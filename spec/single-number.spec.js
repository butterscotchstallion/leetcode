function findNumber(nums) {
    const counts = {};
    const sortable = [];

    for (let j = 0; j < nums.length; j++) {
        if (typeof counts[nums[j]] === 'undefined') {
            counts[nums[j]] = 0;
        }
        counts[nums[j]]++;
    }

    for (let num in counts) {
        sortable.push([num, counts[num]]);
    }

    sortable.sort((a, b) => {
        return a[1] - b[1];
    });

    return parseInt(sortable[0][0], 10);
}

describe('Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.', () => {
    it('should find the number', () => {
        const expected = findNumber([2, 2, 1]);
        expect(expected).toEqual(1);
    });

    it('should find the number case 2', () => {
        const expected = findNumber([4,1,2,1,2]);
        expect(expected).toEqual(4);
    });

    it('should find the number case 3', () => {
        const expected = findNumber([1]);
        expect(expected).toEqual(1);
    });
});