"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    list = [];
    head;
    tail;
    maxSize;
    /**
     * Constructor of the queue data structure
     * @param maxSize Maximum size of the queue
     */
    constructor(maxSize) {
        this.head = 0;
        this.tail = 0;
        this.maxSize = maxSize;
        this.list = new Array(maxSize);
    }
    /**
     * Adds a set of elements to the end of the queue
     * @param items Elements to be inserted into the queue
     */
    enqueueAll(items) {
        for (let item of items) {
            this.enqueue(item);
        }
    }
    /**
     * Adds an element to the end of the queue.
     * @param item Element added to the queue.
     */
    enqueue(item) {
        this.list[this.tail] = item;
        this.tail = (this.tail + 1) % this.maxSize;
    }
    /**
     * Removes an element from the start of the queue.
     * @return Removed item
     */
    dequeue() {
        let item = this.list[this.head];
        this.head = (this.head + 1) % this.maxSize;
        return item;
    }
    /**
     * Returns head of the queue.
     * @return Head of the queue
     */
    peek() {
        return this.list[this.head];
    }
    /**
     * Checks if the queue is empty or not.
     * @return Returns true if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.head == this.tail;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map