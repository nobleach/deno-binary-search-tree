export class Queue<T> {
  private storage: T[] = [];
  private queueSize: number;

  constructor() {
    this.queueSize = 0;
  }

  size(): number {
    return this.queueSize;
  }

  enqueue(element: T) {
    this.queueSize = this.queueSize + 1;
    this.storage.push(element);
  }

  dequeue(): T | null{
    if (this.queueSize === 0) {
      return null;
    }

    this.queueSize = this.queueSize - 1;
    const element = this.storage.shift();

    return element ? element : null;
  }
}
