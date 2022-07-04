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
        rotateLeft(k2) {
            let k1 = k2.left;
            k2.left = k1.right;
            k1.right = k2;
            k2.height = Math.max(this.height(k2.left), this.height(k2.right)) + 1;
            k1.height = Math.max(this.height(k1.left), k1.right.height) + 1;
            return k1;
        }
        rotateRight(k1) {
            let k2 = k1.right;
            k1.right = k2.left;
            k2.left = k1;
            k2.height = Math.max(k2.left.height, this.height(k2.right)) + 1;
            k1.height = Math.max(this.height(k1.left), this.height(k1.right)) + 1;
            return k2;
        }
        doubleRotateLeft(k3) {
            k3.left = this.rotateRight(k3.left);
            return this.rotateLeft(k3);
        }
        doubleRotateRight(k1) {
            k1.right = this.rotateLeft(k1.right);
            return this.rotateRight(k1);
        }
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