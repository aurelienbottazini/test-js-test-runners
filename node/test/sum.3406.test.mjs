
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 64 to equal 107', (t) => {
  assert.strictEqual(sum(43, 64), 107);
});
