
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 1 to equal 10', (t) => {
  assert.strictEqual(sum(9, 1), 10);
});
