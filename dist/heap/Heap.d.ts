export declare class Heap<T> {
    private readonly array;
    protected comparator: <T>(item1: T, item2: T) => number;
    private count;
    private n;
    constructor(N: number, comparator: <T>(item1: T, item2: T) => number);
    compare(data1: T, data2: T): number;
    isEmpty(): boolean;
    private swapNode;
    protected percolateDown(no: number): void;
    protected percolateUp(no: number): void;
    delete(): T;
    insert(data: T): void;
}
