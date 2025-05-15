
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 91 to equal 107', (t) => {
  assert.strictEqual(sum(16, 91), 107);
});
