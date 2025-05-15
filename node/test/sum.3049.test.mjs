
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 77 to equal 129', (t) => {
  assert.strictEqual(sum(52, 77), 129);
});
