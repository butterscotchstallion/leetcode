
class TreeNode {
    constructor(data) {
        this.left = null;
        this.data = data;
        this.right = null;
    }
}

function compareTrees(p, q) {
    // both empty
    if (p === null && q === null) {
        return true;
    }

    if (p && q) {
        return (p.data === q.data) && compareTrees(p.left, q.left) 
        && compareTrees(p.right, q.right);
    }

    return false;
}

describe('Same Tree', () => {
    it('should be true', () => {
        const p = new TreeNode(1);
        p.left = new TreeNode(2);
        p.right = new TreeNode(3);

        const q = new TreeNode(1);
        q.left = new TreeNode(2);
        q.right = new TreeNode(3);
        expect(compareTrees(p, q)).toBeTrue();
    });

    it('should be false', () => {
        const p = new TreeNode(1);
        p.left = new TreeNode(2);
        p.right = new TreeNode(3);

        const q = new TreeNode(1);
        q.left = new TreeNode(null);
        q.right = new TreeNode(3);
        expect(compareTrees(p, q)).toBeFalse();
    });

    it('should be false case 2', () => {
        const p = new TreeNode(1);
        p.left = new TreeNode(2);
        p.right = new TreeNode(1);

        const q = new TreeNode(1);
        q.left = new TreeNode(1);
        q.right = new TreeNode(2);
        expect(compareTrees(p, q)).toBeFalse();
    });
});