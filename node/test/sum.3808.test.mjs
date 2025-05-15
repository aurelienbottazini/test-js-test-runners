
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 1 to equal 5', (t) => {
  assert.strictEqual(sum(4, 1), 5);
});
