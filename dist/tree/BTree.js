(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./BTreeNode"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BTree = void 0;
    const BTreeNode_1 = require("./BTreeNode");
    class BTree {
        constructor(d, comparator) {
            this.root = null;
            this.comparator = comparator;
            this.d = d;
        }
        search(value) {
            let b = this.root;
            while (b != null && !b.leaf) {
                let child = b.position(value, this.comparator);
                if (child < b.m && b.K[child] == value) {
                    return b;
                }
                b = b.children[child];
            }
            if (b != null) {
                let child = b.position(value, this.comparator);
                if (child < b.m && b.K[child] == value) {
                    return b;
                }
            }
            return null;
        }
        insertData(data) {
            if (this.root == null) {
                this.root = new BTreeNode_1.BTreeNode(this.d, undefined, undefined, undefined);
            }
            if (this.root.leaf) {
                let s = this.root.insertLeaf(data, this.comparator);
                if (s != null) {
                    let tmp = this.root;
                    this.root = new BTreeNode_1.BTreeNode(this.d, tmp, s, tmp.K[this.d]);
                }
            }
            else {
                let s = this.root.insertNode(data, this.comparator, true);
                if (s != null) {
                    this.root = s;
                }
            }
        }
    }
    exports.BTree = BTree;
});
//# sourceMappingURL=BTree.js.map