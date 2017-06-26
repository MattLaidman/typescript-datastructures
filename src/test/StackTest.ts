import {expect} from 'chai';
import 'mocha';

import {Stack} from '../lib/Stack';

describe('Stack', () => {

    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    describe('getSize', () => {

        it('gets the size of an empty stack', () => {
            expect(stack.getSize()).to.equal(0);
        });

        it('gets the correct size when items are added', () => {
            for(let i = 1 ; i <= 10 ; i++) {
                stack.push(i);
                expect(stack.getSize()).to.equal(i);
            }
        });

        it('gets the correct size when items are removed', () => {
            for(let i = 1 ; i <= 10 ; i++) {
                stack.push(i);
            }
            for(let i = 1 ; i <= 10 ; i++) {
                stack.pop();
                expect(stack.getSize()).to.equal(10-i);
            }
        });

    });

    describe('isEmpty', () => {

        it('returns true when the stack is initialized', () => {
            expect(stack.isEmpty()).to.equal(true);
        });

        it('returns false when the stack has one item in it', () => {
            stack.push(1);
            expect(stack.isEmpty()).to.equal(false);
        });

        it('returns false when the stack has multiple items in it', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.isEmpty()).to.equal(false);
        });

        it('returns true when the stack is made empty', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.makeEmpty()
            expect(stack.isEmpty()).to.equal(true);
        });

    });

    describe('makeEmpty', () => {

        it('does not throw when the stack is already empty', () => {
            expect(() => {stack.makeEmpty();}).to.not.throw()
        });

        it('makes the stack empty when there is one item in it', () => {
            stack.push(1);
            stack.makeEmpty();
            expect(stack.isEmpty()).to.equal(true);
        });

        it('makes the stack empty when there are multiple items in it', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3)
            stack.makeEmpty();
            expect(stack.isEmpty()).to.equal(true);
        });

    });

    describe('push', () => {

        it('pushes the first item onto the back of the stack', () => {
            stack.push(1);
            expect(stack.peek()).to.equal(1);
            expect(stack.isEmpty()).to.equal(false);
        });

        it('pushes multiple items onto the stack in the correct order', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.peek()).to.equal(2);
            stack.push(3);
            expect(stack.peek()).to.equal(3);
            expect(stack.getSize()).to.equal(3);
            expect(stack.isEmpty()).to.equal(false);
        });

    });

    describe('pop', () => {

        it('throws then the stack is empty', () => {
            expect(() => {stack.pop();}).to.throw();
        });

        it('pops the only item from the stack', () => {
            stack.push(1);
            expect(stack.pop()).to.equal(1);
        });

        it ('pops multiple items from the stack in the correct order', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.pop()).to.equal(3);
            expect(stack.pop()).to.equal(2);
        });

    });

    describe('peek', () => {

        it('throws when the stack is empty', () => {
            expect(() => {stack.peek();}).to.throw();
        });

        it('peeks at the only item on the stack', () => {
            stack.push(1);
            expect(stack.peek()).to.equal(1);
        });

        it('peeks at the top item on the stack', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.peek()).to.equal(3)
        });

    });

});