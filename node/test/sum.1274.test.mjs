
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 43 to equal 70', (t) => {
  assert.strictEqual(sum(27, 43), 70);
});
