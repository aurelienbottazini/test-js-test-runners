
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 66 to equal 129', (t) => {
  assert.strictEqual(sum(63, 66), 129);
});
