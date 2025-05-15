
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 49 to equal 107', (t) => {
  assert.strictEqual(sum(58, 49), 107);
});
