
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 92 to equal 98', (t) => {
  assert.strictEqual(sum(6, 92), 98);
});
