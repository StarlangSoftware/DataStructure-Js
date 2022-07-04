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
    exports.AvlTreeNode = void 0;
    const TreeNode_1 = require("./TreeNode");
    class AvlTreeNode extends TreeNode_1.TreeNode {
        constructor(data) {
            super(data);
            this.height = 1;
        }
    }
    exports.AvlTreeNode = AvlTreeNode;
});
//# sourceMappingURL=AvlTreeNode.js.map