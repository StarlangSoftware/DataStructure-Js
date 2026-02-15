"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvlTreeNode = void 0;
const TreeNode_1 = require("./TreeNode");
class AvlTreeNode extends TreeNode_1.TreeNode {
    height;
    constructor(data) {
        super(data);
        this.height = 1;
    }
}
exports.AvlTreeNode = AvlTreeNode;
//# sourceMappingURL=AvlTreeNode.js.map