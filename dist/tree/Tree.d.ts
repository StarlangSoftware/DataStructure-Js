import { TreeNode } from "./TreeNode";
export declare class Tree<T> {
    protected root: TreeNode<T> | null;
    protected comparator: <T>(item1: T, item2: T) => number;
    constructor(comparator: <T>(item1: T, item2: T) => number);
    search(value: T): TreeNode<T> | null;
    protected insertChild(parent: TreeNode<T> | null, child: TreeNode<T>): void;
    insert(node: TreeNode<T>): void;
    insertData(data: T): void;
}
