
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 88 to equal 107', (t) => {
  assert.strictEqual(sum(19, 88), 107);
});
