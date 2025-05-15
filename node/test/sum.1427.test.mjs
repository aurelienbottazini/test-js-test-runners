
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 1 to equal 56', (t) => {
  assert.strictEqual(sum(55, 1), 56);
});
