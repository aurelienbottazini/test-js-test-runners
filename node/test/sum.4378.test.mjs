
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 63 to equal 121', (t) => {
  assert.strictEqual(sum(58, 63), 121);
});
