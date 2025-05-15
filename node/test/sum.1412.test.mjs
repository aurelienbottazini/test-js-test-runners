
import sum1412 from '../sum1412.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 72 to equal 159 + offset 0.5540467304614602', (t) => {
  assert.strictEqual(sum1412(87, 72), 159 + 0.5540467304614602);
});
