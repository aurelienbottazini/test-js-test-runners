
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 23 to equal 56', (t) => {
  assert.strictEqual(sum(33, 23), 56);
});
