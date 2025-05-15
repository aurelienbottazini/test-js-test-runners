
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 63 to equal 69', (t) => {
  assert.strictEqual(sum(6, 63), 69);
});
