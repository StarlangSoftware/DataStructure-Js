export declare class Queue<T> {
    private list;
    private head;
    private tail;
    private maxSize;
    /**
     * Constructor of the queue data structure
     * @param maxSize Maximum size of the queue
     */
    constructor(maxSize: number);
    /**
     * Adds a set of elements to the end of the queue
     * @param items Elements to be inserted into the queue
     */
    enqueueAll(items: Array<T>): void;
    /**
     * Adds an element to the end of the queue.
     * @param item Element added to the queue.
     */
    enqueue(item: T): void;
    /**
     * Removes an element from the start of the queue.
     * @return Removed item
     */
    dequeue(): T;
    /**
     * Returns head of the queue.
     * @return Head of the queue
     */
    peek(): T;
    /**
     * Checks if the queue is empty or not.
     * @return Returns true if the queue is empty, false otherwise.
     */
    isEmpty(): boolean;
}
