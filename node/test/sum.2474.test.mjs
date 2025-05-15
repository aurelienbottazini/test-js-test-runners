
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 2 to equal 5', (t) => {
  assert.strictEqual(sum(3, 2), 5);
});
