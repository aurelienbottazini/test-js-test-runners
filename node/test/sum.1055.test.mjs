
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 84 to equal 93', (t) => {
  assert.strictEqual(sum(9, 84), 93);
});
