import { expect } from 'chai';
import 'mocha';

import { LinkedList } from '../lib/LinkedList';


describe('LinkedList', () => {

    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
    });

    describe('getSize', () => {

        it('gets the correct size of a new list', () => {
            expect(list.getSize()).to.equal(0);
        });

        it('gets the correct size when items are added', () => {
            for(let i = 1 ; i <= 10 ; i++) {
                list.addItemToBack(i);
                expect(list.getSize()).to.equal(i);
            }
        });

        it('gets the correct size when items are removed', () => {
            for(let i = 1 ; i <= 10 ; i++) {
                list.addItemToBack(i);
            }
            for(let i = 1 ; i <= 10 ; i++) {
                list.removeItemFromBack();
                expect(list.getSize()).to.equal(10-i);
            }
        });
            
    });

    describe('isEmpty', () => {
        
        it('returns true when the list is initialized', () => {
            expect(list.isEmpty()).to.equal(true);
        });

        it('returns false when the list has one item in it', () => {
            list.addItemToBack(1);
            expect(list.isEmpty()).to.equal(false);
        });

        it('returns false when the list has multiple items in it', () => {
            list.addItemToFront(1);
            list.addItemToFront(2);
            list.addItemToFront(3);
            expect(list.isEmpty()).to.equal(false);
        });

        it('returns true when the list is made empty', () => {
            list.addItemToFront(1);
            list.addItemToFront(2);
            list.addItemToFront(3);
            list.makeEmpty()
            expect(list.isEmpty()).to.equal(true);
        });

    });

    describe('makeEmpty', () => {

        it('does not throw when the list is already empty', () => {
            expect(() => {list.makeEmpty();}).to.not.throw()
        });

        it('makes the list empty when there is one item in it', () => {
            list.addItemToBack(1);
            list.makeEmpty();
            expect(list.isEmpty()).to.equal(true);
        });

        it('makes the list empty when there are multiple items in it', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3)
            list.makeEmpty();
            expect(list.isEmpty()).to.equal(true);
        });

    });

    describe('addItemToBack', () => {

        it('adds an item to the back of an empty list', () => {
            list.addItemToBack(1);
            expect(list.getSize()).to.equal(1);
            expect(list.getFirstItem()).to.equal(1);
            expect(list.getLastItem()).to.equal(1);
        });

        it('adds an item to the back of a non-empty list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            expect(list.getSize()).to.equal(2);
            expect(list.getFirstItem()).to.equal(1);
            expect(list.getLastItem()).to.equal(2);
        });

    });

    describe('addItemToFront', () => {
        
        it('adds an item to the front of an empty list', () => {
            list.addItemToBack(1);
            expect(list.getSize()).to.equal(1);
            expect(list.getFirstItem()).to.equal(1);
            expect(list.getLastItem()).to.equal(1);
        });

        it('adds an item to the front of a non-empty list', () => {
            list.addItemToFront(1);
            list.addItemToFront(2);
            expect(list.getSize()).to.equal(2);
            expect(list.getFirstItem()).to.equal(2);
            expect(list.getLastItem()).to.equal(1);
        });

    });

    describe('insertItemAt', () => {

        it('throws when the given index is out of bounds', () => {
            expect(() => {list.insertItemAt(1, 1);}).to.throw();
            expect(() => {list.insertItemAt(1, -1);}).to.throw();
        });

        it('inserts an item at the front of the list', () => {
            list.insertItemAt(1, 0);
            list.insertItemAt(2, 0);
            expect(list.getSize()).to.equal(2);
            expect(list.getFirstItem()).to.equal(2);
            expect(list.getLastItem()).to.equal(1);
        });

        it('inserts an item at the end of the list', () => {
            list.insertItemAt(1, 0);
            list.insertItemAt(2, 1);
            expect(list.getSize()).to.equal(2);
            expect(list.getFirstItem()).to.equal(1);
            expect(list.getLastItem()).to.equal(2);
        });

        it('inserts an item in the middle of the list', () => {
            list.insertItemAt(1, 0);
            list.insertItemAt(2, 1);
            list.insertItemAt(3, 1);
            expect(list.getSize()).to.equal(3);
            expect(list.getFirstItem()).to.equal(1);
            expect(list.getLastItem()).to.equal(2);
            expect(list.getItemAt(1)).to.equal(3);
        });

    });

    describe('removeItemFromBack', () => {

        it('throws then the list is empty', () => {
            expect(() => {list.removeItemFromBack();}).to.throw();
        });

        it('removes the only item in a list', () => {
            list.addItemToFront(1);
            list.removeItemFromBack();
            expect(list.getSize()).to.equal(0);
            expect(list.isEmpty()).to.equal(true);
        });

        it('removes the last item in the list', () => {
            list.addItemToFront(1);
            list.addItemToFront(2);
            list.addItemToFront(3);
            list.removeItemFromBack();
            expect(list.getSize()).to.equal(2);
            expect(list.getLastItem()).to.equal(2);
        });

    });

    describe('removeItemFromFront', () => {

        it('throws then the list is empty', () => {
            expect(() => {list.removeItemFromFront();}).to.throw();
        });

        it('removes the only item in a list', () => {
            list.addItemToFront(1);
            list.removeItemFromFront();
            expect(list.getSize()).to.equal(0);
            expect(list.isEmpty()).to.equal(true);
        });

        it('removes the first item in the list', () => {
            list.addItemToFront(1);
            list.addItemToFront(2);
            list.addItemToFront(3);
            list.removeItemFromFront();
            expect(list.getSize()).to.equal(2);
            expect(list.getFirstItem()).to.equal(2);
        });

    });

    describe('removeItemAt', () => {
        
        it('throws when the list is empty', () => {
            expect(() => {list.removeItemAt(0);}).to.throw();
        });

        it('throws when the index is out of bounds', () => {
            list.addItemToBack(1);
            expect(() => {list.removeItemAt(-1);}).to.throw();
            expect(() => {list.removeItemAt(1);}).to.throw();
        });

        it('removes the only item in the list', () => {
            list.addItemToBack(1);
            list.removeItemAt(0);
            expect(list.getSize()).to.equal(0);
            expect(list.isEmpty()).to.equal(true);
        });

        it('removes the item at the front of the list', () =>{
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.removeItemAt(0);
            expect(list.getSize()).to.equal(1);
            expect(list.getFirstItem()).to.equal(2);
        });

        it('removes the item at the back of the list', () =>{
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.removeItemAt(1);
            expect(list.getSize()).to.equal(1);
            expect(list.getLastItem()).to.equal(1);
        });

        it('removes an item in the middle of the list', () =>{
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            list.removeItemAt(1);
            expect(list.getSize()).to.equal(2);
            expect(list.getFirstItem()).to.equal(1);
            expect(list.getLastItem()).to.equal(3);
        });
        
    });

    describe('containsItem', () => {

        it('returns false for an empty list', () => {
            expect(list.containsItem(1)).to.equal(false);
        });

        it('returns true if the item is the only item in the list', () => {
            list.addItemToBack(1);
            expect(list.containsItem(1)).to.equal(true);
        });

        it('returns true if the item is at the front of the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.containsItem(1)).to.equal(true);
        });

        it('returns true if the item is the end of the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.containsItem(3)).to.equal(true);
        });

        it('returns true if the item is in the middle of the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.containsItem(2)).to.equal(true);
        });

        it('returns true if there are many of that item in the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(1);
            expect(list.containsItem(1)).to.equal(true);
        });

        it('returns false if the item is not in the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            expect(list.containsItem(3)).to.equal(false);
        });

    });

    describe('getFirstItem', () => {

        it('throws when the list is empty', () => {
            expect(() => {list.getFirstItem();}).to.throw();
        });

        it('gets the only item in the list', () => {
            list.addItemToBack(1);
            expect(list.getFirstItem()).to.equal(1);
        });

        it('gets the first item in the list', () => {
            list.addItemToBack(1);
            list.addItemToFront(2);
            list.addItemToBack(3);
            expect(list.getFirstItem()).to.equal(2);
        });

    });

    describe('getLastItem', () => {

        it('throws when the list is empty', () => {
            expect(() => {list.getLastItem();}).to.throw();
        });

        it('gets the only item in the list', () => {
            list.addItemToBack(1);
            expect(list.getLastItem()).to.equal(1);
        });

        it('gets the last item in the list', () => {
            list.addItemToBack(1);
            list.addItemToFront(2);
            list.addItemToBack(3);
            expect(list.getLastItem()).to.equal(3);
        });

    });

    describe('getIndexOfItem', () => {

        it('throws when the list is empty', () => {
            expect(() => {list.getIndexOfItem(1);}).to.throw();
        });

        it('throws when the item is not in the list', () => {
            list.addItemToBack(1);
            expect(() => {list.getIndexOfItem(2);}).to.throw();
        });

        it('gets the index if the item is the only item in the list', () => {
            list.addItemToBack(1);
            expect(list.getIndexOfItem(1)).to.equal(0);
        });

        it('gets the index if the item is at the front of the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.getIndexOfItem(1)).to.equal(0);
        });

        it('gets the index if the item is at the back of the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.getIndexOfItem(3)).to.equal(2);
        });

        it('gets the index if the item is in the middle of the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.getIndexOfItem(2)).to.equal(1);
        });

    });

    describe('getItemAt', () => {

        it('throws when the list is empty', () => {
            expect(() => {list.getItemAt(0);}).to.throw();
        });

        it('throws when the index is out of bounds', () => {
            list.addItemToBack(1);
            expect(() => {list.getItemAt(-1);}).to.throw();
            expect(() => {list.getItemAt(1);}).to.throw();
        });

        it('gets the only item in the list', () => {
            list.addItemToBack(1);
            expect(list.getItemAt(0)).to.equal(1);
        });

        it('gets the first item in the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.getItemAt(0)).to.equal(1);
        });

        it('gets the last item in the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.getItemAt(2)).to.equal(3);
        });

        it('gets an item in the middle of the list', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            expect(list.getItemAt(1)).to.equal(2);
        });
    });

    describe('replaceItemAt', () => {

        it('throws when the list is empty', () => {
            expect(() => {list.replaceItemAt(0, 0);}).to.throw();
        });

        it('throws when the index is out of bounds', () => {
            list.addItemToBack(1);
            expect(() => {list.replaceItemAt(-1, 0);}).to.throw();
            expect(() => {list.replaceItemAt(1, 0);}).to.throw();
        });

        it('replaces the item at the given index', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.addItemToBack(3);
            list.replaceItemAt(0, 2);
            expect(list.getItemAt(0)).to.equal(2);
        });

    });

    describe('swapItems', () => {

        it('throws when the list is empty', () => {
            expect(() => {list.swapItems(0, 0);}).to.throw();
        });

        it('throws when at least one index is out of bounds', () => {
            list.addItemToBack(1);
            expect(() => {list.swapItems(-1, 0);}).to.throw();
            expect(() => {list.swapItems(0, 1);}).to.throw();
            expect(() => {list.swapItems(-1, 1);}).to.throw();
        });

        it('doesnt change the list when the indices are the same', () => {
            list.addItemToBack(1);
            list.swapItems(0, 0);
            expect(list.getItemAt(0)).to.equal(1);
        });

        it('swaps the items at two given indices', () => {
            list.addItemToBack(1);
            list.addItemToBack(2);
            list.swapItems(0, 1);
            expect(list.getItemAt(0)).to.equal(2);
            expect(list.getItemAt(1)).to.equal(1);
        });
    });

});