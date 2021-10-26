export declare class CounterHashMap<K> extends Map<K, number> {
    constructor();
    /**
     * The put method takes a K type input. If this map contains a mapping for the key, it puts this key after
     * incrementing its value by one. If his map does not contain a mapping, then it directly puts key with the value of 1.
     *
     * @param key to put.
     */
    put(key: K): void;
    /**
     * The putNTimes method takes a K and an integer N as inputs. If this map contains a mapping for the key, it puts this key after
     * incrementing its value by N. If his map does not contain a mapping, then it directly puts key with the value of N.
     *
     * @param key to put.
     * @param N   to increment value.
     */
    putNTimes(key: K, N: number): void;
    /**
     * The count method takes a K as input, if this map contains a mapping for the key, it returns the value corresponding
     * this key, 0 otherwise.
     *
     * @param key to get value.
     * @return the value corresponding given key, 0 if it is not mapped.
     */
    count(key: K): number;
    /**
     * The sumOfCounts method loops through the values contained in this map and accumulates the counts of this values.
     *
     * @return accumulated counts.
     */
    sumOfCounts(): number;
    /**
     * The max method takes a threshold as input and loops through the mappings contained in this map. It accumulates the
     * count values and if the current entry's count value is greater than maxCount, which is initialized as 0,
     * it updates the maxCount as current count and maxKey as the current count's key.
     * <p>
     * At the end of the loop, if the ratio of maxCount/total is greater than the given threshold it returns maxKey, else null.
     *
     * @param threshold double value.
     * @return K type maxKey if greater than the given threshold, null otherwise.
     */
    max(threshold?: number): K | undefined;
    /**
     * The add method adds value of each key of toBeAdded to the current counterHashMap.
     *
     * @param toBeAdded CounterHashMap to be added to this counterHashMap.
     */
    add(toBeAdded: CounterHashMap<K>): void;
    /**
     * The topN method takes an integer N as inout. It creates an {@link Array} result and loops through the the
     * mappings contained in this map and adds each entry to the result {@link Array}. Then sort this {@link Array}
     * according to their values and returns an {@link Array} which is a sublist of result with N elements.
     *
     * @param N Integer value for defining size of the sublist.
     * @return a sublist of N element.
     */
    topN(N: number): Array<[K, number]>;
}
