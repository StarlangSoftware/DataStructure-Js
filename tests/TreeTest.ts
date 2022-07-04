import * as assert from "assert";
import {Tree} from "../dist/tree/Tree";
import {AvlTree} from "../dist/tree/AvlTree";
import {BTree} from "../dist/tree/BTree";

describe('TreeTest', function() {
    describe('TreeTest', function() {
        function compare<T>(item1: T, item2: T): number {
            if (typeof item1 == "number" && typeof item2 == "number"){
                return item1 - item2
            }
            return 0
        }
        it('testTree', function() {
            let tree : Tree<number> = new Tree<number>(compare);
            tree.insertData(4);
            tree.insertData(6);
            tree.insertData(2);
            tree.insertData(5);
            tree.insertData(3);
            tree.insertData(1);
            tree.insertData(7);
            assert.notEqual(null, tree.search(3));
            assert.equal(null, tree.search(8));
        });
        it('testTree2', function() {
            let tree : AvlTree<number> = new AvlTree<number>(compare);
            for (let i = 1; i <= 31; i++){
                tree.insertData(i);
            }
            for (let i = 1; i < 32; i++){
                assert.notEqual(null, tree.search(i));
            }
            assert.equal(null, tree.search(32));
        });
        it('testTree3', function() {
            let tree : BTree<number> = new BTree<number>(1, compare);
            for (let i = 1; i <= 31; i++){
                tree.insertData(i);
            }
            for (let i = 1; i < 32; i++){
                assert.notEqual(null, tree.search(i));
            }
            assert.equal(null, tree.search(32));
        });
    });
});
