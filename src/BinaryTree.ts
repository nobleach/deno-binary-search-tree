export class TreeNode {
  public value: number;
  public left?: TreeNode;
  public right?: TreeNode;

  constructor(value: number) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

export class BinaryTree {
  root: TreeNode | null;
  size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  insert(value: number): void {
    // FIXME, this is wrong
    this.size++;

    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let current = this.root;

      while(true) {
        if (value < current.value) {
          // See if we already have a node on the left
          if (current.left) {
            // set the current node, and move on
            current = current.left;
          } else {
            // Otherwise, insert node on left
            current.left = new TreeNode(value);
            break;
          }
        } else if (value > current.value) {
          // See if we already have a node on right
          if (current.right) {
            // set the current node, and move on
            current = current.right;
          } else {
            // Otherwise, insert node on right
            current.right = new TreeNode(value);
            break;
          }
        } else {
          break;
        }
      }
    }
  }

  getRoot(): TreeNode | null {
    return this.root;
  }

  inOrder(node?: TreeNode, collector: (number | undefined)[] = []): (number | undefined)[] {
    if (this.root === null) {
      throw new Error('There are no nodes in this tree');
    }

    if (node === null || node === undefined) {
      node = this.root;
      console.log('node', node);
    }

    // this.inOrder(node?.left, collector);
    // collector.push(node?.value);
    // this.inOrder(node?.right, collector);

    return collector;
  }
}
