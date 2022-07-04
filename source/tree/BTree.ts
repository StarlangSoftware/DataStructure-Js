import {BTreeNode} from "./BTreeNode";

export class BTree<T> {

    root : BTreeNode<T> | null = null;
    comparator : <T>(item1: T, item2: T) => number
    d : number

    constructor(d: number, comparator: <T>(item1: T, item2: T) => number){
        this.comparator = comparator
        this.d = d
    }

    public search(value: T): BTreeNode<T> | null{
        let b = this.root;
        while (b != null && !b.leaf){
            let child = b.position(value, this.comparator)
            if (child < b.m && b.K[child] == value){
                return b
            }
            b = b.children[child]
        }
        if (b != null){
            let child = b.position(value, this.comparator)
            if (child < b.m && b.K[child] == value){
                return b
            }
        }
        return null
    }

    public insertData(data: T){
        if (this.root == null){
            this.root = new BTreeNode<T>(this.d, undefined, undefined, undefined)
        }
        if (this.root.leaf){
            let s = this.root.insertLeaf(data, this.comparator)
            if (s != null){
                let tmp = this.root
                this.root = new BTreeNode<T>(this.d, tmp, s, tmp.K[this.d]);
            }
        } else {
            let s = this.root.insertNode(data, this.comparator, true);
            if (s != null){
                this.root = s;
            }
        }
    }

}