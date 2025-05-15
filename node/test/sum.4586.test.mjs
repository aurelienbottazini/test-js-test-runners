
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 95 to equal 183', (t) => {
  assert.strictEqual(sum(88, 95), 183);
});
