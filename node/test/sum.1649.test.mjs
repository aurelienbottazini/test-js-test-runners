
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 98 to equal 129', (t) => {
  assert.strictEqual(sum(31, 98), 129);
});
