
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 61 to equal 129', (t) => {
  assert.strictEqual(sum(68, 61), 129);
});
