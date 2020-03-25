import {
  assertEquals,
} from "./deps.ts";
import {
  BinaryTree,
} from '../src/BinaryTree.ts';

Deno.test({
  name: "Creates an empty BinaryTree",
  fn(): void {
    const binaryTree = new BinaryTree();
    assertEquals(binaryTree.getSize(), 0);
  }
});

Deno.test({
  name: "Returns the root node",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    const root = binaryTree.getRoot();
    assertEquals(root?.data, 7);
  }
});


/* Tree of this shape:
          7
        /   \
       4     9
      /       \
     3         12
    /
   2
*/
Deno.test({
  name: "Returns the height of the tree",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    binaryTree.insert(4);
    binaryTree.insert(3);
    binaryTree.insert(9);
    binaryTree.insert(12);
    binaryTree.insert(2);
    const root = binaryTree.getRoot();
    assertEquals(binaryTree.getHeight(root), 3);
  }
});

/* Tree of this shape:
          7
        /   \
       4     9
      /       \
     3         12
    /
   2
*/
Deno.test({
  name: "Traverse the tree in order",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    binaryTree.insert(4);
    binaryTree.insert(3);
    binaryTree.insert(9);
    binaryTree.insert(12);
    binaryTree.insert(2);
    assertEquals(binaryTree.inOrder(), [2, 3, 4, 7, 9, 12]);
  }
});

/* Tree of this shape:
          7
        /   \
       4     9
      /       \
     3         12
    /
   2
*/
Deno.test({
  name: "Traverse the tree pre order",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    binaryTree.insert(4);
    binaryTree.insert(3);
    binaryTree.insert(9);
    binaryTree.insert(12);
    binaryTree.insert(2);
    assertEquals(binaryTree.preOrder(), [7, 4, 3, 2, 9, 12]);
  }
});

/* Tree of this shape:
          7
        /   \
       4     9
      /       \
     3         12
    /
   2
*/
Deno.test({
  name: "Traverse the tree post order",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    binaryTree.insert(4);
    binaryTree.insert(3);
    binaryTree.insert(9);
    binaryTree.insert(12);
    binaryTree.insert(2);
    assertEquals(binaryTree.postOrder(), [2, 3, 4, 12, 9, 7]);
  }
});

/* Tree of this shape:
          7
        /   \
       4     9
      /       \
     3         12
    /
   2
*/
Deno.test({
  name: "Traverse the tree level order",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    binaryTree.insert(4);
    binaryTree.insert(3);
    binaryTree.insert(9);
    binaryTree.insert(12);
    binaryTree.insert(2);
    assertEquals(binaryTree.levelOrder(), [7, 4, 9, 3, 12, 2]);
  }
});

/* Tree of this shape:
          7
        /   \
       4     9
      / \   / \
     3   5 8   12
*/
Deno.test({
  name: "Traverse the tree vertical order",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    binaryTree.insert(4);
    binaryTree.insert(9);
    binaryTree.insert(5);
    binaryTree.insert(3);
    binaryTree.insert(8);
    binaryTree.insert(12);
    assertEquals(binaryTree.verticalOrderValues(), [3, 4, 7, 5, 8, 9, 12]);
  }
});

/* Tree of this shape:
          7
        /   \
       4     9
      / \   / \
     3   5 8   12
*/
Deno.test({
  name: "Returns a top-down view",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    binaryTree.insert(4);
    binaryTree.insert(9);
    binaryTree.insert(5);
    binaryTree.insert(3);
    binaryTree.insert(8);
    binaryTree.insert(12);
    assertEquals(binaryTree.topView(), [3, 4, 7, 9, 12]);
  }
});

/* Tree of this shape:
          7
        /   \
       4     9
      / \   / \
     3   5 8   12
*/
Deno.test({
  name: "Returns a reversed tree",
  fn(): void {
    const binaryTree = new BinaryTree();
    binaryTree.insert(7);
    binaryTree.insert(4);
    binaryTree.insert(9);
    binaryTree.insert(5);
    binaryTree.insert(3);
    binaryTree.insert(8);
    binaryTree.insert(12);
    const inOrder = binaryTree.inOrder();
    const expected = inOrder.reverse();
    binaryTree.reverse();
    assertEquals(expected, binaryTree.inOrder());
  }
});

await Deno.runTests;
