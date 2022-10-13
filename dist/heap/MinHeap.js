(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Heap"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MinHeap = void 0;
    const Heap_1 = require("./Heap");
    class MinHeap extends Heap_1.Heap {
        constructor(N, comparator) {
            super(N, comparator);
        }
        compare(data1, data2) {
            return -this.comparator(data1, data2);
        }
    }
    exports.MinHeap = MinHeap;
});
//# sourceMappingURL=MinHeap.js.map