import {CounterHashMap} from "../dist/CounterHashMap";
import * as assert from "assert";

describe('CounterHashMapTest', function() {
    describe('CounterHashMapTest', function() {
        it('testPut1', function() {
            var counterHashMap : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap.put("item1");
            counterHashMap.put("item2");
            counterHashMap.put("item3");
            counterHashMap.put("item1");
            counterHashMap.put("item2");
            counterHashMap.put("item1");
            assert.strictEqual(3, counterHashMap.count("item1"));
            assert.strictEqual(2, counterHashMap.count("item2"));
            assert.strictEqual(1, counterHashMap.count("item3"));
        });
        it('testPut2', function() {
            var counterHashMap : CounterHashMap<number> = new CounterHashMap<number>();
            for (let i = 0; i < 1000; i++){
                counterHashMap.put(Math.floor(Math.random() * 1000));
            }
            let count = 0;
            for (let i = 0; i < 1000; i++){
                count += counterHashMap.count(i);
            }
            assert.strictEqual(1000, count);
        });
        it('testSumOfCounts', function() {
            var counterHashMap : CounterHashMap<number> = new CounterHashMap<number>();
            for (let i = 0; i < 1000; i++){
                counterHashMap.put(Math.floor(Math.random() * 1000));
            }
            assert.strictEqual(1000, counterHashMap.sumOfCounts());
        });
        it('testPut3', function() {
            var counterHashMap : CounterHashMap<number> = new CounterHashMap<number>();
            for (let i = 0; i < 1000000; i++){
                counterHashMap.put(Math.floor(Math.random() * 1000000));
            }
            assert.strictEqual(counterHashMap.size / 1000000.0, 0.632);
        });
        it('testPutNTimes1', function() {
            var counterHashMap : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap.putNTimes("item1", 2);
            counterHashMap.putNTimes("item2", 3);
            counterHashMap.putNTimes("item3", 6);
            counterHashMap.putNTimes("item1", 2);
            counterHashMap.putNTimes("item2", 3);
            counterHashMap.putNTimes("item1", 2);
            assert.strictEqual(6, counterHashMap.count("item1"));
            assert.strictEqual(6, counterHashMap.count("item2"));
            assert.strictEqual(6, counterHashMap.count("item3"));
        });
        it('testPutNTimes2', function() {
            var counterHashMap : CounterHashMap<number> = new CounterHashMap<number>();
            for (let i = 0; i < 1000; i++){
                counterHashMap.putNTimes(Math.floor(Math.random() * 1000), i + 1);
            }
            assert.strictEqual(500500, counterHashMap.sumOfCounts());
        });
        it('testMax', function() {
            var counterHashMap : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap.put("item1");
            counterHashMap.put("item2");
            counterHashMap.put("item3");
            counterHashMap.put("item1");
            counterHashMap.put("item2");
            counterHashMap.put("item1");
            assert.strictEqual("item1", counterHashMap.max());
        });
        it('testMaxThreshold1', function() {
            var counterHashMap : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap.put("item1");
            counterHashMap.put("item2");
            counterHashMap.put("item3");
            counterHashMap.put("item1");
            counterHashMap.put("item2");
            counterHashMap.put("item1");
            assert.strictEqual("item1", counterHashMap.max(0.4999));
            assert.notStrictEqual("item1", counterHashMap.max(0.5001));
        });
        it('testMaxThreshold2', function() {
            var counterHashMap : CounterHashMap<String> = new CounterHashMap<String>();
            for (let i = 0; i < 1000000; i++){
                counterHashMap.put(Math.floor(Math.random() * 100) + "");
            }
            let probability = counterHashMap.count(<String>counterHashMap.max()) / 1000000.0;
            assert.notStrictEqual(undefined, counterHashMap.max(probability - 0.001));
            assert.strictEqual(undefined, counterHashMap.max(probability + 0.001));
        });
        it('testAdd1', function() {
            var counterHashMap1 : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap1.put("item1");
            counterHashMap1.put("item2");
            counterHashMap1.put("item3");
            counterHashMap1.put("item1");
            counterHashMap1.put("item2");
            counterHashMap1.put("item1");
            var counterHashMap2 : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap2.putNTimes("item1", 2);
            counterHashMap2.putNTimes("item2", 3);
            counterHashMap2.putNTimes("item3", 6);
            counterHashMap2.putNTimes("item1", 2);
            counterHashMap2.putNTimes("item2", 3);
            counterHashMap2.putNTimes("item1", 2);
            counterHashMap1.add(counterHashMap2);
            assert.strictEqual(9, counterHashMap1.count("item1"));
            assert.strictEqual(8, counterHashMap1.count("item2"));
            assert.strictEqual(7, counterHashMap1.count("item3"));
        });
        it('testAdd2', function() {
            var counterHashMap1 : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap1.put("item1");
            counterHashMap1.put("item2");
            counterHashMap1.put("item1");
            counterHashMap1.put("item2");
            counterHashMap1.put("item1");
            var counterHashMap2 : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap2.put("item4");
            counterHashMap2.putNTimes("item5", 4);
            counterHashMap2.put("item2");
            counterHashMap1.add(counterHashMap2);
            assert.strictEqual(3, counterHashMap1.count("item1"));
            assert.strictEqual(3, counterHashMap1.count("item2"));
            assert.strictEqual(1, counterHashMap1.count("item4"));
            assert.strictEqual(4, counterHashMap1.count("item5"));
        });
        it('testAdd3', function() {
            var counterHashMap1 : CounterHashMap<number> = new CounterHashMap<number>();
            for (let i = 0; i < 1000; i++){
                counterHashMap1.put(i);
            }
            var counterHashMap2 : CounterHashMap<number> = new CounterHashMap<number>();
            for (let i = 500; i < 1000; i++){
                counterHashMap2.putNTimes(1000 + i, i + 1);
            }
            counterHashMap1.add(counterHashMap2);
            assert.strictEqual(1500, counterHashMap1.size);
        });
        it('testTopN1', function() {
            var counterHashMap : CounterHashMap<String> = new CounterHashMap<String>();
            counterHashMap.put("item1");
            counterHashMap.put("item2");
            counterHashMap.put("item3");
            counterHashMap.put("item1");
            counterHashMap.put("item2");
            counterHashMap.put("item1");
            assert.strictEqual("item1", counterHashMap.topN(1)[0][0]);
            assert.strictEqual("item2", counterHashMap.topN(2)[1][0]);
            assert.strictEqual("item3", counterHashMap.topN(3)[2][0]);
        });
        it('testTopN2', function() {
            var counterHashMap : CounterHashMap<String> = new CounterHashMap<String>();
            for (let i = 0; i < 1000; i++){
                counterHashMap.putNTimes(i + "", 2 * i + 2);
            }
            assert.strictEqual(990 + "", counterHashMap.topN(10)[9][0]);
            assert.strictEqual(900 + "", counterHashMap.topN(100)[99][0]);
        });
    });
});
