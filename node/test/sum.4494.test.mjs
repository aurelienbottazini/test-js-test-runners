
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 75 to equal 98', (t) => {
  assert.strictEqual(sum(23, 75), 98);
});
