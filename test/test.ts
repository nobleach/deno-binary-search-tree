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

await Deno.runTests;