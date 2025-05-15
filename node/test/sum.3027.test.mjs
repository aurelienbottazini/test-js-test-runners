
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 1 to equal 83', (t) => {
  assert.strictEqual(sum(82, 1), 83);
});
