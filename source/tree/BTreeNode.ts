export class BTreeNode<T> {

    K : Array<T>;
    m : number
    d : number
    leaf: boolean
    children : Array<BTreeNode<T>>

    constructor(d: number, firstChild: BTreeNode<T> | undefined, secondChild: BTreeNode<T> | undefined, newK : T | undefined) {
        this.d = d
        this.K = [];
        this.children = [];
        if (firstChild == undefined){
            this.m = 0
            this.leaf = true
        } else {
            this.m = 1
            this.leaf = false
            this.children[0] = firstChild;
            if (secondChild != undefined){
                this.children[1] = secondChild;
            }
            if (newK != undefined){
                this.K[0] = newK;
            }
        }
    }

    position(value: T, comparator: <T>(item1: T, item2: T) => number){
        if (this.m == 0){
            return 0
        }
        if (comparator(value, this.K[this.m - 1]) > 0){
            return this.m
        } else {
            for (let i = 0; i < this.m; i++){
                if (comparator(value, this.K[i]) <= 0){
                    return i
                }
            }
        }
        return -1
    }

    private insertIntoK(index: number, insertedK: T){
        for (let i = this.m; i > index; i--){
            this.K[i] = this.K[i - 1]
        }
        this.K[index] = insertedK
    }

    private moveHalfOfTheKToNewNode(newNode: BTreeNode<T>) {
        for (let i = 0; i < this.d; i++) {
            newNode.K[i] = this.K[i + this.d + 1]
        }
        newNode.m = this.d
    }

    private moveHalfOfTheChildrenToNewNode(newNode: BTreeNode<T>) {
        for (let i = 0 ; i < this.d; i++){
            newNode.children[i] = this.children[i + this.d + 1];
        }
    }

    private moveHalfOfTheElementsToNewNode(newNode: BTreeNode<T>){
        this.moveHalfOfTheKToNewNode(newNode);
        this.moveHalfOfTheChildrenToNewNode(newNode);
    }

    public insertNode(value: T, comparator: <T>(item1: T, item2: T) => number, isRoot: boolean): BTreeNode<T> | null{
        let s : BTreeNode<T> | null
        let newNode : BTreeNode<T>
        let child : number
        child = this.position(value, comparator);
        if (!this.children[child].leaf){
            s = this.children[child].insertNode(value, comparator, false);
        } else {
            s = this.children[child].insertLeaf(value, comparator);
        }
        if (s == null){
            return null
        }
        this.insertIntoK(child, this.children[child].K[this.d])
        if (this.m < 2 * this.d){
            this.children[child + 1] = s
            this.m++;
            return null
        } else {
            newNode = new BTreeNode<T>(this.d, undefined, undefined, undefined);
            newNode.leaf = false
            this.moveHalfOfTheElementsToNewNode(newNode)
            newNode.children[this.d] = s
            this.m = this.d
            if (isRoot){
                return new BTreeNode<T>(this.d, this, newNode, this.K[this.d])
            } else {
                return newNode
            }
        }
    }

    public insertLeaf(value: T, comparator: <T>(item1: T, item2: T) => number): BTreeNode<T> | null{
        let child = this.position(value, comparator)
        this.insertIntoK(child, value)
        if (this.m < 2 * this.d){
            this.m++;
            return null
        } else {
            let newNode = new BTreeNode<T>(this.d, undefined, undefined, undefined);
            this.moveHalfOfTheKToNewNode(newNode);
            this.m = this.d;
            return newNode;
        }
    }

}