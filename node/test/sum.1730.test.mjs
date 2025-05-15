
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 73 to equal 129', (t) => {
  assert.strictEqual(sum(56, 73), 129);
});
