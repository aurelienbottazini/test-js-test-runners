
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 30 to equal 70', (t) => {
  assert.strictEqual(sum(40, 30), 70);
});
