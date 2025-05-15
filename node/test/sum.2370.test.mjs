
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 22 to equal 70', (t) => {
  assert.strictEqual(sum(48, 22), 70);
});
