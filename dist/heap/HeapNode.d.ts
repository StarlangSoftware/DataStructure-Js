export declare class HeapNode<T> {
    data: T;
    /**
     * Constructor of HeapNode.
     * @param data Data to be stored in the heap node.
     */
    constructor(data: T);
    /**
     * Mutator of the data field
     * @return Data
     */
    getData(): T;
}
