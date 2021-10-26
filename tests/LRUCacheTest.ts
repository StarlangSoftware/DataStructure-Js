import * as assert from "assert";
import {LRUCache} from "../dist/LRUCache";

describe('LRUCacheTest', function() {
    describe('LRUCacheTest', function() {
        it('Test1', function() {
            var cache : LRUCache<String, String> = new LRUCache<String, String>(50000);
            cache.add("item1", "1");
            cache.add("item2", "2");
            cache.add("item3", "3");
            assert.ok(cache.contains("item2"));
            assert.ok(!cache.contains("item4"));
        });
        it('Test2', function() {
            var cache : LRUCache<String, String> = new LRUCache<String, String>(50000);
            cache.add("item1", "1");
            cache.add("item2", "2");
            cache.add("item3", "3");
            assert.ok(cache.contains("item2"));
            assert.ok(cache.contains("item1"));
        });
        it('Test3', function() {
            var cache : LRUCache<number, number> = new LRUCache<number, number>(10000);
            for (let i = 0; i < 10000; i++){
                cache.add(i, i);
            }
            for (let i = 0; i < 1000; i++){
                assert.ok(cache.contains(Math.floor(Math.random() * 10000)))
            }
        });
        it('Test4', function() {
            var cache : LRUCache<number, number> = new LRUCache<number, number>(10000);
            for (let i = 0; i < 1000000; i++){
                cache.add(Math.floor(Math.random() * 1000000), i)
            }
            let count = 0;
            for (let i = 0; i < 1000000; i++){
                if (cache.contains(i)){
                    count++;
                }
            }
            assert.equal(0.632, count / 1000000.0);
        });
    });
});
