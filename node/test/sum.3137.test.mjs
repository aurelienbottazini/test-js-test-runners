
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 22 to equal 55', (t) => {
  assert.strictEqual(sum(33, 22), 55);
});
