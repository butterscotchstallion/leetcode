
function twoSum(nums, target) {
    const lookup = {};
    for (let j = 0; j < nums.length; j++) {
        let diff = target - nums[j];
        if (diff in lookup) {
            return [lookup[diff], j];
        } else {
            lookup[nums[j]] = j;
        }
    }
}

describe('Two Sum', () => {
    it('case 1', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0, 1]);
    });

    it('case 2', () => {
        expect(twoSum([3,2,4], 6)).toEqual([1, 2]);
    });

    it('case 3', () => {
        expect(twoSum([3,3], 6)).toEqual([0, 1]);
    });
});