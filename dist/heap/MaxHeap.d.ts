import { Heap } from "./Heap";
export declare class MaxHeap<T> extends Heap<T> {
    constructor(N: number, comparator: (item1: T, item2: T) => number);
    compare(data1: T, data2: T): number;
}
