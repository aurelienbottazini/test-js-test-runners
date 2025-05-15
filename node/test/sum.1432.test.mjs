
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 74 to equal 105', (t) => {
  assert.strictEqual(sum(31, 74), 105);
});
