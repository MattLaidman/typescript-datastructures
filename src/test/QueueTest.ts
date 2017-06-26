import {expect} from 'chai';
import 'mocha';

import {Queue} from '../lib/Queue';

describe('Queue', () => {

    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    describe('getSize', () => {
        
        it('gets the size of an empty queue', () => {
            expect(queue.getSize()).to.equal(0);
        });

        it('gets the correct size when items are added', () => {
            for(let i = 1 ; i <= 10 ; i++) {
                queue.push(i);
                expect(queue.getSize()).to.equal(i);
            }
        });

        it('gets the correct size when items are removed', () => {
            for(let i = 1 ; i <= 10 ; i++) {
                queue.push(i);
            }
            for(let i = 1 ; i <= 10 ; i++) {
                queue.pop();
                expect(queue.getSize()).to.equal(10-i);
            }
        });

    });

    describe('isEmpty', () => {
        
        it('returns true when the queue is initialized', () => {
            expect(queue.isEmpty()).to.equal(true);
        });

        it('returns false when the queue has one item in it', () => {
            queue.push(1);
            expect(queue.isEmpty()).to.equal(false);
        });

        it('returns false when the queue has multiple items in it', () => {
            queue.push(1);
            queue.push(2);
            queue.push(3);
            expect(queue.isEmpty()).to.equal(false);
        });

        it('returns true when the queue is made empty', () => {
            queue.push(1);
            queue.push(2);
            queue.push(3);
            queue.makeEmpty()
            expect(queue.isEmpty()).to.equal(true);
        });

    });

    describe('makeEmpty', () => {
       
        it('does not throw when the queue is already empty', () => {
            expect(() => {queue.makeEmpty();}).to.not.throw()
        });

        it('makes the queue empty when there is one item in it', () => {
            queue.push(1);
            queue.makeEmpty();
            expect(queue.isEmpty()).to.equal(true);
        });

        it('makes the queue empty when there are multiple items in it', () => {
            queue.push(1);
            queue.push(2);
            queue.push(3)
            queue.makeEmpty();
            expect(queue.isEmpty()).to.equal(true);
        });

    });

    describe('push', () => {

        it('pushes the first item to the back of the queue', () => {
            queue.push(1);
            expect(queue.peek()).to.equal(1);
            expect(queue.isEmpty()).to.equal(false);
        });

        it('pushes multiple items to the queue in the correct order', () => {
            queue.push(1);
            queue.push(2);
            queue.push(3);
            expect(queue.peek()).to.equal(1);
            queue.pop();
            expect(queue.peek()).to.equal(2);
            queue.pop();
            expect(queue.peek()).to.equal(3);
        });

    });

    describe('pop', () => {

        it('throws then the queue is empty', () => {
            expect(() => {queue.pop();}).to.throw();
        });

        it('pops the only item from the queue', () => {
            queue.push(1);
            expect(queue.pop()).to.equal(1);
        });

        it ('pops multiple items from the queue in the correct order', () => {
            queue.push(1);
            queue.push(2);
            queue.push(3);
            expect(queue.pop()).to.equal(1);
            expect(queue.pop()).to.equal(2);
        });

    });

    describe('peek', () => {
        
        it('throws when the queue is empty', () => {
            expect(() => {queue.peek();}).to.throw();
        });

        it('peeks at the only item on the queue', () => {
            queue.push(1);
            expect(queue.peek()).to.equal(1);
        });

        it('peeks at the front item in the queue', () => {
            queue.push(1);
            queue.push(2);
            queue.push(3);
            expect(queue.peek()).to.equal(1)
        });

    });

});