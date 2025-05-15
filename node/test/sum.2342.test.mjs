
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 63 to equal 129', (t) => {
  assert.strictEqual(sum(66, 63), 129);
});
