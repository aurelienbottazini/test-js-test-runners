
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 26 to equal 107', (t) => {
  assert.strictEqual(sum(81, 26), 107);
});
