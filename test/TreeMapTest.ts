import {
  assertEquals,
} from "./deps.ts";
import { TreeMap } from '../src/TreeMap.ts';
import { TreeNode } from '../src/BinaryTree.ts';

Deno.test({
  name: "Creates an empty TreeMap",
  fn(): void {
    const map = new TreeMap();
    assertEquals(map.size, 0);
  }
});

Deno.test({
  name: "Returns sorted key/values",
  fn(): void {
    const map = new TreeMap<number, Array<TreeNode>>();
    map.set(0, [new TreeNode(7)]);
    map.set(-1, [new TreeNode(5), new TreeNode(9)]);
    map.set(-2, [new TreeNode(4)])
    assertEquals(map.size, 3);
    const expected = new Map();
    expected.set(-2, [new TreeNode(4)]);
    expected.set(-1, [new TreeNode(5), new TreeNode(9)]);
    expected.set(0, [new TreeNode(7)]);

    assertEquals(map.getAllSorted(), expected);
  }
});

await Deno.runTests;
