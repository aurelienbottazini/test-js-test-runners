
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 36 to equal 55', (t) => {
  assert.strictEqual(sum(19, 36), 55);
});
