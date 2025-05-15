
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 24 to equal 107', (t) => {
  assert.strictEqual(sum(83, 24), 107);
});
