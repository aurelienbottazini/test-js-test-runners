
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 64 to equal 98', (t) => {
  assert.strictEqual(sum(34, 64), 98);
});
