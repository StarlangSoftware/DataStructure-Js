export class HeapNode<T> {

    data : T

    /**
     * Constructor of HeapNode.
     * @param data Data to be stored in the heap node.
     */
    constructor(data: T){
        this.data = data
    }

    /**
     * Mutator of the data field
     * @return Data
     */
    public getData(): T{
        return this.data
    }

}