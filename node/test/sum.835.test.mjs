
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 41 to equal 70', (t) => {
  assert.strictEqual(sum(29, 41), 70);
});
