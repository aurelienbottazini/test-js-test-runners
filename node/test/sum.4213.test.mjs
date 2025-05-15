
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 40 to equal 107', (t) => {
  assert.strictEqual(sum(67, 40), 107);
});
