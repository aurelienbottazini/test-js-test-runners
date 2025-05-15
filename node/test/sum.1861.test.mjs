
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 68 to equal 129', (t) => {
  assert.strictEqual(sum(61, 68), 129);
});
