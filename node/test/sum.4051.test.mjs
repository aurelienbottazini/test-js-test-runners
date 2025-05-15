
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 31 to equal 107', (t) => {
  assert.strictEqual(sum(76, 31), 107);
});
