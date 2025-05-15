
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 57 to equal 107', (t) => {
  assert.strictEqual(sum(50, 57), 107);
});
