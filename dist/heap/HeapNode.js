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
    exports.HeapNode = void 0;
    class HeapNode {
        /**
         * Constructor of HeapNode.
         * @param data Data to be stored in the heap node.
         */
        constructor(data) {
            this.data = data;
        }
        /**
         * Mutator of the data field
         * @return Data
         */
        getData() {
            return this.data;
        }
    }
    exports.HeapNode = HeapNode;
});
//# sourceMappingURL=HeapNode.js.map