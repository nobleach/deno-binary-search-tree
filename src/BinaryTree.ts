export class TreeNode {
  public data: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(value: number) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: TreeNode | null;
  size: number;
  collector: number[];

  constructor() {
    this.root = null;
    this.size = 0;
    this.collector = [];
  }

  getSize(): number {
    return this.size;
  }

  insert(value: number): void {
    const newNode = new TreeNode(value);
    // Does our root node exist?
    if (this.root === null) {
      // if not, insert the newly created node
      this.root = newNode;
    } else {
      // Otherwise, call insertNode to find a home
      this.insertNode(this.root, newNode);
    }
  }

  // node: place to put new node
  // newNode: node to place
  insertNode(node: TreeNode, newNode: TreeNode) {
    // if the value we are placing is less than
    // the node, choose the left
    if(newNode.data < node.data) {
      // If there's an opening (null) insert
      if(node.left === null) {
        node.left = newNode;
      } else {
        // Otherwise, call insertNode with the
        // current node's left child as the new
        // destination
        this.insertNode(node.left, newNode);
      }
    } else {
      // if the value we are placing is greater than
      // the node, choose the right
      if (node.right === null) {
        // If there's an opening (null) insert
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  getRoot(): TreeNode | null {
    return this.root;
  }

  inOrder(node?: TreeNode | null): (number | undefined)[] {
    // if no arg is passed, use the root node
    if (node === undefined) {
      node = this.root;
    }

    if (node !== null) {
      this.inOrder(node.left);
      this.collector.push(node?.data);
      this.inOrder(node.right);
    }

    return this.collector;
  }

  preOrder(node?: TreeNode | null): (number | undefined)[] {
    // if no arg is passed, use the root node
    if (node === undefined) {
      node = this.root;
    }

    if (node !== null) {
      this.collector.push(node?.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }

    return this.collector;
  }

  postOrder(node?: TreeNode | null): (number | undefined)[] {
    // if no arg is passed, use the root node
    if (node === undefined) {
      node = this.root;
    }

    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.collector.push(node?.data);
    }

    return this.collector;
  }
}
