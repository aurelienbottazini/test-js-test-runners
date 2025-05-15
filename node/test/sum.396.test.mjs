
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 1 to equal 8', (t) => {
  assert.strictEqual(sum(7, 1), 8);
});
