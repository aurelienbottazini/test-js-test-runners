
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 11 to equal 105', (t) => {
  assert.strictEqual(sum(94, 11), 105);
});
