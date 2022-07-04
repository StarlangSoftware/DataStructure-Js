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
    exports.Stack = void 0;
    class Stack {
        constructor() {
            this.list = [];
        }
        push(item) {
            this.list.push(item);
        }
        pop() {
            let item = this.list.pop();
            if (item == undefined) {
                return null;
            }
            else {
                return item;
            }
        }
        isEmpty() {
            return this.list.length == 0;
        }
    }
    exports.Stack = Stack;
});
//# sourceMappingURL=Stack.js.map