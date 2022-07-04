import { Tree } from "./Tree";
import { AvlTreeNode } from "./AvlTreeNode";
export declare class AvlTree<T> extends Tree<T> {
    constructor(comparator: <T>(item1: T, item2: T) => number);
    height(d: AvlTreeNode<T>): number;
    private rotateLeft;
    private rotateRight;
    private doubleRotateLeft;
    private doubleRotateRight;
    insert(node: AvlTreeNode<T>): void;
    insertData(item: T): void;
}
