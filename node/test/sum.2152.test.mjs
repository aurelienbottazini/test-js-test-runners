
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 95 to equal 98', (t) => {
  assert.strictEqual(sum(3, 95), 98);
});
