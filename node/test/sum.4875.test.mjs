
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 61 to equal 65', (t) => {
  assert.strictEqual(sum(4, 61), 65);
});
