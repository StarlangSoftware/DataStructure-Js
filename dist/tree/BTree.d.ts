import { BTreeNode } from "./BTreeNode";
export declare class BTree<T> {
    root: BTreeNode<T> | null;
    comparator: <T>(item1: T, item2: T) => number;
    d: number;
    constructor(d: number, comparator: <T>(item1: T, item2: T) => number);
    search(value: T): BTreeNode<T> | null;
    insertData(data: T): void;
}
