
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 28 to equal 107', (t) => {
  assert.strictEqual(sum(79, 28), 107);
});
