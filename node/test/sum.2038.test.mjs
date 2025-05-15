
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 31 to equal 89', (t) => {
  assert.strictEqual(sum(58, 31), 89);
});
