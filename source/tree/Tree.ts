import {TreeNode} from "./TreeNode";

export class Tree<T> {

    protected root : TreeNode<T> | null = null
    protected comparator : <T>(item1: T, item2: T) => number

    constructor(comparator: <T>(item1: T, item2: T) => number){
        this.comparator = comparator
    }

    public search(value: T): TreeNode<T> | null{
        let d : TreeNode<T> | null = this.root
        while (d != null){
            if (this.comparator(d.data, value) == 0){
                return d
            } else {
                if (this.comparator(d.data, value) > 0){
                    d = d.left
                } else {
                    d = d.right
                }
            }
        }
        return null
    }

    protected insertChild(parent : TreeNode<T> | null, child: TreeNode<T>){
        if (parent == null) {
            this.root = child
        } else {
            if (this.comparator(child.data, parent.data) < 0) {
                parent.left = child
            } else {
                parent.right = child
            }
        }
    }

    public insert(node: TreeNode<T>){
        let y : TreeNode<T> | null = null
        let x : TreeNode<T> | null = this.root;
        while (x != null){
            y = x;
            if (this.comparator(node.data, x.data) < 0){
                x = x.left;
            } else {
                x = x.right;
            }
        }
        this.insertChild(y, node);
    }

    public insertData(data: T){
        this.insert(new TreeNode(data));
    }

}
