export class Queue<T> {

    private list : Array<T> = []
    private head : number
    private tail : number
    private maxSize: number

    /**
     * Constructor of the queue data structure
     * @param maxSize Maximum size of the queue
     */
    constructor(maxSize: number) {
        this.head = 0
        this.tail = 0
        this.maxSize = maxSize
        this.list = new Array<T>(maxSize)
    }

    /**
     * Adds a set of elements to the end of the queue
     * @param items Elements to be inserted into the queue
     */
    public enqueueAll(items: Array<T>){
        for (let item of items){
            this.enqueue(item)
        }
    }

    /**
     * Adds an element to the end of the queue.
     * @param item Element added to the queue.
     */
    public enqueue(item: T){
        this.list[this.tail] = item
        this.tail = (this.tail + 1) % this.maxSize
    }

    /**
     * Removes an element from the start of the queue.
     * @return Removed item
     */
    public dequeue(): T{
        let item = this.list[this.head]
        this.head = (this.head + 1) % this.maxSize
        return item
    }

    /**
     * Returns head of the queue.
     * @return Head of the queue
     */
    public peek(): T{
        return this.list[this.head]
    }

    /**
     * Checks if the queue is empty or not.
     * @return Returns true if the queue is empty, false otherwise.
     */
    public isEmpty(): boolean{
        return this.head == this.tail
    }

}