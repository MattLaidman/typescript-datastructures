/**
 * implementation of a generic doubly-linked LinkedList data structure
 * 
 * @author Matt Laidman <mattlaidman@gmail.com>
 *
 * implements:
 *     getSize(): number
 *     isEmpty(): boolean
 *     makeEmpty(): void
 *     addItemToBack(): void
 *     addItemToFront(): void
 *     insertItemAt(number): void
 *     removeItemFromBack(): void
 *     removeItemFromFront(): void
 *     removeItemAt(number): void
 *     containsItem(T): boolean
 *     getFirstItem(): T
 *     getLastItem(): T
 *     getIndexOfItem(T): number
 *     getItemAt(number): T
 *     replaceItemAt(number, T): void
 *     swapItems(number, number): void
 */


/**
 * error class for out of bounds indices
 * @class OutOfBoundsError
 * @extends {Error}
 */
export class OutOfBoundsError extends Error {

    /**
     * calls Error with message
     * @constructor
     */
    constructor() {
        super("index out of bounds");
    }

}


/**
 * error class for empty LinkedList
 * @class EmptyListError
 * @extends {Error}
 */
export class EmptyListError extends Error {

    /**
     * calls Error with message
     * @constructor
     */
    constructor() {
        super("LinkedList is empty");
    }

}


/**
 * error class for item not found
 * @class ItemNotFoundError
 * @extends {Error}
 */
export class ItemNotFoundError extends Error {

    /**
     * calls Error with message
     * @constructor
     */
    constructor() {
        super("item not found");
    }

}


/**
 * generic node class to store items in the LinkedList
 * @class LinkedListNode<T>
 */
class LinkedListNode<T> {

    /**
     * initializes the LinkedListNode
     * @constructor
     * @param {T} item - the item to store in the LinkedListNode
     * @param {LinkedListNode<T>} previous - optional parameter to set the previous LinkedListNode on initialization
     * @param {LinkedListNode<T>} next  - optional parameter to set the next LinkedListNode on initialization
     */
    constructor(private item: T, private previous: LinkedListNode<T> = null, private next: LinkedListNode<T> = null) {}

    /**
     * get the item from the LinkedListNode
     * @returns {T} the item
     */
    public getItem(): T {
        return this.item;
    }

    /**
     * sets the stored item in the node to the passed value
     * @param {T} item - the item to store in the node
     */
    public setItem(item: T): void {
        this.item = item;
    }

    /**
     * gets the previous node
     * @returns {LinkedListNode<T>} the previous node
     */
    public getPrevious(): LinkedListNode<T> {
        return this.previous;
    }

    /**
     * sets the previous node to the passed node
     * @param {LinkedListNode<T>} node - the node to set the previous node to
     */
    public setPrevious(node: LinkedListNode<T>): void {
        this.previous = node;
    }

    /**
     * gets the next node
     * @returns {LinkedListNode<T>} the next node
     */
    public getNext(): LinkedListNode<T> {
        return this.next;
    }

    /**
     * sets the next node to the passed node
     * @param {LinkedListNode<T>} node - the node to set the next node to
     */
    public setNext(node: LinkedListNode<T>): void {
        this.next = node;
    }

}


/**
 * generic doubly-linked LinkedList data structure
 * @class LinkedList<T>
 */
export class LinkedList<T> {

    private size = 0;
    private head: LinkedListNode<T> = null;

    /**
     * gets the size of the LinkedList
     * @returns {number} the size of the LinkedList
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * checks if the LinkedList is empty
     * @return {boolean} true if the LinkedList is empty
     */
    public isEmpty(): boolean {
        return this.size == 0;
    }

    /**
     * clears all items from the LinkedList
     */
    public makeEmpty(): void {
        this.head = null;
        this.size = 0;
    }

    /**
     * adds an item to the back of the LinkedList
     * @param {T} item - the item to add
     */
    public addItemToBack(item: T): void {
        if (this.size === 0) {
            this.head = new LinkedListNode<T>(item);
        } else {
            let tempNode = this.head;
            for (let i = 1 ; i < this.size ; i++) {
                tempNode = tempNode.getNext();
            }
            tempNode.setNext(new LinkedListNode<T>(item, tempNode, null))
        }
        this.size++;
    }

    /**
     * adds an item to the front of the LinkedList
     * @param {T} item - the item to add
     */
    public addItemToFront(item: T): void {
        if (this.size === 0) {
            this.head = new LinkedListNode<T>(item);
        } else {
            this.head.setPrevious(new LinkedListNode<T>(item, null, this.head))
            this.head = this.head.getPrevious();
        }
        this.size++;
    }

    /**
     * inserts the passed item at the passed index
     * @param {T} item - the item to add
     * @param {number} index - the index to add the item at
     * @throws {OutOfBoundsError} when the index is out of bounds
     */
    public insertItemAt(item: T, index: number): void {
        if ((index > this.size) || (index < 0)) {
            throw new OutOfBoundsError();
        }
        if (this.size === 0) {
            this.head = new LinkedListNode<T>(item);
        } else if (index === 0) {
            this.addItemToFront(item);
            return;
        } else {
            let tempNode = this.head;
            for (let i = 0 ; i < index-1 ; i++) {
                tempNode = tempNode.getNext();
            }
            let tempNext = tempNode.getNext();
            let tempItem = new LinkedListNode<T>(item, tempNode, tempNext);
            tempNode.setNext(tempItem);
            if (tempNext != null) {
                tempNext.setPrevious(tempItem);
            }
        }
        this.size++;
    }

    /**
     * removes the item at the back of the LinkedList
     * @throws {EmptyListError} when the LinkedList is empty
     */
    public removeItemFromBack(): void {
        if (this.size === 0) {
            throw new EmptyListError();
        }
        if (this.size === 1) {
            this.head = null;
        } else {
            let tempNode = this.head;
            for (let i = 1 ; i < this.size ; i++) {
                tempNode = tempNode.getNext();
            }
            tempNode.getPrevious().setNext(null);
        }
        this.size--;
    }

    /**
     * removes the item at the front of the LinkedList
     * @throws {EmptyListError} when the LinkedList is empty
     */
    public removeItemFromFront(): void {
        if (this.size === 0) {
            throw new EmptyListError();
        }
        if (this.size === 1) {
            this.head = null;
        } else {
            let tempNext = this.head.getNext();
            this.head = tempNext;
        }
        this.size--;
    }

    /**
     * removes the item at the passed index
     * @param {number} index - the index to remove the item from
     * @throws {EmptyListError} when the LinkedList is empty
     * @throws {OutOfBoundsError} when the index is out of bounds
     */
    public removeItemAt(index: number): void {
        if (this.size === 0) {
            throw new EmptyListError();
        }
        if ((index >= this.size) || (index < 0)) {
            throw new OutOfBoundsError()
        }
        if (index === 0) {
            this.removeItemFromFront();
            return;
        } else {
            let tempNode = this.head;
            for (let i = 0 ; i < index ; i++) {
                tempNode = tempNode.getNext();
            }
            let tempPrev = tempNode.getPrevious();
            let tempNext = tempNode.getNext();
            tempPrev.setNext(tempNext);
            if (tempNext != null) {
                tempNext.setPrevious(tempPrev);
            }
        }
        this.size--;
    }

    /**
     * checks if the passed item is in the LinkedList
     * @param {T} item - the item to check
     * @returns {boolean} true if the passed item is in the LinkedList
     */
    public containsItem(item: T): boolean {
        for (let i = 0 ; i < this.size ; i++) {
            if (this.getItemAt(i) === item) {
                return true;
            }
        }
        return false;
    }

    /**
     * gets the first item in the LinkedList
     * @returns {T} the first item in the LinkedList
     * @throws {EmptyListError} when the LinkedList is empty
     */
    public getFirstItem(): T {
        try {
            return this.getItemAt(0);
        } catch(e) {
            throw new EmptyListError();
        }
    }

    /**
     * gets the last item from the LinkedList
     * @returns {T} the last item in the LinkedList
     * @throws {EmptyListError} when the LinkedList is empty
     */
    public getLastItem(): T {
        try {
            return this.getItemAt(this.size-1);
        } catch(e) {
            throw new EmptyListError();
        }
    }

    /**
     * gets the index of an item if it exists in the LinkedList
     * @param {T} item - the item to get the index of
     * @throws {ItemNotFoundError} when the item is not found in the LinkedList
     */
    public getIndexOfItem(item: T): number {
        let index: number;
        for (index = 0 ; index < this.size ; index++) {
            if (item === this.getItemAt(index)) {
                return index;
            }
        }
        throw new ItemNotFoundError();
    }

    /**
     * gets the item at the passed index
     * @param {number} index - the index to get the item from
     * @returns {T} the item at the passed index
     * @throws {OutOfBoundsError} when the index is out of bounds
     */
    public getItemAt(index: number): T {
        if ((index >= this.size) || (index < 0)) {
            throw new OutOfBoundsError()
        }
        let tempNode = this.head;
        for (let i = 0 ; i < index ; i++) {
            tempNode = tempNode.getNext();
        }
        return tempNode.getItem();
    }

    /**
     * replaces the item at the passed index with the passed item
     * @param {number} index - the index to replace the item at
     * @param {T} item - the item to replace the item at the passed index with
     * @throws {OutOfBoundsError} when the index is out of bounds
     */
    public replaceItemAt(index: number, item: T): void {
        if ((index >= this.size) || (index < 0)) {
            throw new OutOfBoundsError();
        }
        let tempNode = this.head;
        for (let i = 0 ; i < index ; i++) {
            tempNode = tempNode.getNext();
        }
        tempNode.setItem(item);
    }

    /**
     * swaps the items in the LinkedList at the passed indices
     * @param {number} first - the first index
     * @param {number} second - the second index
     * @throws {OutOfBoundsError} when the index is out of bounds
     */
    public swapItems(first: number, second: number): void {
        if ((first >= this.size) || (first < 0)) {
            throw new OutOfBoundsError();
        }
        if ((second >= this.size) || (second < 0)) {
            throw new OutOfBoundsError();
        }
        if (first === second) {
            return;
        }
        let item = this.getItemAt(first);
        this.replaceItemAt(first, this.getItemAt(second));
        this.replaceItemAt(second, item);
    }

}