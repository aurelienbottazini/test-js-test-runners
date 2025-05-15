
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 46 to equal 70', (t) => {
  assert.strictEqual(sum(24, 46), 70);
});
