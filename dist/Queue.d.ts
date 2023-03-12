export declare class Queue<T> {
    private list;
    private head;
    private tail;
    private maxSize;
    constructor(maxSize: number);
    enqueueAll(items: Array<T>): void;
    enqueue(item: T): void;
    dequeue(): T;
    peek(): T;
    isEmpty(): boolean;
}
