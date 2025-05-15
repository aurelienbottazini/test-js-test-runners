
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 92 to equal 93', (t) => {
  assert.strictEqual(sum(1, 92), 93);
});
