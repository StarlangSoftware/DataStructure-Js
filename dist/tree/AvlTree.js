(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Tree", "./AvlTreeNode", "../Stack"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AvlTree = void 0;
    const Tree_1 = require("./Tree");
    const AvlTreeNode_1 = require("./AvlTreeNode");
    const Stack_1 = require("../Stack");
    /**
     * <p>AVL (Adelson-Velskii and Landis) tree is a balanced binary search tree structure. The balance property is very simple
     * and ensures the depth of the tree is in the level of O(log N).</p>
     *
     * <p>In AVL tree, the heights of the left and right subtrees of each node can differ by at most 1. If the heights of the
     * left and right subtrees of a single node differ by more than 1, then that binary search tree is not an AVL tree.</p>
     * @param T Type of the data stored in the tree node.
     */
    class AvlTree extends Tree_1.Tree {
        constructor(comparator) {
            super(comparator);
        }
        height(d) {
            if (d == null) {
                return 0;
            }
            else {
                return d.height;
            }
        }
        /**
         * In rotate left, we move node k1 one level up, since due to the binary search tree
         * property k2 > k1, we move node k2 one level down. The links updated are:
         * <ul>
         *     <li>Since k2 > B > k1, the left child of node k2 is now the old right child of k1</li>
         *     <li>The right child of k1 is now k2 </li>
         * </ul>
         * Note that, the root node of the subtree is now k1. In order to modify the parent link of k2, the new root of the
         * subtree is returned by the function.
         * @param k2 Root of the subtree, which does not satisfy the AVL tree property.
         * @return The new root of the subtree
         */
        rotateLeft(k2) {
            let k1 = k2.left;
            k2.left = k1.right;
            k1.right = k2;
            k2.height = Math.max(this.height(k2.left), this.height(k2.right)) + 1;
            k1.height = Math.max(this.height(k1.left), k1.right.height) + 1;
            return k1;
        }
        /**
         * In order to restore the AVL tree property, we move node k2 one level up, since due to the binary search tree
         * property k2 > k1, we move node k1 one level down. The links updated are:
         * <ul>
         *     <li>Since k2 > B > k1, the right child of node k1 is now the old left child of k2.</li>
         *     <li>The left child of k2 is now k1</li>
         * </ul>
         * Note that, the root node of the subtree is now k2. In order to modify the parent link of k1, the new root of the
         * subtree is returned by the function.
         * @param k1 Root of the subtree, which does not satisfy the AVL tree property.
         * @return The new root of the subtree
         */
        rotateRight(k1) {
            let k2 = k1.right;
            k1.right = k2.left;
            k2.left = k1;
            k2.height = Math.max(k2.left.height, this.height(k2.right)) + 1;
            k1.height = Math.max(this.height(k1.left), this.height(k1.right)) + 1;
            return k2;
        }
        /**
         * <p>In the first phase we will do single right rotation on the subtree rooted with k1. With this rotation, the left
         * child of node k2 will be k1, whereas the right child of node k1 will be B (the old left child of node k2).</p>
         *
         * <p>In the second phase, we will do single left rotation on the subtree rooted with k3. With this rotation, the
         * right child of node k2 will be k3, whereas the left child of node k3 will be C (the old right child of k2).</p>
         *
         * Note that, the new root node of the subtree is now k2. In order to modify the parent link of k3, the new root of
         * the subtree is returned by the function.
         * @param k3 Root of the subtree, which does not satisfy the AVL tree property.
         * @return The new root of the subtree
         */
        doubleRotateLeft(k3) {
            k3.left = this.rotateRight(k3.left);
            return this.rotateLeft(k3);
        }
        /**
         * <p>In the first phase we will do single right rotation on the subtree rooted with k3. With this rotation, the right
         * child of node k2 will be k3, whereas the left child of node k3 will be C (the old right child of node k2).</p>
         *
         * <p>In the second phase, we will do single right rotation on the subtree rooted with k1. With this rotation, the left
         * child of node k2 will be k1, whereas the left child of node k1 will be B (the old left child of k2).</p>
         *
         * Note that, the new root node of the subtree is now k2. In order to modify the parent link of k1, the new root of
         * the subtree is returned by the function.
         * @param k1 Root of the subtree, which does not satisfy the AVL tree property.
         * @return The new root of the subtree
         */
        doubleRotateRight(k1) {
            k1.right = this.rotateLeft(k1.right);
            return this.rotateRight(k1);
        }
        /**
         * <p>First we will proceed with the stages the same when we add a new node into a binary search tree. For this, we
         * start from the root node and traverse in down manner. The current node we visit is represented with x and the
         * previous node is represented with y. At each time we compare the value of the current node with the value of the
         * new node. If the value of the new node is smaller than the value of the current node, the new node will be
         * inserted into the left subtree of the current node. For this, we will continue with the left child to process. If
         * the reverse is true, that is, if the value of the new node is larger than the value of the current node, the new
         * node will be inserted into the right subtree of the current node. In this case, we will continue with the right
         * child to process. At each step, we store the current node in a separate stack.</p>
         *
         * <p>When we insert a new node into an AVL tree, we need to change the heights of the nodes and check if the AVL tree
         * property is satisfied or not. Only the height of the nodes, which we visit while we are finding the place for the
         * new node, can be changed. So, what we should do is to pop those nodes from the stack one by one and change the
         * heights of those nodes.</p>
         *
         * <p>Similarly, the nodes, which we visit while we are finding the place for the new node, may no longer satisfy the
         * AVL tree property. So what we should do is to pop those nodes from the stack one by one and calculate the
         * difference of the heights of their left and right subtrees. If the height difference is 2, the AVL tree property
         * is not satisfied. If we added the new node into the left subtree of the left child, we need to do left single
         * rotation, if we added into the right subtree of the left child, we need to do left double rotation, if we added
         * into the left subtree of the right child, we need to do right double rotation, if we added into the right subtree
         * of the right child, we need to the right single rotation. Since  the root node of the subtree will be changed
         * after a rotation, the new child of y will be the new root node t.</p>
         * @param node Node to be inserted.
         */
        insert(node) {
            let LEFT = 1, RIGHT = 2;
            let y = null;
            let x = this.root;
            let t;
            let dir1 = 0, dir2 = 0;
            let c = new Stack_1.Stack();
            while (x != null) {
                y = x;
                c.push(y);
                dir1 = dir2;
                if (this.comparator(node.data, x.data) < 0) {
                    x = x.left;
                    dir2 = LEFT;
                }
                else {
                    x = x.right;
                    dir2 = RIGHT;
                }
            }
            this.insertChild(y, node);
            while (!c.isEmpty()) {
                x = c.pop();
                if (x != null) {
                    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
                    if (Math.abs(this.height(x.left) - this.height(x.right)) == 2) {
                        if (dir1 == LEFT) {
                            if (dir2 == LEFT) {
                                t = this.rotateLeft(x);
                            }
                            else {
                                t = this.doubleRotateLeft(x);
                            }
                        }
                        else {
                            if (dir2 == LEFT) {
                                t = this.doubleRotateRight(x);
                            }
                            else {
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
        insertData(item) {
            this.insert(new AvlTreeNode_1.AvlTreeNode(item));
        }
    }
    exports.AvlTree = AvlTree;
});
//# sourceMappingURL=AvlTree.js.map