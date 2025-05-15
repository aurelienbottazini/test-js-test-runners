
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 36 to equal 51', (t) => {
  assert.strictEqual(sum(15, 36), 51);
});
