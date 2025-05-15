
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 1 to equal 6', (t) => {
  assert.strictEqual(sum(5, 1), 6);
});
