// Problem 6: Is it a BST?

/*
Write an algorithm to check whether an arbitrary binary tree is a binary 
search tree, assuming the tree does not contain duplicates.
*/

function isBinarySearchTree(tree, isBST){

    // If no tree, return false
    if(!tree){
        return false;
    }

    // If there is a tree.left, go through if statement
    if(tree.left){
        // If left key is greater than tree key, then return false
        if(tree.left.value > tree.value){
             isBST.isBST = false;
             return isBST.isBST;
        }
        // Else, recall the function itself 
        else{
            isBinarySearchTree(tree.left, isBST);
        }
    }
    // If there is a tree.right, go through if statement
    if(tree.right){
        // If tree.right.key is less than tree.key, then return false
        if(tree.right.value < tree.value){
            isBST.isBST = false;
            return isBST.isBST;
        }
        // else, recall the function itself.
        else{
            isBinarySearchTree(tree.right, isBST);
        }
    }

    // Return true for is Binary search tree
    return isBST.isBST;
}

const test1 = {
    value: 4,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        value: 7,
        left: null,
        right: null
    }
}

// have to make 'isBST' an object in order to manipulate it (pass by reference), if not, would remain the same (always true)
console.log(isBinarySearchTree(test1, {isBST: true}));