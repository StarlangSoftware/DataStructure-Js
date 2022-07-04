(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BTreeNode = void 0;
    class BTreeNode {
        constructor(d, firstChild, secondChild, newK) {
            this.d = d;
            this.K = [];
            this.children = [];
            if (firstChild == undefined) {
                this.m = 0;
                this.leaf = true;
            }
            else {
                this.m = 1;
                this.leaf = false;
                this.children[0] = firstChild;
                if (secondChild != undefined) {
                    this.children[1] = secondChild;
                }
                if (newK != undefined) {
                    this.K[0] = newK;
                }
            }
        }
        position(value, comparator) {
            if (this.m == 0) {
                return 0;
            }
            if (comparator(value, this.K[this.m - 1]) > 0) {
                return this.m;
            }
            else {
                for (let i = 0; i < this.m; i++) {
                    if (comparator(value, this.K[i]) <= 0) {
                        return i;
                    }
                }
            }
            return -1;
        }
        insertIntoK(index, insertedK) {
            for (let i = this.m; i > index; i--) {
                this.K[i] = this.K[i - 1];
            }
            this.K[index] = insertedK;
        }
        moveHalfOfTheKToNewNode(newNode) {
            for (let i = 0; i < this.d; i++) {
                newNode.K[i] = this.K[i + this.d + 1];
            }
            newNode.m = this.d;
        }
        moveHalfOfTheChildrenToNewNode(newNode) {
            for (let i = 0; i < this.d; i++) {
                newNode.children[i] = this.children[i + this.d + 1];
            }
        }
        moveHalfOfTheElementsToNewNode(newNode) {
            this.moveHalfOfTheKToNewNode(newNode);
            this.moveHalfOfTheChildrenToNewNode(newNode);
        }
        insertNode(value, comparator, isRoot) {
            let s;
            let newNode;
            let child;
            child = this.position(value, comparator);
            if (!this.children[child].leaf) {
                s = this.children[child].insertNode(value, comparator, false);
            }
            else {
                s = this.children[child].insertLeaf(value, comparator);
            }
            if (s == null) {
                return null;
            }
            this.insertIntoK(child, this.children[child].K[this.d]);
            if (this.m < 2 * this.d) {
                this.children[child + 1] = s;
                this.m++;
                return null;
            }
            else {
                newNode = new BTreeNode(this.d, undefined, undefined, undefined);
                newNode.leaf = false;
                this.moveHalfOfTheElementsToNewNode(newNode);
                newNode.children[this.d] = s;
                this.m = this.d;
                if (isRoot) {
                    return new BTreeNode(this.d, this, newNode, this.K[this.d]);
                }
                else {
                    return newNode;
                }
            }
        }
        insertLeaf(value, comparator) {
            let child = this.position(value, comparator);
            this.insertIntoK(child, value);
            if (this.m < 2 * this.d) {
                this.m++;
                return null;
            }
            else {
                let newNode = new BTreeNode(this.d, undefined, undefined, undefined);
                this.moveHalfOfTheKToNewNode(newNode);
                this.m = this.d;
                return newNode;
            }
        }
    }
    exports.BTreeNode = BTreeNode;
});
//# sourceMappingURL=BTreeNode.js.map