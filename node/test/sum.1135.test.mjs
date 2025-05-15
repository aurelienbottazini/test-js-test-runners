
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 39 to equal 129', (t) => {
  assert.strictEqual(sum(90, 39), 129);
});
