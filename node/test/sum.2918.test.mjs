
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 81 to equal 98', (t) => {
  assert.strictEqual(sum(17, 81), 98);
});
