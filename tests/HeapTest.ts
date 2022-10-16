import {MaxHeap} from "../dist/heap/MaxHeap";
import * as assert from "assert";
import {MinHeap} from "../dist/heap/MinHeap";

describe('HeapTest', function() {
    describe('HeapTest', function() {
        function compare(item1: number, item2: number): number {
            return item1 - item2
        }
        it('testMaxHeap', function() {
            let maxHeap : MaxHeap<number> = new MaxHeap<number>(8, compare)
            maxHeap.insert(4)
            maxHeap.insert(6)
            maxHeap.insert(2)
            maxHeap.insert(5)
            maxHeap.insert(3)
            maxHeap.insert(1)
            maxHeap.insert(7)
            assert.equal(7, maxHeap.delete())
            assert.equal(6, maxHeap.delete())
            assert.equal(5, maxHeap.delete())
        });
        it('testMinHeap', function() {
            let minHeap : MinHeap<number> = new MinHeap<number>(8, compare)
            minHeap.insert(4)
            minHeap.insert(6)
            minHeap.insert(2)
            minHeap.insert(5)
            minHeap.insert(3)
            minHeap.insert(1)
            minHeap.insert(7)
            assert.equal(1, minHeap.delete())
            assert.equal(2, minHeap.delete())
            assert.equal(3, minHeap.delete())
        });
    });
});
