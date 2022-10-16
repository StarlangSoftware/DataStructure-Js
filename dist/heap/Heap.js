(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./HeapNode"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Heap = void 0;
    const HeapNode_1 = require("./HeapNode");
    class Heap {
        constructor(N, comparator) {
            this.comparator = comparator;
            this.array = new Array();
            this.count = 0;
            this.n = N;
            for (let i = 0; i < N; i++) {
                this.array.push();
            }
        }
        compare(data1, data2) {
            return 0;
        }
        isEmpty() {
            return this.count == 0;
        }
        swapNode(index1, index2) {
            let tmp = this.array[index1];
            this.array[index1] = this.array[index2];
            this.array[index2] = tmp;
        }
        percolateDown(no) {
            let left = 2 * no + 1;
            let right = 2 * no + 2;
            while ((left < this.count && this.compare(this.array[no].getData(), this.array[left].getData()) < 0) ||
                (right < this.count && this.compare(this.array[no].getData(), this.array[right].getData()) < 0)) {
                if (right >= this.count || this.compare(this.array[left].getData(), this.array[right].getData()) > 0) {
                    this.swapNode(no, left);
                    no = left;
                }
                else {
                    this.swapNode(no, right);
                    no = right;
                }
                left = 2 * no + 1;
                right = 2 * no + 2;
            }
        }
        percolateUp(no) {
            let parent = Math.floor((no - 1) / 2);
            while (parent >= 0 && this.compare(this.array[parent].getData(), this.array[no].getData()) < 0) {
                this.swapNode(parent, no);
                no = parent;
                parent = Math.floor((no - 1) / 2);
            }
        }
        delete() {
            let tmp = this.array[0];
            this.array[0] = this.array[this.count - 1];
            this.percolateDown(0);
            this.count = this.count - 1;
            return tmp.getData();
        }
        insert(data) {
            if (this.count < this.n) {
                this.count = this.count + 1;
            }
            this.array[this.count - 1] = new HeapNode_1.HeapNode(data);
            this.percolateUp(this.count - 1);
        }
    }
    exports.Heap = Heap;
});
//# sourceMappingURL=Heap.js.map