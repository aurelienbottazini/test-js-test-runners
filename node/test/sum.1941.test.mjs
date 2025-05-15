
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 21 to equal 55', (t) => {
  assert.strictEqual(sum(34, 21), 55);
});
