import { expect } from 'chai';
import 'mocha';

import {
    LinkedList,
    OutOfBoundsError,
    EmptyListError,
    ItemNotFoundError 
} from '../lib/LinkedList';


describe('LinkedList', () => {
    it('is a linked list', () => {

        let list: LinkedList<number>;

        beforeEach(() => {
            list = new LinkedList<number>();
        });

        describe('getSize', () => {
            it('gets the size of the list', () => {

                for(let i = 1 ; i <= 10 ; i++) {
                    list.addItemToBack(i);
                    expect(list.getSize()).to.equal(i);
                }

                for(let i = 1 ; i <= 10 ; i++) {
                    list.removeItemFromBack();
                    expect(list.getSize()).to.equal(10-i);
                }

                expect(list.getSize()).to.equal(0);

            });
        });

        describe('isEmpty', () => {
            it('tests if the list is empty', () => {

                expect(list.isEmpty()).to.equal(true);

                list.addItemToBack(1);
                list.addItemToFront(2);
                list.addItemToFront(3);
                expect(list.getSize()).to.equal(3);
                expect(list.isEmpty()).to.equal(false);

                list.removeItemFromBack();
                expect(list.getSize()).to.equal(2);
                expect(list.isEmpty()).to.equal(false);

                list.removeItemFromFront();
                expect(list.getSize()).to.equal(1);
                expect(list.isEmpty()).to.equal(false);

                list.makeEmpty()
                expect(list.getSize()).to.equal(0);
                expect(list.isEmpty()).to.equal(true);

            });
        });

        describe('makeEmpty', () => {
            it('empties the list', () => {
                
                expect(list.isEmpty()).to.equal(true);

                list.addItemToBack(1);
                expect(list.getSize()).to.equal(1);
                expect(list.isEmpty()).to.equal(false);

                list.makeEmpty();
                expect(list.getSize()).to.equal(0);
                expect(list.isEmpty()).to.equal(true);

                list.addItemToBack(1);
                list.addItemToFront(2);
                list.addItemToBack(3)
                expect(list.getSize()).to.equal(3);;
                expect(list.isEmpty()).to.equal(false);

                list.makeEmpty();
                expect(list.getSize()).to.equal(0);
                expect(list.isEmpty()).to.equal(true);

            });
        });

        describe('addItemToBack', () => {
            it('adds an item to the back of the list', () => {

                list.addItemToBack(1);
                expect(list.getSize()).to.equal(1);
                expect(list.getLastItem()).to.equal(1);

                list.addItemToBack(2);
                expect(list.getSize()).to.equal(2);
                expect(list.getLastItem()).to.equal(2);

                list.removeItemFromBack();
                expect(list.getSize()).to.equal(1);
                expect(list.getLastItem()).to.equal(1);
                list.addItemToBack(3);
                expect(list.getSize()).to.equal(2);
                expect(list.getLastItem()).to.equal(3);

                list.makeEmpty();
                expect(list.getSize()).to.equal(0);
                list.addItemToBack(4);
                expect(list.getSize()).to.equal(1);
                expect(list.getLastItem()).to.equal(4);

            });
        });

        describe('addItemToFront', () => {
            it('adds an item to the front of the list', () => {

                list.addItemToFront(1);
                expect(list.getSize()).to.equal(1);
                expect(list.getFirstItem()).to.equal(1);

                list.addItemToFront(2);
                expect(list.getSize()).to.equal(2);
                expect(list.getFirstItem()).to.equal(2);

                list.removeItemFromFront()
                expect(list.getSize()).to.equal(1);
                expect(list.getFirstItem()).to.equal(1);
                list.addItemToFront(3);
                expect(list.getSize()).to.equal(2);
                expect(list.getFirstItem()).to.equal(3);

                list.makeEmpty();
                list.addItemToFront(4);
                expect(list.getSize()).to.equal(1);
                expect(list.getFirstItem()).to.equal(4);

            });
        });

        describe('insertItemAt', () => {
            it("inserts an item at a given index", () => {

                expect(() => {list.insertItemAt(1, 1);}).to.throw();

                list.insertItemAt(1, 0);
                expect(list.getSize()).to.equal(1);
                list.insertItemAt(2, 0);
                expect(list.getSize()).to.equal(2);
                expect(list.getFirstItem()).to.equal(2);
                expect(list.getLastItem()).to.equal(1);

                list.insertItemAt(3, 1);
                expect(list.getSize()).to.equal(3);
                expect(list.getFirstItem()).to.equal(2);
                expect(list.getLastItem()).to.equal(1);
                expect(list.getItemAt(1)).to.equal(3);

            });
        });

        describe('removeItemFromBack', () => {
            it("removes the item from the back of the list", () => {

                expect(() => {list.removeItemFromBack();}).to.throw();

                list.addItemToFront(1);
                list.addItemToFront(2);
                list.addItemToFront(3);
                expect(list.getSize()).to.equal(3);
                expect(list.getFirstItem()).to.equal(3);
                expect(list.getLastItem()).to.equal(1);
                
                list.removeItemFromBack();
                expect(list.getSize()).to.equal(2);
                expect(list.getFirstItem()).to.equal(3);
                expect(list.getLastItem()).to.equal(2);

                list.removeItemFromBack();
                expect(list.getSize()).to.equal(1);
                expect(list.getFirstItem()).to.equal(3);
                expect(list.getLastItem()).to.equal(3);

                list.removeItemFromBack();
                expect(list.getSize()).to.equal(0);

                expect(() => {list.removeItemFromBack();}).to.throw();

            });
        });

        describe('removeItemFromFront', () => {
            it("removes the item from the front of the list", () => {

                expect(() => {list.removeItemFromFront();}).to.throw();

                list.addItemToFront(1);
                list.addItemToFront(2);
                list.addItemToFront(3);
                expect(list.getSize()).to.equal(3);
                expect(list.getFirstItem()).to.equal(3);
                expect(list.getLastItem()).to.equal(1);
                
                list.removeItemFromFront();
                expect(list.getSize()).to.equal(2);
                expect(list.getFirstItem()).to.equal(2);
                expect(list.getLastItem()).to.equal(1);

                list.removeItemFromFront();
                expect(list.getSize()).to.equal(1);
                expect(list.getFirstItem()).to.equal(1);
                expect(list.getLastItem()).to.equal(1);

                list.removeItemFromFront();
                expect(list.getSize()).to.equal(0);

                expect(() => {list.removeItemFromFront();}).to.throw();

            });
        });

        describe('removeItemAt', () => {
            it("removes an item at a given index", () => {

                expect(() => {list.removeItemAt(0);}).to.throw();

                list.addItemToBack(1);
                list.addItemToBack(2);
                list.addItemToBack(3);

                expect(() => {list.removeItemAt(-1);}).to.throw();
                expect(() => {list.removeItemAt(3);}).to.throw();

                expect(list.getItemAt(0)).to.equal(1);

                list.removeItemAt(0);
                expect(list.getSize()).to.equal(2);
                expect(list.getItemAt(0)).to.equal(2);

                list.removeItemAt(0);
                expect(list.getSize()).to.equal(1);
                expect(list.getItemAt(0)).to.equal(3);

                list.removeItemAt(0);
                expect(list.getSize()).to.equal(0);
                expect(() => {list.getItemAt(0);}).to.throw();
                expect(() => {list.removeItemAt(0);}).to.throw();

            });
        });

        describe('containsItem', () => {
            it("tests if the list contains a given item", () => {

                expect(list.containsItem(1)).to.equal(false);

                list.addItemToBack(1);

                expect(list.containsItem(1)).to.equal(true);

                list.addItemToBack(2);
                list.addItemToBack(3);

                expect(list.containsItem(1)).to.equal(true);
                expect(list.containsItem(2)).to.equal(true);
                expect(list.containsItem(3)).to.equal(true);

                list.addItemToBack(1);
                list.addItemToBack(2);
                list.addItemToBack(3);

                expect(list.containsItem(1)).to.equal(true);
                expect(list.containsItem(2)).to.equal(true);
                expect(list.containsItem(3)).to.equal(true);

                list.makeEmpty();

                expect(list.containsItem(1)).to.equal(false);
                expect(list.containsItem(2)).to.equal(false);
                expect(list.containsItem(3)).to.equal(false);

            });
        });

        describe('getFirstItem', () => {
            it("gets the first item in the list", () => {

                expect(() => {list.getFirstItem();}).to.throw();

                list.addItemToBack(1);
                list.addItemToBack(2);
                list.addItemToBack(3);

                expect(list.getFirstItem()).to.equal(1);
                expect(list.getSize()).to.equal(3);
                list.removeItemFromBack();
                expect(list.getFirstItem()).to.equal(1);
                expect(list.getSize()).to.equal(2);
                list.removeItemFromFront();
                expect(list.getFirstItem()).to.equal(2);
                expect(list.getSize()).to.equal(1);
                list.removeItemFromFront();

                expect(() => {list.getFirstItem();}).to.throw();

            });
        });

        describe('getLastItem', () => {
            it("gets the last item in the list", () => {

                expect(() => {list.getLastItem();}).to.throw();

                list.addItemToBack(1);
                list.addItemToBack(2);
                list.addItemToBack(3);

                expect(list.getLastItem()).to.equal(3);
                expect(list.getSize()).to.equal(3);
                list.removeItemFromFront();
                expect(list.getLastItem()).to.equal(3);
                expect(list.getSize()).to.equal(2);
                list.removeItemFromBack();
                expect(list.getLastItem()).to.equal(2);
                expect(list.getSize()).to.equal(1);
                list.removeItemFromBack();

                expect(() => {list.getLastItem();}).to.throw();

            });
        });

        describe('getIndexOfItem', () => {
            it("gets the index of a given item if it exists in the list", () => {

                expect(() => {list.getIndexOfItem(1);}).to.throw();

                list.addItemToBack(1);
                list.addItemToBack(2);
                list.addItemToBack(3);

                expect(list.getIndexOfItem(1)).to.equal(0);
                expect(list.getIndexOfItem(3)).to.equal(2);

                list.removeItemFromFront();
                expect(list.getIndexOfItem(2)).to.equal(0);
                list.removeItemFromFront();
                expect(list.getIndexOfItem(3)).to.equal(0);

                expect(() => {list.getIndexOfItem(1);}).to.throw();

            });
        });

        describe('getItemAt', () => {
            it("gets the item at a given index", () => {
                
                expect(() => {list.getItemAt(0);}).to.throw();
                expect(() => {list.getItemAt(-1);}).to.throw();

                list.addItemToBack(1);
                list.addItemToBack(2);
                list.addItemToBack(3);

                expect(list.getItemAt(0)).to.equal(1);
                expect(list.getItemAt(1)).to.equal(2);
                expect(list.getItemAt(2)).to.equal(3);

                list.removeItemAt(1);
                expect(list.getItemAt(0)).to.equal(1);
                expect(list.getItemAt(1)).to.equal(3);

                list.removeItemAt(1);
                expect(list.getItemAt(0)).to.equal(1);

                list.removeItemAt(0);
                expect(() => {list.getItemAt(0)}).to.throw();

            });
        });

        describe('replaceItemAt', () => {
            it("replaces the item at a given index with a given item", () => {
                
                expect(() => {list.replaceItemAt(0, 0);}).to.throw();
                expect(() => {list.replaceItemAt(-1, 0);}).to.throw();
                expect(() => {list.replaceItemAt(10, 0);}).to.throw();

                list.addItemToBack(1);
                list.addItemToBack(2);
                list.addItemToBack(3);

                expect(list.getSize()).to.equal(3);
                list.replaceItemAt(0, 2)

                expect(list.getSize()).to.equal(3);
                expect(list.getItemAt(0)).to.equal(2);
                expect(list.getItemAt(1)).to.equal(2);
                expect(list.getItemAt(2)).to.equal(3);

                list.replaceItemAt(2, 2);

                expect(list.getSize()).to.equal(3);
                expect(list.getItemAt(0)).to.equal(2);
                expect(list.getItemAt(1)).to.equal(2);
                expect(list.getItemAt(2)).to.equal(2);

            });
        });

        describe('swapItems', () => {
            it("swaps the items at two given indices", () => {

                expect(() => {list.swapItems(0, 0);}).to.throw();

                list.addItemToFront(1);
                list.swapItems(0, 0);
                expect(list.getItemAt(0)).to.equal(1);

                expect(() => {list.swapItems(-1, 0);}).to.throw();
                expect(() => {list.swapItems(0, 10);}).to.throw();

                list.addItemToBack(2);
                list.swapItems(0, 1);

                expect(list.getSize()).to.equal(2);
                expect(list.getFirstItem()).to.equal(2);
                expect(list.getLastItem()).to.equal(1);

                list.swapItems(0, 1);

                expect(list.getSize()).to.equal(2);
                expect(list.getFirstItem()).to.equal(1);
                expect(list.getLastItem()).to.equal(2);

            });
        });

    });
});