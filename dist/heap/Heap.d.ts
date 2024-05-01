/**
 * <p>The heap data structure is a binary tree structure consisting of N elements. It shows the basic properties of the
 * binary tree data structure. The heap has a root node and each node of it has at most two child nodes
 * (left and right). The root node of the tree is shown at the top, and its branches grow not to up but to down manner.
 * </p>
 *
 * <p>In a heap, if the maximum element is in the root node and all nodes are smaller than its descendants, then this heap
 * is called max-heap, if the minimum element is in the root node and all nodes are larger than its descendants, then
 * this heap is called min-heap.</p>
 * @param T Type of the data stored in the heap node.
 */
export declare class Heap<T> {
    private readonly array;
    protected comparator: (item1: T, item2: T) => number;
    private count;
    private n;
    /**
     * Constructor of the heap. According to the comparator, the heap could be min or max heap.
     * @param N Maximum number of elements in the heap.
     * @param comparator Comparator function to compare two elements.
     */
    constructor(N: number, comparator: (item1: T, item2: T) => number);
    compare(data1: T, data2: T): number;
    /**
     * Checks if the heap is empty or not.
     * @return True if the heap is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Swaps two heap nodes in the heap given their indexes.
     * @param index1 Index of the first node to swap.
     * @param index2 Index of the second node to swap.
     */
    private swapNode;
    /**
     * The function percolates down from a node of the tree to restore the max-heap property. Left or right children are
     * checked, if one of them is larger than the current element of the heap, the iteration continues. The iteration is,
     * determining the largest one of the node's children and switching that node's value with the current node's value.
     * We need to check if current node's left and right children exist or not. These checks are done with for the left
     * child and with for the right child.
     * @param no Index of the starting node to restore the max-heap property.
     */
    protected percolateDown(no: number): void;
    /**
     * The function percolates up from a node of the tree to restore the max-heap property. As long as the max-heap
     * property is corrupted, the parent and its child switch their values. We need to pay attention that, the
     * calculated index of the parent must be a valid number. In other words, while going upper levels,we need to see
     * that we can not go up if we are at the root of the tree.
     * @param no Index of the starting node to restore the max-heap property.
     */
    protected percolateUp(no: number): void;
    /**
     * The function will return the first element, therefore the first element is stored in the variable, and the first
     * element of the heap is set to the last element of the heap. After that, in order to restore the max-heap
     * property, we percolate down the tree using the function. As a last step, the number of element in the heap is
     * decremented by one.
     * @return The first element
     */
    delete(): T;
    /**
     * The insertion of a new element to the heap, proceeds from the leaf nodes to the root node. First the new element
     * is added to the end of the heap, then as long as the max-heap property is corrupted, the new element switches
     * place with its parent.
     * @param data New element to be inserted.
     */
    insert(data: T): void;
}
