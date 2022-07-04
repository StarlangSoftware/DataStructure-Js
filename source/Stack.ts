export class Stack<T> {

    private list : Array<T> = []

    constructor() {
    }

    public push(item: T){
        this.list.push(item);
    }

    public pop(): T | null{
        let item = this.list.pop()
        if (item == undefined){
            return null
        } else {
            return item
        }
    }

    public isEmpty(): boolean{
        return this.list.length == 0
    }

    
}