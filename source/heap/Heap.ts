import {HeapNode} from "./HeapNode";

export class Heap<T> {

    private readonly array: Array<HeapNode<T>>
    protected comparator : <T>(item1: T, item2: T) => number
    private count: number

    constructor(N: number, comparator: <T>(item1: T, item2: T) => number){
        this.comparator = comparator
        this.array = new Array<HeapNode<T>>()
        this.count = 0
        for (let i = 0; i < N; i++){
            this.array.push()
        }
    }

    compare(data1: T, data2: T): number{
        return 0;
    }

    public isEmpty(): boolean{
        return this.count == 0
    }

    private swapNode(index1: number, index2: number){
        let tmp = this.array[index1]
        this.array[index1] = this.array[index2]
        this.array[index2] = tmp
    }

    protected percolateDown(no: number) {
        let left = 2 * no + 1
        let right = 2 * no + 2
        while ((left < this.count && this.compare(this.array[no].getData(), this.array[left].getData()) < 0) ||
        (right < this.count && this.compare(this.array[no].getData(), this.array[right].getData()) < 0)) {
            if (right >= this.count || this.compare(this.array[left].getData(), this.array[right].getData()) > 0) {
                this.swapNode(no, left)
                no = left
            } else {
                this.swapNode(no, right)
                no = right
            }
            left = 2 * no + 1
            right = 2 * no + 2
        }
    }

    protected percolateUp(no: number){
        let parent = Math.floor((no - 1) / 2)
        while (parent >= 0 && this.compare(this.array[parent].getData(), this.array[no].getData()) < 0){
            this.swapNode(parent, no)
            no = parent
            parent = Math.floor((no - 1) / 2)
        }
    }

    public delete(): T{
        let tmp = this.array[0]
        this.array[0] = this.array[this.count - 1]
        this.percolateDown(0)
        this.count = this.count - 1
        return tmp.getData()
    }

    public insert(data: T){
        this.count = this.count + 1
        this.array[this.count - 1] = new HeapNode<T>(data)
        this.percolateUp(this.count - 1)
    }

}

