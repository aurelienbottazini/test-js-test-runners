
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 98 to equal 105', (t) => {
  assert.strictEqual(sum(7, 98), 105);
});
