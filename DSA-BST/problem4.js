// Problem 4: What does this program do?

/*
Without running this code in your code editor, 
explain what the following program does. 
Show with an example the result of executing this program.
What is the runtime of this algorithm?


function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
*/

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right);
}

const test1 = {
    value: 4,
    left: {
        value: 2,
        left: null,
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
}
console.log(tree(test1));

/* This program sends in an object (t) that has the keys: value, left, and right. 
It is a recursive function. Base case checks if object t exists, if not, return 0.
Recursive case checks the left and right keys as well as the values and adds them. 
Recall the function itself for left and right keys, and iterate through the steps again if needed and add the following values.
Essentially, what the function ultimately does is add the values in a binary search tree together and return the sum.
*/ 
// The runtime of this algorithm is O(1) at best case and O(n) in worst case?

