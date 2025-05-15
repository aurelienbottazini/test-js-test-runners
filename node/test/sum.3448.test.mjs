
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 74 to equal 107', (t) => {
  assert.strictEqual(sum(33, 74), 107);
});
