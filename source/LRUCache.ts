export class LRUCache<K, T> {

    private readonly cacheSize: number
    private map: Map<K, T>

    /**
     * A constructor of {@link LRUCache} class which takes cacheSize as input. It creates new {@link Map} and
     * {@link Map}.
     *
     * @param cacheSize Integer input defining cache size.
     */
    constructor(cacheSize: number) {
        this.cacheSize = cacheSize
        this.map = new Map<K, T>()
    }

    /**
     * The contains method takes a K type input key and returns true if the {@link Map} has the given key, false otherwise.
     *
     * @param key K type input key.
     * @return true if the {@link Map} has the given key, false otherwise.
     */
    contains(key: K): boolean{
        return this.map.has(key)
    }

    /**
     * The get method takes K type input key and returns the least recently used value. First it checks whether the {@link Map}
     * has the given key, if so it gets the corresponding cacheNode. It removes that element from map
     * and adds it again to the beginning of the map since it is more likely to be used again. At the end, returns the
     * data value.
     *
     * @param key K type input key.
     * @return data value if the {@link Map} has the given key, null otherwise.
     */
    get(key: K): T | null{
        if (this.map.has(key)) {
            let value : T = <T> this.map.get(key)
            this.map.delete(key)
            this.map.set(key, value)
            return value;
        }
        return null
    }

    /**
     * The add method take a key and a data as inputs. First it checks the size of the {@link Map}, if it is full (i.e
     * equal to the given cacheSize) then it removes the last node. If it has space for new entries,
     * it creates new node with given inputs and puts it to the {@link Map}.
     *
     * @param key  K type input.
     * @param data T type input
     */
    add(key: K, data: T){
        if (this.map.size == this.cacheSize) {
            let firstKey = this.map.entries().next().value
            this.map.delete(firstKey)
        }
        this.map.set(key, data)
    }
}