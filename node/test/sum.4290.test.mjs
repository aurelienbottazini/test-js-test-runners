
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 52 to equal 129', (t) => {
  assert.strictEqual(sum(77, 52), 129);
});
