import { LinkedList } from "./LinkedList";

/**
 * implementation of a generic Stack data structure
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
 * error class for empty Stack
 * @class EmptyStackError
 * @extends {Error}
 */
export class EmptyStackError extends Error {

    /**
     * calls Error with message
     * @constructor
     */
    constructor() {
        super("Stack is empty");
    }

}


/**
 * generic Stack data structure
 * @class Stack<T>
 */
export class Stack<T> {

    private items: LinkedList<T>;

    /**
     * initializes the Stack
     * @constructor
     */
    constructor() {
        this.items = new LinkedList<T>();
    }

    /**
     * gets the number of items in the Stack
     * @returns {number} the number of items in the queue
     */
    public getSize(): number {
        return this.items.getSize();
    }

    /**
     * checks if the Stack is empty
     * @return {boolean} true if the Stack is empty
     */
    public isEmpty(): boolean {
        return this.items.isEmpty();
    }

    /**
     * clears all items from the Stack
     */
    public makeEmpty(): void {
        this.items.makeEmpty();
    }

    /**
     * adds an item to the top of the Stack
     * @param {T} item - the item to add to the Stack
     */
    public push(item: T): void {
        this.items.addItemToBack(item);
    }

    /**
     * removes and returns the item at the top of the Stack
     * @returns {T} the item at the top of the Stack
     * @throws {EmptyStackError} when the Stack is empty
     */
    public pop(): T {
        if (this.items.isEmpty()) {
            throw new EmptyStackError();
        }
        let item = this.items.getLastItem();
        this.items.removeItemFromBack();
        return item;
    }

    /**
     * returns the item at the top of the Stack without removing it
     * @returns {T} the item at the top of the Stack
     * @throws {EmptyStackError} when the Stack is empty
     */
    public peek(): T {
        if (this.items.isEmpty()) {
            throw new EmptyStackError();
        }
        return this.items.getLastItem();
    }

}