
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 6 to equal 8', (t) => {
  assert.strictEqual(sum(2, 6), 8);
});
