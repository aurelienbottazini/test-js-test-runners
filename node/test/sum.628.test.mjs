
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 81 to equal 129', (t) => {
  assert.strictEqual(sum(48, 81), 129);
});
