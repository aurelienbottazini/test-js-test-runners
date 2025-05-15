
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 39 to equal 122', (t) => {
  assert.strictEqual(sum(83, 39), 122);
});
