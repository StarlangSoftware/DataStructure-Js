import {Tree} from "./Tree";
import {AvlTreeNode} from "./AvlTreeNode";
import {Stack} from "../Stack";

export class AvlTree<T> extends Tree<T>{

    constructor(comparator: <T>(item1: T, item2: T) => number){
        super(comparator)
    }

    public height(d: AvlTreeNode<T>): number{
        if (d == null){
            return 0
        } else {
            return d.height
        }
    }

    private rotateLeft(k2: AvlTreeNode<T>): AvlTreeNode<T>{
        let k1 : AvlTreeNode<T> = <AvlTreeNode<T>> k2.left
        k2.left = k1.right
        k1.right = k2
        k2.height = Math.max(this.height(<AvlTreeNode<T>> k2.left), this.height(<AvlTreeNode<T>> k2.right)) + 1
        k1.height = Math.max(this.height(<AvlTreeNode<T>> k1.left), (<AvlTreeNode<T>> k1.right).height) + 1
        return k1
    }

    private rotateRight(k1: AvlTreeNode<T>) : AvlTreeNode<T>{
        let k2 : AvlTreeNode<T> = <AvlTreeNode<T>> k1.right
        k1.right = k2.left
        k2.left = k1
        k2.height = Math.max((<AvlTreeNode<T>> k2.left).height, this.height(<AvlTreeNode<T>> k2.right)) + 1
        k1.height = Math.max(this.height(<AvlTreeNode<T>> k1.left), this.height(<AvlTreeNode<T>> k1.right)) + 1
        return k2
    }

    private doubleRotateLeft(k3: AvlTreeNode<T>): AvlTreeNode<T>{
        k3.left = this.rotateRight(<AvlTreeNode<T>> k3.left)
        return this.rotateLeft(k3)
    }

    private doubleRotateRight(k1: AvlTreeNode<T>): AvlTreeNode<T>{
        k1.right = this.rotateLeft(<AvlTreeNode<T>> k1.right)
        return this.rotateRight(k1)
    }

    public insert(node : AvlTreeNode<T>){
        let LEFT = 1, RIGHT = 2
        let y : AvlTreeNode<T> | null = null
        let x : AvlTreeNode<T> | null = <AvlTreeNode<T>> this.root
        let t : AvlTreeNode<T> | null
        let dir1 = 0, dir2 = 0
        let c : Stack<AvlTreeNode<T>> = new Stack<AvlTreeNode<T>>()
        while (x != null){
            y = x
            c.push(y)
            dir1 = dir2
            if (this.comparator(node.data, x.data) < 0){
                x = <AvlTreeNode<T>> x.left
                dir2 = LEFT
            } else {
                x = <AvlTreeNode<T>> x.right
                dir2 = RIGHT
            }
        }
        this.insertChild(y, node)
        while (!c.isEmpty()){
            x = c.pop()
            if (x != null){
                x.height = Math.max(this.height(<AvlTreeNode<T>> x.left), this.height(<AvlTreeNode<T>> x.right)) + 1;
                if (Math.abs(this.height(<AvlTreeNode<T>> x.left) - this.height(<AvlTreeNode<T>> x.right)) == 2){
                    if (dir1 == LEFT){
                        if (dir2 == LEFT){
                            t = this.rotateLeft(x)
                        } else {
                            t = this.doubleRotateLeft(x)
                        }
                    } else {
                        if (dir2 == LEFT){
                            t = this.doubleRotateRight(x)
                        } else {
                            t = this.rotateRight(x);
                        }
                    }
                    y = c.pop();
                    this.insertChild(y, t);
                    break;
                }
            }
        }
    }

    public insertData( item : T){
        this.insert(new AvlTreeNode<T>(item))
    }

}