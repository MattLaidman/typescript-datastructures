import {expect} from 'chai';
import 'mocha';

import {Stack} from '../lib/Stack';

describe('Stack', () => {
    it('is a stack', () => {

        let stack: Stack<number>;

        beforeEach(() => {
            stack = new Stack<number>();
        });

        describe("getSize", () => {
            it("gets the size of the stack");
        });

        describe("isEmpty", () => {
            it("tests if the stack is empty");
        });

        describe("makeEmpty", () => {
            it("empties the stack");
        });

        describe("push", () => {
            it("pushes an item onto the stack");
        });

        describe("pop", () => {
            it("pops an item from the stack");
        });

        describe("peek", () => {
            it("peeks at the top item on the stack");
        });

    });
});