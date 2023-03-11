export class Queue<T> {

    private list : Array<T> = []
    private head : number
    private tail : number
    private maxSize: number

    constructor(maxSize: number) {
        this.head = 0
        this.tail = 0
        this.maxSize = maxSize
        this.list = new Array<T>(maxSize)
    }

    public enqueue(item: T){
        this.list[this.tail] = item
        this.tail = (this.tail + 1) % this.maxSize
    }

    public dequeue(): T{
        let item = this.list[this.head]
        this.head = (this.head + 1) % this.maxSize
        return item
    }

    public peek(): T{
        return this.list[this.head]
    }

    public isEmpty(): boolean{
        return this.head == this.tail
    }

}