import {Heap} from "./Heap";

export class MinHeap<T> extends Heap<T>{

    constructor(N: number, comparator: (item1: T, item2: T) => number){
        super(N, comparator)
    }

    compare(data1: T, data2: T): number {
        return -this.comparator(data1, data2)
    }

}