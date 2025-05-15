
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 1 to equal 59', (t) => {
  assert.strictEqual(sum(58, 1), 59);
});
