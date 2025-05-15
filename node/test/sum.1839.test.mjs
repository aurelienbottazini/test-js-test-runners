
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 56 to equal 65', (t) => {
  assert.strictEqual(sum(9, 56), 65);
});
