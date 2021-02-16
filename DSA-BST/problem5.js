// Problem 5: Height of a BST

/*
Write an algorithm to find the height of a binary search tree.
What is the time complexity of your algorithm?
*/

function bstHeight(tree){
    let leftHeight = 0;
    let rightHeight = 0;

    // if no tree object, just return 0
    if(!tree){
        return 0;
    }

    if(tree.left){
        leftHeight = bstHeight(tree.left);
        // console.log(leftHeight);
    }

    if(tree.right){
        rightHeight = bstHeight(tree.right);
        // console.log(rightHeight);
    }
    // Math.max() returns the largest of the number inputs given. In this case, 2, then adds 1 for root node. 
    return Math.max(leftHeight, rightHeight) + 1;

}

const test1 = {
    value: 4,
    left: {
        value: 2,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
}
console.log(bstHeight(test1));

// Time complexity: This is a recursive function and the time complexity is O(n)??
