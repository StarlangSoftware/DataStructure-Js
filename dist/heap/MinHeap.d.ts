import { Heap } from "./Heap";
export declare class MinHeap<T> extends Heap<T> {
    constructor(N: number, comparator: <T>(item1: T, item2: T) => number);
    compare(data1: T, data2: T): number;
}
