import { LinkedList } from "./LinkedList";

/**
 * implementation of a generic Queue data structure
 * leverages the LinkedList data structure defined in LinkedList.ts
 * 
 * @author Matt Laidman <mattlaidman@gmail.com>
 * 
 * implements:
 *     getSize(): number
 *     isEmpty(): boolean
 *     makeEmpty(): void
 *     push(T): void
 *     pop(): T
 *     peek(): T
 */


/**
 * error class for empty stack
 * @class EmptyQueueError
 * @extends {Error}
 */
export class EmptyQueueError extends Error {

    /**
     * calls Error with message
     * @constructor
     */
    constructor() {
        super("Queue is empty");
    }

}


/**
 * generic Queue data structure
 * @class Queue<T>
 */
export class Queue<T> {

    private items: LinkedList<T>;

    /**
     * initializes the Queue
     * @constructor
     */
    constructor() {
        this.items = new LinkedList<T>();
    }

    /**
     * gets the number of items in the Queue
     * @returns {number} the number items in the Queue
     */
    public getSize(): number {
        return this.items.getSize();
    }

    /**
     * checks if the Queue is empty
     * @return {boolean} true if the Queue is empty
     */
    public isEmpty(): boolean {
        return this.items.isEmpty();
    }

    /**
     * clears all items from the Queue
     */
    public makeEmpty(): void {
        this.items.makeEmpty();
    }

    /**
     * adds an item to the back of the Queue
     * @param item - the item to push onto the Queue
     */
    public push(item: T): void {
        this.items.addItemToBack(item);
    }

    /**
     * removes and returns the item from the front of the Queue
     * @returns {T} the item at the back of the Queue
     * @throws {EmptyQueueError} when the Queue is empty
     */
    public pop(): T {
        if (this.items.isEmpty()) {
            throw new EmptyQueueError();
        }
        let item = this.items.getFirstItem();
        this.items.removeItemFromFront();
        return item;
    }

    /**
     * returns the item at the front of the Queue without removing it
     * @returns {T} the item at the front of the Queue
     * @throws {EmptyQueueError} when the Queue is empty
     */
    public peek(): T {
        if (this.items.isEmpty()) {
            throw new EmptyQueueError();
        }
        return this.items.getFirstItem();
    }

}