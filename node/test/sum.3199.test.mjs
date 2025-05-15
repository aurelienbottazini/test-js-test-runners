
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 47 to equal 129', (t) => {
  assert.strictEqual(sum(82, 47), 129);
});
