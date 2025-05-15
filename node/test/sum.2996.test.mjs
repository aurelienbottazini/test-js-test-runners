
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 40 to equal 129', (t) => {
  assert.strictEqual(sum(89, 40), 129);
});
