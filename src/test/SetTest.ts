import {expect} from 'chai';
import 'mocha';

import {Set} from '../lib/Set';

describe('Set', () => {

    let set: Set<number>;

    beforeEach(() => {
        set = new Set<number>();
    });

    describe('getSize', () => {

        it('gets the size of an empty set', () => {
            expect(set.getSize()).to.equal(0);
        });

        it('gets the correct size when items are added', () => {
            for(let i = 1 ; i <= 10 ; i++) {
                set.addItem(i);
                expect(set.getSize()).to.equal(i);
            }
        });

        it('gets the correct size when items are removed', () => {
            for(let i = 1 ; i <= 10 ; i++) {
                set.addItem(i);
            }
            for(let i = 1 ; i <= 10 ; i++) {
                set.removeItem(i);
                expect(set.getSize()).to.equal(10-i);
            }
        });

    });

    describe('isEmpty', () => {

        it('returns true when the set is initialized', () => {
            expect(set.isEmpty()).to.equal(true);
        });

        it('returns false when the set has one item in it', () => {
            set.addItem(1);
            expect(set.isEmpty()).to.equal(false);
        });

        it('returns false when the set has multiple items in it', () => {
            set.addItem(1);
            set.addItem(2);
            set.addItem(3);
            expect(set.isEmpty()).to.equal(false);
        });

        it('returns true when the set is made empty', () => {
            set.addItem(1);
            set.addItem(2);
            set.addItem(3);
            set.makeEmpty()
            expect(set.isEmpty()).to.equal(true);
        });

    });

    describe('makeEmpty', () => {
        
        it('does not throw when the set is already empty', () => {
            expect(() => {set.makeEmpty();}).to.not.throw()
        });

        it('makes the set empty when there is one item in it', () => {
            set.addItem(1);
            set.makeEmpty();
            expect(set.isEmpty()).to.equal(true);
        });

        it('makes the set empty when there are multiple items in it', () => {
            set.addItem(1);
            set.addItem(2);
            set.addItem(3);
            set.makeEmpty()
            expect(set.isEmpty()).to.equal(true);
        });

    });

    describe('addItem', () => {

        it('adds an item to the set', () => {
            set.addItem(1)
            expect(set.containsItem(1)).to.equal(true);
        });

        it('throws when an item is added that already exists in the set', () => {
            set.addItem(1);
            expect(() => {set.addItem(1);}).to.throw();
        });

    });

    describe('removeItem', () => {

        it('removes an item from the set', () => {
            set.addItem(1);
            set.removeItem(1);
            expect(set.containsItem(1)).to.equal(false);
        });

        it('throws when an item is added that does not exist in the set', () => {
            expect(() => {set.removeItem(1);}).to.throw();
        });

    });

    describe('containsItem', () => {

        it('returns false if the set is empty', () => {
            expect(set.containsItem(1)).to.equal(false);
        });

        it('returns false if item is not in the set', () => {
            set.addItem(2);
            expect(set.containsItem(1)).to.equal(false);
        });

        it('returns true if an item is the only item in the set', () => {
            set.addItem(1);
            expect(set.containsItem(1)).to.equal(true);
        });

        it('returns true if an item is in the set', () => {
            set.addItem(1);
            set.addItem(2);
            set.addItem(3);
            expect(set.containsItem(2)).to.equal(true);
        });

    });

    describe('union', () => {

        it('returns the expected set when both sets are empty', () => {
            expect(set.union(new Set<number>()).isEmpty()).to.equal(true);
        });

        it('returns the expected set when one set is empty', () => {
            set.addItem(1);
            let newSet = set.union(new Set<number>());
            expect(newSet.isEmpty()).to.equal(false);
            expect(newSet.getSize()).to.equal(1);
            expect(newSet.containsItem(1)).to.equal(true);
        });

        it('returns the expected set when the sets contain the same items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(1);
            set = set.union(newSet);
            expect(set.isEmpty()).to.equal(false);
            expect(set.getSize()).to.equal(1);
            expect(set.containsItem(1)).to.equal(true);
        });

        it('returns the expected set when the sets contain different items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(2);
            set = set.union(newSet);
            expect(set.isEmpty()).to.equal(false);
            expect(set.getSize()).to.equal(2);
            expect(set.containsItem(1)).to.equal(true);
            expect(set.containsItem(2)).to.equal(true);
        });

        it('returns the expected set when the sets contain some of the same items', () => {
            set.addItem(1);
            set.addItem(2);
            let newSet = new Set<number>();
            newSet.addItem(2);
            set = set.union(newSet);
            expect(set.isEmpty()).to.equal(false);
            expect(set.getSize()).to.equal(2);
            expect(set.containsItem(1)).to.equal(true);
            expect(set.containsItem(2)).to.equal(true);
        });

    });

    describe('intersection', () => {

        it('returns the expected set when both sets are empty', () => {
            expect(set.intersection(new Set<number>()).isEmpty()).to.equal(true);
        });

        it('returns the expected set when one set is empty', () => {
            set.addItem(1);
            let newSet = set.intersection(new Set<number>());
            expect(newSet.isEmpty()).to.equal(true);
            expect(newSet.containsItem(1)).to.equal(false);
        });

        it('returns the expected set when the sets contain the same items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(1);
            set = set.intersection(newSet);
            expect(set.isEmpty()).to.equal(false);
            expect(set.getSize()).to.equal(1);
            expect(set.containsItem(1)).to.equal(true);
        });

        it('returns the expected set when the sets contain different items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(2);
            set = set.intersection(newSet);
            expect(set.isEmpty()).to.equal(true);
            expect(set.containsItem(1)).to.equal(false);
            expect(set.containsItem(2)).to.equal(false);
        });

        it('returns the expected set when the sets contain some of the same items', () => {
            set.addItem(1);
            set.addItem(2);
            let newSet = new Set<number>();
            newSet.addItem(2);
            set = set.intersection(newSet);
            expect(set.isEmpty()).to.equal(false);
            expect(set.getSize()).to.equal(1);
            expect(set.containsItem(1)).to.equal(false);
            expect(set.containsItem(2)).to.equal(true);
        });

    });

    describe('equals', () => {

        it('returns true if both sets are empty', () => {
            expect(set.equals(new Set<number>())).to.equal(true);
        });

        it('returns true if the sets contain the same items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(1);
            expect(set.equals(newSet)).to.equal(true);
        });

        it('returns false if the sets contain different items', () => {
            set.addItem(1);
            set.addItem(2);
            let newSet = new Set<number>();
            newSet.addItem(1);
            expect(set.equals(newSet)).to.equal(false);
        });

    });

    describe('difference', () => {

        it('returns the expected set when both sets are empty', () => {
            expect(set.difference(new Set<number>()).isEmpty()).to.equal(true);
        });

        it('returns the expected set when one set is empty', () => {
            set.addItem(1);
            let newSet = set.difference(new Set<number>());
            expect(newSet.isEmpty()).to.equal(false);
            expect(newSet.containsItem(1)).to.equal(true);
        });

        it('returns the expected set when the sets contain the same items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(1);
            set = set.difference(newSet);
            expect(set.isEmpty()).to.equal(true);
            expect(set.containsItem(1)).to.equal(false);
        });

        it('returns the expected set when the sets contain different items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(2);
            set = set.difference(newSet);
            expect(set.getSize()).to.equal(1);
            expect(set.containsItem(1)).to.equal(true);
            expect(set.containsItem(2)).to.equal(false);
        });

        it('returns the expected set when the sets contain some of the same items', () => {
            set.addItem(1);
            set.addItem(2);
            set.addItem(3);
            let newSet = new Set<number>();
            newSet.addItem(2);
            newSet.addItem(4);
            set = set.difference(newSet);
            expect(set.getSize()).to.equal(2);
            expect(set.containsItem(1)).to.equal(true);
            expect(set.containsItem(2)).to.equal(false);
            expect(set.containsItem(3)).to.equal(true);
            expect(set.containsItem(4)).to.equal(false);
        });

    });

    describe('isSubsetOf', () => {

        it('returns true if both sets are empty', () => {
            expect(set.isSubsetOf(new Set<number>())).to.equal(true);
        });

        it('returns true if the sets contain the same items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(1);
            expect(set.isSubsetOf(newSet)).to.equal(true);
        });

        it('returns true if the set is a subset', () => {
            set.addItem(2);
            let newSet = new Set<number>();
            newSet.addItem(1);
            newSet.addItem(2);
            newSet.addItem(3);
            expect(set.isSubsetOf(newSet)).to.equal(true);
        });

        it('returns false if the set is not a subset', () => {
            set.addItem(2);
            let newSet = new Set<number>();
            newSet.addItem(1);
            newSet.addItem(2);
            newSet.addItem(3);
            expect(newSet.isSubsetOf(set)).to.equal(false);
        });

    });

    describe('isProperSubsetOf', () => {

        it('returns false if both sets are empty', () => {
            expect(set.isProperSubsetOf(new Set<number>())).to.equal(false);
        });

        it('returns false if the sets contain the same items', () => {
            set.addItem(1);
            let newSet = new Set<number>();
            newSet.addItem(1);
            expect(set.isProperSubsetOf(newSet)).to.equal(false);
        });

        it('returns false if the set is not a subset', () => {
            set.addItem(2);
            let newSet = new Set<number>();
            newSet.addItem(1);
            newSet.addItem(2);
            newSet.addItem(3);
            expect(newSet.isProperSubsetOf(set)).to.equal(false);
        });

        it('returns true if the set is a proper subset', () => {
            set.addItem(2);
            let newSet = new Set<number>();
            newSet.addItem(1);
            newSet.addItem(2);
            newSet.addItem(3);
            expect(set.isProperSubsetOf(newSet)).to.equal(true);
        });

    });

});