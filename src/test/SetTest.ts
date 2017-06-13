import {expect} from 'chai';
import 'mocha';

import {Set} from '../lib/Set';

describe('Set', () => {
    it('is a set', () => {

        let set: Set<number>;

        beforeEach(() => {
            set = new Set<number>();
        });

        describe("getSize", () => {
            it("gets the size of the set");
        });

        describe("isEmpty", () => {
            it("tests if the set is empty");
        });

        describe("makeEmpty", () => {
            it("makes the set empty");
        });

        describe("addItem", () => {
            it("adds an item to the set");
        });

        describe("removeItem", () => {
            it("removes an item from the set");
        });

        describe("containsItem", () => {
            it("tests if an item is in the set");
        });

        describe("union", () => {
            it("performs a union with set");
        });

        describe("intersection", () => {
            it("performs an intersection with a set");
        });

        describe("equals", () => {
            it("tests if two sets are equal");
        });

        describe("difference", () => {
            it("performs a difference with a set");
        });

        describe("isSubsetOf", () => {
            it("tests if the set is a subset of a set");
        });

        describe("isProperSubsetOf", () => {
            it("tests if the set is a proper subset of a set");
        });

    });
});