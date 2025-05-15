
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 56 to equal 98', (t) => {
  assert.strictEqual(sum(42, 56), 98);
});
