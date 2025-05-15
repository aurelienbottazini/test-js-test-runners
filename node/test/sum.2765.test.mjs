
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 51 to equal 107', (t) => {
  assert.strictEqual(sum(56, 51), 107);
});
