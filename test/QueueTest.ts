import {
  assertEquals,
} from "./deps.ts";
import {
  Queue,
} from '../src/Queue.ts';

Deno.test({
  name: "Creates an empty Queue",
  fn(): void {
    const queue = new Queue();
    assertEquals(queue.size(), 0);
  }
});

Deno.test({
  name: "Enqueues an element",
  fn(): void {
    const queue = new Queue();
    queue.enqueue(45);
    assertEquals(queue.size(), 1);
  }
});

Deno.test({
  name: "cannot dequeue if queue is empty",
  fn(): void {
    const queue = new Queue();
    assertEquals(queue.size(), 0);
    assertEquals(queue.dequeue(), null);
    assertEquals(queue.size(), 0);
  }
});

Deno.test({
  name: "Dequeues an element",
  fn(): void {
    const queue = new Queue();
    queue.enqueue(45);
    assertEquals(queue.dequeue(), 45);
    assertEquals(queue.size(), 0);
  }
});
