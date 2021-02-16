/*
a.) Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. 
Compare your result with the result from the 1st exercise.

b.) Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. 
Compare your result with the result from the 1st exercise.
*/

const BinarySearchTree = require('./binarySearchTree');

function main(){
 const numBST = new BinarySearchTree();

 numBST.insert(3);
 numBST.insert(1);
 numBST.insert(4);
 numBST.insert(6);
 numBST.insert(9);
 numBST.insert(2);
 numBST.insert(5);
 numBST.insert(7);

//  console.log(numBST);
 console.dir(numBST, { depth: null });
 

 const stringBST = new BinarySearchTree();
 stringBST.insert('E');
 stringBST.insert('A');
 stringBST.insert('S');
 stringBST.insert('Y');
 stringBST.insert('Q');
 stringBST.insert('U');
 stringBST.insert('E');
 stringBST.insert('S');
 stringBST.insert('T');
 stringBST.insert('I');
 stringBST.insert('O');
 stringBST.insert('N');

//  console.log(stringBST);
console.dir(stringBST, { depth: null });

}

main();
