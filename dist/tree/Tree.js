(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TreeNode"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tree = void 0;
    const TreeNode_1 = require("./TreeNode");
    class Tree {
        constructor(comparator) {
            this.root = null;
            this.comparator = comparator;
        }
        search(value) {
            let d = this.root;
            while (d != null) {
                if (this.comparator(d.data, value) == 0) {
                    return d;
                }
                else {
                    if (this.comparator(d.data, value) > 0) {
                        d = d.left;
                    }
                    else {
                        d = d.right;
                    }
                }
            }
            return null;
        }
        insertChild(parent, child) {
            if (parent == null) {
                this.root = child;
            }
            else {
                if (this.comparator(child.data, parent.data) < 0) {
                    parent.left = child;
                }
                else {
                    parent.right = child;
                }
            }
        }
        insert(node) {
            let y = null;
            let x = this.root;
            while (x != null) {
                y = x;
                if (this.comparator(node.data, x.data) < 0) {
                    x = x.left;
                }
                else {
                    x = x.right;
                }
            }
            this.insertChild(y, node);
        }
        insertData(data) {
            this.insert(new TreeNode_1.TreeNode(data));
        }
    }
    exports.Tree = Tree;
});
//# sourceMappingURL=Tree.js.map