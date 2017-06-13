import { LinkedList } from "./LinkedList";

/**
 * implementation of a generic Set data structure
 * leverages the LinkedList data structure defined in LinkedList.ts
 * 
 * @author Matt Laidman <mattlaidman@gmail.com>
 * 
 * implements:
 *     getSize(): number
 *     isEmpty(): boolean
 *     makeEmpty(): void
 *     addItem(T): void
 *     removeItem(T): void
 *     containsItem(T): boolean
 *     union(Set<T>): Set<T>
 *     intersection(Set<T>): Set<T>
 *     equals(Set<T>): boolean
 *     difference(Set<T>): Set<T>
 *     isSubsetOf(Set<T>): boolean
 *     isProperSubsetOf(Set<T>): boolean
 */


/**
 * error class for item already existing in the Set
 * @class ItemInSetError
 * @extends {Error}
 */
export class ItemInSetError extends Error {

    /**
     * calls Error with message
     * @constructor
     */
    constructor() {
        super("item exists in Set");
    }

}


/**
 * error class for item not existing in the Set
 * @class ItemInSetError
 * @extends {Error}
 */
export class ItemNotInSetError extends Error {

    /**
     * calls Error with message
     * @constructor
     */
    constructor() {
        super("item does not exist in Set");
    }

}


/**
 * generic Set data structure
 * @class Set<T>
 */
export class Set<T> {

    private items: LinkedList<T>;
    private size = 0;

    /**
     * initializes the Set
     * @param {Set<T>} aSet - an optional Set to copy on initialization
     */
    constructor(aSet: Set<T> = null) {
        this.items = new LinkedList<T>();
        if (aSet !== null) {
            let size = aSet.getSize();
            for (let i = 0 ; i < size ; i++) {
                this.addItem(aSet.items.getItemAt(i));
            }
        }
    }

    /**
     * gets the number of items in the Set
     * @returns {number} the number of items in the Set
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * check if the Set is empty
     * @returns {boolean} true if the Set is empty
     */
    public isEmpty(): boolean {
        return this.size == 0;
    }

    /**
     * clears all items from the Set
     */
    public makeEmpty(): void {
        this.items.makeEmpty();
    }

    /**
     * adds the passed item to the Set
     * @param {T} item - the item to add to the Set
     * @throws {ItemInSetError} when the item already exists in the Set
     */
    public addItem(item: T): void {
        if (!this.items.containsItem(item)) {
            this.items.addItemToBack(item);
        } else {
            throw new ItemInSetError();
        }
    }

    /**
     * removes the passed item from the Set
     * @param {T} item - the item to remove from the Set
     * @throws {ItemNotInSetError} when the item does not exist in the Set
     */
    public removeItem(item: T): void {
        try {
            let index = this.items.getIndexOfItem(item);
            this.items.removeItemAt(index);
        } catch(e) {
            throw new ItemNotInSetError();
        }
    }

    /**
     * checks if the passed item is in the Set
     * @param {T} item - the item to check
     * @returns {boolean} true if the item is in the Set 
     */
    public containsItem(item: T): boolean {
        return this.items.containsItem(item);
    }

    /**
     * creates a Set which is the union of the current Set and the passed Set
     * @param {Set<T>} aSet - the Set to create the union with
     * @returns {Set<T>} a new Set which is the union of the current Set and the passed Set
     */
    public union(aSet: Set<T>): Set<T> {
        let newSet = new Set<T>(this);
        let size = aSet.getSize();
        for (let i = 0 ; i < size ; i++) {
            let item = aSet.items.getItemAt(i);
            if (!newSet.containsItem(item)) {
                newSet.addItem(item);
            }
        }
        return newSet;
    }

    /**
     * creates a Set which is the intersection of the current Set and the passed Set
     * @param {Set<T>} aSet - the Set to create the intersection with
     * @returns {Set<T>} a new Set which is the intersection of the current Set and the passed Set
     */
    public intersection(aSet: Set<T>): Set<T> {
        let newSet = new Set<T>(this);
        let size = aSet.getSize();
        for (let i = 0 ; i < size ; i++) {
            let item = aSet.items.getItemAt(i);
            if (this.containsItem(item)) {
                newSet.addItem(item);
            }
        }
        return newSet;
    }

    /**
     * checks if the Set is equal to the passed Set
     * @param {Set<T>} aSet - the Set to compare with
     * @returns {boolean} true if the sets are equal
     */
    public equals(aSet: Set<T>): boolean {
        let size = aSet.getSize();
        if (size !== this.size) {
            return false;
        }
        for (let i = 0 ; i < size ; i++) {
            let item = aSet.items.getItemAt(i);
            if (!this.items.containsItem(item)) {
                return false;
            }
        }
        return true;
    }

    /**
     * creates a Set which is the difference of the current Set and the passed Set
     * @param {Set<T>} aSet - the Set to create the difference with
     * @returns {Set<T>} a new Set which is the difference of the current Set and the passed Set
     */
    public difference(aSet: Set<T>): Set<T> {
        let newSet = new Set<T>();
        let size = this.size;
        for (let i = 0 ; i < size ; i++) {
            let item = this.items.getItemAt(i);
            if (!aSet.containsItem(item)) {
                newSet.addItem(item);
            }
        }
        return newSet;
    }

    /**
     * checks if the Set is a subset of the passed Set
     * @param {Set<T>} aSet - the Set to compare with
     * @returns {boolean} true if the Set is a subset of the passed Set
     */
    public isSubsetOf(aSet: Set<T>): boolean {
        let size = aSet.getSize();
        if (size < this.size) {
            return false;
        }
        for (let i = 0 ; i < size ; i++) {
            let item = this.items.getItemAt(i);
            if (!aSet.items.containsItem(item)) {
                return false;
            }
        }
        return true;
    }

    /**
     * checks if the Set is a proper subset of the passed Set
     * @param {Set<T>} aSet - the Set to compare with
     * @returns {boolean} true if the Set is a proper subset of the passed Set
     */
    public isProperSubsetOf(aSet: Set<T>): boolean {
        let size = aSet.getSize();
        if (size <= this.size) {
            return false;
        }
        return this.isSubsetOf(aSet);
    }

}