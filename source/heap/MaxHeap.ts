import {Heap} from "./Heap";
import {HeapNode} from "./HeapNode";

export class MaxHeap<T> extends Heap<T>{

    constructor(N: number, comparator: <T>(item1: T, item2: T) => number){
        super(N, comparator)
    }

    compare(data1: T, data2: T): number {
        return this.comparator(data1, data2)
    }

}