
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 84 to equal 129', (t) => {
  assert.strictEqual(sum(45, 84), 129);
});
