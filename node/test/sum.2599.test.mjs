
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 23 to equal 122', (t) => {
  assert.strictEqual(sum(99, 23), 122);
});
