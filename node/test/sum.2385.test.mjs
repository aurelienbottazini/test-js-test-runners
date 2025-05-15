
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 49 to equal 56', (t) => {
  assert.strictEqual(sum(7, 49), 56);
});
