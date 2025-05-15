
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 2 to equal 70', (t) => {
  assert.strictEqual(sum(68, 2), 70);
});
