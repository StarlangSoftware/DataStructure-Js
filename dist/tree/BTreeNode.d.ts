export declare class BTreeNode<T> {
    K: Array<T>;
    m: number;
    d: number;
    leaf: boolean;
    children: Array<BTreeNode<T>>;
    /**
     * Another constructor of a B+ Tree node. By default, it is not a leaf node. Adds two children.
     * @param d d in d-ary tree.
     * @param firstChild First child of the root node.
     * @param secondChild Second child of the root node.
     * @param newK First value in the node.
     */
    constructor(d: number, firstChild: BTreeNode<T> | undefined, secondChild: BTreeNode<T> | undefined, newK: T | undefined);
    /**
     * Searches the position of value in the list K. If the searched value is larger than the last value of node, we
     * need to continue the search with the rightmost child. If the searched value is smaller than the i. value of node,
     * we need to continue the search with the i. child.
     * @param value Searched value
     * @param comparator Comparator function which compares two elements.
     * @return The position of searched value in array K.
     */
    position(value: T, comparator: <T>(item1: T, item2: T) => number): number;
    /**
     * Add the new value insertedK to the array K into the calculated position index.
     * @param index Place to insert new value
     * @param insertedK New value to be inserted.
     */
    private insertIntoK;
    /**
     * Transfers the last d values of the current node to the newNode.
     * @param newNode New node.
     */
    private moveHalfOfTheKToNewNode;
    /**
     * Transfers the last d links of the current node to the newNode.
     * @param newNode New node.
     */
    private moveHalfOfTheChildrenToNewNode;
    /**
     * Transfers the last d values and the last d links of the current node to the newNode.
     * @param newNode New node.
     */
    private moveHalfOfTheElementsToNewNode;
    /**
     * First the function position is used to determine the node or the subtree to which the new node will be added.
     * If this subtree is a leaf node, we call the function insertLeaf that will add the value to a leaf node. If this
     * subtree is not a leaf node the function calls itself with the determined subtree. Both insertNode and insertLeaf
     * functions, if adding a new value/node to that node/subtree necessitates a new child node to be added to the
     * parent node, they will both return the new added node and the node obtained by dividing the original node. If
     * there is not such a restructuring, these functions will return null. If we add a new child node to the parent
     * node, first we open a space for that child node in the value array K, then we add this new node to the array K.
     * After adding there are two possibilities:
     * <ul>
     *     <li>After inserting the new child node, the current node did not exceed its capacity. In this case, we open
     *     space for the link, which points to the new node, in the array children and place that link inside of this
     *     array.</li>
     *     <li>After inserting the new child node, the current node exceed its capacity. In this case, we need to create
     *     newNode, transfer the last d values and the last d links of the current node to the newNode. As a last case,
     *     if the divided node is the root node, we need to create a new root node and the first child of this new root
     *     node will be b, and the second child of the new root node will be newNode.</li>
     * </ul>
     * @param value Value to be inserted into B+ tree.
     * @param comparator Comparator function to compare two elements.
     * @param isRoot If true, value is inserted as a root node, otherwise false.
     * @return If inserted node results in a creation of a node, the function returns that node, otherwise null.
     */
    insertNode(value: T, comparator: <T>(item1: T, item2: T) => number, isRoot: boolean): BTreeNode<T> | null;
    /**
     * First the function position is used to determine the position where the new value will be placed Then we open a
     * space for that value in the value array K, then we add this new value to the array K into the calculated
     * position. At this stage there are again two possibilities:
     * <ul>
     *     <li>After inserting the new value, the current leaf node did not exceed its capacity. The function returns
     *     null.</li>
     *     <li>After inserting the new value, the current leaf node exceed its capacity. In this case, we need to create
     *     the newNode, and transfer the last d values of node b to this newNode.</li>
     * </ul>
     * @param value Value to be inserted into B+ tree.
     * @param comparator Comparator function to compare two elements.
     * @return If inserted node results in a creation of a node, the function returns that node, otherwise null.
     */
    insertLeaf(value: T, comparator: <T>(item1: T, item2: T) => number): BTreeNode<T> | null;
}
