
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 58 to equal 107', (t) => {
  assert.strictEqual(sum(49, 58), 107);
});
