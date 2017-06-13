import {expect} from 'chai';
import 'mocha';

import {Queue} from '../lib/Queue';

describe('Queue', () => {
    it('is a queue', () => {

        let queue: Queue<number>;

        beforeEach(() => {
            queue = new Queue<number>();
        });

        describe("getSize", () => {
            it("gets the size of the queue");
        });

        describe("isEmpty", () => {
            it("tests if the queue is empty");
        });

        describe("makeEmpty", () => {
            it("empties the queue");
        });

        describe("push", () => {
            it("pushes an item onto the queue");
        });

        describe("pop", () => {
            it("pops an item from the queue");
        });

        describe("peek", () => {
            it("peeks at the top item on the queue");
        });

    });
});