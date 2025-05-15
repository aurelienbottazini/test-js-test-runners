
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 43 to equal 107', (t) => {
  assert.strictEqual(sum(64, 43), 107);
});
