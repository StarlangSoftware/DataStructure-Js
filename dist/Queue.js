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
    exports.Queue = void 0;
    class Queue {
        constructor(maxSize) {
            this.list = [];
            this.head = 0;
            this.tail = 0;
            this.maxSize = maxSize;
            this.list = new Array(maxSize);
        }
        enqueue(item) {
            this.list[this.tail] = item;
            this.tail = (this.tail + 1) % this.maxSize;
        }
        dequeue() {
            let item = this.list[this.head];
            this.head = (this.head + 1) % this.maxSize;
            return item;
        }
        isEmpty() {
            return this.head == this.tail;
        }
    }
    exports.Queue = Queue;
});
//# sourceMappingURL=Queue.js.map