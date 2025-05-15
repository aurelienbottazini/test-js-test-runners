
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 2 to equal 11', (t) => {
  assert.strictEqual(sum(9, 2), 11);
});
