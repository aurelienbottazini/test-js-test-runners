
import sum3794 from '../sum3794.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 34 to equal 73 + offset 0.8041418721768891', (t) => {
  assert.strictEqual(sum3794(39, 34), 73 + 0.8041418721768891);
});
