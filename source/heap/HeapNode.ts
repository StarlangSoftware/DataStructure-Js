export class HeapNode<T> {

    data : T

    constructor(data: T){
        this.data = data
    }

    public getData(): T{
        return this.data
    }

}