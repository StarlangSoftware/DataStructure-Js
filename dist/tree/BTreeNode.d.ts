export declare class BTreeNode<T> {
    K: Array<T>;
    m: number;
    d: number;
    leaf: boolean;
    children: Array<BTreeNode<T>>;
    constructor(d: number, firstChild: BTreeNode<T> | undefined, secondChild: BTreeNode<T> | undefined, newK: T | undefined);
    position(value: T, comparator: <T>(item1: T, item2: T) => number): number;
    private insertIntoK;
    private moveHalfOfTheKToNewNode;
    private moveHalfOfTheChildrenToNewNode;
    private moveHalfOfTheElementsToNewNode;
    insertNode(value: T, comparator: <T>(item1: T, item2: T) => number, isRoot: boolean): BTreeNode<T> | null;
    insertLeaf(value: T, comparator: <T>(item1: T, item2: T) => number): BTreeNode<T> | null;
}
