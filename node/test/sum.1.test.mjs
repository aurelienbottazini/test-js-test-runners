
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 13 to equal 105', (t) => {
  assert.strictEqual(sum(92, 13), 105);
});
