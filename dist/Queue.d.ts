export declare class Queue<T> {
    private list;
    private head;
    private tail;
    private maxSize;
    constructor(maxSize: number);
    enqueue(item: T): void;
    dequeue(): T;
    peek(): T;
    isEmpty(): boolean;
}
