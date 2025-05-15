
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 36 to equal 94', (t) => {
  assert.strictEqual(sum(58, 36), 94);
});
