
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 77 to equal 107', (t) => {
  assert.strictEqual(sum(30, 77), 107);
});
