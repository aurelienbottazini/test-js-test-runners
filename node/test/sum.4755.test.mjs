
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 91 to equal 129', (t) => {
  assert.strictEqual(sum(38, 91), 129);
});
