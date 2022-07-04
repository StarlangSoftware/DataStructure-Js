import {TreeNode} from "./TreeNode";

export class AvlTreeNode<T> extends TreeNode<T> {

    height : number

    constructor (data: T) {
        super(data)
        this.height = 1
    }

}