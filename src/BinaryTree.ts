import { Queue } from './Queue.ts';
import { TreeMap } from './TreeMap.ts';

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

export class NodeDistancePair {
  public node: TreeNode;
  public distance: number;

  constructor(node: TreeNode, distance: number) {
    this.node = node;
    this.distance = distance;
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

  getHeight(root: TreeNode | null): number {
    let node = root;
    // if we don't have a node, use the root node
    if (node === null) {
      return -1;
    }

    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
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

  levelOrder(node?: TreeNode | null): (number |undefined)[] {
    // if no arg is passed, use the root node
    if (node === undefined) {
      node = this.root;
    }

    if (node !== null) {
      const queue = new Queue<TreeNode>();
      queue.enqueue(node);
      while (queue.size() > 0) {
        let count = queue.size();

        while (count > 0) {
          let currentNode = queue.dequeue();
          if (currentNode !== null) {

            this.collector.push(currentNode.data);
            if (currentNode.left !== null) {
              queue.enqueue(currentNode.left);
            }

            if (currentNode.right !== null) {
              queue.enqueue(currentNode.right);
            }

            count--;
          }
        }
      }
    }

    return this.collector;
  }

  verticalOrder(node?: TreeNode | null): Map<number, Array<TreeNode>> | null {
    // if no arg is passed, use the root node
    if (node === undefined) {
      node = this.root;
    }

    if (node !== null) {
      const disMap = new TreeMap<number, Array<TreeNode>>();
      const queue = new Queue<NodeDistancePair>();
      queue.enqueue(new NodeDistancePair(node, 0));
      while (queue.size() > 0) {
        let el = queue.dequeue();
        if (el !== null) {
          if (disMap.has(el.distance)) {
            disMap.set(el.distance, disMap.get(el.distance).concat(el.node));
          } else {
            disMap.set(el.distance, [el.node]);
          }

          if (el.node.left) {
            queue.enqueue(new NodeDistancePair(el.node.left, el.distance - 1));
          }

          if (el.node.right) {
            queue.enqueue(new NodeDistancePair(el.node.right, el.distance + 1));
          }
        }
      } // end while loop

      return disMap.getAllSorted();
    }

    return null;
  }

  verticalOrderValues(): (number | undefined)[] {
    const verticalOrderValues = this.verticalOrder();
      const allValues: number[] = [];
      if (verticalOrderValues !== null) {
        verticalOrderValues.forEach(dis => {
          dis.forEach(n => allValues.push(n.data));
        });

        return allValues;
      }

      return [];
  }

  topView(): (number | undefined)[] {
    const verticalOrderValues = this.verticalOrder();
      const allValues: number[] = [];
      if (verticalOrderValues !== null) {
        verticalOrderValues.forEach(dis => {
          allValues.push(dis[0].data);
        });

        return allValues;
      }

      return [];

  }

  reverse(node?: TreeNode | null): void {
    // if no arg is passed, use the root node
    if (node === undefined) {
      node = this.root;
    }

    if (node !== null) {
      this.reverse(node.left);
      this.reverse(node.right);
      // Swap left and right child
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
  }
}
